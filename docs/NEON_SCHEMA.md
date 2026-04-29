# Schema do Banco de Dados — Neon PostgreSQL

Execute no SQL Editor do Neon: console.neon.tech → seu projeto → SQL Editor.

## Tabela: leads

```sql
create table leads (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  phone         text not null,
  url           text not null,
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  utm_content   text,
  utm_term      text,
  status        text not null default 'new',
  created_at    timestamptz not null default now()
);

create index leads_email_idx      on leads (email);
create index leads_status_idx     on leads (status);
create index leads_created_at_idx on leads (created_at desc);
```

## Tabela: site_audits

```sql
create table site_audits (
  id                   uuid primary key default gen_random_uuid(),
  lead_id              uuid references leads (id) on delete set null,
  url                  text not null,
  performance_score    int,
  seo_score            int,
  accessibility_score  int,
  best_practices_score int,
  lcp                  text,
  cls                  text,
  inp                  text,
  platform_detected    text,
  ai_summary           text,
  recommendations      jsonb,
  raw_pagespeed_json   jsonb,
  created_at           timestamptz not null default now()
);

create index site_audits_lead_id_idx  on site_audits (lead_id);
create index site_audits_url_idx      on site_audits (url);
create index site_audits_created_at_idx on site_audits (created_at desc);
```

## Consultas úteis para prospecção

```sql
-- Leads novos da última semana
select l.name, l.email, l.phone, l.url, a.performance_score, a.seo_score, a.ai_summary
from leads l
join site_audits a on a.lead_id = l.id
where l.created_at > now() - interval '7 days'
  and l.status = 'new'
order by l.created_at desc;

-- Sites com performance crítica (< 50) — maior urgência de abordagem
select l.name, l.email, l.phone, l.url, a.performance_score
from leads l
join site_audits a on a.lead_id = l.id
where a.performance_score < 50
order by a.performance_score asc;

-- Marcar lead como contatado
update leads set status = 'contacted' where id = '<uuid>';
```
