import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Desenvolvimento VTEX | Loja VTEX do Zero | Digital Black Rock",
  description:
    "Especialistas em desenvolvimento VTEX: implantação, customização, integrações e evolução contínua. Time certificado VTEX. Atendemos todo o Brasil. Primeira consulta gratuita.",
  alternates: { canonical: "https://digitalblackrock.com.br/desenvolvimento-vtex/" },
  openGraph: {
    title: "Desenvolvimento VTEX | Digital Black Rock",
    description: "Implantação, customização e evolução de lojas VTEX. Time certificado. Atendemos todo o Brasil.",
    url: "https://digitalblackrock.com.br/desenvolvimento-vtex/",
    siteName: "Digital Black Rock",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://digitalblackrock.com.br/" },
        { "@type": "ListItem", position: 2, name: "Desenvolvimento VTEX", item: "https://digitalblackrock.com.br/desenvolvimento-vtex/" },
      ],
    },
    {
      "@type": "Service",
      name: "Desenvolvimento VTEX",
      url: "https://digitalblackrock.com.br/desenvolvimento-vtex/",
      provider: { "@type": "Organization", name: "Digital Black Rock", url: "https://digitalblackrock.com.br" },
      description: "Implantação, customização e evolução de lojas VTEX: do zero ao enterprise, com integrações complexas e desenvolvimento com IA.",
      areaServed: { "@type": "Country", name: "Brazil" },
      offers: { "@type": "Offer", name: "Consulta Gratuita", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto tempo leva para implantar uma loja VTEX?",
          acceptedAnswer: { "@type": "Answer", text: "Projetos VTEX enterprise levam entre 4 e 12 semanas dependendo da complexidade: customizações de tema, integrações com ERP, OMS e plataformas de pagamento. Com IA integrada no nosso processo, aceleramos entregas sem comprometer a qualidade técnica." },
        },
        {
          "@type": "Question",
          name: "Vocês são parceiros certificados VTEX?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Nossa equipe é certificada em VTEX e possui experiência comprovada em projetos de médio e grande porte, incluindo B2C e B2B. Já entregamos mais de 200 projetos com 98% de satisfação dos clientes." },
        },
        {
          "@type": "Question",
          name: "O desenvolvimento VTEX inclui integrações com ERP e marketplaces?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Realizamos integrações com ERPs (TOTVS, SAP, Bling, Omie), marketplaces (Mercado Livre, Amazon, Shopee), plataformas de pagamento, hubs logísticos e qualquer sistema via API REST ou middleware." },
        },
        {
          "@type": "Question",
          name: "Vocês atendem projetos VTEX B2B?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Desenvolvemos portais B2B em VTEX com tabelas de preço por cliente, gestão de pedidos, aprovação de orçamentos, múltiplos representantes e fluxos customizados de checkout. Somos especialistas em operações B2B complexas." },
        },
      ],
    },
  ],
};

const capabilities = [
  { title: "Implantação do zero", desc: "Configuramos toda a loja VTEX: catálogo, checkout, meios de pagamento, frete, políticas comerciais e integrações essenciais — pronta para vender." },
  { title: "Customização de tema", desc: "Desenvolvemos temas customizados em VTEX IO com componentes React, identidade visual própria e experiência de compra otimizada para conversão." },
  { title: "Integrações complexas", desc: "Conectamos sua loja VTEX a ERPs, marketplaces, plataformas de pagamento, hubs logísticos e qualquer sistema externo via API." },
  { title: "VTEX B2B", desc: "Portais B2B com tabelas de preço por cliente, aprovação de pedidos, múltiplos representantes e fluxos de checkout personalizados." },
  { title: "Migração para VTEX", desc: "Migramos sua operação de qualquer plataforma para VTEX com zero downtime, preservando catálogo, histórico de pedidos e configurações." },
  { title: "Evolução contínua", desc: "Suporte técnico, novas funcionalidades, atualização de apps e otimização contínua de performance para manter sua loja sempre evoluindo." },
];

const faqs = [
  { q: "Quanto tempo leva para implantar uma loja VTEX?", a: "Entre 4 e 12 semanas dependendo da complexidade. Com IA no processo, aceleramos entregas sem comprometer a qualidade." },
  { q: "Vocês são parceiros certificados VTEX?", a: "Sim. Nossa equipe é certificada em VTEX com experiência em projetos de médio e grande porte, B2C e B2B." },
  { q: "O desenvolvimento inclui integrações com ERP e marketplaces?", a: "Sim. Integramos com ERPs (TOTVS, SAP, Bling), marketplaces (Mercado Livre, Amazon, Shopee) e qualquer sistema via API." },
  { q: "Vocês atendem projetos VTEX B2B?", a: "Sim. Portais B2B com tabelas de preço, aprovação de orçamentos, múltiplos representantes e checkout customizado." },
];

