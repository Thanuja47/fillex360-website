"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQ() {
  const { t, fontClass } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className={`py-24 bg-white border-y border-line ${fontClass}`} id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block"
          >
            {t.faqSection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-ink"
          >
            {t.faqSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-sm"
          >
            {t.faqSection.desc}
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-background border border-line rounded-2xl overflow-hidden transition-all shadow-sm hover:border-orange/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left font-display font-bold text-base sm:text-lg text-ink flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-orange font-mono text-xl shrink-0"
                  >
                    ↓
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-text-dim leading-relaxed border-t border-line/50 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
