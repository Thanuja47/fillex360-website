"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatsStrip() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`bg-white text-ink py-12 border-y border-line ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-l-2 border-orange pl-4 py-1"
          >
            <h3 className="font-display font-bold text-lg text-ink mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-text-dim leading-relaxed">
              {item.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
