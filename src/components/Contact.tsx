"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

const infoCardVariants = {
  hidden: { opacity: 0, y: 36 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const infoContainerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const wa = t.contact.wa;
    const msg = encodeURIComponent(
      `${wa.intro} *${form.name}* ${wa.interest}\n\n` +
      `📧 ${wa.emailLabel}: ${form.email}\n📱 ${wa.phoneLabel}: ${form.phone}\n🏢 ${wa.companyLabel}: ${form.company}\n` +
      `🛒 ${wa.serviceLabel}: ${form.service}\n\n💬 ${wa.messageLabel}: ${form.message}`
    );
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(`https://wa.me/5511982400853?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <section id="contato" className="contact">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="section__tag">
            <Mail size={12} />
            {t.contact.tag}
          </span>
          <h2 className="section__title">
            {t.contact.titlePre}{" "}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="section__subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="contact__grid">

          <motion.div
            className="contact__info"
            variants={infoContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div className="glass-card contact-card" variants={infoCardVariants}>
              <div className="contact-card__icon" style={{ background: "rgba(37,211,102,0.15)" }}>
                <MessageCircle size={22} style={{ color: "#25D366" }} />
              </div>
              <div>
                <div className="contact-card__title">{t.contact.whatsapp.title}</div>
                <a href="https://wa.me/5511982400853" target="_blank" rel="noopener noreferrer"
                  className="contact-card__value" style={{ color: "#8B9CB8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B9CB8")}
                >
                  (11) 98240-0853
                </a>
                <div className="contact-card__note">{t.contact.whatsapp.note}</div>
              </div>
            </motion.div>

            <motion.div className="glass-card contact-card" variants={infoCardVariants}>
              <div className="contact-card__icon" style={{ background: "rgba(0,212,255,0.1)" }}>
                <Mail size={22} style={{ color: "#00D4FF" }} />
              </div>
              <div>
                <div className="contact-card__title">{t.contact.email.title}</div>
                <a href="mailto:atendimento@digitalblackrock.com.br"
                  className="contact-card__value" style={{ color: "#8B9CB8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B9CB8")}
                >
                  atendimento@digitalblackrock.com.br
                </a>
                <div className="contact-card__note">{t.contact.email.note}</div>
              </div>
            </motion.div>

            <motion.div className="glass-card contact-card" variants={infoCardVariants}>
              <div className="contact-card__icon" style={{ background: "rgba(123,97,255,0.1)" }}>
                <MapPin size={22} style={{ color: "#7B61FF" }} />
              </div>
              <div>
                <div className="contact-card__title">{t.contact.location.title}</div>
                <div className="contact-card__value" style={{ color: "#8B9CB8" }}>{t.contact.location.value}</div>
                <div className="contact-card__note">{t.contact.location.note}</div>
              </div>
            </motion.div>

            {t.contact.testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                className="glass-card contact-card"
                style={{ flexDirection: "column", alignItems: "flex-start" }}
                variants={infoCardVariants}
              >
                <div style={{ display: "flex", gap: "3px", marginBottom: "0.5rem" }}>
                  {[1,2,3,4,5].map((s) => <span key={s} style={{ color: "#FBBF24", fontSize: "1rem" }}>★</span>)}
                </div>
                <p style={{ color: "#8B9CB8", fontSize: "0.9375rem", lineHeight: 1.65, flex: 1 }}>
                  {item.review}
                </p>
                <p style={{ color: "#00D4FF", fontSize: "0.8125rem", marginTop: "0.75rem", fontWeight: 600 }}>
                  — {item.author}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, delay: 0.15, ease }}
          >
            {sent ? (
              <div className="glass-card contact-success">
                <div className="contact-success__icon">
                  <CheckCircle size={40} style={{ color: "#25D366" }} />
                </div>
                <h3 className="contact-success__title">{t.contact.success.title}</h3>
                <p className="contact-success__message">{t.contact.success.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card contact-form">
                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name" className="contact-form__label">{t.contact.form.name}</label>
                    <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder={t.contact.form.namePlaceholder} className="form-input" />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-email" className="contact-form__label">{t.contact.form.email}</label>
                    <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t.contact.form.emailPlaceholder} className="form-input" />
                  </div>
                </div>

                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label htmlFor="contact-phone" className="contact-form__label">{t.contact.form.phone}</label>
                    <input id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t.contact.form.phonePlaceholder} className="form-input" />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-company" className="contact-form__label">{t.contact.form.company}</label>
                    <input id="contact-company" type="text" name="company" value={form.company} onChange={handleChange} placeholder={t.contact.form.companyPlaceholder} className="form-input" />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-service" className="contact-form__label">{t.contact.form.service}</label>
                  <select id="contact-service" name="service" value={form.service} onChange={handleChange} className="form-input">
                    <option value="" style={{ background: "#0C1525" }}>{t.contact.form.servicePlaceholder}</option>
                    {t.contact.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} style={{ background: "#0C1525" }}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message" className="contact-form__label">{t.contact.form.message}</label>
                  <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder={t.contact.form.messagePlaceholder} className="form-input" style={{ resize: "none" }} />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn--primary contact-form__submit${loading ? " btn--disabled" : ""}`}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin" style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%" }} />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {t.contact.form.submit}
                    </>
                  )}
                </button>

                <p className="contact-form__note">{t.contact.form.redirectNote}</p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
