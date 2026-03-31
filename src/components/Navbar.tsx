"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Plataformas", href: "#plataformas" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          <Link href="#hero" className="navbar__logo">
            <Image
              src="/assets/logos/logo-dark.png"
              alt="Digital Black Rock"
              width={180}
              height={72}
              priority
            />
          </Link>

          <div className="navbar__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar__cta">
            <a
              href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Black%20Rock."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--sm"
            >
              <MessageCircle size={16} />
              Falar com Especialista
            </a>
          </div>

          <button
            className="navbar__toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " mobile-menu--visible" : " mobile-menu--hidden"}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="mobile-menu__link"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Digital%20Black%20Rock."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileOpen(false)}
          className="btn btn--primary"
          style={{ marginTop: "1rem" }}
        >
          <MessageCircle size={18} />
          Falar com Especialista
        </a>
      </div>
    </>
  );
}
