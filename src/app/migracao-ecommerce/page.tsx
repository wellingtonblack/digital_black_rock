import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Migração de E-commerce | VTEX, Shopify, Loja Integrada | Digital Black Rock",
  description:
    "Migração de e-commerce com zero downtime: VTEX, Shopify, Loja Integrada, WooCommerce e Tray. Preservamos catálogo, histórico e SEO. Atendemos todo o Brasil.",
  alternates: { canonical: "https://digitalblackrock.com.br/migracao-ecommerce/" },
  openGraph: {
    title: "Migração de E-commerce | Digital Black Rock",
    description: "Migração de plataformas com zero downtime. Preservamos catálogo, SEO e integrações. VTEX, Shopify e mais.",
    url: "https://digitalblackrock.com.br/migracao-ecommerce/",
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
        { "@type": "ListItem", position: 2, name: "Migração de E-commerce", item: "https://digitalblackrock.com.br/migracao-ecommerce/" },
      ],
    },
    {
      "@type": "Service",
      name: "Migração de E-commerce",
      url: "https://digitalblackrock.com.br/migracao-ecommerce/",
      provider: { "@type": "Organization", name: "Digital Black Rock", url: "https://digitalblackrock.com.br" },
      description: "Migração de e-commerce entre plataformas com zero downtime: catálogo, histórico de pedidos, SEO e integrações preservados.",
      areaServed: { "@type": "Country", name: "Brazil" },
      offers: { "@type": "Offer", name: "Consulta Gratuita", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto tempo leva uma migração de e-commerce?",
          acceptedAnswer: { "@type": "Answer", text: "Depende da complexidade da operação: catálogo, histórico de pedidos, integrações e customizações. Em geral, migrações para Shopify levam de 3 a 6 semanas; para VTEX, de 6 a 12 semanas. Todo o processo é feito com zero downtime — a loja antiga permanece ativa até a virada." },
        },
        {
          "@type": "Question",
          name: "A migração afeta meu posicionamento no Google?",
          acceptedAnswer: { "@type": "Answer", text: "Uma migração mal feita pode destruir anos de SEO. Por isso, nossa metodologia inclui: mapeamento e redirecionamento de todas as URLs antigas, preservação de meta tags e estrutura de headings, envio do novo sitemap ao Google e monitoramento pós-migração para garantir que o tráfego orgânico seja mantido." },
        },
        {
          "@type": "Question",
          name: "Vocês migram o histórico de pedidos e clientes?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Migramos catálogo completo (produtos, variações, imagens, preços), histórico de pedidos, base de clientes e, quando possível, avaliações de produtos. Cada plataforma tem limitações específicas que mapeamos no diagnóstico inicial." },
        },
        {
          "@type": "Question",
          name: "Quais plataformas vocês migraram?",
          acceptedAnswer: { "@type": "Answer", text: "Migramos de e para: VTEX, Shopify, Shopify Plus, Loja Integrada, NuvemShop, WooCommerce, Tray, Magento e plataformas proprietárias. Nossa experiência cobre tanto o lado de origem quanto o de destino, garantindo uma migração completa e segura." },
        },
      ],
    },
  ],
};

const steps = [
  { num: "01", title: "Diagnóstico completo", desc: "Mapeamos toda a operação atual: catálogo, pedidos, clientes, integrações, URLs e configurações — para definir o escopo exato da migração." },
  { num: "02", title: "Planejamento e cronograma", desc: "Definimos a ordem de migração, janelas de manutenção, estratégia de SEO (redirecionamentos, sitemap) e plano de rollback em caso de imprevistos." },
  { num: "03", title: "Migração paralela", desc: "Configuramos e testamos a nova loja em paralelo à loja atual. A loja antiga permanece 100% operacional durante todo o processo de migração." },
  { num: "04", title: "Virada e monitoramento", desc: "Fazemos a virada de DNS com acompanhamento em tempo real, redirecionamentos ativos e monitoramento intensivo nas primeiras semanas pós-migração." },
];

const platforms = [
  { from: "WooCommerce", to: "Shopify", desc: "Migração mais comum: preservamos produtos, pedidos, clientes e configuramos integrações equivalentes na nova plataforma." },
  { from: "Loja Integrada", to: "VTEX", desc: "Para operações em crescimento que precisam de mais recursos enterprise: OMS, marketplace integrado e escalabilidade." },
  { from: "Magento", to: "VTEX ou Shopify", desc: "Migramos operações Magento legadas para plataformas modernas, eliminando custos de infraestrutura e manutenção." },
  { from: "Plataforma própria", to: "Qualquer plataforma", desc: "Extraímos dados de plataformas proprietárias via API ou exportação e migramos para VTEX, Shopify ou Loja Integrada." },
];

