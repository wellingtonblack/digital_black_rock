"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShieldCheck, Zap, Lock } from "lucide-react";

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
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const url = normalizeUrl(raw);
    if (!isValidUrl(url)) {
      setError("URL inválida. Ex: minhaloja.com.br");
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
            Diagnóstico Gratuito
          </span>
        </motion.div>

        <motion.h1
          className="audit-hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          Descubra se sua loja está{" "}
          <span className="gradient-text">perdendo vendas</span> por lentidão,
          SEO ou baixa conversão
        </motion.h1>

        <motion.p
          className="audit-hero__subtitle"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease }}
        >
          Digite a URL do seu site e receba uma análise automática com pontos
          críticos que podem estar afetando suas vendas.
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
              placeholder="Insira a URL da sua loja"
              className={`audit-hero__url-input${error ? " audit-hero__url-input--error" : ""}`}
              autoComplete="off"
              spellCheck={false}
            />
            <button type="submit" className="btn btn--primary audit-hero__url-btn">
              <Search size={18} />
              Analisar meu site agora
            </button>
          </div>
          {error && (
            <p className="audit-hero__url-error">{error}</p>
          )}
        </motion.form>

        <motion.div
          className="audit-hero__trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
        >
          <span className="audit-hero__trust-item">
            <ShieldCheck size={14} style={{ color: "#25D366" }} />
            100% gratuito
          </span>
          <span className="audit-hero__trust-item">
            <Zap size={14} style={{ color: "#00D4FF" }} />
            Resultado em segundos
          </span>
          <span className="audit-hero__trust-item">
            <Lock size={14} style={{ color: "#7B61FF" }} />
            Seus dados protegidos
          </span>
        </motion.div>
      </div>
    </div>
  );
}
