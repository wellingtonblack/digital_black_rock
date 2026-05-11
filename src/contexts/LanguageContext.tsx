"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { pt } from "@/locales/pt";
import { en } from "@/locales/en";
import type { Translations } from "@/locales/pt";

type Lang = "pt" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

const translations: Record<Lang, Translations> = { pt, en };

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("dbr-lang") as Lang | null;
    if (saved === "pt" || saved === "en") {
      setLangState(saved);
    } else {
      const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || "pt";
      if (browserLang.toLowerCase().startsWith("en")) {
        setLangState("en");
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("dbr-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
