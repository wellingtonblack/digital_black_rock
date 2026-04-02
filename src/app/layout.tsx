import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Black Rock | Consultoria e Desenvolvimento de E-commerce",
  description:
    "Consultoria e desenvolvimento de e-commerce com IA — VTEX, Shopify e Loja Integrada. Mais velocidade de entrega, mais performance, mais resultados.",
  keywords:
    "consultoria ecommerce, desenvolvimento ecommerce, VTEX, Shopify, Loja Integrada, SEO, IA ecommerce, inteligência artificial ecommerce, Digital Black Rock",
  authors: [{ name: "Digital Black Rock" }],
  openGraph: {
    title: "Digital Black Rock | Consultoria e Desenvolvimento de E-commerce",
    description:
      "Especialistas em criação, implementação e otimização de e-commerces. Transformamos sua presença digital em resultados reais.",
    type: "website",
    locale: "pt_BR",
    siteName: "Digital Black Rock",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Black Rock | E-commerce Experts",
    description: "Consultoria e desenvolvimento de e-commerces de alta performance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
