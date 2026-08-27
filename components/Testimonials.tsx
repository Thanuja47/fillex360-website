"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-background border-b border-line ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block"
          >
            {t.testimonialsSection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-ink"
          >
            {t.testimonialsSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-sm"
          >
            {t.testimonialsSection.desc}
          </motion.p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-3xl border border-line shadow-lg hover:shadow-2xl hover:border-orange/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 text-orange text-sm mb-4">
                  {"★".repeat(item.rating)}
                </div>

                <p className="text-ink text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-line/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-dark text-orange font-bold font-display flex items-center justify-center text-sm border border-dark-border">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-ink">{item.author}</h4>
                  <p className="text-[11px] text-text-dim">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
