"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 rounded-full border-2 border-line px-3.5 py-1.5 text-xs font-bold text-ink bg-white hover:bg-panel transition-all cursor-pointer shadow-sm hover:border-orange/40"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-orange font-black" : "text-text-dim/70"}>EN</span>
      <span className="text-text-dim/30">|</span>
      <span className={lang === "si" ? "text-orange font-black" : "text-text-dim/70"}>සිං</span>
    </button>
  );
}
