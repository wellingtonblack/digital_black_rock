"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, User, Mail, Phone, Send } from "lucide-react";

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
          Alterar URL
        </button>

        <div className="audit-form__url-preview">
          <Globe size={14} />
          {displayUrl}
        </div>

        <h2 className="audit-form__title">Quase lá! Onde enviamos o diagnóstico?</h2>
        <p className="audit-form__subtitle">
          Preencha abaixo para receber sua análise completa e recomendações personalizadas.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="audit-form__field">
            <label htmlFor="audit-name" className="audit-form__label">
              <User size={13} style={{ display: "inline", marginRight: 5 }} />
              Nome *
            </label>
            <input
              id="audit-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
              className="form-input"
            />
          </div>

          <div className="audit-form__field">
            <label htmlFor="audit-email" className="audit-form__label">
              <Mail size={13} style={{ display: "inline", marginRight: 5 }} />
              E-mail *
            </label>
            <input
              id="audit-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              className="form-input"
            />
          </div>

          <div className="audit-form__field">
            <label htmlFor="audit-phone" className="audit-form__label">
              <Phone size={13} style={{ display: "inline", marginRight: 5 }} />
              WhatsApp *
            </label>
            <input
              id="audit-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="(11) 99999-9999"
              className="form-input"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn--primary"
            style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
          >
            {loading ? (
              <>
                <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.9s linear infinite" }} />
                Analisando...
              </>
            ) : (
              <>
                <Send size={17} />
                Ver meu diagnóstico
              </>
            )}
          </button>

          <p className="audit-form__lgpd">
            Ao enviar, você concorda em receber seu diagnóstico e possíveis contatos
            da Digital Black Rock com sugestões de melhoria. Seus dados não são compartilhados.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
