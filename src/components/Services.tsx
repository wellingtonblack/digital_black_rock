"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Briefcase, ShoppingCart, Search, ArrowLeftRight, Brain, Globe, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Briefcase, ShoppingCart, Brain, Search, ArrowLeftRight, Globe];
const colors = ["#00D4FF", "#7B61FF", "#00D4FF", "#7B61FF", "#00D4FF", "#7B61FF"];

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const containerVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

function ServiceCard({
  title, desc, color, icon: Icon, cta,
}: {
  title: string; desc: string; color: string; icon: typeof Briefcase; cta: string;
}) {
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

  const handleMouseLeave = () => { rotateX.set(0); rotateY.set(0); scale.set(1); };

  return (
    <motion.div
      variants={cardVariants}
      style={{
        rotateX: sRotateX, rotateY: sRotateY, scale: sScale,
        transformPerspective: 900, transformStyle: "preserve-3d",
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card service-card"
    >
      <div className="service-card__accent" style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
      <div className="service-card__icon" style={{ background: `${color}15` }}>
        <Icon size={28} style={{ color }} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
      <a
        href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Black%20Rock."
        target="_blank"
        rel="noopener noreferrer"
        className="service-card__cta"
        style={{ color }}
      >
        {cta}
        <ArrowRight size={14} />
      </a>
    </motion.div>
  );
}

export default function Services() {
  const { t } = useLanguage();

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
            {t.services.tag}
          </span>
          <h2 className="section__title">
            {t.services.titlePre}{" "}
            <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="section__subtitle">
            {t.services.subtitlePre}{" "}
            <strong style={{ color: "#7B61FF" }}>{t.services.subtitleHighlight}</strong>{" "}
            {t.services.subtitlePost}
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {t.services.items.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              color={colors[i]}
              icon={icons[i]}
              cta={t.services.cardCta}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
