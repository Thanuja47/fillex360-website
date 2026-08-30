"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DesignTransform() {
  const { t, fontClass } = useLanguage();
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section className={`py-24 bg-dark text-white border-y border-dark-border relative overflow-hidden ${fontClass}`} id="transform">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange/10 px-3.5 py-1.5 rounded-full border border-orange/30 inline-block"
          >
            {t.transformSection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-white"
          >
            {t.transformSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base leading-relaxed"
          >
            {t.transformSection.desc}
          </motion.p>
        </div>

        {/* Interactive Comparison Slider Container */}
        <div
          onMouseMove={handleSliderMove}
          className="relative w-full h-[420px] rounded-3xl overflow-hidden border-2 border-dark-border cursor-ew-resize select-none shadow-2xl"
        >
          {/* Right Side: New Fillex360 Design (Full Width Layer) */}
          <div className="absolute inset-0 bg-dark-card p-8 sm:p-12 flex flex-col justify-between border border-orange/40">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange/20 border border-orange/40 px-3 py-1.5 rounded-full">
                ✨ {t.transformSection.newLabel}
              </span>
              <span className="text-xs text-emerald-400 font-mono">100/100 Lighthouse • 60fps</span>
            </div>

            <div className="space-y-3 max-w-lg">
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white">
                {t.transformSection.newTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.transformSection.newSub}
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-xs bg-orange text-white font-bold px-4 py-2 rounded-xl shadow-md">
                Fast Checkout
              </span>
              <span className="text-xs bg-dark-border text-slate-200 font-mono px-4 py-2 rounded-xl">
                Next.js App Router
              </span>
            </div>
          </div>

          {/* Left Side: Old Clunky Template (Clipped Layer) */}
          <div
            className="absolute inset-0 bg-stone-900 p-8 sm:p-12 flex flex-col justify-between border-r-2 border-red-500/80"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="flex justify-between items-center whitespace-nowrap">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/60 border border-red-800 px-3 py-1.5 rounded-full">
                ⚠️ {t.transformSection.oldLabel}
              </span>
            </div>

            <div className="space-y-3 max-w-lg whitespace-nowrap">
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-stone-400 line-through">
                {t.transformSection.oldTitle}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed truncate">
                {t.transformSection.oldSub}
              </p>
            </div>

            <div className="flex gap-3 whitespace-nowrap">
              <span className="text-xs bg-stone-800 text-stone-500 font-medium px-4 py-2 rounded-xl">
                Clunky WordPress Theme
              </span>
            </div>
          </div>

          {/* Drag Handle Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-orange z-20 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-orange text-white flex items-center justify-center font-bold text-sm shadow-xl border-2 border-white">
              ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
