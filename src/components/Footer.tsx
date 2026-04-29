import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

const links = {
  servicos: [
    "Consultoria de E-commerce", "Implementação", "Otimização e SEO",
    "Migração B2C/B2B", "Suporte e Evolução", "Sites & Landing Pages",
  ],
  plataformas: ["VTEX", "Shopify", "Loja Integrada", "WordPress / WooCommerce", "Tray"],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image src="/assets/logos/logo-dark.png" alt="Digital Black Rock" width={160} height={64} style={{ height: "4rem", width: "auto" }} />
            <p className="footer__tagline">
              Consultoria e desenvolvimento de e-commerces de alta performance. Transformamos sua
              presença digital em resultados reais e mensuráveis.
            </p>
            <div className="footer__social">
              <a href="https://wa.me/5511969683162" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="footer__social-link"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", color: "#25D366" }}
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
              <a href="mailto:atendimento@digitalblackrock.com.br"
                aria-label="E-mail"
                className="footer__social-link"
                style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)", color: "#00D4FF" }}
              >
                <Mail size={18} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/digitalblackrock/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="footer__social-link"
                style={{ background: "rgba(225,48,108,0.15)", border: "1px solid rgba(225,48,108,0.3)", color: "#FF6B9D" }}
              >
                IG
              </a>
              {/* LinkedIn — adicionar URL quando disponível
              <a href="https://linkedin.com/company/digital-black-rock" target="_blank" rel="noopener noreferrer" className="footer__social-link"
                style={{ background: "rgba(10,102,194,0.1)", border: "1px solid rgba(10,102,194,0.2)", color: "#0A66C2" }}
              >
                in
              </a>
              */}
            </div>
          </div>

          <div>
            <p className="footer__nav-title">Serviços</p>
            <ul className="footer__nav-list">
              {links.servicos.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="footer__nav-link">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__nav-title">Plataformas</p>
            <ul className="footer__nav-list" style={{ marginBottom: "2rem" }}>
              {links.plataformas.map((p) => (
                <li key={p}>
                  <a href="#plataformas" className="footer__nav-link">{p}</a>
                </li>
              ))}
            </ul>
            <p className="footer__contact-title">Contato</p>
            <p className="footer__contact-text">atendimento@digitalblackrock.com.br</p>
            <p className="footer__contact-text">
              <a href="tel:5511969683162" target="_blank" rel="noopener noreferrer">(11) 96968-3162</a>
            </p>
          </div>
        </div>

        <div className="divider-line" style={{ marginBottom: "2rem" }} />
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Digital Black Rock. Todos os direitos reservados. <br /> CNPJ: 52.523.259/0001-10</p>
          <p>Desenvolvido por <span style={{ color: "#00D4FF" }}>Digital Black Rock</span> em São Paulo, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
