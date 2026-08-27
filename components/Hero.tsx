"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-20 md:py-28 bg-dark text-white overflow-hidden relative ${fontClass}`}>
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border text-orange text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            {t.hero.eyebrow}
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]">
            {t.hero.headlinePre}
            <span className="text-orange italic font-semibold">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal">
            {t.hero.sub}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange text-white font-bold text-base hover:bg-orange-hover transition-all duration-200 shadow-lg hover:shadow-orange/20 text-center"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-dark-card text-slate-200 border border-dark-border font-semibold text-base hover:bg-dark-border transition-all duration-200 text-center"
            >
              {t.hero.cta2}
            </Link>
          </div>

          <div className="pt-6 border-t border-dark-border flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-orange font-bold text-base">📍</span>
              <span>Based in Colombo & Galle, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange font-bold text-base">⚡</span>
              <span>Fixed-timeline delivery</span>
            </div>
          </div>
        </motion.div>

        {/* Right Dashboard Visual */}
        <div className="lg:col-span-5">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
