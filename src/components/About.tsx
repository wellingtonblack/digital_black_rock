"use client";

import { motion } from "framer-motion";
import { Brain, Rocket, ShieldCheck, Handshake, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Brain, Rocket, ShieldCheck, Handshake];
const colors = ["#7B61FF", "#00D4FF", "#7B61FF", "#00D4FF"];

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
  const { t } = useLanguage();

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
          <span className="section__tag">{t.about.tag}</span>
          <h2 className="section__title">
            {t.about.titlePre} <span className="gradient-text">Digital Black Rock</span>
          </h2>
          <p className="section__subtitle">
            {t.about.subtitle.pre}{" "}
            <strong style={{ color: "#fff" }}>{t.about.subtitle.highlight1}</strong>{" "}
            {t.about.subtitle.mid}{" "}
            <strong style={{ color: "#7B61FF" }}>{t.about.subtitle.highlight2}</strong>{" "}
            {t.about.subtitle.post}
          </p>
        </motion.div>

        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t.about.differentials.map((d, i) => {
            const Icon = icons[i];
            const color = colors[i];
            return (
              <motion.div key={d.title} className="glass-card differential-card" variants={cardVariants}>
                <div className="differential-card__icon" style={{ background: `${color}18` }}>
                  <Icon size={28} style={{ color }} />
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
            href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <MessageCircle size={18} />
            {t.about.cta}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
