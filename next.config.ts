import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
