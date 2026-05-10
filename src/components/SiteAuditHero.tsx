"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Zap, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

function normalizeUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function isValidUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

interface Props {
  onAnalyze: (url: string) => void;
}

export default function SiteAuditHero({ onAnalyze }: Props) {
  const { t } = useLanguage();
  const h = t.audit.hero;
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = normalizeUrl(raw);
    if (!isValidUrl(url)) {
      setError(h.errorUrl);
      return;
    }
    setError("");
    onAnalyze(url);
  }

  return (
    <div className="audit-hero">
      <div className="audit-hero__blob audit-hero__blob--cyan" />
      <div className="audit-hero__blob audit-hero__blob--purple" />

      <div className="audit-hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <span className="audit-hero__tag">
            <Zap size={12} />
            {h.tag}
          </span>
        </motion.div>

        <motion.h1
          className="audit-hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          {h.titlePre}{" "}
          <span className="gradient-text">{h.titleHighlight}</span>{" "}
          {h.titlePost}
        </motion.h1>

        <motion.p
          className="audit-hero__subtitle"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
        >
          {h.subtitle}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <div className="audit-hero__url-box">
            <input
              type="text"
              value={raw}
              onChange={(e) => { setRaw(e.target.value); setError(""); }}
              placeholder={h.placeholder}
              className={`audit-hero__url-input${error ? " audit-hero__url-input--error" : ""}`}
              autoComplete="off"
              spellCheck={false}
            />
            <button type="submit" className="btn btn--primary audit-hero__url-btn">
              <Search size={18} />
              {h.btn}
            </button>
          </div>
          {error && <p className="audit-hero__url-error">{error}</p>}
        </motion.form>

        <motion.div
          className="audit-hero__trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          <span className="audit-hero__trust-item">
            <ShieldCheck size={14} style={{ color: "#25D366" }} />
            {h.trust[0]}
          </span>
          <span className="audit-hero__trust-item">
            <Zap size={14} style={{ color: "#00D4FF" }} />
            {h.trust[1]}
          </span>
          <span className="audit-hero__trust-item">
            <Lock size={14} style={{ color: "#7B61FF" }} />
            {h.trust[2]}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
