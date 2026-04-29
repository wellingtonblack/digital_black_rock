"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  "Acessando seu site...",
  "Medindo velocidade de carregamento...",
  "Analisando SEO e meta tags...",
  "Verificando acessibilidade...",
  "Gerando diagnóstico comercial...",
];

interface Props {
  url: string;
}

export default function SiteAuditLoading({ url }: Props) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep >= STEPS.length - 1) return;
    const timer = setTimeout(() => setActiveStep((s) => s + 1), 1800);
    return () => clearTimeout(timer);
  }, [activeStep]);

  const displayUrl = url.replace(/^https?:\/\//, "");

  return (
    <div className="audit-loading">
      <motion.div
        className="glass-card audit-loading__card"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="audit-loading__icon">
          <div className="audit-loading__spinner" />
        </div>

        <h2 className="audit-loading__title">Analisando seu site</h2>
        <p className="audit-loading__subtitle">
          Estamos auditando{" "}
          <span style={{ color: "#00D4FF", fontWeight: 600 }}>{displayUrl}</span>
          <br />
          Isso pode levar alguns segundos...
        </p>

        <div className="audit-loading__steps">
          {STEPS.map((step, i) => (
            <div
              key={step}
              className={`audit-loading__step${
                i === activeStep
                  ? " audit-loading__step--active"
                  : i < activeStep
                  ? " audit-loading__step--done"
                  : ""
              }`}
            >
              <span className="audit-loading__step-dot" />
              {step}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
