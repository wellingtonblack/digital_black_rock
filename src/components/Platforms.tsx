"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const logos = [
  "/assets/logos/vtex.webp",
  "/assets/logos/shopify.png",
  "/assets/logos/loja-integrada.webp",
  "/assets/logos/wordpress.webp",
  "/assets/logos/nuvemshop.webp",
  "/assets/logos/tray.png",
];

const tagColors = ["#FF4785", "#96BF48", "#00BFFF", "#21759B", "#00BFFF", "#FF6B35"];

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 56, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.65, ease } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.11 } },
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export default function Platforms() {
  const { t } = useLanguage();

  return (
    <section id="plataformas" className="platforms">
      <div style={{ position: "absolute", inset: 0, background: "#04080F" }} />
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
            <Layers size={12} />
            {t.platforms.tag}
          </span>
          <h2 className="section__title">
            {t.platforms.titlePre}{" "}
            <span className="gradient-text">{t.platforms.titleHighlight}</span>
          </h2>
          <p className="section__subtitle">{t.platforms.subtitle}</p>
        </motion.div>

        <motion.div
          className="platforms__grid platforms__grid--top"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t.platforms.items.slice(0, 3).map((p, i) => (
            <motion.div key={p.name} className="glass-card platform-card" variants={cardVariants}>
              <motion.div className="platform-card__logo-wrap" variants={logoVariants}>
                <Image
                  src={logos[i]} alt={p.name} width={200} height={80}
                  style={{ objectFit: "contain", maxHeight: "5.5rem", maxWidth: "190px", width: "auto", height: "auto" }}
                />
              </motion.div>
              <span className="platform-card__tag" style={{ background: `${tagColors[i]}20`, color: tagColors[i] }}>
                {p.tag}
              </span>
              <h3 className="platform-card__name">{p.name}</h3>
              <p className="platform-card__desc">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="platforms__grid platforms__grid--bottom"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t.platforms.items.slice(3).map((p, i) => (
            <motion.div key={p.name} className="glass-card platform-card" variants={cardVariants}>
              <motion.div className="platform-card__logo-wrap" variants={logoVariants}>
                <Image
                  src={logos[i + 3]} alt={p.name} width={200} height={80}
                  style={{ objectFit: "contain", maxHeight: "5.5rem", maxWidth: "190px", width: "auto", height: "auto" }}
                />
              </motion.div>
              <span className="platform-card__tag" style={{ background: `${tagColors[i + 3]}20`, color: tagColors[i + 3] }}>
                {p.tag}
              </span>
              <h3 className="platform-card__name">{p.name}</h3>
              <p className="platform-card__desc">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
