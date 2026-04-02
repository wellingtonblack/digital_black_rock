"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Diagnóstico gratuito do seu e-commerce",
  "Estratégia personalizada para o seu negócio",
  "Equipe especializada em VTEX, Shopify e mais",
  "Resultados mensuráveis e comprovados",
];

const ease = [0.22, 1, 0.36, 1] as const;

const benefitVariants = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__bg" />
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
      <div className="cta-banner__glow" />
      <div className="cta-banner__border cta-banner__border--top" />
      <div className="cta-banner__border cta-banner__border--bottom" />

      <div className="cta-banner__content">

        <motion.div
          className="cta-banner__badge"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
        >
          🔥 Oferta Especial
        </motion.div>

        <motion.h2
          className="cta-banner__title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.1, ease }}
        >
          Pronto para{" "}
          <span className="gradient-text">multiplicar suas vendas</span>
          <br />
          no digital?
        </motion.h2>

        <motion.p
          className="cta-banner__subtitle"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        >
          Agende agora uma{" "}
          <strong style={{ color: "#fff" }}>consultoria gratuita</strong> com nossos
          especialistas e descubra como transformar seu e-commerce em uma máquina de resultados.
        </motion.p>

        <motion.div
          className="cta-banner__benefits"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {benefits.map((b) => (
            <motion.div key={b} className="cta-banner__benefit" variants={benefitVariants}>
              <CheckCircle size={16} style={{ color: "#00D4FF", flexShrink: 0 }} />
              <span>{b}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-banner__actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
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
        </motion.div>

        <motion.p
          className="cta-banner__note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Sem compromisso • Resposta em até 24h • 100% gratuito
        </motion.p>

      </div>
    </section>
  );
}
