"use client";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-ink bg-panel/80 hover:bg-panel transition-colors cursor-pointer"
      aria-label="Toggle language"
    >
      <span className={lang === "en" ? "text-forest font-bold" : "text-text-dim"}>EN</span>
      <span className="text-text-dim">|</span>
      <span className={lang === "si" ? "text-forest font-bold" : "text-text-dim"}>සිං</span>
    </button>
  );
}
