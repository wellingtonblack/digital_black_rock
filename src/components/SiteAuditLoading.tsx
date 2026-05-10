"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

interface Props {
  url: string;
}

export default function SiteAuditLoading({ url }: Props) {
  const { t } = useLanguage();
  const l = t.audit.loading;
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep >= l.steps.length - 1) return;
    const timer = setTimeout(() => setActiveStep((s) => s + 1), 1800);
    return () => clearTimeout(timer);
  }, [activeStep, l.steps.length]);

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

        <h2 className="audit-loading__title">{l.title}</h2>
        <p className="audit-loading__subtitle">
          {l.subtitlePre}{" "}
          <span style={{ color: "#00D4FF", fontWeight: 600 }}>{displayUrl}</span>
          <br />
          {l.subtitlePost}
        </p>

        <div className="audit-loading__steps">
          {l.steps.map((step, i) => (
            <div
              key={i}
              className={`audit-loading__step${
                i === activeStep ? " audit-loading__step--active"
                : i < activeStep ? " audit-loading__step--done" : ""
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
