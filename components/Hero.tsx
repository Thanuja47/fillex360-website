"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-16 md:py-24 bg-cream overflow-hidden ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-soft text-forest text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-terracotta" />
            {t.hero.eyebrow}
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ink leading-[1.15]">
            {t.hero.headlinePre}
            <span className="text-terracotta italic font-semibold">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-text-dim max-w-2xl leading-relaxed font-normal">
            {t.hero.sub}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-forest text-cream font-semibold text-base hover:bg-forest-soft transition-all duration-200 shadow-md hover:shadow-lg text-center"
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-panel text-ink border border-line font-semibold text-base hover:bg-white hover:border-text-dim/30 transition-all duration-200 text-center"
            >
              {t.hero.cta2}
            </Link>
          </div>

          <div className="pt-6 border-t border-line/60 flex items-center gap-6 text-xs text-text-dim">
            <div className="flex items-center gap-2">
              <span className="text-forest font-bold text-base">📍</span>
              <span>Based in Colombo & Galle, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-forest font-bold text-base">⚡</span>
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
