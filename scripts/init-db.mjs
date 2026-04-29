import { neon } from "@neondatabase/serverless";

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("DATABASE_URL não definida.");
  process.exit(1);
}

const sql = neon(DATABASE_URL);

console.log("Criando tabelas...");

await sql`
  create table if not exists leads (
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
  )
`;

await sql`create index if not exists leads_email_idx      on leads (email)`;
await sql`create index if not exists leads_status_idx     on leads (status)`;
await sql`create index if not exists leads_created_at_idx on leads (created_at desc)`;

await sql`
  create table if not exists site_audits (
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
  )
`;

await sql`create index if not exists site_audits_lead_id_idx    on site_audits (lead_id)`;
await sql`create index if not exists site_audits_url_idx         on site_audits (url)`;
await sql`create index if not exists site_audits_created_at_idx  on site_audits (created_at desc)`;

console.log("Tabelas criadas com sucesso.");
