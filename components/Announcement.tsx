"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Announcement() {
  const { t, fontClass } = useLanguage();

  return (
    <div className={`bg-dark text-slate-300 px-4 py-2.5 text-center text-xs md:text-sm font-medium border-b border-dark-border relative z-50 ${fontClass}`}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center gap-2 max-w-7xl mx-auto"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-orange animate-pulse" />
        <span>{t.announcement}</span>
      </motion.div>
    </div>
  );
}
