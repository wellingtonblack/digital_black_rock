"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const platforms = [
  {
    name: "VTEX",
    logo: "/assets/logos/vtex.webp",
    desc: "Criamos e personalizamos ambientes de e-commerce eficientes e totalmente adaptáveis às necessidades dos nossos clientes.",
    tag: "Enterprise",
    tagColor: "#FF4785",
  },
  {
    name: "Shopify",
    logo: "/assets/logos/shopify.png",
    desc: "Suporte e desenvolvimento especializado na plataforma Shopify, fornecendo soluções robustas e escaláveis para negócios de todos os tamanhos.",
    tag: "Global",
    tagColor: "#96BF48",
  },
  {
    name: "Loja Integrada",
    logo: "/assets/logos/loja-integrada.webp",
    desc: "Combinando simplicidade com performance, ideal para empreendedores iniciantes e empresas estabelecidas que buscam crescimento.",
    tag: "Nacional",
    tagColor: "#00BFFF",
  },
  {
    name: "WordPress / WooCommerce",
    logo: "/assets/logos/wordpress.webp",
    desc: "Desenvolvimento de e-commerces flexíveis e escaláveis com a plataforma mais popular do mundo, personalizada para o seu negócio.",
    tag: "Flexível",
    tagColor: "#21759B",
  },
  {
    name: "Tray",
    logo: "/assets/logos/tray.png",
    desc: "Plataforma nacional robusta para e-commerces em crescimento, com integrações nativas e infraestrutura preparada para alta demanda.",
    tag: "Nacional",
    tagColor: "#FF6B35",
  },
];

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
            Plataformas
          </span>
          <h2 className="section__title">
            Especialistas nas{" "}
            <span className="gradient-text">principais plataformas</span>
          </h2>
          <p className="section__subtitle">
            Dominamos as tecnologias líderes do mercado para entregar a solução certa para o seu negócio.
          </p>
        </motion.div>

        <motion.div
          className="platforms__grid platforms__grid--top"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {platforms.slice(0, 3).map((p) => (
            <motion.div key={p.name} className="glass-card platform-card" variants={cardVariants}>
              <motion.div className="platform-card__logo-wrap" variants={logoVariants}>
                <Image src={p.logo} alt={p.name} width={200} height={80} style={{ objectFit: "contain", maxHeight: "5.5rem", maxWidth: "190px" }} />
              </motion.div>
              <span
                className="platform-card__tag"
                style={{ background: `${p.tagColor}20`, color: p.tagColor }}
              >
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
          {platforms.slice(3).map((p) => (
            <motion.div key={p.name} className="glass-card platform-card platform-card--horizontal" variants={cardVariants}>
              <motion.div className="platform-card__logo-wrap" variants={logoVariants}>
                <Image src={p.logo} alt={p.name} width={140} height={65} style={{ objectFit: "contain", maxHeight: "4.5rem", maxWidth: "130px" }} />
              </motion.div>
              <div className="platform-card__content">
                <div className="platform-card__name-row">
                  <h3 className="platform-card__name">{p.name}</h3>
                  <span
                    className="platform-card__tag"
                    style={{ background: `${p.tagColor}20`, color: p.tagColor }}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="platform-card__desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
