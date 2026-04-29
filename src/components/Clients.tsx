"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const clients = [
  { name: "Aramis", category: "Moda Masculina" },
  { name: "Intimissimi", category: "Moda Íntima" },
  { name: "Aéropostale", category: "Moda" },
  { name: "Cirilo Cabos", category: "Tecnologia" },
  { name: "Arena Plata", category: "Joias & Prata" },
  { name: "Blu(k)", category: "Moda" },
  { name: "Mixtou", category: "Varejo" },
  { name: "Flueshop", category: "Moda" },
  { name: "Varezzi", category: "Moda" },
];

const colorPairs: [string, string][] = [
  ["#00D4FF", "#7B61FF"],
  ["#7B61FF", "#00D4FF"],
  ["#00D4FF", "#7B61FF"],
  ["#7B61FF", "#00D4FF"],
  ["#00D4FF", "#7B61FF"],
  ["#7B61FF", "#00D4FF"],
  ["#00D4FF", "#7B61FF"],
  ["#7B61FF", "#00D4FF"],
  ["#00D4FF", "#7B61FF"],
];

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function Clients() {
  return (
    <section id="clientes" className="clients">
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="section__tag">
            <Users size={12} />
            Nossos Clientes
          </span>
          <h2 className="section__title">
            Marcas que{" "}
            <span className="gradient-text">confiam em nós</span>
          </h2>
          <p className="section__subtitle">
            Grandes marcas escolheram a Digital Black Rock para transformar suas operações de
            e-commerce. Você também pode fazer parte desse grupo.
          </p>
        </motion.div>

        <motion.div
          className="clients__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {clients.map((client, i) => {
            const [c1, c2] = colorPairs[i];
            const initials = client.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <motion.div key={client.name} className="glass-card client-card" variants={cardVariants}>
                <div
                  className="client-card__avatar"
                  style={{
                    background: `linear-gradient(135deg, ${c1}30, ${c2}30)`,
                    border: `1px solid ${c1}40`,
                  }}
                >
                  {initials}
                </div>
                <div className="client-card__info">
                  <div className="client-card__name">{client.name}</div>
                  <div className="client-card__category">{client.category}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="clients__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="clients__cta-text">Sua empresa pode ser a próxima história de sucesso</p>
          <a
            href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20ser%20o%20pr%C3%B3ximo%20case%20de%20sucesso%20da%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Quero Ser o Próximo Case
          </a>
        </motion.div>

      </div>
    </section>
  );
}
