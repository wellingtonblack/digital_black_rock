-- Migration 001: create leads and site_audits tables
-- Run once against your NEON database

CREATE TABLE IF NOT EXISTS leads (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  phone        TEXT NOT NULL,
  url          TEXT NOT NULL,
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  utm_content  TEXT,
  utm_term     TEXT,
  first_touch  JSONB,
  last_touch   JSONB,
  status       TEXT NOT NULL DEFAULT 'new',
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS site_audits (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id               UUID REFERENCES leads(id) ON DELETE SET NULL,
  url                   TEXT NOT NULL,
  performance_score     INTEGER,
  seo_score             INTEGER,
  accessibility_score   INTEGER,
  best_practices_score  INTEGER,
  lcp                   TEXT,
  cls                   TEXT,
  inp                   TEXT,
  platform_detected     TEXT,
  ai_summary            TEXT,
  recommendations       JSONB,
  raw_pagespeed_json    JSONB,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_email      ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audits_lead_id   ON site_audits(lead_id);
