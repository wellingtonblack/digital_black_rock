"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function FlagBR() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#009c3b" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00" />
      <circle cx="10" cy="7" r="3.2" fill="#002776" />
      <path d="M6.9 6.1 Q10 5.2 13.1 6.3" stroke="#fff" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="20" height="14" aria-hidden="true">
      <rect width="20" height="14" rx="2" fill="#B22234" />
      <rect y="1.08" width="20" height="1.08" fill="#fff" />
      <rect y="3.23" width="20" height="1.08" fill="#fff" />
      <rect y="5.38" width="20" height="1.08" fill="#fff" />
      <rect y="7.54" width="20" height="1.08" fill="#fff" />
      <rect y="9.69" width="20" height="1.08" fill="#fff" />
      <rect y="11.85" width="20" height="1.15" fill="#fff" />
      <rect width="8" height="7.54" rx="2" fill="#3C3B6E" />
      {[0,1,2,3,4].map((row) =>
        [0,1,2,3,4,5].map((col) =>
          (row % 2 === 0 || col < 5) ? (
            <circle
              key={`${row}-${col}`}
              cx={0.7 + col * 1.32 + (row % 2 === 1 ? 0.66 : 0)}
              cy={0.7 + row * 1.38}
              r="0.35"
              fill="#fff"
            />
          ) : null
        )
      )}
    </svg>
  );
}

const options = [
  { value: "pt" as const, label: "Português", Flag: FlagBR },
  { value: "en" as const, label: "English",   Flag: FlagUS },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = options.find((o) => o.value === lang) ?? options[0];
  const CurrentFlag = current.Flag;

  return (
    <div className="lang-dropdown" ref={ref}>
      <button
        type="button"
        className={`lang-dropdown__trigger${open ? " lang-dropdown__trigger--open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Selecionar idioma / Select language"
      >
        <CurrentFlag />
        <span className="lang-dropdown__current">{lang.toUpperCase()}</span>
        <ChevronDown size={13} className="lang-dropdown__chevron" />
      </button>

      {open && (
        <ul className="lang-dropdown__menu" role="listbox" aria-label="Idiomas disponíveis">
          {options.map(({ value, label, Flag }) => (
            <li key={value} role="option" aria-selected={lang === value}>
              <button
                type="button"
                className={`lang-dropdown__option${lang === value ? " lang-dropdown__option--active" : ""}`}
                onClick={() => { setLang(value); setOpen(false); }}
              >
                <Flag />
                <span>{label}</span>
                {lang === value && <span className="lang-dropdown__check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
