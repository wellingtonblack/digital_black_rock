"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Globe, Cpu, XCircle, Smartphone, Monitor } from "lucide-react";
import type { AuditResult, StrategyScores } from "@/types/audit";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function scoreColor(score: number) {
  if (score < 50) return "#FF6B6B";
  if (score < 75) return "#FBBF24";
  return "#25D366";
}

function scoreStatusKey(score: number): "critical" | "warning" | "good" {
  if (score < 50) return "critical";
  if (score < 75) return "warning";
  return "good";
}

function vitalStatus(metric: string, value: string): string {
  const n = parseFloat(value);
  if (metric === "lcp") return n > 4 ? "critical" : n > 2.5 ? "warning" : "good";
  if (metric === "cls") return n > 0.25 ? "critical" : n > 0.1 ? "warning" : "good";
  if (metric === "inp") return n > 500 ? "critical" : n > 200 ? "warning" : "good";
  return "good";
}

function ScoreRing({ score, size = 72 }: { score: number; size?: number }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  const color = scoreColor(score);

  return (
    <div className="audit-result__score-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={6} />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke={color} strokeWidth={6}
          strokeDasharray={`${fill} ${circ}`} strokeLinecap="round"
        />
      </svg>
      <span className="audit-result__score-number">{score}</span>
    </div>
  );
}

interface Props {
  result: AuditResult;
  url: string;
}

