import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Desenvolvimento Shopify | Loja Shopify Profissional | Digital Black Rock",
  description:
    "Especialistas em Shopify: criação de lojas, temas customizados, apps e integrações. Loja pronta em 2 a 4 semanas. Atendemos todo o Brasil. Primeira consulta gratuita.",
  alternates: { canonical: "https://digitalblackrock.com.br/shopify/" },
  openGraph: {
    title: "Desenvolvimento Shopify | Digital Black Rock",
    description: "Criação de lojas Shopify profissionais com temas customizados, apps e integrações. Pronta em 2 a 4 semanas.",
    url: "https://digitalblackrock.com.br/shopify/",
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
        { "@type": "ListItem", position: 2, name: "Desenvolvimento Shopify", item: "https://digitalblackrock.com.br/shopify/" },
      ],
    },
    {
      "@type": "Service",
      name: "Desenvolvimento Shopify",
      url: "https://digitalblackrock.com.br/shopify/",
      provider: { "@type": "Organization", name: "Digital Black Rock", url: "https://digitalblackrock.com.br" },
      description: "Criação de lojas Shopify do zero, temas customizados, apps e integrações — com IA integrada para acelerar entregas.",
      areaServed: { "@type": "Country", name: "Brazil" },
      offers: { "@type": "Offer", name: "Consulta Gratuita", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quanto tempo leva para criar uma loja Shopify?",
          acceptedAnswer: { "@type": "Answer", text: "Projetos Shopify com tema customizado ficam prontos em 2 a 4 semanas. Com IA integrada no processo de desenvolvimento, aceleramos entregas sem comprometer a qualidade visual e técnica da loja." },
        },
        {
          "@type": "Question",
          name: "Qual a diferença entre Shopify e Shopify Plus?",
          acceptedAnswer: { "@type": "Answer", text: "O Shopify Plus é a versão enterprise da plataforma, com recursos avançados como checkout customizável, automações ilimitadas, atendimento dedicado e suporte a múltiplas lojas. Recomendamos o Plus para operações acima de R$ 1 milhão/mês em faturamento." },
        },
        {
          "@type": "Question",
          name: "Vocês fazem migração de outras plataformas para o Shopify?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Migramos de VTEX, WooCommerce, Loja Integrada, Tray e outras plataformas para o Shopify, preservando catálogo, histórico de pedidos, SEO (URLs e redirects) e integrações com zero downtime." },
        },
        {
          "@type": "Question",
          name: "O Shopify funciona para vendas internacionais?",
          acceptedAnswer: { "@type": "Answer", text: "Sim. Shopify tem suporte nativo a múltiplas moedas, idiomas e regiões. É a plataforma mais usada globalmente para e-commerce, com gateways de pagamento internacionais e logística cross-border integrada." },
        },
      ],
    },
  ],
};

const capabilities = [
  { title: "Loja Shopify do zero", desc: "Criamos sua loja do início: configuração da conta, tema, catálogo, meios de pagamento, frete e tudo que é necessário para começar a vender." },
  { title: "Temas customizados", desc: "Desenvolvemos temas Shopify únicos com a identidade visual da sua marca — usando Liquid, JavaScript e CSS para criar experiências de compra de alta conversão." },
  { title: "Apps e integrações", desc: "Configuramos e customizamos apps do Shopify App Store, além de integrações via API com ERPs, CRMs, plataformas de marketing e sistemas legados." },
  { title: "Shopify Plus", desc: "Checkout Script personalizado, automações com Shopify Flow, múltiplas lojas e recursos enterprise exclusivos do plano Plus para operações de alto volume." },
  { title: "Migração para Shopify", desc: "Migramos de qualquer plataforma para o Shopify com zero downtime, preservando catálogo, histórico, SEO e integrações existentes." },
  { title: "Otimização e evolução", desc: "Auditoria de performance, Core Web Vitals, CRO, A/B tests e evolução contínua da loja para maximizar conversão e receita." },
];

