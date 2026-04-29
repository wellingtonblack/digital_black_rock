"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SiteAuditHero from "@/components/SiteAuditHero";
import SiteAuditForm from "@/components/SiteAuditForm";
import SiteAuditLoading from "@/components/SiteAuditLoading";
import SiteAuditResult from "@/components/SiteAuditResult";
import SiteAuditCta from "@/components/SiteAuditCta";
import type { AuditResult, AnalyzeResponse } from "@/types/audit";

type Stage = "idle" | "collectingLead" | "loading" | "success" | "error";

function readUtms() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? undefined,
    utm_medium: p.get("utm_medium") ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
    utm_content: p.get("utm_content") ?? undefined,
    utm_term: p.get("utm_term") ?? undefined,
  };
}

export default function SiteAuditPage() {
  const [stage, setStage] = useState<Stage>("idle");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage !== "idle") {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stage]);

  function handleAnalyze(cleanUrl: string) {
    setUrl(cleanUrl);
    setStage("collectingLead");
  }

  async function handleLeadSubmit(lead: { name: string; email: string; phone: string }) {
    setStage("loading");
    const utms = readUtms();

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, ...lead, ...utms }),
      });

      const data: AnalyzeResponse = await res.json();

      if (!res.ok || !data.success || !data.result) {
        setErrorMsg(data.error ?? "Não foi possível analisar agora. Tente novamente em alguns minutos.");
        setStage("error");
        return;
      }

      setResult(data.result);
      setStage("success");
    } catch {
      setErrorMsg("Não foi possível conectar ao servidor. Tente novamente em alguns minutos.");
      setStage("error");
    }
  }

  function handleReset() {
    setStage("idle");
    setUrl("");
    setResult(null);
    setErrorMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Navbar />
      <main className="audit">
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }} />

        {/* Hero / URL input — always visible in idle */}
        {stage === "idle" && <SiteAuditHero onAnalyze={handleAnalyze} />}

        {/* Stages below */}
        <div ref={contentRef}>
          {stage === "collectingLead" && (
            <SiteAuditForm
              url={url}
              onBack={() => setStage("idle")}
              onSubmit={handleLeadSubmit}
            />
          )}

          {stage === "loading" && <SiteAuditLoading url={url} />}

          {stage === "success" && result && (
            <>
              <SiteAuditResult result={result} url={url} />
              <SiteAuditCta url={url} onReset={handleReset} result={result} />
            </>
          )}

          {stage === "error" && (
            <div className="audit-error">
              <div className="glass-card audit-error__card">
                <div className="audit-error__icon">⚠️</div>
                <h2 className="audit-error__title">Não conseguimos analisar</h2>
                <p className="audit-error__message">{errorMsg}</p>
                <button
                  onClick={handleReset}
                  className="btn btn--primary"
                  style={{ margin: "0 auto" }}
                  type="button"
                >
                  Tentar novamente
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
