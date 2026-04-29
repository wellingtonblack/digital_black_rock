# Database Schema — Neon PostgreSQL

Execute no **SQL Editor** do Neon console na ordem abaixo.

## 1. Tabela: leads

```sql
CREATE TABLE leads (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT        NOT NULL,
  email         TEXT        NOT NULL,
  phone         TEXT        NOT NULL,
  url           TEXT        NOT NULL,
  utm_source    TEXT,
  utm_medium    TEXT,
  utm_campaign  TEXT,
  utm_content   TEXT,
  utm_term      TEXT,
  status        TEXT        NOT NULL DEFAULT 'new',
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX leads_email_idx      ON leads (email);
CREATE INDEX leads_status_idx     ON leads (status);
CREATE INDEX leads_created_at_idx ON leads (created_at DESC);
```

## 2. Tabela: site_audits

```sql
CREATE TABLE site_audits (
  id                   UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id              UUID        REFERENCES leads (id) ON DELETE SET NULL,
  url                  TEXT        NOT NULL,
  performance_score    INT,
  seo_score            INT,
  accessibility_score  INT,
  best_practices_score INT,
  lcp                  TEXT,
  cls                  TEXT,
  inp                  TEXT,
  platform_detected    TEXT,
  ai_summary           TEXT,
  recommendations      JSONB,
  raw_pagespeed_json   JSONB,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX site_audits_lead_id_idx    ON site_audits (lead_id);
CREATE INDEX site_audits_url_idx        ON site_audits (url);
CREATE INDEX site_audits_created_at_idx ON site_audits (created_at DESC);
```

## Consultas úteis para prospecção

```sql
-- Leads novos da última semana com diagnóstico
SELECT
  l.name, l.email, l.phone, l.url,
  a.performance_score, a.seo_score,
  a.platform_detected, a.ai_summary,
  l.utm_source, l.created_at
FROM leads l
JOIN site_audits a ON a.lead_id = l.id
WHERE l.created_at > now() - INTERVAL '7 days'
  AND l.status = 'new'
ORDER BY l.created_at DESC;

-- Sites com performance crítica — maior urgência de abordagem
SELECT l.name, l.email, l.phone, l.url, a.performance_score
FROM leads l
JOIN site_audits a ON a.lead_id = l.id
WHERE a.performance_score < 50
ORDER BY a.performance_score ASC;

-- Marcar lead como contatado
UPDATE leads SET status = 'contacted' WHERE id = '<uuid>';

-- Leads por plataforma
SELECT platform_detected, COUNT(*) as total
FROM site_audits
WHERE platform_detected IS NOT NULL
GROUP BY platform_detected
ORDER BY total DESC;
```
