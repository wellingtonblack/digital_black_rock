import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "SEO e Performance para E-commerce | Mais Tráfego Orgânico | Digital Black Rock",
  description:
    "SEO técnico e performance para e-commerces: Core Web Vitals, otimização de catálogo, link building e mais tráfego orgânico. Especialistas em VTEX, Shopify e Loja Integrada.",
  alternates: { canonical: "https://digitalblackrock.com.br/seo-performance/" },
  openGraph: {
    title: "SEO e Performance para E-commerce | Digital Black Rock",
    description: "SEO técnico e Core Web Vitals para lojas virtuais. Mais tráfego orgânico, menor CAC e maior conversão.",
    url: "https://digitalblackrock.com.br/seo-performance/",
    siteName: "Digital Black Rock",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalblackrock.com.br/" },
        { "@type": "ListItem", position: 2, name: "SEO e Performance", item: "https://digitalblackrock.com.br/seo-performance/" },
      ],
    },
    {
      "@type": "Service",
      name: "SEO e Performance para E-commerce",
      url: "https://digitalblackrock.com.br/seo-performance/",
      provider: { "@type": "Organization", name: "Digital Black Rock", url: "https://digitalblackrock.com.br" },
      description: "SEO técnico, Core Web Vitals e otimização de performance para e-commerces: mais tráfego orgânico, menor CAC e maior conversão.",
      areaServed: { "@type": "Country", name: "Brazil" },
      offers: { "@type": "Offer", name: "Auditoria SEO Gratuita", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é SEO para e-commerce?",
          acceptedAnswer: { "@type": "Answer", text: "SEO para e-commerce é a otimização técnica e de conteúdo de uma loja virtual para aparecer nas primeiras posições do Google quando clientes pesquisam pelos produtos que você vende. Inclui: otimização de páginas de categoria e produto, velocidade de carregamento (Core Web Vitals), estrutura de URLs, dados estruturados (Schema.org) e link building." },
        },
        {
          "@type": "Question",
          name: "Quanto tempo leva para ver resultados de SEO?",
          acceptedAnswer: { "@type": "Answer", text: "SEO é uma estratégia de médio prazo. Em geral, os primeiros resultados aparecem entre 3 e 6 meses após o início da otimização. Melhorias técnicas (velocidade, indexação) costumam ter impacto mais rápido; palavras-chave competitivas levam mais tempo para ranquear." },
        },
        {
          "@type": "Question",
          name: "Vocês fazem SEO para VTEX, Shopify e Loja Integrada?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Nossa equipe conhece profundamente as especificidades de SEO em cada plataforma: limitações de personalização de meta tags, estrutura de URLs, renderização de JavaScript, Sitemap automático e dados estruturados. Aplicamos SEO técnico adaptado a cada plataforma." },
        },
        {
          "@type": "Question",
          name: "O que são Core Web Vitals e por que importam?",
          acceptedAnswer: { "@type": "Answer", text: "Core Web Vitals são as métricas de experiência do usuário que o Google usa como fator de ranqueamento: LCP (velocidade de carregamento), CLS (estabilidade visual) e INP (interatividade). E-commerces com boas notas tendem a ranquear melhor, ter menor taxa de rejeição e converter mais — especialmente no mobile." },
        },
      ],
    },
  ],
};

const services = [
  { title: "Auditoria SEO técnica", desc: "Análise completa da saúde SEO da loja: indexação, crawlabilidade, erros 404, redirecionamentos, meta tags, dados estruturados e Core Web Vitals." },
  { title: "Otimização de páginas", desc: "Otimizamos páginas de categoria, produto e institucional: title tags, meta descriptions, H1-H3, conteúdo otimizado para palavras-chave relevantes." },
  { title: "Core Web Vitals", desc: "Diagnóstico e correção de LCP, CLS e INP. Otimização de imagens, lazy loading, eliminação de render-blocking resources e melhoria geral de performance." },
  { title: "Dados estruturados", desc: "Implementação de Schema.org: Product, BreadcrumbList, FAQPage, Organization, Review — para rich snippets no Google e melhor citação em IAs generativas." },
  { title: "SEO de catálogo", desc: "Estratégia de palavras-chave para categorias e produtos, geração de conteúdo com IA, otimização de descrições e URLs canônicas para lojas com grande catálogo." },
  { title: "Link building", desc: "Estratégia de aquisição de links de domínios relevantes para aumentar a autoridade de domínio e o ranqueamento para palavras-chave competitivas." },
];

