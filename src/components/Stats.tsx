"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Clientes Ativos", desc: "Empresas que confiam em nós" },
  { value: 200, suffix: "+", label: "Projetos Entregues", desc: "Com qualidade e no prazo" },
  { value: 5, suffix: "+", label: "Anos de Mercado", desc: "Experiência comprovada" },
  { value: 98, suffix: "%", label: "Satisfação", desc: "Índice de aprovação dos clientes" },
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

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
  const count = useCountUp(stat.value, 2000, active);
  return (
    <div className="glass-card stat-card">
      <div className="stat-card__number">{count}<span>{stat.suffix}</span></div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__desc">{stat.desc}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
