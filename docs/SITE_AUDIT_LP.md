# Site Audit LP — Documentação Técnica

## Objetivo

Lead magnet técnico/comercial para geração de leads qualificados.  
O usuário testa o site dele, recebe um diagnóstico automático de performance/SEO/conversão e é capturado como lead para prospecção.

**URL:** `/teste-seu-site/`

---

## Fluxo do usuário

```
1. Usuário acessa /teste-seu-site/
2. Digita a URL do site no campo hero
3. Clica em "Analisar meu site agora"
   → Validação de URL (front-end)
4. Formulário de captura aparece (nome, e-mail, WhatsApp)
5. Usuário preenche e envia
6. Loading screen com etapas animadas
7. POST /api/analyze → Cloudflare Pages Function
   → PageSpeed Insights API
   → Detecção de plataforma (HEAD request)
   → Diagnóstico local ou via IA (se chave configurada)
   → Salva lead + audit no Supabase
8. Resultado exibido: scores, vitals, diagnóstico, issues, recomendações
9. CTA: "Falar com especialista no WhatsApp" (mensagem pré-preenchida)
```

---

## Arquitetura

```
src/
  app/teste-seu-site/
    page.tsx           → Metadata + import do SiteAuditPage
    SiteAuditPage.tsx  → Client component — máquina de estados
  components/
    SiteAuditHero.tsx  → URL input + trust indicators
    SiteAuditForm.tsx  → Formulário de captura (nome/email/phone)
    SiteAuditLoading.tsx → Loading animado com etapas
    SiteAuditResult.tsx  → Score cards + vitals + diagnóstico
    SiteAuditCta.tsx     → CTA WhatsApp + botão "testar outro"
  styles/
    _site-audit.scss   → Todos os estilos da LP
  types/
    audit.ts           → Tipos compartilhados (AuditResult, etc)

functions/
  api/
    analyze.ts         → Cloudflare Pages Function (edge)

docs/
  SUPABASE_SCHEMA.md   → SQL para criar as tabelas
  ENVIRONMENT.md       → Variáveis de ambiente
  SITE_AUDIT_LP.md     → Este arquivo
```

### Estados da máquina (SiteAuditPage)

| Estado          | Componente exibido  |
|-----------------|---------------------|
| `idle`          | SiteAuditHero       |
| `collectingLead`| SiteAuditForm       |
| `loading`       | SiteAuditLoading    |
| `success`       | SiteAuditResult + SiteAuditCta |
| `error`         | Mensagem de erro + botão retry |

---

## Configurar Supabase

1. Crie um projeto em [supabase.com](https://supabase.com).
2. Abra o **SQL Editor** e execute o conteúdo de `docs/SUPABASE_SCHEMA.md` na ordem indicada.
3. Copie a **Project URL** e a **service_role key** em Project Settings → API.
4. Configure as variáveis `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` no Cloudflare Pages.

---

## Configurar variáveis no Cloudflare Pages

Ver `docs/ENVIRONMENT.md` para lista completa e instruções.

Mínimo para funcionar:
- `PAGESPEED_API_KEY` (ou a API funciona sem chave, com limite baixo)
- `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (para salvar leads)

---

## Testar localmente

### 1. Build estático

```bash
npm run build
```

O Next.js gera a pasta `out/` com todos os arquivos estáticos.

### 2. Servir com Wrangler (inclui functions)

Crie `.dev.vars` na raiz com as variáveis necessárias (ver ENVIRONMENT.md).

```bash
npx wrangler pages dev out --compatibility-date=2024-01-01
```

Acesse `http://localhost:8788/teste-seu-site/`

> O Wrangler serve os arquivos estáticos de `out/` e roteia `/api/*` para as functions.

### 3. Testar o endpoint diretamente

```bash
curl -X POST http://localhost:8788/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://exemplo.com.br","name":"Teste","email":"t@t.com","phone":"11999999999"}'
```

---

## Deploy

O deploy é feito normalmente via Cloudflare Pages (git push ou wrangler publish).

```bash
npm run build
# Cloudflare Pages detecta a pasta out/ automaticamente
# As functions em functions/ são deployadas automaticamente junto
```

---

## UTM Tracking

Os parâmetros UTM da URL da landing page são capturados no frontend e enviados no body do POST `/api/analyze`. Ficam salvos na tabela `leads` para análise de origem dos leads.

Exemplo de URL com UTM:
```
/teste-seu-site/?utm_source=google&utm_medium=cpc&utm_campaign=performance
```

---

## WhatsApp CTA

O link do CTA final usa o seguinte template de mensagem:

```
Olá, fiz o teste do meu site pela Digital Black Rock e quero ajuda para 
melhorar minha performance e conversão. Minha URL é: [URL do lead]
```

O número de destino é `5511982400853` (hardcoded no componente `SiteAuditCta`).

---

## Critérios de aceite

- [ ] `/teste-seu-site/` acessível e responsiva
- [ ] URL inválida mostra erro amigável
- [ ] Formulário de captura exibe após URL válida
- [ ] Loading mostra etapas animadas
- [ ] Resultado exibe scores, vitals, diagnóstico e recomendações
- [ ] Lead e audit salvos no Supabase
- [ ] CTA WhatsApp com mensagem pré-preenchida
- [ ] `npm run build` sem erros
- [ ] Site principal (/) intacto
