import type { Metadata } from "next";
import SiteAuditPage from "./SiteAuditPage";

export const metadata: Metadata = {
  title: "Teste Gratuito do Seu Site | Digital Black Rock",
  description:
    "Descubra se sua loja está perdendo vendas por lentidão, SEO ou baixa conversão. Diagnóstico automático e gratuito em segundos.",
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

export default function Page() {
  return <SiteAuditPage />;
}
