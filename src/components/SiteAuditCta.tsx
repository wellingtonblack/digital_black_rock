"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, RotateCcw, Share2, Check } from "lucide-react";
import type { AuditResult } from "@/types/audit";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  url: string;
  onReset: () => void;
  result: AuditResult;
}

const WA_NUMBER = "5511969683162";

export default function SiteAuditCta({ url, onReset, result }: Props) {
  const [copied, setCopied] = useState(false);

  const msg = encodeURIComponent(
    `Olá, fiz o teste do meu site pela Digital Black Rock e quero ajuda para melhorar minha performance e conversão. Minha URL é: ${url}`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${msg}`;

  async function handleShare() {
    const text =
      `Testei meu site na Digital Black Rock! 🚀\n` +
      `Performance: ${result.performance_score}/100 | SEO: ${result.seo_score}/100\n` +
      `Faça o teste grátis: https://digitalblackrock.com.br/teste-seu-site/`;
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
        <h3 className="audit-cta__title">
          Quer que um especialista corrija esses pontos para você?
        </h3>
        <p className="audit-cta__subtitle">
          Nossa equipe pode resolver todos os problemas encontrados e transformar seu
          site em uma máquina de vendas. Sem enrolação.
        </p>

        <a href={waLink} target="_blank" rel="noopener noreferrer" className="audit-cta__btn">
          <MessageCircle size={20} />
          Quero corrigir isso agora
        </a>

        <p className="audit-cta__note">
          Resposta em até 1 hora nos dias úteis
        </p>

        <div className="audit-cta__actions">
          <button
            onClick={handleShare}
            className={`audit-cta__share-btn${copied ? " audit-cta__share-btn--copied" : ""}`}
            type="button"
          >
            {copied ? <Check size={15} /> : <Share2 size={15} />}
            {copied ? "Copiado!" : "Compartilhar resultado"}
          </button>

          <button
            onClick={onReset}
            className="btn btn--secondary btn--sm"
            type="button"
          >
            <RotateCcw size={15} />
            Testar outro site
          </button>
        </div>
      </motion.div>
    </div>
  );
}
