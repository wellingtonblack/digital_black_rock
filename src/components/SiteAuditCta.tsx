"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, RotateCcw, Share2, Check } from "lucide-react";
import type { AuditResult } from "@/types/audit";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  url: string;
  onReset: () => void;
  result: AuditResult;
}

const WA_NUMBER = "5511982400853";

export default function SiteAuditCta({ url, onReset, result }: Props) {
  const { t } = useLanguage();
  const c = t.audit.cta;
  const [copied, setCopied] = useState(false);

  const msg = encodeURIComponent(`${c.waMsg} ${url}`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${msg}`;

  async function handleShare() {
    const text = c.shareText
      .replace("{perf}", String(result.performance_score))
      .replace("{seo}", String(result.seo_score));
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch { /* user cancelled */ }
  }

  return (
    <div className="audit-cta">
      <motion.div
        className="audit-cta__card"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <h3 className="audit-cta__title">{c.title}</h3>
        <p className="audit-cta__subtitle">{c.subtitle}</p>

        <a href={waLink} target="_blank" rel="noopener noreferrer" className="audit-cta__btn">
          <MessageCircle size={20} />
          {c.btn}
        </a>

        <p className="audit-cta__note">{c.note}</p>

        <div className="audit-cta__actions">
          <button
            onClick={handleShare}
            className={`audit-cta__share-btn${copied ? " audit-cta__share-btn--copied" : ""}`}
            type="button"
          >
            {copied ? <Check size={15} /> : <Share2 size={15} />}
            {copied ? c.copied : c.share}
          </button>

          <button onClick={onReset} className="btn btn--secondary btn--sm" type="button">
            <RotateCcw size={15} />
            {c.reset}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