const faqs = [
  { q: "O que é SEO para e-commerce?", a: "Otimização técnica e de conteúdo para aparecer nas primeiras posições do Google. Inclui velocidade, Core Web Vitals, dados estruturados e link building." },
  { q: "Quanto tempo leva para ver resultados de SEO?", a: "Entre 3 e 6 meses para os primeiros resultados. Melhorias técnicas costumam ter impacto mais rápido; palavras-chave competitivas levam mais tempo." },
  { q: "Vocês fazem SEO para VTEX, Shopify e Loja Integrada?", a: "Sim. Conhecemos as especificidades de SEO de cada plataforma e aplicamos otimizações adaptadas às limitações e recursos de cada uma." },
  { q: "O que são Core Web Vitals e por que importam?", a: "Métricas de experiência do usuário usadas pelo Google como fator de ranqueamento: LCP (velocidade), CLS (estabilidade visual) e INP (interatividade)." },
];

export default function SeoPerformancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "#04080F", color: "#C8D8E8", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "5rem 1.5rem 4rem", textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          <nav style={{ fontSize: "0.8125rem", color: "#8B9CB8", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "#00D4FF", textDecoration: "none" }}>Home</Link>
            {" › "}SEO e Performance
          </nav>
          <span style={{ display: "inline-block", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF", borderRadius: "999px", padding: "0.3rem 1rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
            SEO PARA E-COMMERCE
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            SEO e Performance<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Mais tráfego orgânico, menor CAC
            </span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#8B9CB8", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "680px", margin: "0 auto 2rem" }}>
            Otimizamos o SEO técnico e a performance da sua loja para ranquear no Google, reduzir o custo de aquisição e converter mais — com{" "}
            <strong style={{ color: "#7B61FF" }}>IA integrada</strong> para escalar o conteúdo sem perder qualidade.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20auditoria%20SEO%20gratuita%20do%20meu%20e-commerce." target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Auditoria Gratuita →
            </a>
            <Link href="/teste-seu-site/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Testar minha loja agora
            </Link>
          </div>
        </section>

        {/* O que fazemos */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Por que SEO é estratégico para o e-commerce?
          </h2>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Tráfego pago é previsível mas caro: quando o orçamento acaba, as vendas caem. <strong style={{ color: "#fff" }}>SEO é o canal de aquisição mais eficiente a longo prazo</strong> — uma loja bem posicionada gera vendas de forma consistente, com CAC (custo de aquisição) muito menor do que campanhas de mídia paga.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Na <strong style={{ color: "#fff" }}>Digital Black Rock</strong>, combinamos SEO técnico profundo com <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> para escalar a otimização de catálogos grandes — gerando descrições, meta tags e conteúdo de categoria em escala sem abrir mão da qualidade.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8 }}>
            Além do Google, também otimizamos para <strong style={{ color: "#fff" }}>IAs generativas</strong> (ChatGPT, Perplexity, Google AI Overviews) — com dados estruturados Schema.org, conteúdo de autoridade e arquitetura de informação pensada para ser citada por sistemas de IA.
          </p>
        </section>

        {/* Serviços */}
        <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              O que entregamos em SEO e performance
            </h2>
            <p style={{ color: "#8B9CB8", marginBottom: "2.5rem" }}>Cobertura técnica e estratégica completa para maximizar seu tráfego orgânico.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {services.map((item) => (
                <div key={item.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#00D4FF", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#8B9CB8", fontSize: "0.9375rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teste sua loja */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Saiba agora como está a performance da sua loja
          </h2>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "2rem" }}>
            Nossa ferramenta gratuita analisa velocidade, SEO, acessibilidade e Core Web Vitals da sua loja em segundos — e entrega um diagnóstico com os principais pontos de melhoria.
          </p>
          <Link href="/teste-seu-site/"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #7B61FF, #5B44CC)", color: "#fff", fontWeight: 700, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
            Testar minha loja gratuitamente →
          </Link>
        </section>

        {/* FAQ */}
        <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              Perguntas frequentes sobre SEO para e-commerce
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqs.map((item) => (
                <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.25rem" }}>
                  <summary style={{ color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: "1rem", listStyle: "none" }}>
                    {item.q}
                  </summary>
                  <p style={{ color: "#8B9CB8", marginTop: "0.75rem", lineHeight: 1.75 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Pronto para ranquear no Google?
          </h2>
          <p style={{ color: "#8B9CB8", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            A auditoria SEO é gratuita e sem compromisso. Fale com um especialista agora.
          </p>
          <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20auditoria%20SEO%20gratuita%20do%20meu%20e-commerce." target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "1rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1.0625rem" }}>
            Falar com Especialista SEO →
          </a>
          <p style={{ color: "#8B9CB8", fontSize: "0.875rem", marginTop: "1rem" }}>
            Sem compromisso · Resposta em até 24h · 100% gratuito
          </p>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
