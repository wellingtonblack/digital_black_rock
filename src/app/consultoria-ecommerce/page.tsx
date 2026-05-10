import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Consultoria de E-commerce | Estratégia para Vender Mais | Digital Black Rock",
  description:
    "Consultoria especializada em e-commerce: diagnóstico, estratégia personalizada e execução em VTEX, Shopify e Loja Integrada. Primeira consulta gratuita. Atendemos todo o Brasil.",
  alternates: { canonical: "https://digitalblackrock.com.br/consultoria-ecommerce/" },
  openGraph: {
    title: "Consultoria de E-commerce | Digital Black Rock",
    description: "Estratégia personalizada para escalar suas vendas online. Especialistas em VTEX, Shopify e Loja Integrada.",
    url: "https://digitalblackrock.com.br/consultoria-ecommerce/",
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
        { "@type": "ListItem", position: 2, name: "Consultoria de E-commerce", item: "https://digitalblackrock.com.br/consultoria-ecommerce/" },
      ],
    },
    {
      "@type": "Service",
      name: "Consultoria de E-commerce",
      url: "https://digitalblackrock.com.br/consultoria-ecommerce/",
      provider: { "@type": "Organization", name: "Digital Black Rock", url: "https://digitalblackrock.com.br" },
      description: "Consultoria especializada em e-commerce: diagnóstico, estratégia e execução em VTEX, Shopify e Loja Integrada.",
      areaServed: { "@type": "Country", name: "Brazil" },
      offers: { "@type": "Offer", name: "Consulta Gratuita", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é uma consultoria de e-commerce?",
          acceptedAnswer: { "@type": "Answer", text: "É um serviço especializado onde uma equipe de especialistas analisa sua operação de e-commerce, identifica gargalos e oportunidades, e define um plano estratégico para aumentar as vendas, melhorar a performance técnica e otimizar a operação como um todo." },
        },
        {
          "@type": "Question",
          name: "Quanto custa a consultoria de e-commerce da Digital Black Rock?",
          acceptedAnswer: { "@type": "Answer", text: "A primeira consulta é 100% gratuita e sem compromisso. Nela fazemos um diagnóstico da sua operação e apresentamos as oportunidades identificadas. Projetos pagos são orçados conforme o escopo — consultoria estratégica, implementação ou evolução contínua." },
        },
        {
          "@type": "Question",
          name: "Quais plataformas a Digital Black Rock domina?",
          acceptedAnswer: { "@type": "Answer", text: "Somos especialistas em VTEX, Shopify, Loja Integrada, NuvemShop, WooCommerce e Tray. Atuamos tanto em projetos B2C quanto B2B, do zero à migração, com integrações complexas e desenvolvimento com IA." },
        },
        {
          "@type": "Question",
          name: "A consultoria é presencial ou remota?",
          acceptedAnswer: { "@type": "Answer", text: "100% remota. Atendemos clientes de São Paulo, Rio de Janeiro, Minas Gerais e todo o Brasil por videoconferência, WhatsApp e e-mail. Nosso modelo de trabalho foi desenhado para times distribuídos sem perda de qualidade." },
        },
      ],
    },
  ],
};

const steps = [
  { num: "01", title: "Diagnóstico gratuito", desc: "Avaliamos sua operação atual: plataforma, conversão, performance técnica, SEO e stack de integrações. Identificamos os pontos críticos que estão travando seu crescimento." },
  { num: "02", title: "Estratégia personalizada", desc: "Com base no diagnóstico, montamos um plano de ação prioritizado — com foco em quick wins de curto prazo e melhorias estruturais de médio e longo prazo." },
  { num: "03", title: "Execução com IA", desc: "Nosso time de especialistas executa as melhorias usando Inteligência Artificial para acelerar entregas, revisar código e automatizar processos repetitivos." },
  { num: "04", title: "Acompanhamento e evolução", desc: "Monitoramos os resultados, ajustamos a estratégia conforme os dados e garantimos que seu e-commerce continue evoluindo de forma consistente." },
];

const faqs = [
  { q: "O que é uma consultoria de e-commerce?", a: "É um serviço especializado onde uma equipe de especialistas analisa sua operação, identifica gargalos e define um plano estratégico para aumentar vendas, melhorar performance e otimizar a operação." },
  { q: "Quanto custa a consultoria?", a: "A primeira consulta é 100% gratuita. Projetos pagos são orçados conforme o escopo após o diagnóstico inicial." },
  { q: "Quais plataformas vocês dominam?", a: "VTEX, Shopify, Loja Integrada, NuvemShop, WooCommerce e Tray. Atuamos em B2C e B2B, do zero à migração." },
  { q: "A consultoria é presencial ou remota?", a: "100% remota. Atendemos todo o Brasil por videoconferência, WhatsApp e e-mail." },
];

