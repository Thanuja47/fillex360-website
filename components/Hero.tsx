"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-20 md:py-28 bg-dark text-white overflow-hidden relative ${fontClass}`}>
      {/* Dynamic Animated Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-card border border-dark-border text-orange text-xs font-semibold uppercase tracking-wider shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]"
          >
            {t.hero.headlinePre}
            <motion.span
              animate={{ color: ["#FF5500", "#FF7733", "#FF5500"] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-orange italic font-semibold inline-block"
            >
              {t.hero.headlineHighlight}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-normal"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-orange text-white font-bold text-base hover:bg-orange-hover transition-all duration-200 shadow-xl shadow-orange/20 hover:shadow-orange/30 text-center w-full sm:w-auto"
              >
                {t.hero.cta1}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-dark-card text-slate-200 border border-dark-border font-semibold text-base hover:bg-dark-border transition-all duration-200 text-center w-full sm:w-auto"
              >
                {t.hero.cta2}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 border-t border-dark-border flex flex-wrap items-center gap-6 text-xs text-slate-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-orange font-bold text-base">📍</span>
              <span>Based in Colombo & Galle, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange font-bold text-base">⚡</span>
              <span>Fixed-timeline delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Visual */}
        <div className="lg:col-span-5">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
