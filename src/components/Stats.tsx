"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const statValues = [50, 200, 5, 98];
const statSuffixes = ["+", "+", "+", "%"];

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

function StatCard({
  value, suffix, label, desc, active, index,
}: {
  value: number; suffix: string; label: string; desc: string; active: boolean; index: number;
}) {
  const count = useCountUp(value, 2000, active);
  return (
    <motion.div
      className="glass-card stat-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-card__number">{count}<span>{suffix}</span></div>
      <div className="stat-card__label">{label}</div>
      <div className="stat-card__desc">{desc}</div>
    </motion.div>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        <div className="stats__grid">
          {t.stats.map((stat, i) => (
            <StatCard
              key={i}
              value={statValues[i]}
              suffix={statSuffixes[i]}
              label={stat.label}
              desc={stat.desc}
              active={isInView}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