const faqs = [
  { q: "Quanto tempo leva uma migração de e-commerce?", a: "Para Shopify: 3 a 6 semanas. Para VTEX: 6 a 12 semanas. A loja antiga permanece ativa até a virada — zero downtime." },
  { q: "A migração afeta meu posicionamento no Google?", a: "Nossa metodologia inclui mapeamento e redirecionamento de todas as URLs, meta tags e monitoramento pós-migração para preservar o SEO." },
  { q: "Vocês migram o histórico de pedidos e clientes?", a: "Sim. Migramos catálogo, histórico de pedidos, base de clientes e avaliações. Cada plataforma tem limitações que mapeamos no diagnóstico." },
  { q: "Quais plataformas vocês migraram?", a: "VTEX, Shopify, Loja Integrada, NuvemShop, WooCommerce, Tray, Magento e plataformas proprietárias — como origem ou destino." },
];

export default function MigracaoEcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "#04080F", color: "#C8D8E8", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "5rem 1.5rem 4rem", textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          <nav style={{ fontSize: "0.8125rem", color: "#8B9CB8", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "#00D4FF", textDecoration: "none" }}>Home</Link>
            {" › "}Migração de E-commerce
          </nav>
          <span style={{ display: "inline-block", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF", borderRadius: "999px", padding: "0.3rem 1rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
            MIGRAÇÃO SEM RISCOS
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Migração de E-commerce<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Zero downtime, SEO preservado
            </span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#8B9CB8", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "680px", margin: "0 auto 2rem" }}>
            Migramos sua operação entre plataformas com segurança, preservando catálogo, histórico de pedidos, clientes e{" "}
            <strong style={{ color: "#7B61FF" }}>posicionamento no Google</strong> — sem interrupção das vendas.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20sobre%20migra%C3%A7%C3%A3o%20de%20e-commerce." target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Diagnóstico Gratuito →
            </a>
            <a href="#metodologia"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Ver metodologia
            </a>
          </div>
        </section>

        {/* O que fazemos */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            O risco real de uma migração mal feita
          </h2>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Migrar de plataforma é um dos momentos mais críticos do e-commerce. Uma migração feita sem metodologia pode resultar em <strong style={{ color: "#fff" }}>queda de tráfego orgânico</strong> (por URLs quebradas e redirects incorretos), perda de dados de clientes e pedidos, e interrupção das vendas durante a virada.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Na <strong style={{ color: "#fff" }}>Digital Black Rock</strong>, desenvolvemos uma metodologia de migração que elimina esses riscos: a loja antiga permanece ativa durante todo o processo, e a virada é feita em uma janela controlada com monitoramento em tempo real.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8 }}>
            Já migramos mais de <strong style={{ color: "#fff" }}>50 operações</strong> entre plataformas — incluindo clientes como Cirilo Cabos, que migrou com <strong style={{ color: "#fff" }}>zero downtime</strong> e manutenção total do tráfego orgânico.
          </p>
        </section>

        {/* Metodologia */}
        <section id="metodologia" style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              Nossa metodologia de migração
            </h2>
            <p style={{ color: "#8B9CB8", marginBottom: "2.5rem" }}>Quatro fases para uma migração segura e sem surpresas.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {steps.map((step) => (
                <div key={step.num} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#00D4FF", opacity: 0.4, marginBottom: "0.75rem" }}>{step.num}</div>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>{step.title}</h3>
                  <p style={{ color: "#8B9CB8", fontSize: "0.9375rem", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rotas comuns */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
            Rotas de migração mais comuns
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {platforms.map((item) => (
              <div key={item.from} style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.12)", borderRadius: "10px", padding: "1.25rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#00D4FF", marginBottom: "0.5rem" }}>
                  {item.from} → {item.to}
                </h3>
                <p style={{ color: "#8B9CB8", fontSize: "0.9375rem", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              Perguntas frequentes sobre migração de e-commerce
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
            Pronto para migrar com segurança?
          </h2>
          <p style={{ color: "#8B9CB8", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            O diagnóstico é gratuito e sem compromisso. Fale com um especialista agora e saiba o que está envolvido na sua migração.
          </p>
          <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20sobre%20migra%C3%A7%C3%A3o%20de%20e-commerce." target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "1rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1.0625rem" }}>
            Falar com Especialista →
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
