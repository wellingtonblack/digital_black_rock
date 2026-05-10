import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Digital Black Rock",
  description:
    "Saiba como a Digital Black Rock coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
  alternates: {
    canonical: "https://digitalblackrock.com.br/privacidade/",
  },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <main style={{ maxWidth: "780px", margin: "0 auto", padding: "8rem 1.5rem 4rem", color: "#C8D8E8", lineHeight: 1.8 }}>
      <Link href="/" style={{ color: "#00D4FF", fontSize: "0.875rem", textDecoration: "none" }}>
        ← Voltar ao site
      </Link>

      <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", margin: "2rem 0 0.5rem" }}>
        Política de Privacidade
      </h1>
      <p style={{ color: "#8B9CB8", marginBottom: "2.5rem" }}>
        Última atualização: maio de 2025
      </p>

      <Section title="1. Quem somos">
        <p>
          A <strong style={{ color: "#fff" }}>Digital Black Rock</strong> é uma empresa de consultoria
          e desenvolvimento de e-commerce, com sede em São Paulo — SP, Brasil. Nosso site é{" "}
          <strong style={{ color: "#fff" }}>digitalblackrock.com.br</strong>.
        </p>
        <p style={{ marginTop: "0.75rem" }}>
          Contato: <a href="mailto:atendimento@digitalblackrock.com.br" style={{ color: "#00D4FF" }}>atendimento@digitalblackrock.com.br</a>
        </p>
      </Section>

      <Section title="2. Dados que coletamos">
        <p>Coletamos dados pessoais nas seguintes situações:</p>
        <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li><strong style={{ color: "#fff" }}>Formulário de contato:</strong> nome, e-mail, telefone, empresa e serviço de interesse.</li>
          <li><strong style={{ color: "#fff" }}>Ferramenta "Teste seu Site":</strong> nome, e-mail, telefone e URL do site a ser analisado.</li>
          <li><strong style={{ color: "#fff" }}>Navegação:</strong> dados de uso via Google Tag Manager / Google Analytics (IP anonimizado, páginas visitadas, origem de tráfego).</li>
          <li><strong style={{ color: "#fff" }}>Preferência de idioma:</strong> salva localmente no seu navegador (localStorage), sem envio para nossos servidores.</li>
        </ul>
      </Section>

      <Section title="3. Como usamos seus dados">
        <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Responder solicitações de contato e propostas comerciais.</li>
          <li>Enviar o diagnóstico solicitado pela ferramenta de análise de sites.</li>
          <li>Melhorar a experiência do site com base em dados de uso agregados.</li>
          <li>Cumprir obrigações legais ou regulatórias.</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Não vendemos, alugamos nem compartilhamos seus dados com terceiros para fins de marketing sem o seu consentimento.
        </p>
      </Section>

      <Section title="4. Base legal (LGPD)">
        <p>
          O tratamento de dados pessoais pela Digital Black Rock se baseia nos seguintes fundamentos da{" "}
          <strong style={{ color: "#fff" }}>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>:
        </p>
        <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li><strong style={{ color: "#fff" }}>Consentimento</strong> — ao preencher nossos formulários.</li>
          <li><strong style={{ color: "#fff" }}>Legítimo interesse</strong> — para análise de uso do site e melhoria dos serviços.</li>
          <li><strong style={{ color: "#fff" }}>Execução de contrato</strong> — quando há prestação de serviços.</li>
        </ul>
      </Section>

      <Section title="5. Cookies e rastreamento">
        <p>
          Utilizamos cookies de sessão e de análise (Google Analytics via GTM) para entender como os visitantes
          usam o site. Você pode desativar cookies nas configurações do seu navegador. A preferência de idioma
          (PT/EN) é salva no <em>localStorage</em> do seu dispositivo e não é transmitida a terceiros.
        </p>
      </Section>

      <Section title="6. Retenção de dados">
        <p>
          Os dados coletados pelos formulários são retidos pelo tempo necessário para atender à finalidade
          da coleta ou conforme exigido por lei. Dados de análise são retidos por até 26 meses.
        </p>
      </Section>

      <Section title="7. Seus direitos">
        <p>
          Conforme a LGPD, você tem direito a:
        </p>
        <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>Confirmar a existência de tratamento de dados.</li>
          <li>Acessar, corrigir ou deletar seus dados pessoais.</li>
          <li>Revogar consentimento a qualquer momento.</li>
          <li>Solicitar portabilidade dos dados.</li>
          <li>Apresentar reclamação à ANPD.</li>
        </ul>
        <p style={{ marginTop: "0.75rem" }}>
          Para exercer seus direitos, entre em contato:{" "}
          <a href="mailto:atendimento@digitalblackrock.com.br" style={{ color: "#00D4FF" }}>
            atendimento@digitalblackrock.com.br
          </a>
        </p>
      </Section>

      <Section title="8. Segurança">
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não
          autorizado, perda ou divulgação. O site é servido via HTTPS com certificado SSL.
        </p>
      </Section>

      <Section title="9. Alterações nesta política">
        <p>
          Esta política pode ser atualizada periodicamente. Alterações relevantes serão comunicadas nesta
          página com a data de atualização revisada. Recomendamos revisitá-la regularmente.
        </p>
      </Section>

      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", color: "#8B9CB8", fontSize: "0.875rem" }}>
        © {new Date().getFullYear()} Digital Black Rock. Todos os direitos reservados.
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
