"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, User, Mail, Phone, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

interface Props {
  url: string;
  onBack: () => void;
  onSubmit: (lead: { name: string; email: string; phone: string }) => void;
}

export default function SiteAuditForm({ url, onBack, onSubmit }: Props) {
  const { t } = useLanguage();
  const f = t.audit.form;
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? maskPhone(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    onSubmit(form);
  };

  const displayUrl = url.replace(/^https?:\/\//, "");

  return (
    <div className="audit-form">
      <motion.div
        className="glass-card audit-form__card"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
      >
        <button className="audit-form__back" onClick={onBack} type="button">
          <ArrowLeft size={14} />
          {f.back}
        </button>

        <div className="audit-form__url-preview">
          <Globe size={14} />
          {displayUrl}
        </div>

        <h2 className="audit-form__title">{f.title}</h2>
        <p className="audit-form__subtitle">{f.subtitle}</p>

        <form onSubmit={handleSubmit} id="send-form-audit">
          <div className="audit-form__field">
            <label htmlFor="audit-name" className="audit-form__label">
              <User size={13} style={{ display: "inline", marginRight: 5 }} />
              {f.name}
            </label>
            <input
              id="audit-name" type="text" name="name" value={form.name}
              onChange={handleChange} required placeholder={f.namePlaceholder}
              className="form-input"
            />
          </div>

          <div className="audit-form__field">
            <label htmlFor="audit-email" className="audit-form__label">
              <Mail size={13} style={{ display: "inline", marginRight: 5 }} />
              {f.email}
            </label>
            <input
              id="audit-email" type="email" name="email" value={form.email}
              onChange={handleChange} required placeholder={f.emailPlaceholder}
              className="form-input"
            />
          </div>

          <div className="audit-form__field">
            <label htmlFor="audit-phone" className="audit-form__label">
              <Phone size={13} style={{ display: "inline", marginRight: 5 }} />
              {f.phone}
            </label>
            <input
              id="audit-phone" type="tel" name="phone" value={form.phone}
              onChange={handleChange} required placeholder={f.phonePlaceholder}
              className="form-input"
            />
          </div>

          <button
            type="submit" disabled={loading} className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? (
              <>
                <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.9s linear infinite" }} />
                {f.sending}
              </>
            ) : (
              <>
                <Send size={17} />
                {f.submit}
              </>
            )}
          </button>

          <p className="audit-form__lgpd">{f.lgpd}</p>
        </form>
      </motion.div>
    </div>
  );
}