const faqs = [
  { q: "Quanto tempo leva para criar uma loja Shopify?", a: "Projetos com tema customizado ficam prontos em 2 a 4 semanas. Com IA no processo, aceleramos sem comprometer a qualidade." },
  { q: "Qual a diferença entre Shopify e Shopify Plus?", a: "Shopify Plus é a versão enterprise, com checkout customizável, automações ilimitadas e suporte a múltiplas lojas. Ideal para acima de R$ 1M/mês." },
  { q: "Vocês fazem migração para o Shopify?", a: "Sim. Migramos de VTEX, WooCommerce, Loja Integrada e outras plataformas, preservando catálogo, SEO e integrações com zero downtime." },
  { q: "O Shopify funciona para vendas internacionais?", a: "Sim. Suporte nativo a múltiplas moedas, idiomas e regiões. A plataforma mais usada globalmente para e-commerce." },
];

export default function ShopifyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "#04080F", color: "#C8D8E8", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "5rem 1.5rem 4rem", textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          <nav style={{ fontSize: "0.8125rem", color: "#8B9CB8", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "#00D4FF", textDecoration: "none" }}>Home</Link>
            {" › "}Desenvolvimento Shopify
          </nav>
          <span style={{ display: "inline-block", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF", borderRadius: "999px", padding: "0.3rem 1rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
            ESPECIALISTAS EM SHOPIFY
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Desenvolvimento Shopify<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Loja pronta em 2 a 4 semanas
            </span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#8B9CB8", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "680px", margin: "0 auto 2rem" }}>
            Criamos lojas Shopify profissionais com temas customizados, integrações e{" "}
            <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> integrada no desenvolvimento — para entregar mais rápido e converter mais.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20sobre%20Shopify." target="_blank" rel="noopener noreferrer"
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
            Por que Shopify para o seu negócio?
          </h2>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            O Shopify é a plataforma de e-commerce mais usada no mundo, com mais de 2 milhões de lojas ativas em 175 países. É a escolha certa para marcas que querem escalar rapidamente sem se preocupar com infraestrutura — e a <strong style={{ color: "#fff" }}>Digital Black Rock</strong> é especialista em extrair o máximo da plataforma.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Nossa equipe cria lojas Shopify com <strong style={{ color: "#fff" }}>design 100% customizado</strong>, identidade visual única e experiência de compra otimizada para conversão. Combinamos expertise em <strong style={{ color: "#fff" }}>Liquid</strong>, <strong style={{ color: "#fff" }}>Shopify APIs</strong> e <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> para entregar projetos mais rápidos e com mais qualidade.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8 }}>
            Atendemos desde pequenas marcas que estão começando no digital até operações <strong style={{ color: "#fff" }}>Shopify Plus</strong> de alto volume — com integrações complexas, múltiplas lojas e checkout customizado.
          </p>
        </section>

        {/* Capacidades */}
        <section id="capacidades" style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              O que entregamos em Shopify
            </h2>
            <p style={{ color: "#8B9CB8", marginBottom: "2.5rem" }}>Do setup básico a projetos Shopify Plus de alto volume.</p>
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

        {/* Para quem é */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
            Para quem é o Shopify?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { title: "Marcas de moda e lifestyle", desc: "Shopify é referência para marcas DTC (direct-to-consumer) que precisam de um storefront bonito, rápido e fácil de gerenciar." },
              { title: "Negócios em crescimento", desc: "Ideal para quem está saindo de plataformas limitantes e quer uma base sólida para escalar sem se preocupar com infraestrutura." },
              { title: "Vendas internacionais", desc: "Suporte nativo a múltiplas moedas e idiomas. A plataforma certa para marcas que querem vender no Brasil e no exterior." },
              { title: "Alto volume (Shopify Plus)", desc: "Para operações acima de R$ 1M/mês que precisam de checkout customizado, automações avançadas e suporte enterprise." },
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
              Perguntas frequentes sobre desenvolvimento Shopify
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
            Pronto para criar sua loja Shopify?
          </h2>
          <p style={{ color: "#8B9CB8", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            A primeira consulta é gratuita e sem compromisso. Fale com um especialista Shopify agora.
          </p>
          <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20sobre%20Shopify." target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "1rem 2rem", borderRadius: "10px", textDecoration: "none", fontSize: "1.0625rem" }}>
            Falar com Especialista Shopify →
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
