"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto custa uma consultoria de e-commerce?",
    a: "O investimento varia conforme o escopo: consultoria estratégica, implementação de plataforma (VTEX, Shopify, Loja Integrada), migração ou otimização. Oferecemos uma consulta gratuita para entender o seu projeto e apresentar uma proposta personalizada sem compromisso.",
  },
  {
    q: "Quais plataformas de e-commerce vocês atendem?",
    a: "Somos especialistas em VTEX, Shopify, Loja Integrada, NuvemShop, WooCommerce e Tray. Atuamos desde a criação de lojas do zero até migração entre plataformas, desenvolvimento de apps e integrações complexas.",
  },
  {
    q: "Quanto tempo leva para implementar um e-commerce do zero?",
    a: "Projetos Shopify e Loja Integrada costumam ficar prontos em 2 a 4 semanas; projetos VTEX enterprise entre 4 e 12 semanas. Com IA integrada ao nosso processo, aceleramos as entregas sem abrir mão da qualidade técnica.",
  },
  {
    q: "Como a Inteligência Artificial acelera o desenvolvimento do meu e-commerce?",
    a: "Usamos IA para automatizar partes do desenvolvimento, revisar código, gerar descrições de produtos em escala e identificar gargalos de performance. Isso reduz o tempo de entrega e aumenta a qualidade do projeto final.",
  },
  {
    q: "A Digital Black Rock atende empresas de todo o Brasil?",
    a: "Sim. Atendemos clientes de São Paulo, Rio de Janeiro, Minas Gerais e todo o Brasil de forma 100% remota, com comunicação ágil e reuniões por videoconferência. Nosso modelo de trabalho foi pensado para equipes distribuídas.",
  },
  {
    q: "O que está incluído na consultoria gratuita?",
    a: "A consultoria gratuita inclui diagnóstico da sua operação de e-commerce atual, identificação dos principais pontos de melhoria em performance e conversão, recomendação de plataforma (quando necessário) e um plano de ação com as próximas etapas — sem compromisso e sem custo.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="faq">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />
      <div className="container--content" style={{ position: "relative", zIndex: 1 }}>

        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="section__tag">
            <HelpCircle size={12} />
            Perguntas Frequentes
          </span>
          <h2 className="section__title">
            Dúvidas sobre{" "}
            <span className="gradient-text">consultoria de e-commerce</span>
          </h2>
          <p className="section__subtitle">
            Respostas diretas sobre como funcionamos, prazos, plataformas e investimento.
          </p>
        </motion.div>

        <motion.div
          className="faq__list"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq__item${isOpen ? " faq__item--open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true">
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq__answer">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
