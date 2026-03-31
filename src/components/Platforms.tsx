"use client";

import Image from "next/image";
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

export default function Platforms() {
  return (
    <section id="plataformas" className="platforms">
      <div style={{ position: "absolute", inset: 0, background: "#04080F" }} />
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section__header">
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
        </div>

        <div className="platforms__grid platforms__grid--top">
          {platforms.slice(0, 3).map((p) => (
            <div key={p.name} className="glass-card platform-card">
              <div className="platform-card__logo-wrap">
                <Image src={p.logo} alt={p.name} width={160} height={60} style={{ objectFit: "contain", maxHeight: "4rem", maxWidth: "140px" }} />
              </div>
              <span
                className="platform-card__tag"
                style={{ background: `${p.tagColor}20`, color: p.tagColor }}
              >
                {p.tag}
              </span>
              <h3 className="platform-card__name">{p.name}</h3>
              <p className="platform-card__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="platforms__grid platforms__grid--bottom">
          {platforms.slice(3).map((p) => (
            <div key={p.name} className="glass-card platform-card platform-card--horizontal">
              <div className="platform-card__logo-wrap">
                <Image src={p.logo} alt={p.name} width={100} height={50} style={{ objectFit: "contain", maxHeight: "3rem", maxWidth: "90px" }} />
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
