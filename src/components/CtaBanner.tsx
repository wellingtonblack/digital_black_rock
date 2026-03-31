"use client";

import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Diagnóstico gratuito do seu e-commerce",
  "Estratégia personalizada para o seu negócio",
  "Equipe especializada em VTEX, Shopify e mais",
  "Resultados mensuráveis e comprovados",
];

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" />
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
      <div className="cta-banner__glow" />
      <div className="cta-banner__border cta-banner__border--top" />
      <div className="cta-banner__border cta-banner__border--bottom" />

      <div className="cta-banner__content">
        <div className="cta-banner__badge">🔥 Oferta Especial</div>

        <h2 className="cta-banner__title">
          Pronto para{" "}
          <span className="gradient-text">multiplicar suas vendas</span>
          <br />
          no digital?
        </h2>

        <p className="cta-banner__subtitle">
          Agende agora uma{" "}
          <strong style={{ color: "#fff" }}>consultoria gratuita</strong> com nossos
          especialistas e descubra como transformar seu e-commerce em uma máquina de resultados.
        </p>

        <div className="cta-banner__benefits">
          {benefits.map((b) => (
            <div key={b} className="cta-banner__benefit">
              <CheckCircle size={16} style={{ color: "#00D4FF", flexShrink: 0 }} />
              <span>{b}</span>
            </div>
          ))}
        </div>

        <div className="cta-banner__actions">
          <a
            href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consultoria%20gratuita%20com%20a%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            <MessageCircle size={20} />
            Agendar Consultoria Gratuita
          </a>
          <a href="#contato" className="btn btn--secondary btn--lg">
            Enviar Mensagem
            <ArrowRight size={18} />
          </a>
        </div>

        <p className="cta-banner__note">
          Sem compromisso • Resposta em até 24h • 100% gratuito
        </p>
      </div>
    </section>
  );
}
