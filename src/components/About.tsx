"use client";

import { Brain, Rocket, ShieldCheck, Handshake, MessageCircle } from "lucide-react";

const differentials = [
  {
    icon: Brain,
    title: "IA no Desenvolvimento",
    desc: "Aplicamos Inteligência Artificial para acelerar entregas, elevar performance e otimizar cada etapa do desenvolvimento.",
    color: "#7B61FF",
  },
  {
    icon: Rocket,
    title: "Especialistas em E-commerce",
    desc: "Time certificado em VTEX, Shopify e Loja Integrada — do zero ao resultado com estratégia e tecnologia de ponta.",
    color: "#00D4FF",
  },
  {
    icon: ShieldCheck,
    title: "Resultados Comprovados",
    desc: "+200 projetos entregues, +50 clientes ativos e 98% de satisfação. Execução com qualidade e no prazo.",
    color: "#7B61FF",
  },
  {
    icon: Handshake,
    title: "Parceria Estratégica",
    desc: "Não somos apenas fornecedores — somos parceiros de crescimento que trabalham lado a lado com o seu time.",
    color: "#00D4FF",
  },
];

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
      <div className="container--content" style={{ position: "relative", zIndex: 1 }}>
        <div className="section__header">
          <span className="section__tag">Sobre Nós</span>
          <h2 className="section__title">
            Quem é a <span className="gradient-text">Digital Black Rock</span>
          </h2>
          <p className="section__subtitle">
            Somos uma consultoria de e-commerce especializada, que combina{" "}
            <strong style={{ color: "#fff" }}>experiência técnica</strong> e{" "}
            <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong>{" "}
            para entregar resultados reais — mais rápido, com mais performance.
          </p>
        </div>

        <div className="about__grid">
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="glass-card differential-card">
                <div
                  className="differential-card__icon"
                  style={{ background: `${d.color}18` }}
                >
                  <Icon size={28} style={{ color: d.color }} />
                </div>
                <h3 className="differential-card__title">{d.title}</h3>
                <p className="differential-card__desc">{d.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="about__cta">
          <a
            href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <MessageCircle size={18} />
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}
