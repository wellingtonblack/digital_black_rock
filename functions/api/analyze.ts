// Cloudflare Pages Function — POST /api/analyze
// Usa @neondatabase/serverless (HTTP transport — sem TCP, funciona no edge).

import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

interface Env {
  DATABASE_URL?: string;
  PAGESPEED_API_KEY?: string;
  OPENAI_API_KEY?: string;
  ANTHROPIC_API_KEY?: string;
  NOTIFICATION_WEBHOOK_URL?: string;
}

interface LeadBody {
  url: string;
  name: string;
  email: string;
  phone: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  first_touch?: Record<string, unknown>;
  last_touch?: Record<string, unknown>;
}

// ─── URL safety ───────────────────────────────────────────────────────────────

const PRIVATE_RANGES = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2\d|3[01])\./,
  /^::1$/,
  /^0\.0\.0\.0$/,
];

function isSafeUrl(raw: string): { ok: boolean; url?: URL; reason?: string } {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return { ok: false, reason: "URL inválida." };
  }

  if (u.protocol !== "http:" && u.protocol !== "https:") {
    return { ok: false, reason: "Protocolo não permitido. Use http ou https." };
  }

  const host = u.hostname.toLowerCase();
  for (const pattern of PRIVATE_RANGES) {
    if (pattern.test(host)) {
      return { ok: false, reason: "URL aponta para um endereço privado ou local." };
    }
  }

  return { ok: true, url: u };
}

// ─── PageSpeed ────────────────────────────────────────────────────────────────

interface PageSpeedResult {
  performance: number;
  seo: number;
  accessibility: number;
  best_practices: number;
  lcp?: string;
  cls?: string;
  inp?: string;
  raw?: unknown;
}

async function fetchPageSpeedStrategy(
  url: string,
  strategy: "mobile" | "desktop",
  apiKey?: string
): Promise<PageSpeedResult | null> {
  const base = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
  const finalUrl =
    `${base}?url=${encodeURIComponent(url)}&strategy=${strategy}` +
    `&category=performance&category=seo&category=accessibility&category=best-practices` +
    (apiKey ? `&key=${apiKey}` : "");

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 100_000);
    const res = await fetch(finalUrl, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    const json = await res.json() as Record<string, unknown>;

    const cats = (json.lighthouseResult as Record<string, unknown>)
      ?.categories as Record<string, { score: number }>;
    const audits = (json.lighthouseResult as Record<string, unknown>)
      ?.audits as Record<string, { displayValue?: string; numericValue?: number }>;

    const score = (key: string) => Math.round(((cats?.[key]?.score) ?? 0) * 100);

    const vitalValue = (auditKey: string) => {
      const a = audits?.[auditKey];
      if (!a) return undefined;
      if (a.displayValue) return a.displayValue.replace(/[^\d.,]/g, "").trim();
      if (a.numericValue !== undefined) return String(Math.round(a.numericValue));
      return undefined;
    };

    return {
      performance: score("performance"),
      seo: score("seo"),
      accessibility: score("accessibility"),
      best_practices: score("best-practices"),
      lcp: vitalValue("largest-contentful-paint"),
      cls: vitalValue("cumulative-layout-shift"),
      inp: vitalValue("interactive"),
      raw: json,
    };
  } catch {
    return null;
  }
}

// ─── Platform detection ───────────────────────────────────────────────────────

async function detectPlatform(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      signal: AbortSignal.timeout(5_000),
      redirect: "follow",
    });
    const via     = res.headers.get("x-powered-by") ?? "";
    const server  = res.headers.get("server") ?? "";
    const cookies = res.headers.get("set-cookie") ?? "";

    if (/shopify/i.test(via) || /shopify/i.test(cookies))            return "Shopify";
    if (/woocommerce/i.test(cookies) || /wordpress/i.test(via))      return "WooCommerce/WordPress";
    if (/VTEX/i.test(server) || /vtex/i.test(via))                   return "VTEX";
    if (/tray/i.test(via))                                            return "Tray";
    if (/nuvemshop/i.test(via) || /tiendanube/i.test(via))           return "Nuvemshop";
    if (/magento/i.test(cookies))                                     return "Magento";
    return undefined;
  } catch {
    return undefined;
  }
}

