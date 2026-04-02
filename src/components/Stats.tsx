"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 50,  suffix: "+", label: "Clientes Ativos",      desc: "Empresas que confiam em nós" },
  { value: 200, suffix: "+", label: "Projetos Entregues",   desc: "Com qualidade e no prazo" },
  { value: 5,   suffix: "+", label: "Anos de Mercado",      desc: "Experiência comprovada" },
  { value: 98,  suffix: "%", label: "Satisfação",           desc: "Índice de aprovação dos clientes" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, active, index }: { stat: typeof stats[0]; active: boolean; index: number }) {
  const count = useCountUp(stat.value, 2000, active);
  return (
    <motion.div
      className="glass-card stat-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-card__number">{count}<span>{stat.suffix}</span></div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__desc">{stat.desc}</div>
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={isInView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
