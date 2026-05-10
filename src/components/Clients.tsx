"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const colorPairs: [string, string][] = [
  ["#00D4FF", "#7B61FF"], ["#7B61FF", "#00D4FF"], ["#00D4FF", "#7B61FF"],
  ["#7B61FF", "#00D4FF"], ["#00D4FF", "#7B61FF"], ["#7B61FF", "#00D4FF"],
  ["#00D4FF", "#7B61FF"], ["#7B61FF", "#00D4FF"], ["#00D4FF", "#7B61FF"],
];

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function Clients() {
  const { t } = useLanguage();

  return (
    <section id="clientes" className="clients">
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
            <Users size={12} />
            {t.clients.tag}
          </span>
          <h2 className="section__title">
            {t.clients.titlePre}{" "}
            <span className="gradient-text">{t.clients.titleHighlight}</span>
          </h2>
          <p className="section__subtitle">{t.clients.subtitle}</p>
        </motion.div>

        <motion.div
          className="clients__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t.clients.items.map((client, i) => {
            const [c1, c2] = colorPairs[i];
            const initials = client.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <motion.div key={client.name} className="glass-card client-card" variants={cardVariants}>
                <div
                  className="client-card__avatar"
                  style={{ background: `linear-gradient(135deg, ${c1}30, ${c2}30)`, border: `1px solid ${c1}40` }}
                >
                  {initials}
                </div>
                <div className="client-card__info">
                  <div className="client-card__name">{client.name}</div>
                  <div className="client-card__category">{client.category}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="clients__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="clients__cta-text">{t.clients.ctaText}</p>
          <a
            href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20ser%20o%20pr%C3%B3ximo%20case%20de%20sucesso%20da%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            {t.clients.ctaBtn}
          </a>
        </motion.div>

      </div>
    </section>
  );
}
