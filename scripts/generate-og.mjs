/**
 * Gera public/og-image.png (1200×630) com a identidade da Digital Black Rock.
 * Uso: node scripts/generate-og.mjs
 */

import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const W = 1200;
const H = 630;

// ── Logo (redimensionado para caber no card) ───────────────────────────────────
const logoBuffer = readFileSync(join(root, "public/assets/logos/logo-full-2.png"));
const logoSize   = 140;
const logoResized = await sharp(logoBuffer)
  .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const logoLeft = Math.round((W - logoSize) / 2);
const logoTop  = 80;

// ── SVG de fundo + texto ───────────────────────────────────────────────────────
const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Grid sutil -->
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0,212,255,0.05)" stroke-width="1"/>
    </pattern>

    <!-- Gradiente cyan → purple para headline -->
    <linearGradient id="gradText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#00D4FF"/>
      <stop offset="100%" stop-color="#7B61FF"/>
    </linearGradient>

    <!-- Barra top -->
    <linearGradient id="topBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#04080F"/>
      <stop offset="30%"  stop-color="#00D4FF"/>
      <stop offset="70%"  stop-color="#7B61FF"/>
      <stop offset="100%" stop-color="#04080F"/>
    </linearGradient>

    <!-- Barra bottom -->
    <linearGradient id="bottomBar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   stop-color="#04080F"/>
      <stop offset="50%"  stop-color="rgba(0,212,255,0.15)"/>
      <stop offset="100%" stop-color="#04080F"/>
    </linearGradient>
  </defs>

  <!-- Fundo sólido -->
  <rect width="${W}" height="${H}" fill="#04080F"/>

  <!-- Grid overlay -->
  <rect width="${W}" height="${H}" fill="url(#grid)" opacity="1"/>

  <!-- Glow blob cyan — topo esquerdo -->
  <ellipse cx="120" cy="100" rx="380" ry="260" fill="#00D4FF" opacity="0.055"/>

  <!-- Glow blob purple — baixo direito -->
  <ellipse cx="1080" cy="540" rx="340" ry="220" fill="#7B61FF" opacity="0.065"/>

  <!-- Barra superior 3px -->
  <rect x="0" y="0" width="${W}" height="3" fill="url(#topBar)"/>

  <!-- ── HEADLINE ─────────────────────────────────────────── -->
  <!-- linha 1: "Transformamos seu negócio" -->
  <text
    x="${W / 2}" y="295"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="58"
    font-weight="900"
    fill="#FFFFFF"
    text-anchor="middle"
    letter-spacing="-1">Transformamos seu neg&#xF3;cio</text>

  <!-- linha 2: "em uma máquina de vendas" — gradiente -->
  <text
    x="${W / 2}" y="368"
    font-family="Arial Black, Arial, Helvetica, sans-serif"
    font-size="58"
    font-weight="900"
    fill="url(#gradText)"
    text-anchor="middle"
    letter-spacing="-1">em uma m&#xE1;quina de vendas</text>

  <!-- ── SUBTÍTULO ────────────────────────────────────────── -->
  <text
    x="${W / 2}" y="430"
    font-family="Arial, Helvetica, sans-serif"
    font-size="26"
    fill="#8B9CB8"
    text-anchor="middle">Consultoria e Desenvolvimento de E-commerce com IA</text>

  <!-- ── PLATAFORMAS ──────────────────────────────────────── -->
  <text
    x="${W / 2}" y="478"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
    fill="#00D4FF"
    text-anchor="middle"
    opacity="0.85">VTEX &#x2022; Shopify &#x2022; Loja Integrada &#x2022; WordPress &#x2022; Tray</text>

  <!-- ── BARRA INFERIOR ──────────────────────────────────── -->
  <rect x="0" y="556" width="${W}" height="74" fill="url(#bottomBar)"/>
  <rect x="0" y="556" width="${W}" height="1" fill="rgba(0,212,255,0.18)"/>

  <!-- Stats -->
  <text x="130"  y="601" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#00D4FF" text-anchor="middle">+50</text>
  <text x="130"  y="622" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#8B9CB8" text-anchor="middle">clientes</text>

  <text x="310"  y="601" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#7B61FF" text-anchor="middle">+200</text>
  <text x="310"  y="622" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#8B9CB8" text-anchor="middle">projetos</text>

  <text x="490"  y="601" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#00D4FF" text-anchor="middle">98%</text>
  <text x="490"  y="622" font-family="Arial, Helvetica, sans-serif" font-size="14" fill="#8B9CB8" text-anchor="middle">satisfa&#xE7;&#xE3;o</text>

  <!-- Separador -->
  <rect x="620" y="570" width="1" height="44" fill="rgba(0,212,255,0.2)"/>

  <!-- URL -->
  <text x="${W - 100}" y="601" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#FFFFFF" text-anchor="end">digitalblackrock.com.br</text>
  <text x="${W - 100}" y="622" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#8B9CB8" text-anchor="end">atendimento@digitalblackrock.com.br</text>
</svg>`;

// ── Compositar: fundo SVG + logo PNG ──────────────────────────────────────────
await sharp(Buffer.from(svg))
  .composite([
    { input: logoResized, top: logoTop, left: logoLeft, blend: "over" },
  ])
  .png()
  .toFile(join(root, "public/og-image.png"));

console.log("✓ OG image gerada em public/og-image.png (1200×630)");