// ─── Local diagnosis engine ───────────────────────────────────────────────────

interface DiagnosisOutput {
  ai_summary: string;
  issues: { severity: "critical" | "warning"; description: string }[];
  recommendations: string[];
}

function buildLocalDiagnosis(
  perf: number, seo: number, access: number, bp: number,
  lcp?: string, cls?: string, inp?: string
): DiagnosisOutput {
  const issues: DiagnosisOutput["issues"] = [];
  const recommendations: string[] = [];
  const summaryParts: string[] = [];

  if (perf < 50) {
    summaryParts.push("Seu site apresenta lentidão crítica no mobile. Isso pode aumentar o abandono e reduzir a taxa de conversão, principalmente em campanhas pagas.");
    issues.push({ severity: "critical", description: "Performance crítica no mobile — tempo de carregamento muito alto." });
    recommendations.push("Comprima e converta imagens para WebP ou AVIF.");
    recommendations.push("Habilite cache de longa duração (Cache-Control) para assets estáticos.");
    recommendations.push("Avalie um CDN para distribuição global dos arquivos.");
  } else if (perf < 75) {
    summaryParts.push("Seu site tem performance abaixo do ideal. Visitantes de mobile e campanhas pagas podem sentir lentidão.");
    issues.push({ severity: "warning", description: "Performance moderada — há espaço para melhorar a velocidade." });
    recommendations.push("Reduza o JavaScript não utilizado (tree-shaking).");
    recommendations.push("Priorize o carregamento de recursos críticos com preload.");
  } else {
    summaryParts.push("A performance do seu site está em boa forma — positivo para campanhas pagas e SEO.");
  }

  if (seo < 50) {
    issues.push({ severity: "critical", description: "SEO crítico — o site pode ter dificuldades para ranquear no Google." });
    recommendations.push("Defina title e meta description únicos para cada página.");
    recommendations.push("Adicione marcação de dados estruturados (Schema.org) para produtos.");
    summaryParts.push("Os problemas de SEO identificados podem estar impedindo o site de aparecer nas buscas do Google.");
  } else if (seo < 75) {
    issues.push({ severity: "warning", description: "SEO com pontos de atenção — otimizações básicas estão faltando." });
    recommendations.push("Verifique se todas as imagens têm atributo alt preenchido.");
    recommendations.push("Garanta que o sitemap XML está atualizado no Google Search Console.");
  }

  if (access < 50) {
    issues.push({ severity: "critical", description: "Acessibilidade crítica — parte dos usuários pode não conseguir usar o site." });
    recommendations.push("Adicione labels em todos os campos de formulário.");
    recommendations.push("Verifique o contraste de cor entre texto e fundo.");
  } else if (access < 75) {
    issues.push({ severity: "warning", description: "Acessibilidade com pontos de melhoria identificados." });
    recommendations.push("Revise a navegação por teclado em menus e modais.");
  }

  if (bp < 50) {
    issues.push({ severity: "critical", description: "Boas práticas com falhas críticas — pode haver vulnerabilidades ou erros no console." });
    recommendations.push("Migre o site para HTTPS se ainda não estiver.");
    recommendations.push("Elimine erros de console JavaScript.");
  } else if (bp < 75) {
    issues.push({ severity: "warning", description: "Algumas boas práticas não estão sendo seguidas." });
    recommendations.push("Atualize bibliotecas JavaScript para versões sem vulnerabilidades conhecidas.");
  }

  const lcpNum = parseFloat(lcp ?? "0");
  if (lcpNum > 4) {
    issues.push({ severity: "critical", description: `LCP de ${lcp}s — o maior elemento leva muito tempo para carregar.` });
    recommendations.push("Otimize imagens hero e banners — costumam ser o maior elemento da página.");
  } else if (lcpNum > 2.5) {
    issues.push({ severity: "warning", description: `LCP de ${lcp}s — acima do ideal de 2.5s recomendado pelo Google.` });
  }

  const clsNum = parseFloat(cls ?? "0");
  if (clsNum > 0.25) {
    issues.push({ severity: "critical", description: `CLS de ${cls} — o layout muda muito durante o carregamento, frustrando usuários.` });
    recommendations.push("Defina dimensões fixas para imagens e banners para evitar saltos de layout.");
  } else if (clsNum > 0.1) {
    issues.push({ severity: "warning", description: `CLS de ${cls} — estabilidade visual pode ser melhorada.` });
  }

  if (summaryParts.length === 0) {
    summaryParts.push("Seu site está em boa forma geral. Ainda assim, há oportunidades de otimização que podem aumentar a conversão.");
  }

  return {
    ai_summary: summaryParts.join(" "),
    issues: issues.slice(0, 6),
    recommendations: recommendations.slice(0, 5),
  };
}

