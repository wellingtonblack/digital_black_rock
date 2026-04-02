"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springCfg = { stiffness: 220, damping: 22 };
  const sRotateX = useSpring(rotateX, springCfg);
  const sRotateY = useSpring(rotateY, springCfg);
  const scale    = useMotionValue(1);
  const sScale   = useSpring(scale, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    rotateY.set(((e.clientX - cx) / (rect.width  / 2)) * 9);
    rotateX.set(-((e.clientY - cy) / (rect.height / 2)) * 7);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      variants={cardVariants}
      style={{
        rotateX: sRotateX,
        rotateY: sRotateY,
        scale: sScale,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card service-card"
    >
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
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="services">
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
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
