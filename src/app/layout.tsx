import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalblackrock.com.br"),
  title: "Digital Black Rock | Consultoria e Desenvolvimento de E-commerce",
  description:
    "Consultoria e desenvolvimento de e-commerce com IA — VTEX, Shopify e Loja Integrada. Mais velocidade de entrega, mais performance, mais resultados.",
  keywords:
    "consultoria ecommerce, desenvolvimento ecommerce, VTEX, Shopify, Loja Integrada, SEO, IA ecommerce, inteligência artificial ecommerce, Digital Black Rock",
  authors: [{ name: "Digital Black Rock" }],
  alternates: {
    canonical: "https://digitalblackrock.com.br/",
  },
  openGraph: {
    title: "Digital Black Rock | Consultoria e Desenvolvimento de E-commerce",
    description:
      "Especialistas em criação, implementação e otimização de e-commerces. Transformamos sua presença digital em resultados reais.",
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
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
                    availableLanguage: "Portuguese",
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
        {children}
      </body>
    </html>
  );
}
