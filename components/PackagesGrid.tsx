"use client";

import Link from "next/link";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Check, Sparkles, Shield, ArrowRight } from "lucide-react";

export default function PackagesGrid() {
  const { t, fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={`py-24 bg-white border-y border-line ${fontClass}`} id="packages">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block"
          >
            {t.packagesSection.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl text-ink"
          >
            {t.packagesSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-dim text-base leading-relaxed"
          >
            {t.packagesSection.desc}
          </motion.p>
        </div>

        {/* 6 Packages Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {t.packagesList.map((pkg) => {
            const isFeatured = pkg.featured;
            const isPopular = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: "0 25px 40px -20px rgba(255,85,0,0.18)" }}
                transition={{ duration: 0.25 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 shadow-md ${
                  isFeatured
                    ? "bg-dark text-white border-2 border-orange shadow-orange/15"
                    : "bg-background text-ink border border-line hover:border-orange/60 hover:shadow-2xl"
                }`}
              >
                {/* Popular / Featured Badge */}
                {isPopular && !isFeatured && (
                  <span className="absolute -top-3.5 right-6 text-[11px] font-black uppercase tracking-wider bg-orange text-white px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                )}
                {isFeatured && (
                  <span className="absolute -top-3.5 right-6 text-[11px] font-black uppercase tracking-wider bg-orange text-white px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Enterprise
                  </span>
                )}

                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                    {t.packagesSection.deliveryTime}: <span className="text-orange">{pkg.delivery}</span>
                  </div>

                  <h3 className={`font-display font-black text-2xl mb-2 ${isFeatured ? "text-white" : "text-ink"}`}>
                    {pkg.name}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isFeatured ? "text-slate-400" : "text-text-dim"}`}>
                    {pkg.desc}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-line/60 dark:border-dark-border">
                    {pkg.priceOld && (
                      <span className="text-xs line-through text-slate-500 block mb-0.5 font-mono">
                        {pkg.priceOld}
                      </span>
                    )}
                    <div className="font-display font-black text-3xl sm:text-4xl text-orange tracking-tight">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Features Checklist with Vector Checkmark Icons */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-3 items-start text-xs font-medium">
                        <div className="w-4 h-4 rounded-full bg-orange/10 text-orange flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={isFeatured ? "text-slate-300" : "text-ink/90"}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={`/contact?package=${pkg.id}`}
                      className={`flex items-center justify-center gap-2 w-full py-4 px-4 rounded-2xl font-extrabold text-xs text-center transition-all shadow-md group ${
                        isFeatured
                          ? "bg-orange text-white hover:bg-orange-hover shadow-orange/20"
                          : "bg-ink text-white hover:bg-orange transition-colors"
                      }`}
                    >
                      <span>{t.packagesSection.selectPackage}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-panel border border-line p-8 rounded-3xl"
        >
          <p className="text-sm font-bold text-text-dim">
            Have a specialized requirement, mobile app, or multi-tenant system in mind?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-orange hover:text-orange-hover mt-2 group"
          >
            <span>{t.packagesSection.customQuote}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