export default function SiteAuditResult({ result, url }: Props) {
  const { t } = useLanguage();
  const r = t.audit.result;

  const displayUrl = url.replace(/^https?:\/\//, "");
  const hasAny = !!(result.mobile || result.desktop);
  const [activeTab, setActiveTab] = useState<"mobile" | "desktop">(
    result.mobile ? "mobile" : "desktop"
  );

  const activeData = activeTab === "mobile" ? result.mobile : result.desktop;

  const viewScores: StrategyScores = activeData ?? (result.mobile ?? result.desktop ?? {
    performance:    result.performance_score,
    seo:            result.seo_score,
    accessibility:  result.accessibility_score,
    best_practices: result.best_practices_score,
    lcp: result.lcp,
    cls: result.cls,
    inp: result.inp,
  });

  const scores = [
    { key: "performance",    label: r.scores.performance,    value: viewScores.performance },
    { key: "seo",            label: r.scores.seo,            value: viewScores.seo },
    { key: "accessibility",  label: r.scores.accessibility,  value: viewScores.accessibility },
    { key: "best_practices", label: r.scores.bestPractices,  value: viewScores.best_practices },
  ];

  return (
    <div className="audit-result">
      <motion.div
        className="audit-result__header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
      >
        <h2 className="audit-result__title">
          {r.titlePre}{" "}
          <span className="gradient-text">{r.titleHighlight}</span>
        </h2>
        <div className="audit-result__url-badge">
          <Globe size={13} />
          {displayUrl}
        </div>
        {result.platform_detected && (
          <div style={{ marginTop: "0.75rem" }}>
            <span className="audit-result__platform">
              <Cpu size={13} />
              {r.platformLabel} {result.platform_detected}
            </span>
          </div>
        )}
      </motion.div>

      {hasAny && (
        <motion.div
          className="audit-result__tabs"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <button
            type="button"
            className={`audit-result__tab${activeTab === "mobile" ? " audit-result__tab--active" : ""}${!result.mobile ? " audit-result__tab--disabled" : ""}`}
            onClick={() => result.mobile && setActiveTab("mobile")}
            title={!result.mobile ? r.mobileSlowTitle : undefined}
          >
            <Smartphone size={14} />
            Mobile
            {!result.mobile && <span className="audit-result__tab-na">{r.na}</span>}
          </button>
          <button
            type="button"
            className={`audit-result__tab${activeTab === "desktop" ? " audit-result__tab--active" : ""}${!result.desktop ? " audit-result__tab--disabled" : ""}`}
            onClick={() => result.desktop && setActiveTab("desktop")}
            title={!result.desktop ? r.desktopNaTitle : undefined}
          >
            <Monitor size={14} />
            Desktop
            {!result.desktop && <span className="audit-result__tab-na">{r.na}</span>}
          </button>
        </motion.div>
      )}

      <motion.div
        key={activeTab}
        className="audit-result__scores"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {scores.map(({ key, label, value }) => {
          const statusKey = scoreStatusKey(value);
          return (
            <motion.div key={key} className="glass-card audit-result__score-card" variants={cardVariants}>
              <div className="audit-result__score-label">{label}</div>
              <ScoreRing score={value} />
              <div className={`audit-result__score-status audit-result__score-status--${statusKey}`}>
                {r.status[statusKey]}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {(viewScores.lcp || viewScores.cls || viewScores.inp) && (
        <motion.div
          key={`vitals-${activeTab}`}
          className="audit-result__vitals"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
        >
          {viewScores.lcp && (
            <div className="glass-card audit-result__vital-card">
              <div className="audit-result__vital-label">LCP</div>
              <div className={`audit-result__vital-value audit-result__vital-value--${vitalStatus("lcp", viewScores.lcp)}`}>
                {viewScores.lcp}s
              </div>
              <div className="audit-result__vital-name">{r.vitals.lcp}</div>
            </div>
          )}
          {viewScores.cls && (
            <div className="glass-card audit-result__vital-card">
              <div className="audit-result__vital-label">CLS</div>
              <div className={`audit-result__vital-value audit-result__vital-value--${vitalStatus("cls", viewScores.cls)}`}>
                {viewScores.cls}
              </div>
              <div className="audit-result__vital-name">{r.vitals.cls}</div>
            </div>
          )}
          {viewScores.inp && (
            <div className="glass-card audit-result__vital-card">
              <div className="audit-result__vital-label">INP</div>
              <div className={`audit-result__vital-value audit-result__vital-value--${vitalStatus("inp", viewScores.inp)}`}>
                {viewScores.inp}ms
              </div>
              <div className="audit-result__vital-name">{r.vitals.inp}</div>
            </div>
          )}
        </motion.div>
      )}

      {result.ai_summary && (
        <motion.div
          className="audit-result__diagnosis"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
        >
          <div className="audit-result__diagnosis-title">
            <AlertTriangle size={16} style={{ color: "#FBBF24" }} />
            {r.diagnosisTitle}
          </div>
          {result.ai_summary
            .replace(/([.!?…])\s+([⚠️💸🚀])/gu, "$1\n\n$2")
            .split(/\n+/)
            .map(p => p.trim())
            .filter(Boolean)
            .map((para, i) => (
              <p key={i} className="audit-result__diagnosis-text">{para}</p>
            ))}
        </motion.div>
      )}

      {result.issues && result.issues.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35, ease }}
        >
          <div className="audit-result__section-title">
            <XCircle size={16} style={{ color: "#FF6B6B" }} />
            {r.issuesTitle}
          </div>
          <div className="audit-result__issues">
            {result.issues.map((issue, i) => (
              <div key={i} className={`audit-result__issue${issue.severity === "warning" ? " audit-result__issue--warning" : ""}`}>
                <AlertTriangle size={15} style={{ color: issue.severity === "warning" ? "#FBBF24" : "#FF6B6B", flexShrink: 0, marginTop: 2 }} />
                {issue.description}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {result.recommendations && result.recommendations.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4, ease }}
        >
          <div className="audit-result__section-title">
            <CheckCircle size={16} style={{ color: "#25D366" }} />
            {r.recsTitle}
          </div>
          <div className="audit-result__recs">
            {result.recommendations.map((rec, i) => (
              <div key={i} className="audit-result__rec">
                <CheckCircle size={15} style={{ color: "#25D366", flexShrink: 0, marginTop: 2 }} />
                {rec}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
