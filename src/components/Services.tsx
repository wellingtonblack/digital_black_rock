"use client";

import { Briefcase, ShoppingCart, Search, ArrowLeftRight, Brain, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Consultoria de E-commerce",
    desc: "Estratégia personalizada para acelerar o crescimento online. Identificamos gargalos, oportunidades e traçamos o caminho mais eficiente para escalar suas vendas.",
    color: "#00D4FF",
  },
  {
    icon: ShoppingCart,
    title: "Implementação de E-commerce",
    desc: "Criamos sua loja do zero em VTEX, Shopify ou Loja Integrada — plataformas robustas, seguras e prontas para converter.",
    color: "#7B61FF",
  },
  {
    icon: Brain,
    title: "Desenvolvimento com IA",
    desc: "Aplicamos Inteligência Artificial para aumentar a velocidade de entrega, melhorar performance técnica e automatizar processos no seu e-commerce.",
    color: "#00D4FF",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    desc: "Aumentamos a visibilidade orgânica e a velocidade da sua loja. Mais tráfego qualificado, menor CAC e maior taxa de conversão.",
    color: "#7B61FF",
  },
  {
    icon: ArrowLeftRight,
    title: "Migração B2C e B2B",
    desc: "Migramos sua loja para uma plataforma mais escalável com zero downtime. Especialistas em transferência de dados e integrações complexas.",
    color: "#00D4FF",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    desc: "Páginas de alta conversão focadas em performance e UX. Design orientado a resultado, com otimização contínua baseada em dados.",
    color: "#7B61FF",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section__header">
          <span className="section__tag">
            <Briefcase size={12} />
            Nossos Serviços
          </span>
          <h2 className="section__title">
            Soluções completas para{" "}
            <span className="gradient-text">escalar seu e-commerce</span>
          </h2>
          <p className="section__subtitle">
            Do planejamento estratégico à execução técnica — com{" "}
            <strong style={{ color: "#7B61FF" }}>IA integrada</strong> para mais
            velocidade, performance e resultados reais.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="glass-card service-card">
                <div
                  className="service-card__accent"
                  style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />
                <div
                  className="service-card__icon"
                  style={{ background: `${service.color}15` }}
                >
                  <Icon size={28} style={{ color: service.color }} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
                <a
                  href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Black%20Rock."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card__cta"
                  style={{ color: service.color }}
                >
                  Falar com especialista
                  <ArrowRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
