"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight, MessageCircle, TrendingUp, ShieldCheck, Brain, Zap } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Scroll-based parallax (desktop only) ──────────────────────────────────
  const { scrollY } = useScroll();
  const blobCyanY    = useTransform(scrollY, [0, 700], [0, -180]);
  const blobPurpleY  = useTransform(scrollY, [0, 700], [0,  -90]);
  const wrapY        = useTransform(scrollY, [0, 600], [0,  -70]);
  const wrapOpacity  = useTransform(scrollY, [0, 480], [1,    0]);

  // ── Mouse parallax (desktop only) ─────────────────────────────────────────
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { stiffness: 35, damping: 14, mass: 0.6 };
  const mx = useSpring(mouseX, springCfg);
  const my = useSpring(mouseY, springCfg);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    mouseX.set((e.clientX - window.innerWidth  / 2) * 0.018);
    mouseY.set((e.clientY - window.innerHeight / 2) * 0.012);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // ── Canvas particles ───────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Stagger variants ───────────────────────────────────────────────────────
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="hero"
      className="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Blobs — parallax apenas no desktop */}
      <motion.div className="hero__blob hero__blob--cyan"   style={isDesktop ? { y: blobCyanY } : undefined} />
      <motion.div className="hero__blob hero__blob--purple" style={isDesktop ? { y: blobPurpleY } : undefined} />

      {/* Outer: scroll fade + lift (desktop only) */}
      <motion.div style={isDesktop ? { y: wrapY, opacity: wrapOpacity } : undefined} className="hero__parallax-wrap">
        {/* Inner: mouse parallax (desktop only) */}
        <motion.div style={isDesktop ? { x: mx, y: my } : undefined} className="hero__content">

          <motion.div
            className="hero__badges"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease }}
          >
            <span className="hero__badge hero__badge--cyan">
              <Zap size={12} />
              E-commerce de Alta Performance
            </span>
            <span className="hero__badge hero__badge--purple">
              <Brain size={12} />
              Potencializado por IA
            </span>
          </motion.div>

          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.14, ease }}
          >
            <span className="gradient-text-silver">Transformamos</span> seu negócio
            <br />
            em uma <span className="gradient-text">máquina de vendas</span>
            <br />
            no digital
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
          >
            Consultoria especializada em{" "}
            <strong style={{ color: "#fff" }}>VTEX, Shopify e Loja Integrada</strong> —
            aliada a{" "}
            <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> para
            acelerar entregas, elevar performance e escalar resultados.
          </motion.p>

          <motion.div
            className="hero__ctas"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease }}
          >
            <a
              href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20com%20a%20Digital%20Black%20Rock."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <MessageCircle size={18} />
              Consultoria Gratuita
            </a>
            <a href="#servicos" className="btn btn--secondary">
              Ver Serviços
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="hero__trust"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="hero__trust-item">
              <ShieldCheck size={16} style={{ color: "#00D4FF" }} />
              <span>+50 clientes atendidos</span>
            </div>
            <div className="hero__trust-dot" />
            <div className="hero__trust-item">
              <TrendingUp size={16} style={{ color: "#00D4FF" }} />
              <span>+200 projetos entregues</span>
            </div>
            <div className="hero__trust-dot" />
            <div className="hero__trust-item">
              <Brain size={16} style={{ color: "#7B61FF" }} />
              <span>IA aplicada ao desenvolvimento</span>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      <div className="hero__scroll">
        <div className="hero__scroll-ring">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
}
