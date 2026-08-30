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

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
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
          onTouchMove={handleTouchMove}
          className="relative w-full h-[460px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-dark-border cursor-ew-resize select-none shadow-2xl"
        >
          {/* Right Side: New Fillex360 Design (Full Width Layer) */}
          <div className="absolute inset-0 bg-dark-card p-6 sm:p-12 flex flex-col justify-between border border-orange/40">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange/20 border border-orange/40 px-3 py-1.5 rounded-full">
                ✨ {t.transformSection.newLabel}
              </span>
              <span className="text-xs text-emerald-400 font-mono font-bold">100/100 Lighthouse • 60fps</span>
            </div>

            <div className="space-y-3 max-w-lg my-auto pt-4">
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white leading-tight">
                {t.transformSection.newTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.transformSection.newSub}
              </p>
            </div>

            <div className="flex gap-2 flex-wrap pt-2">
              <span className="text-xs bg-orange text-white font-bold px-3 py-1.5 rounded-xl shadow-md">
                Fast Checkout
              </span>
              <span className="text-xs bg-dark-border text-slate-200 font-mono px-3 py-1.5 rounded-xl">
                Next.js App Router
              </span>
            </div>
          </div>

          {/* Left Side: Old Clunky Template (Clipped Layer) */}
          <div
            className="absolute inset-0 bg-stone-950 p-6 sm:p-12 flex flex-col justify-between border-r-4 border-orange shadow-2xl overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="flex justify-between items-center w-[600px]">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800 px-3 py-1.5 rounded-full">
                ⚠️ {t.transformSection.oldLabel}
              </span>
            </div>

            <div className="space-y-3 w-[600px] my-auto pt-4">
              <h3 className="font-display font-bold text-2xl sm:text-4xl text-stone-500 line-through leading-tight">
                {t.transformSection.oldTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed max-w-lg">
                {t.transformSection.oldSub}
              </p>
            </div>

            <div className="flex gap-2 w-[600px] pt-2">
              <span className="text-xs bg-stone-900 text-stone-600 font-medium px-3 py-1.5 rounded-xl border border-stone-800">
                Clunky WordPress Theme
              </span>
            </div>
          </div>

          {/* Drag Handle Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-orange z-30 flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-11 h-11 rounded-full bg-orange text-white flex items-center justify-center font-black text-base shadow-2xl border-2 border-white ring-4 ring-orange/30">
              ↔
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
