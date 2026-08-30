"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StudioManifesto() {
  const { fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-dark text-white border-y border-dark-border relative overflow-hidden ${fontClass}`} id="manifesto">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-dark-card border-2 border-orange/40 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden group hover:border-orange/60 transition-all"
        >
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full blur-2xl pointer-events-none" />

          {/* Eyebrow Badge */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange bg-orange/10 border border-orange/30 px-4 py-2 rounded-full inline-block">
              Fillex360 • Digital, Done Differently.
            </span>
          </div>

          {/* Headline Quote */}
          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white leading-snug tracking-tight">
            "Digital presence is no longer optional. <br className="hidden sm:inline" />
            It’s your <span className="text-orange italic font-extrabold">first impression</span>."
          </h2>

          {/* Core Body Text */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            At <strong className="text-white font-bold">Fillex360</strong>, we create premium digital experiences that combine strategy, design, technology, and performance to help businesses stand out in a crowded digital world.
          </p>

          {/* Stylish Punchline Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-display font-extrabold">
            <span className="bg-dark border border-dark-border text-white px-5 py-2.5 rounded-2xl shadow-sm">
              💡 Think bigger.
            </span>
            <span className="bg-dark border border-dark-border text-white px-5 py-2.5 rounded-2xl shadow-sm">
              ⚡ Build smarter.
            </span>
            <span className="bg-orange text-white px-5 py-2.5 rounded-2xl shadow-md shadow-orange/20">
              🚀 Grow faster.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
