"use client";

const clients = [
  "ARAMIS", "INTIMISSIMI", "AÉROPOSTALE", "CIRILO CABOS",
  "ARENA PLATA", "BLU(K)", "MIXTOU", "FLUE", "VAREZZI",
];

export default function ClientsStrip() {
  const doubled = [...clients, ...clients];
  return (
    <div className="clients-strip">
      <div className="clients-strip__fade clients-strip__fade--left" />
      <div className="clients-strip__fade clients-strip__fade--right" />
      <div className="clients-strip__track">
        {doubled.map((client, i) => (
          <div key={i} className="clients-strip__item">
            <span className="clients-strip__name">{client}</span>
            <span className="clients-strip__sep">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
