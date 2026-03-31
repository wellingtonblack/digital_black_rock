"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, TrendingUp, ShieldCheck, Brain, Zap } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
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
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x;
          const dy = p.y - q.y;
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

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__blob hero__blob--cyan" />
      <div className="hero__blob hero__blob--purple" />

      <div className="hero__content">
        <div className="hero__badges">
          <span className="hero__badge hero__badge--cyan">
            <Zap size={12} />
            E-commerce de Alta Performance
          </span>
          <span className="hero__badge hero__badge--purple">
            <Brain size={12} />
            Potencializado por IA
          </span>
        </div>

        <h1 className="hero__title">
          <span className="gradient-text-silver">Transformamos</span> seu negócio
          <br />
          em uma <span className="gradient-text">máquina de vendas</span>
          <br />
          no digital
        </h1>

        <p className="hero__subtitle">
          Consultoria especializada em{" "}
          <strong style={{ color: "#fff" }}>VTEX, Shopify e Loja Integrada</strong> —
          aliada a{" "}
          <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> para
          acelerar entregas, elevar performance e escalar resultados.
        </p>

        <div className="hero__ctas">
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
        </div>

        <div className="hero__trust">
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
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-ring">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
}
