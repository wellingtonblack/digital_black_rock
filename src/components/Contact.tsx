"use client";

import { useState } from "react";
import { Mail, MessageCircle, Send, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = encodeURIComponent(
      `Olá! Me chamo *${form.name}* e tenho interesse nos serviços da Digital Black Rock.\n\n` +
      `📧 Email: ${form.email}\n📱 Telefone: ${form.phone}\n🏢 Empresa: ${form.company}\n` +
      `🛒 Serviço de interesse: ${form.service}\n\n💬 Mensagem: ${form.message}`
    );
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(`https://wa.me/5511969683162?text=${msg}`, "_blank");
    }, 800);
  };

  return (
    <section id="contato" className="contact">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section__header">
          <span className="section__tag">
            <Mail size={12} />
            Contato
          </span>
          <h2 className="section__title">
            Vamos conversar sobre{" "}
            <span className="gradient-text">o seu projeto</span>
          </h2>
          <p className="section__subtitle">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="glass-card contact-card">
              <div className="contact-card__icon" style={{ background: "rgba(37,211,102,0.15)" }}>
                <MessageCircle size={22} style={{ color: "#25D366" }} />
              </div>
              <div>
                <div className="contact-card__title">WhatsApp</div>
                <a href="https://wa.me/5511969683162" target="_blank" rel="noopener noreferrer"
                  className="contact-card__value" style={{ color: "#8B9CB8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B9CB8")}
                >
                  (11) 96968-3162
                </a>
                <div className="contact-card__note">Resposta rápida</div>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-card__icon" style={{ background: "rgba(0,212,255,0.1)" }}>
                <Mail size={22} style={{ color: "#00D4FF" }} />
              </div>
              <div>
                <div className="contact-card__title">E-mail</div>
                <a href="mailto:atendimento@digitalblackrock.com.br"
                  className="contact-card__value" style={{ color: "#8B9CB8" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B9CB8")}
                >
                  atendimento@digitalblackrock.com.br
                </a>
                <div className="contact-card__note">Resposta em até 24h</div>
              </div>
            </div>

            <div className="glass-card contact-card">
              <div className="contact-card__icon" style={{ background: "rgba(123,97,255,0.1)" }}>
                <MapPin size={22} style={{ color: "#7B61FF" }} />
              </div>
              <div>
                <div className="contact-card__title">Localização</div>
                <div className="contact-card__value" style={{ color: "#8B9CB8" }}>São Paulo, SP — Brasil</div>
                <div className="contact-card__note">Atendimento nacional</div>
              </div>
            </div>

            <div className="glass-card contact-card" style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <div className="contact-card__title">Atendimento de excelência</div>
              <div style={{ display: "flex", gap: "4px", margin: "0.5rem 0" }}>
                {[1,2,3,4,5].map((s) => <span key={s} style={{ color: "#FBBF24", fontSize: "1.125rem" }}>★</span>)}
              </div>
              <p style={{ color: "#8B9CB8", fontSize: "1rem", lineHeight: 1.6 }}>
                &ldquo;A Digital Black Rock transformou completamente nossa operação de e-commerce. Profissionalismo e resultados reais.&rdquo;
              </p>
              <p style={{ color: "#00D4FF", fontSize: "0.875rem", marginTop: "0.75rem", fontWeight: 600 }}>— Cliente satisfeito</p>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="glass-card contact-success">
                <div className="contact-success__icon">
                  <CheckCircle size={40} style={{ color: "#25D366" }} />
                </div>
                <h3 className="contact-success__title">Mensagem enviada!</h3>
                <p className="contact-success__message">Abrimos o WhatsApp para você. Nossa equipe retornará em breve!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card contact-form">
                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label className="contact-form__label">Nome *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Seu nome completo" className="form-input" />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">E-mail *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" className="form-input" />
                  </div>
                </div>

                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label className="contact-form__label">Telefone / WhatsApp</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(11) 99999-9999" className="form-input" />
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Empresa</label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Nome da sua empresa" className="form-input" />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label">Serviço de Interesse</label>
                  <select name="service" value={form.service} onChange={handleChange} className="form-input">
                    <option value="" style={{ background: "#0C1525" }}>Selecione um serviço</option>
                    <option value="Consultoria de E-commerce" style={{ background: "#0C1525" }}>Consultoria de E-commerce</option>
                    <option value="Implementação de E-commerce" style={{ background: "#0C1525" }}>Implementação de E-commerce</option>
                    <option value="Otimização e SEO" style={{ background: "#0C1525" }}>Otimização e SEO</option>
                    <option value="Migração de E-commerce" style={{ background: "#0C1525" }}>Migração de E-commerce (B2C/B2B)</option>
                    <option value="Suporte e Evolução" style={{ background: "#0C1525" }}>Suporte e Evolução</option>
                    <option value="Sites, Blogs e Landing Pages" style={{ background: "#0C1525" }}>Sites, Blogs e Landing Pages</option>
                  </select>
                </div>

                <div className="contact-form__field">
                  <label className="contact-form__label">Mensagem</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Conte-nos sobre seu projeto ou dúvida..." className="form-input" style={{ resize: "none" }} />
                </div>

                <button type="submit" disabled={loading} className={`btn btn--primary contact-form__submit${loading ? " btn--disabled" : ""}`}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin" style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%" }} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem via WhatsApp
                    </>
                  )}
                </button>

                <p className="contact-form__note">Ao enviar, você será redirecionado para o WhatsApp</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
