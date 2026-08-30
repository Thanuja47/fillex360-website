"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Lightbulb, Gauge, Rocket } from "lucide-react";

export default function StudioManifesto() {
  const { fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      className={`py-24 bg-dark text-white border-y border-dark-border relative overflow-hidden ${fontClass}`}
      id="manifesto"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`bg-dark-card border-2 border-orange/40 rounded-3xl p-8 sm:p-14 text-center space-y-8 shadow-2xl relative overflow-hidden group hover:border-orange/60 transition-all ${
            shouldReduceMotion ? "" : "animate-[borderGlow_4s_ease-in-out_infinite]"
          }`}
        >
          {/* Subtle Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 rounded-full blur-2xl pointer-events-none" />

          {/* Staggered Inner Wrapper */}
          <motion.div
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "show"}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Headline Quote */}
            <motion.h2
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white leading-snug tracking-tight"
            >
              "Digital presence is no longer optional. <br className="hidden sm:inline" />
              It’s your <span className="text-orange italic font-extrabold">first impression</span>."
            </motion.h2>

            {/* Core Body Text */}
            <motion.p
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal"
            >
              At <strong className="text-white font-bold">Fillex360</strong>, we create premium digital experiences that combine strategy, design, technology, and performance to help businesses stand out in a crowded digital world.
            </motion.p>

            {/* Stylish Punchline Pills Row */}
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-display font-extrabold"
            >
              <motion.span
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-dark border border-dark-border text-white px-5 py-2.5 rounded-2xl shadow-sm inline-flex items-center gap-2 cursor-default"
              >
                <Lightbulb size={16} className="text-orange shrink-0" />
                Think bigger.
              </motion.span>

              <motion.span
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-dark border border-dark-border text-white px-5 py-2.5 rounded-2xl shadow-sm inline-flex items-center gap-2 cursor-default"
              >
                <Gauge size={16} className="text-orange shrink-0" />
                Build smarter.
              </motion.span>

              <motion.span
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="bg-orange text-white px-5 py-2.5 rounded-2xl shadow-md shadow-orange/20 inline-flex items-center gap-2 cursor-default"
              >
                <Rocket size={16} className="text-white shrink-0" />
                Grow faster.
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
