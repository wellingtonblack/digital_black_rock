-- Migration 002: add first_touch and last_touch columns to leads table
-- Run once against your NEON database

ALTER TABLE leads
  ADD COLUMN IF NOT EXISTS first_touch JSONB,
  ADD COLUMN IF NOT EXISTS last_touch  JSONB;
