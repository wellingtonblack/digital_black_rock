"use client";

import { Users } from "lucide-react";

const clients = [
  { name: "Aramis", category: "Moda Masculina" },
  { name: "Intimissimi", category: "Moda Íntima" },
  { name: "Aéropostale", category: "Moda" },
  { name: "Cirilo Cabos", category: "Tecnologia" },
  { name: "Arena Plata", category: "Joias & Prata" },
  { name: "Blu(k)", category: "Moda" },
  { name: "Mixtou", category: "Varejo" },
  { name: "Flue", category: "Moda" },
  { name: "Varezzi", category: "Moda" },
];

const colorPairs = [
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

export default function Clients() {
  return (
    <section id="clientes" className="py-24 relative bg-[#080E1A]">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">
            <Users size={12} />
            Nossos Clientes
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Marcas que{" "}
            <span className="gradient-text">confiam em nós</span>
          </h2>
          <p className="text-[#8B9CB8] text-lg max-w-2xl mx-auto">
            Grandes marcas escolheram a Digital Black Rock para transformar suas operações de
            e-commerce. Você também pode fazer parte desse grupo.
          </p>
        </div>

        {/* Client cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 mb-16">
          {clients.map((client, i) => {
            const [c1, c2] = colorPairs[i];
            const initials = client.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
            return (
              <div
                key={client.name}
                className="glass-card rounded-2xl p-6 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-black text-sm text-white"
                  style={{
                    background: `linear-gradient(135deg, ${c1}30, ${c2}30)`,
                    border: `1px solid ${c1}40`,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div className="font-bold text-white">{client.name}</div>
                  <div className="text-xs text-[#8B9CB8]">{client.category}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#8B9CB8] mb-6">
            Sua empresa pode ser a próxima história de sucesso
          </p>
          <a
            href="https://wa.me/5511969683162?text=Ol%C3%A1!%20Quero%20ser%20o%20pr%C3%B3ximo%20case%20de%20sucesso%20da%20Digital%20Black%20Rock."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary glow-btn"
          >
            Quero Ser o Próximo Case
          </a>
        </div>
      </div>
    </section>
  );
}
