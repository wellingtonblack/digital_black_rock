"use client";

import { motion } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 56 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
      <div className="container--content" style={{ position: "relative", zIndex: 1 }}>

        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
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
        </motion.div>

        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {differentials.map((d) => {
            const Icon = d.icon;
            return (
              <motion.div key={d.title} className="glass-card differential-card" variants={cardVariants}>
                <div
                  className="differential-card__icon"
                  style={{ background: `${d.color}18` }}
                >
                  <Icon size={28} style={{ color: d.color }} />
                </div>
                <h3 className="differential-card__title">{d.title}</h3>
                <p className="differential-card__desc">{d.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="about__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <a
            href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <MessageCircle size={18} />
            Falar com um especialista
          </a>
        </motion.div>

      </div>
    </section>
  );
}
