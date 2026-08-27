"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { en } from "./en";
import { si } from "./si";

type Lang = "en" | "si";
const dictionaries = { en, si };

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
  t: typeof en;
  fontClass: string;
}>({ lang: "en", toggleLang: () => {}, t: en, fontClass: "font-sans" });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("fillex360-lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "si" : "en";
    setLang(next);
    localStorage.setItem("fillex360-lang", next);
  };

  const fontClass = lang === "si" ? "font-sinhala" : "font-sans";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: dictionaries[lang], fontClass }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
