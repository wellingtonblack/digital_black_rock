import type { Metadata } from "next";
import SiteAuditPage from "./SiteAuditPage";

export const metadata: Metadata = {
  title: "Teste Gratuito do Seu Site | Digital Black Rock",
  description:
    "Descubra se sua loja está perdendo vendas por lentidão, SEO ou baixa conversão. Diagnóstico automático e gratuito em segundos.",
  alternates: {
    canonical: "https://digitalblackrock.com.br/teste-seu-site/",
  },
  openGraph: {
    title: "Teste Gratuito do Seu Site | Digital Black Rock",
    description:
      "Análise automática de performance, SEO e conversão. Receba pontos críticos que podem estar afetando suas vendas.",
    url: "https://digitalblackrock.com.br/teste-seu-site/",
    siteName: "Digital Black Rock",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://digitalblackrock.com.br/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Teste Gratuito do Seu Site",
      item: "https://digitalblackrock.com.br/teste-seu-site/",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteAuditPage />
    </>
  );
}
