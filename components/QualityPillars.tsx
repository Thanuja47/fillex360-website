"use client";

import { motion } from "framer-motion";
import { Zap, Palette, ShieldCheck, Smartphone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Zap, Palette, ShieldCheck, Smartphone];

export default function QualityPillars() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-white border-b border-line ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block"
          >
            {t.qualitySection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-ink"
          >
            {t.qualitySection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-base leading-relaxed"
          >
            {t.qualitySection.desc}
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.qualitySection.pillars.map((pillar, idx) => {
            const IconComponent = icons[idx] || Zap;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 30px -15px rgba(255,85,0,0.12)" }}
                className="bg-background p-8 rounded-3xl border border-line hover:border-orange/60 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center border border-orange/20 shadow-sm group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display font-black text-xl text-ink group-hover:text-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-text-dim leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-line/50 mt-6 flex items-center gap-2 text-[11px] font-extrabold text-orange uppercase tracking-wider">
                  <span>Verified Standard</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
