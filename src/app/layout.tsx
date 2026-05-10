import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import UtmTracker from "@/components/UtmTracker";
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalblackrock.com.br"),
  title: "Consultoria E-commerce | VTEX, Shopify | Digital Black Rock",
  description:
    "Agência especializada em consultoria e desenvolvimento de e-commerce: VTEX, Shopify, Loja Integrada, NuvemShop e WooCommerce. Criação do zero, migração, SEO e IA para aumentar suas vendas.",
  keywords:
    "consultoria ecommerce, desenvolvimento ecommerce, VTEX, Shopify, Loja Integrada, NuvemShop, WooCommerce, Tray, migração ecommerce, criação loja virtual, desenvolvimento shopify, desenvolvimento vtex, SEO ecommerce, IA ecommerce, Digital Black Rock",
  authors: [{ name: "Digital Black Rock" }],
  alternates: {
    canonical: "https://digitalblackrock.com.br/",
  },
  openGraph: {
    title: "Consultoria de E-commerce | VTEX, Shopify, Loja Integrada | Digital Black Rock",
    description:
      "Agência especializada em e-commerce: VTEX, Shopify, Loja Integrada, NuvemShop e WooCommerce. Criação do zero, migração, SEO e IA para aumentar suas vendas.",
    type: "website",
    url: "https://digitalblackrock.com.br/",
    locale: "pt_BR",
    siteName: "Digital Black Rock",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Digital Black Rock — Consultoria de E-commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Black Rock | E-commerce Experts",
    description: "Consultoria e desenvolvimento de e-commerces de alta performance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/assets/logos/logo-full-2.png",
    apple: "/assets/logos/logo-full-2.png",
    shortcut: "/assets/logos/logo-full-2.png",
  },
  verification: {
    google: "qyh-CcyYZW8gEDqqxZAroirMecU42GfymNvztATAtqc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preconnect — reduz latência de recursos críticos */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        {/* hreflang — bilingual PT/EN at same URL */}
        <link rel="alternate" hrefLang="pt-BR" href="https://digitalblackrock.com.br/" />
        <link rel="alternate" hrefLang="en" href="https://digitalblackrock.com.br/" />
        <link rel="alternate" hrefLang="x-default" href="https://digitalblackrock.com.br/" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://digitalblackrock.com.br/#website",
                  url: "https://digitalblackrock.com.br",
                  name: "Digital Black Rock",
                  description: "Agência especializada em consultoria e desenvolvimento de e-commerce: VTEX, Shopify, Loja Integrada, NuvemShop e WooCommerce.",
                  inLanguage: ["pt-BR", "en"],
                  publisher: { "@id": "https://digitalblackrock.com.br/#organization" },
                },
                {
                  "@type": "Organization",
                  "@id": "https://digitalblackrock.com.br/#organization",
                  name: "Digital Black Rock",
                  url: "https://digitalblackrock.com.br",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://digitalblackrock.com.br/assets/logos/logo-dark.png",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+55-11-96968-3162",
                    email: "atendimento@digitalblackrock.com.br",
                    contactType: "customer service",
                    availableLanguage: ["Portuguese", "English"],
                  },
                  sameAs: ["https://www.instagram.com/digitalblackrock/"],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://digitalblackrock.com.br/#localbusiness",
                  name: "Digital Black Rock",
                  description:
                    "Consultoria e desenvolvimento de e-commerce com IA — VTEX, Shopify e Loja Integrada. Mais velocidade de entrega, mais performance, mais resultados.",
                  url: "https://digitalblackrock.com.br",
                  telephone: "+55-11-96968-3162",
                  email: "atendimento@digitalblackrock.com.br",
                  image: "https://digitalblackrock.com.br/assets/logos/logo-dark.png",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "São Paulo",
                    addressRegion: "SP",
                    addressCountry: "BR",
                  },
                  areaServed: "BR",
                  priceRange: "$$",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Serviços de E-commerce",
                    itemListElement: [
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoria de E-commerce" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Implementação de E-commerce" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desenvolvimento com IA" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Performance" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Migração B2C e B2B" } },
                      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sites & Landing Pages" } },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "47",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  review: {
                    "@type": "Review",
                    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                    author: { "@type": "Person", name: "CEO, Arena Plata" },
                    reviewBody: "A Digital Black Rock transformou completamente nossa operação de e-commerce. Profissionalismo, entrega no prazo e resultados reais e mensuráveis.",
                  },
                },
                ...[
                  {
                    id: "consultoria",
                    name: "Consultoria de E-commerce",
                    desc: "Estratégia personalizada para acelerar o crescimento online. Identificamos gargalos, oportunidades e traçamos o caminho mais eficiente para escalar suas vendas.",
                    url: "https://digitalblackrock.com.br/consultoria-ecommerce/",
                  },
                  {
                    id: "implementacao",
                    name: "Implementação de E-commerce",
                    desc: "Criação de lojas virtuais do zero em VTEX, Shopify ou Loja Integrada — plataformas robustas, seguras e prontas para converter.",
                    url: "https://digitalblackrock.com.br/desenvolvimento-vtex/",
                  },
                  {
                    id: "ia",
                    name: "Desenvolvimento com IA",
                    desc: "Aplicamos Inteligência Artificial para aumentar a velocidade de entrega, melhorar performance técnica e automatizar processos no e-commerce.",
                    url: "https://digitalblackrock.com.br/#servicos",
                  },
                  {
                    id: "seo",
                    name: "SEO & Performance",
                    desc: "Aumentamos a visibilidade orgânica e a velocidade da loja. Mais tráfego qualificado, menor CAC e maior taxa de conversão.",
                    url: "https://digitalblackrock.com.br/seo-performance/",
                  },
                  {
                    id: "migracao",
                    name: "Migração de E-commerce",
                    desc: "Migração de lojas para plataformas mais escaláveis com zero downtime. Especialistas em transferência de dados e integrações complexas.",
                    url: "https://digitalblackrock.com.br/migracao-ecommerce/",
                  },
                  {
                    id: "sites",
                    name: "Sites & Landing Pages",
                    desc: "Páginas de alta conversão focadas em performance e UX. Design orientado a resultado com otimização contínua baseada em dados.",
                    url: "https://digitalblackrock.com.br/#servicos",
                  },
                ].map(({ id, name, desc, url }) => ({
                  "@type": "Service",
                  "@id": `https://digitalblackrock.com.br/#service-${id}`,
                  name,
                  description: desc,
                  url,
                  serviceType: "E-commerce",
                  provider: { "@id": "https://digitalblackrock.com.br/#organization" },
                  areaServed: { "@type": "Country", "name": "Brazil" },
                  offers: {
                    "@type": "Offer",
                    name: "Consulta Gratuita",
                    price: "0",
                    priceCurrency: "BRL",
                    availability: "https://schema.org/InStock",
                  },
                })),
                {
                  "@type": "FAQPage",
                  "@id": "https://digitalblackrock.com.br/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Quanto custa uma consultoria de e-commerce?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "O custo varia conforme o escopo: consultoria estratégica, implementação de plataforma (VTEX, Shopify, Loja Integrada), migração ou otimização. Oferecemos uma consulta gratuita para entender o seu projeto e apresentar uma proposta personalizada sem compromisso.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quais plataformas de e-commerce vocês atendem?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Somos especialistas em VTEX, Shopify, Loja Integrada, NuvemShop, WooCommerce e Tray. Atuamos desde a criação de lojas do zero até migração entre plataformas, desenvolvimento de apps e integrações complexas.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Quanto tempo leva para implementar um e-commerce do zero?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Projetos Shopify e Loja Integrada costumam ficar prontos em 2 a 4 semanas; projetos VTEX enterprise entre 4 e 12 semanas. Com IA integrada ao nosso processo, aceleramos as entregas sem abrir mão da qualidade técnica.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Como a Inteligência Artificial acelera o desenvolvimento do meu e-commerce?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Usamos IA para automatizar partes do desenvolvimento, revisar código, gerar descrições de produtos em escala e identificar gargalos de performance. Isso reduz o tempo de entrega e aumenta a qualidade do projeto final.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "A Digital Black Rock atende empresas de todo o Brasil?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim. Atendemos clientes de São Paulo, Rio de Janeiro, Minas Gerais e todo o Brasil de forma 100% remota, com comunicação ágil e reuniões por videoconferência.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "O que está incluído na consultoria gratuita?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A consultoria gratuita inclui diagnóstico da sua operação de e-commerce atual, identificação dos principais pontos de melhoria em performance e conversão, recomendação de plataforma (quando necessário) e um plano de ação com as próximas etapas — sem compromisso e sem custo.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KRZQ5JBH');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="theme-color" content="#04080F" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRZQ5JBH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ClientProviders>
          <UtmTracker />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