// ─── AI diagnosis (opcional) ──────────────────────────────────────────────────

async function buildAiDiagnosis(
  env: Env, url: string, perf: number, seo: number, access: number, bp: number,
  lcp?: string, cls?: string, inp?: string
): Promise<string | null> {
  const prompt = `Você é um especialista em CRO (Conversion Rate Optimization), performance web e vendas em e-commerce. Seu objetivo é convencer o dono do site de que ele está perdendo dinheiro e precisa agir — não apenas descrever dados.

DADOS DO SITE:
- URL: ${url}
- Performance: ${perf}/100
- SEO: ${seo}/100
- Acessibilidade: ${access}/100
- Boas práticas: ${bp}/100
- LCP (tempo até o maior conteúdo aparecer): ${lcp ?? "N/A"}s
- CLS (saltos de layout): ${cls ?? "N/A"}
- INP (resposta ao toque): ${inp ?? "N/A"}ms

REGRAS DE CONTEÚDO:
- Seja direto e conecte cada problema com perda de dinheiro
- Use frases como: "cada visitante perdido representa dinheiro desperdiçado", "isso impacta diretamente seu faturamento", "esse problema pode já estar afetando suas vendas sem que você perceba"
- Se LCP > 3s → problema crítico de velocidade, cite o valor exato
- Se Performance < 70 → alto risco financeiro
- Se Performance ≥ 80 → reconheça o bom resultado, mas mostre oportunidades ocultas de conversão
- Sempre mencione impacto em mobile e em campanhas pagas (tráfego pago)
- Gere urgência real, sem soar como spam

ESTRUTURA OBRIGATÓRIA (7 blocos curtos, cada um = 1 parágrafo de 2 a 3 frases):

1. Linha de alerta — começa com ⚠️, resume o risco financeiro em 1 frase
2. Diagnóstico principal — explica o problema mais grave em linguagem simples, cita o número (ex: LCP de Xs)
3. Consequência prática — o que acontece com o usuário mobile e com quem veio de anúncio
4. Impacto financeiro direto — começa com 💸, conecta o problema com dinheiro perdido/desperdiçado
5. Dado de referência — cite um estudo ou benchmark real (ex: "cada segundo a mais de carregamento reduz a conversão em até 20%")
6. Oportunidade — começa com 🚀, mostra que é possível melhorar sem investir mais em anúncios
7. Gancho final — 1 frase que separa lojas que convertem das que só recebem visitas

TOM: Profissional, direto, focado em resultado. Sem exagero.

FORMATAÇÃO:
- Separe cada bloco com linha em branco (\\n\\n)
- NÃO use markdown, asteriscos, negrito, hashtag ou títulos de seção
- Apenas texto corrido por bloco — cada bloco é um parágrafo
- Exatamente 7 parágrafos

EXEMPLO DE SAÍDA ESPERADA (adapte aos dados reais, não copie):
⚠️ Seu site pode estar perdendo vendas todos os dias — mesmo com boas notas técnicas.

Apesar de um bom desempenho em SEO e acessibilidade, existe um ponto crítico que impacta diretamente seu faturamento: o tempo de carregamento. Seu LCP está em 5.2s — isso significa que a maioria dos visitantes precisa esperar muito mais do que o ideal para ver sua oferta principal.

Na prática, isso eleva a taxa de abandono, especialmente no mobile, onde a paciência do usuário é ainda menor. Cada visitante que sai antes de carregar é uma oportunidade de venda perdida.

💸 Se você investe em tráfego pago, esse impacto é ainda mais caro: cada clique que abandona antes de carregar representa dinheiro desperdiçado diretamente no seu bolso.

Estudos mostram que cada segundo adicional de carregamento pode reduzir a conversão em até 20% — e esse cenário provavelmente já está afetando suas vendas sem que você perceba.

🚀 A boa notícia é que esse é um problema altamente otimizável. Ajustes pontuais de performance podem recuperar vendas perdidas e aumentar sua conversão sem precisar investir mais em anúncios.

Esse tipo de melhoria é o que separa lojas que apenas recebem visitas daquelas que realmente transformam tráfego em faturamento.

RESPOSTA DEVE SER EM PORTUGUÊS DO BRASIL.`;

  if (env.ANTHROPIC_API_KEY) {
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 700,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(20_000),
      });
      if (res.ok) {
        const data = await res.json() as { content: { text: string }[] };
        return data.content?.[0]?.text?.trim() ?? null;
      }
    } catch { /* fallthrough */ }
  }

  if (env.OPENAI_API_KEY) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          max_tokens: 700,
          messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(20_000),
      });
      if (res.ok) {
        const data = await res.json() as { choices: { message: { content: string } }[] };
        return data.choices?.[0]?.message?.content?.trim() ?? null;
      }
    } catch { /* fallthrough */ }
  }

  return null;
}

