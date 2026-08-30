"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Check, ArrowRight, Calculator as CalcIcon } from "lucide-react";

export default function Calculator() {
  const { t, fontClass } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>(["base", "payments", "admin"]);

  const toggleOption = (id: string) => {
    if (id === "base") return; // Required
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const totalEstimate = t.calculatorOptions
    .filter((opt) => selectedIds.includes(opt.id))
    .reduce((sum, opt) => sum + opt.price, 0);

  const selectedNames = t.calculatorOptions
    .filter((opt) => selectedIds.includes(opt.id))
    .map((opt) => opt.name)
    .join(", ");

  return (
    <section className={`py-24 bg-dark text-white border-y border-dark-border ${fontClass}`} id="calculator">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange/10 px-3.5 py-1.5 rounded-full border border-orange/30 inline-flex items-center gap-1.5"
          >
            <CalcIcon className="w-3.5 h-3.5" />
            {t.calculatorSection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white"
          >
            {t.calculatorSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm"
          >
            {t.calculatorSection.desc}
          </motion.p>
        </div>

        {/* Options Selection List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {t.calculatorOptions.map((opt) => {
            const isChecked = selectedIds.includes(opt.id);

            return (
              <motion.div
                key={opt.id}
                onClick={() => toggleOption(opt.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                  isChecked
                    ? "bg-dark-card border-orange text-white shadow-lg shadow-orange/10"
                    : "bg-dark/60 border-dark-border text-slate-400 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isChecked ? "bg-orange text-white" : "bg-dark-border text-slate-600"
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-display font-bold text-sm">{opt.name}</span>
                </div>
                <span className="font-mono font-bold text-sm text-orange shrink-0">
                  +LKR {opt.price.toLocaleString()}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Total Summary Footer Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-card border-2 border-orange rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.calculatorSection.estTotal}
            </span>
            <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mt-1">
              LKR {totalEstimate.toLocaleString()}
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-md line-clamp-1">
              Included: {selectedNames}
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={`/contact?estimate=LKR+${totalEstimate.toLocaleString()}&specs=${encodeURIComponent(selectedNames)}`}
              className="inline-flex items-center gap-2 py-4 px-8 rounded-full bg-orange text-white font-extrabold text-sm hover:bg-orange-hover transition-all shadow-lg shadow-orange/20 text-center group"
            >
              <span>{t.calculatorSection.bookThisEst}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