export default function DesenvolvimentoVtexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "#04080F", color: "#C8D8E8", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "5rem 1.5rem 4rem", textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          <nav style={{ fontSize: "0.8125rem", color: "#8B9CB8", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "#00D4FF", textDecoration: "none" }}>Home</Link>
            {" › "}Desenvolvimento VTEX
          </nav>
          <span style={{ display: "inline-block", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF", borderRadius: "999px", padding: "0.3rem 1rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
            ESPECIALISTAS EM VTEX
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Desenvolvimento VTEX<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Do zero ao enterprise, com IA
            </span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#8B9CB8", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "680px", margin: "0 auto 2rem" }}>
            Time certificado VTEX especializado em implantação, customização e integrações complexas — B2C e B2B — com{" "}
            <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> integrada no processo de desenvolvimento.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20sobre%20desenvolvimento%20VTEX." target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Consulta Gratuita →
            </a>
            <a href="#capacidades"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Ver capacidades
            </a>
          </div>
        </section>

        {/* O que fazemos */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            O que é o desenvolvimento VTEX da Digital Black Rock?
          </h2>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            VTEX é a plataforma de e-commerce mais robusta do mercado brasileiro e latino-americano — usada por grandes marcas como Aramis, Intimissimi e Aéropostale, que são clientes da <strong style={{ color: "#fff" }}>Digital Black Rock</strong>. Nossa equipe certificada cuida de todo o ciclo: da implantação inicial até a evolução contínua da loja.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Combinamos expertise técnica profunda em <strong style={{ color: "#fff" }}>VTEX IO</strong> com <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> integrada no processo de desenvolvimento — o que nos permite entregar projetos mais rápidos, com mais qualidade e menos retrabalho.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8 }}>
            Atuamos em projetos <strong style={{ color: "#fff" }}>B2C</strong> (lojas para consumidor final) e <strong style={{ color: "#fff" }}>B2B</strong> (portais de vendas para distribuidores, revendedores e representantes comerciais), com integrações a ERPs, marketplaces e sistemas legados.
          </p>
        </section>

        {/* Capacidades */}
        <section id="capacidades" style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              O que entregamos em VTEX
            </h2>
            <p style={{ color: "#8B9CB8", marginBottom: "2.5rem" }}>Do setup inicial a projetos enterprise de alta complexidade.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {capabilities.map((item) => (
                <div key={item.title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem" }}>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#00D4FF", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#8B9CB8", fontSize: "0.9375rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por que VTEX */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
            Por que escolher VTEX para o seu e-commerce?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { title: "Infraestrutura enterprise", desc: "Hospedagem em nuvem gerenciada, CDN global, alta disponibilidade e escalabilidade automática para picos de tráfego como Black Friday." },
              { title: "Ecossistema completo", desc: "Catálogo, OMS, checkout, marketplace, fulfilment, pagamentos e apps — tudo integrado nativamente na mesma plataforma." },
              { title: "VTEX IO Framework", desc: "Desenvolvimento de storefront em React com VTEX IO, permitindo customizações avançadas com performance e velocidade de carregamento otimizadas." },
              { title: "Líder no Brasil e LATAM", desc: "Plataforma escolhida pelas maiores marcas do Brasil e da América Latina, com vasto ecossistema de parceiros e apps certificados." },
            ].map((item) => (
              <div key={item.title} style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)", borderRadius: "10px", padding: "1.25rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#00D4FF", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ color: "#8B9CB8", fontSize: "0.9375rem", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              Perguntas frequentes sobre desenvolvimento VTEX
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {faqs.map((item) => (
                <details key={item.q} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1.25rem" }}>
                  <summary style={{ color: "#fff", fontWeight: 600, cursor: "pointer", fontSize: "1rem", listStyle: "none" }}>
                    {item.q}
                  </summary>
                  <p style={{ color: "#8B9CB8", marginTop: "0.75rem", lineHeight: 1.75 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "5rem 1.5rem", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.875rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            Pronto para escalar no VTEX?
          </h2>
          <p style={{ color: "#8B9CB8", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            A primeira consulta é gratuita e sem compromisso. Fale com um especialista VTEX agora.
          </p>
          <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20sobre%20desenvolvimento%20VTEX." target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "1rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1.0625rem" }}>
            Falar com Especialista VTEX →
          </a>
          <p style={{ color: "#8B9CB8", fontSize: "0.875rem", marginTop: "1rem" }}>
            Sem compromisso · Resposta em até 24h · 100% gratuito
          </p>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