// ─── Lead notification ────────────────────────────────────────────────────────

async function notifyLead(
  webhookUrl: string,
  body: LeadBody,
  cleanUrl: string,
  ps: PageSpeedResult | null
): Promise<void> {
  try {
    const fields: { name: string; value: string; inline?: boolean }[] = [
      { name: "👤 Nome",     value: body.name,  inline: true },
      { name: "📧 E-mail",   value: body.email, inline: true },
      { name: "📱 WhatsApp", value: body.phone, inline: true },
      { name: "🌐 Site",     value: cleanUrl },
    ];

    if (ps) {
      fields.push(
        { name: "Performance",    value: `${ps.performance}/100`,   inline: true },
        { name: "SEO",            value: `${ps.seo}/100`,           inline: true },
        { name: "Acessibilidade", value: `${ps.accessibility}/100`, inline: true },
      );
    } else {
      fields.push({ name: "⚠️ Análise", value: "Site muito lento — PageSpeed não concluiu." });
    }

    if (body.utm_source) {
      fields.push({
        name: "📣 UTM",
        value: [body.utm_source, body.utm_medium, body.utm_campaign].filter(Boolean).join(" / "),
      });
    }

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "🔔 Novo lead — /teste-seu-site/",
          color: 0x00D4FF,
          fields,
          timestamp: new Date().toISOString(),
        }],
        lead: { name: body.name, email: body.email, phone: body.phone, url: cleanUrl },
        scores: ps
          ? { performance: ps.performance, seo: ps.seo, accessibility: ps.accessibility, best_practices: ps.best_practices }
          : null,
      }),
      signal: AbortSignal.timeout(5_000),
    });
  } catch {
    // Non-fatal
  }
}

// ─── Neon persistence ─────────────────────────────────────────────────────────

