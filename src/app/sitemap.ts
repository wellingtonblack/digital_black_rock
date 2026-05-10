import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://digitalblackrock.com.br",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://digitalblackrock.com.br/consultoria-ecommerce/",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://digitalblackrock.com.br/desenvolvimento-vtex/",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://digitalblackrock.com.br/shopify/",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://digitalblackrock.com.br/migracao-ecommerce/",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://digitalblackrock.com.br/seo-performance/",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://digitalblackrock.com.br/teste-seu-site/",
      lastModified: new Date("2026-04-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://digitalblackrock.com.br/privacidade/",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
