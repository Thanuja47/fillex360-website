"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function MindsetComparison() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-dark text-white border-y border-dark-border relative overflow-hidden ${fontClass}`} id="comparison">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange/10 px-3.5 py-1.5 rounded-full border border-orange/30 inline-block"
          >
            {t.comparisonSection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white"
          >
            {t.comparisonSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            {t.comparisonSection.desc}
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Agencies Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-card/60 p-8 rounded-3xl border border-red-500/20 space-y-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-dark-border pb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <h3 className="font-display font-bold text-xl text-slate-300">
                {t.comparisonSection.traditionalTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {t.comparisonSection.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                  <span>{pt.traditional}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fillex360 Modern Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-card p-8 rounded-3xl border-2 border-orange space-y-6 relative overflow-hidden shadow-2xl shadow-orange/10"
          >
            <div className="flex items-center gap-3 border-b border-dark-border pb-4">
              <span className="w-3 h-3 rounded-full bg-orange animate-pulse" />
              <h3 className="font-display font-black text-xl text-white">
                {t.comparisonSection.fillex360Title}
              </h3>
            </div>

            <div className="space-y-4">
              {t.comparisonSection.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-white font-medium">
                  <span className="text-orange font-bold shrink-0 mt-0.5">✓</span>
                  <span>{pt.fillex360}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
