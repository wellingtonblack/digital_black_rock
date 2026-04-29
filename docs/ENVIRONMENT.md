# Variáveis de Ambiente

Configure no painel do Cloudflare Pages → Settings → Environment Variables.

| Variável                   | Obrigatória | Descrição |
|----------------------------|-------------|-----------|
| `DATABASE_URL`             | Sim         | Connection string do Neon (inclui usuário, senha e host). |
| `PAGESPEED_API_KEY`        | Recomendada | Chave da Google PageSpeed API. Sem ela o limite é ~400 req/dia. |
| `ANTHROPIC_API_KEY`        | Não         | Claude Haiku para diagnóstico comercial com IA. Prioridade 1. |
| `OPENAI_API_KEY`           | Não         | GPT-4o-mini como fallback de IA. Prioridade 2. |
| `NOTIFICATION_WEBHOOK_URL` | Não         | Webhook para notificação de novo lead (Discord, Make, Zapier, n8n). |

> Se nenhuma chave de IA for configurada, o sistema gera o diagnóstico com regras locais (sem custo).

---

## Onde obter cada variável

### DATABASE_URL — Neon

1. Acesse [console.neon.tech](https://console.neon.tech) e entre na sua conta.
2. Selecione (ou crie) um projeto.
3. Na aba **Dashboard** do projeto, clique em **Connection Details**.
4. Selecione a branch `main` e o role `neondb_owner` (ou crie um role só para a aplicação).
5. Copie a **Connection string** no formato:
   ```
   postgresql://usuario:senha@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
6. Cole como valor da variável `DATABASE_URL`.

### PAGESPEED_API_KEY — Google Cloud

1. Acesse [console.cloud.google.com](https://console.cloud.google.com).
2. Crie um projeto (ou use um existente).
3. Pesquise por **PageSpeed Insights API** e ative-a.
4. Vá em **APIs & Services → Credentials → Create Credentials → API Key**.
5. Restrinja a key para o serviço `pagespeedonline.googleapis.com`.

### ANTHROPIC_API_KEY

1. Acesse [console.anthropic.com](https://console.anthropic.com).
2. Em **API Keys**, clique em **Create Key**.

### OPENAI_API_KEY

1. Acesse [platform.openai.com/api-keys](https://platform.openai.com/api-keys).
2. Clique em **Create new secret key**.

### NOTIFICATION_WEBHOOK_URL

Quando configurada, o endpoint envia uma notificação a cada novo lead com nome, e-mail, telefone, URL e scores.

**Opção 1 — Discord (mais fácil, gratuito):**
1. Abra o servidor Discord que deseja usar.
2. Configurações do servidor → **Integrações** → **Webhooks** → **Novo webhook**.
3. Nomeie (ex: "DBR Leads"), selecione o canal e clique em **Copiar URL do webhook**.

**Opção 2 — Make / Zapier / n8n:**
1. Crie um cenário/zap com gatilho **Webhook → Catch Hook**.
2. Copie a URL gerada.
3. O corpo enviado é JSON com `lead` (dados do contato) e `scores` (Performance, SEO, etc.).

---

## Configurar no Cloudflare Pages

1. Painel Cloudflare → seu projeto → **Settings → Environment variables**.
2. Clique em **Add variable** para cada uma.
3. Marque como **Production** (e **Preview** se quiser testar no preview).
4. Faça um novo deploy para ativar.

---

## Teste local com Wrangler

Crie `.dev.vars` na raiz do projeto (já está no `.gitignore`):

```ini
DATABASE_URL=postgresql://usuario:senha@ep-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
PAGESPEED_API_KEY=AIzaSy...
ANTHROPIC_API_KEY=sk-ant-...
```

Depois:

```bash
npm run build
npx wrangler pages dev out --compatibility-date=2024-01-01
```

Acesse `http://localhost:8788/teste-seu-site/`

Teste o endpoint diretamente:

```bash
curl -X POST http://localhost:8788/api/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://sualoja.com.br",
    "name": "Teste",
    "email": "teste@email.com",
    "phone": "11999999999"
  }'
```