export default function ConsultoriaEcommercePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main style={{ paddingTop: "5rem", background: "#04080F", color: "#C8D8E8", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ padding: "5rem 1.5rem 4rem", textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
          <nav style={{ fontSize: "0.8125rem", color: "#8B9CB8", marginBottom: "1.5rem" }}>
            <Link href="/" style={{ color: "#00D4FF", textDecoration: "none" }}>Home</Link>
            {" › "}Consultoria de E-commerce
          </nav>
          <span style={{ display: "inline-block", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF", borderRadius: "999px", padding: "0.3rem 1rem", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1.5rem" }}>
            ESPECIALISTAS EM E-COMMERCE
          </span>
          <h1 style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Consultoria de E-commerce<br />
            <span style={{ background: "linear-gradient(135deg, #00D4FF, #7B61FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Estratégia que gera resultados reais
            </span>
          </h1>
          <p style={{ fontSize: "1.125rem", color: "#8B9CB8", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "680px", margin: "0 auto 2rem" }}>
            Transformamos e-commerces com diagnóstico preciso, estratégia personalizada e execução com{" "}
            <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong>. VTEX, Shopify, Loja Integrada, NuvemShop e WooCommerce.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20de%20e-commerce." target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "linear-gradient(135deg, #00D4FF, #0099BB)", color: "#fff", fontWeight: 700, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Consulta Gratuita →
            </a>
            <a href="#metodologia"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontWeight: 600, padding: "0.875rem 1.75rem", borderRadius: "10px", textDecoration: "none", fontSize: "1rem" }}>
              Ver metodologia
            </a>
          </div>
        </section>

        {/* O que é */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
            O que é consultoria de e-commerce?
          </h2>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Consultoria de e-commerce é um serviço especializado onde uma equipe de especialistas analisa toda a sua operação digital — da plataforma à experiência do usuário, do SEO às integrações — e define um plano estratégico para aumentar vendas, reduzir custos operacionais e escalar o negócio.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8, marginBottom: "1rem" }}>
            Na <strong style={{ color: "#fff" }}>Digital Black Rock</strong>, combinamos experiência técnica profunda com <strong style={{ color: "#7B61FF" }}>Inteligência Artificial</strong> para entregar diagnósticos mais precisos, estratégias mais eficientes e execuções mais rápidas — sem abrir mão da qualidade.
          </p>
          <p style={{ color: "#8B9CB8", lineHeight: 1.8 }}>
            Já atendemos mais de <strong style={{ color: "#fff" }}>50 clientes ativos</strong> — desde startups de e-commerce a marcas reconhecidas como Aramis, Intimissimi e Aéropostale — com <strong style={{ color: "#fff" }}>+200 projetos entregues</strong> e 98% de índice de satisfação.
          </p>
        </section>

        {/* Metodologia */}
        <section id="metodologia" style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              Nossa metodologia em 4 etapas
            </h2>
            <p style={{ color: "#8B9CB8", marginBottom: "2.5rem" }}>Da análise à execução — com IA integrada em cada fase.</p>
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

        {/* Para quem é */}
        <section style={{ padding: "4rem 1.5rem", maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
            Para quem é a nossa consultoria?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {[
              { title: "E-commerces em crescimento", desc: "Lojas que já vendem mas querem escalar com mais eficiência operacional e menor custo de aquisição." },
              { title: "Empresas migrando de plataforma", desc: "Negócios que precisam sair de uma plataforma limitante para VTEX, Shopify ou Loja Integrada com segurança." },
              { title: "Marcas entrando no digital", desc: "Empresas que ainda não têm presença online e precisam de uma estratégia sólida desde o início." },
              { title: "Operações B2B complexas", desc: "Negócios B2B que precisam de portais de vendas, listas de preço e gestão de pedidos customizados." },
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
              Perguntas frequentes sobre consultoria de e-commerce
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
            Pronto para escalar seu e-commerce?
          </h2>
          <p style={{ color: "#8B9CB8", marginBottom: "2rem", fontSize: "1.0625rem" }}>
            A primeira consulta é gratuita e sem compromisso. Fale com um especialista agora.
          </p>
          <a href="https://wa.me/5511982400853?text=Ol%C3%A1!%20Quero%20uma%20consultoria%20gratuita%20de%20e-commerce." target="_blank" rel="noopener noreferrer"
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