async function saveLead(
  sql: NeonQueryFunction<false, false>,
  body: LeadBody,
  cleanUrl: string
): Promise<string | null> {
  try {
    const rows = await sql`
      INSERT INTO leads (name, email, phone, url, utm_source, utm_medium, utm_campaign, utm_content, utm_term, first_touch, last_touch, status)
      VALUES (
        ${body.name},
        ${body.email},
        ${body.phone},
        ${cleanUrl},
        ${body.utm_source ?? null},
        ${body.utm_medium ?? null},
        ${body.utm_campaign ?? null},
        ${body.utm_content ?? null},
        ${body.utm_term ?? null},
        ${body.first_touch ? JSON.stringify(body.first_touch) : null},
        ${body.last_touch  ? JSON.stringify(body.last_touch)  : null},
        'new'
      )
      RETURNING id
    `;
    const typed = rows as unknown as { id: string }[];
    return typed[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function saveAudit(
  sql: NeonQueryFunction<false, false>,
  leadId: string | null,
  cleanUrl: string,
  ps: PageSpeedResult,
  platform: string | undefined,
  diagnosis: DiagnosisOutput,
  aiSummary: string | null
): Promise<void> {
  try {
    await sql`
      INSERT INTO site_audits (
        lead_id, url,
        performance_score, seo_score, accessibility_score, best_practices_score,
        lcp, cls, inp,
        platform_detected,
        ai_summary,
        recommendations,
        raw_pagespeed_json
      )
      VALUES (
        ${leadId},
        ${cleanUrl},
        ${ps.performance},
        ${ps.seo},
        ${ps.accessibility},
        ${ps.best_practices},
        ${ps.lcp ?? null},
        ${ps.cls ?? null},
        ${ps.inp ?? null},
        ${platform ?? null},
        ${aiSummary ?? diagnosis.ai_summary},
        ${JSON.stringify(diagnosis.recommendations)},
        ${JSON.stringify(ps.raw ?? null)}
      )
    `;
  } catch {
    // Non-fatal — user still gets the result
  }
}

// ─── Handler ──────────────────────────────────────────────────────────────────

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://digitalblackrock.com.br",
  "Content-Type": "application/json",
};

export const onRequestPost: (ctx: { request: Request; env: Env; waitUntil: (p: Promise<unknown>) => void }) => Promise<Response> =
  async ({ request, env, waitUntil }) => {
    // Payload size guard (~10 KB)
    const contentLength = parseInt(request.headers.get("content-length") ?? "0", 10);
    if (contentLength > 10_240) {
      return new Response(
        JSON.stringify({ success: false, error: "Payload muito grande." }),
        { status: 413, headers: CORS_HEADERS }
      );
    }

    let body: LeadBody;
    try {
      body = await request.json() as LeadBody;
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: "JSON inválido." }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    if (!body.url || !body.name || !body.email || !body.phone) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos obrigatórios: url, name, email, phone." }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const safeCheck = isSafeUrl(body.url.trim());
    if (!safeCheck.ok) {
      return new Response(
        JSON.stringify({ success: false, error: safeCheck.reason }),
        { status: 422, headers: CORS_HEADERS }
      );
    }
    const cleanUrl = safeCheck.url!.href;

    // Save lead immediately — before any async analysis
    let leadId: string | null = null;
    if (env.DATABASE_URL) {
      const sql = neon(env.DATABASE_URL);
      leadId = await saveLead(sql, body, cleanUrl);
    }

    // PageSpeed mobile + desktop + platform — tudo em paralelo
    const [mobileResult, desktopResult, platform] = await Promise.all([
      fetchPageSpeedStrategy(cleanUrl, "mobile",  env.PAGESPEED_API_KEY),
      fetchPageSpeedStrategy(cleanUrl, "desktop", env.PAGESPEED_API_KEY),
      detectPlatform(cleanUrl),
    ]);

    const primaryResult = mobileResult ?? desktopResult;

    if (env.NOTIFICATION_WEBHOOK_URL) {
      waitUntil(notifyLead(env.NOTIFICATION_WEBHOOK_URL, body, cleanUrl, primaryResult));
    }

    if (!primaryResult) {
      // Site too slow to analyze — still return a result so the user sees value
      const slowDiagnosis = {
        performance_score:    0,
        seo_score:            0,
        accessibility_score:  0,
        best_practices_score: 0,
        platform_detected:    platform,
        ai_summary: "Seu site é tão lento que não conseguimos concluir a análise no tempo limite. Sites assim têm taxas de abandono muito altas e perdem vendas diretamente em campanhas pagas. Uma otimização profunda é urgente.",
        issues: [
          { severity: "critical" as const, description: "Site com tempo de resposta acima de 40 segundos — inacessível para a maioria dos usuários." },
          { severity: "critical" as const, description: "Performance crítica — visitantes de mobile abandonam o site antes de carregar." },
        ],
        recommendations: [
          "Avalie migrar para uma hospedagem ou plataforma mais performática.",
          "Comprima e otimize todas as imagens do site.",
          "Ative um CDN para distribuição dos assets estáticos.",
          "Reduza scripts e plugins de terceiros desnecessários.",
          "Realize uma auditoria técnica completa de performance.",
        ],
      };
      return new Response(
        JSON.stringify({ success: true, result: slowDiagnosis }),
        { status: 200, headers: CORS_HEADERS }
      );
    }

    const localDiagnosis = buildLocalDiagnosis(
      primaryResult.performance, primaryResult.seo, primaryResult.accessibility, primaryResult.best_practices,
      primaryResult.lcp, primaryResult.cls, primaryResult.inp
    );

    const aiSummary = await buildAiDiagnosis(
      env, cleanUrl,
      primaryResult.performance, primaryResult.seo, primaryResult.accessibility, primaryResult.best_practices,
      primaryResult.lcp, primaryResult.cls, primaryResult.inp
    );

    // Save audit (non-blocking)
    if (env.DATABASE_URL && leadId) {
      const sql = neon(env.DATABASE_URL);
      waitUntil(saveAudit(sql, leadId, cleanUrl, primaryResult, platform, localDiagnosis, aiSummary));
    }

    const toStrategy = (r: PageSpeedResult) => ({
      performance:    r.performance,
      seo:            r.seo,
      accessibility:  r.accessibility,
      best_practices: r.best_practices,
      lcp: r.lcp,
      cls: r.cls,
      inp: r.inp,
    });

    return new Response(
      JSON.stringify({
        success: true,
        result: {
          performance_score:    primaryResult.performance,
          seo_score:            primaryResult.seo,
          accessibility_score:  primaryResult.accessibility,
          best_practices_score: primaryResult.best_practices,
          lcp:                  primaryResult.lcp,
          cls:                  primaryResult.cls,
          inp:                  primaryResult.inp,
          mobile:               mobileResult  ? toStrategy(mobileResult)  : undefined,
          desktop:              desktopResult ? toStrategy(desktopResult) : undefined,
          platform_detected:    platform,
          ai_summary:           aiSummary ?? localDiagnosis.ai_summary,
          issues:               localDiagnosis.issues,
          recommendations:      localDiagnosis.recommendations,
        },
      }),
      { status: 200, headers: CORS_HEADERS }
    );
  };

// Preflight CORS
export const onRequestOptions: () => Response = () =>
  new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://digitalblackrock.com.br",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });

// Rejeita métodos não-POST
export const onRequest: (ctx: { request: Request; env: Env }) => Response =
  ({ request }) => {
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ success: false, error: "Método não permitido." }),
        { status: 405, headers: { "Content-Type": "application/json", Allow: "POST, OPTIONS" } }
      );
    }
    return new Response(
      JSON.stringify({ success: false, error: "Use POST." }),
      { status: 400 }
    );
  };
