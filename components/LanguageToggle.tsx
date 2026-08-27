"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink bg-white hover:bg-panel transition-colors cursor-pointer shadow-sm"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-orange font-bold" : "text-text-dim"}>EN</span>
      <span className="text-text-dim/40">|</span>
      <span className={lang === "si" ? "text-orange font-bold" : "text-text-dim"}>සිං</span>
    </button>
  );
}
