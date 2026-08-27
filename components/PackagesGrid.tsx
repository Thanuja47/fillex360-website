"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PackagesGrid() {
  const { t, fontClass } = useLanguage();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {t.packagesList.map((pkg, index) => {
            const isFeatured = pkg.featured;
            const isPopular = pkg.popular;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 shadow-lg ${
                  isFeatured
                    ? "bg-dark text-white border-2 border-orange lg:col-span-1 shadow-orange/10"
                    : "bg-background text-ink border border-line hover:border-orange/60 hover:shadow-2xl"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && !isFeatured && (
                  <span className="absolute -top-3.5 right-6 text-[11px] font-bold uppercase tracking-wider bg-orange text-white px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}
                {isFeatured && (
                  <span className="absolute -top-3.5 right-6 text-[11px] font-bold uppercase tracking-wider bg-orange text-white px-3 py-1 rounded-full shadow-md">
                    Enterprise
                  </span>
                )}

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {t.packagesSection.deliveryTime}: <span className="text-orange">{pkg.delivery}</span>
                  </div>

                  <h3 className={`font-display font-extrabold text-2xl mb-2 ${isFeatured ? "text-white" : "text-ink"}`}>
                    {pkg.name}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isFeatured ? "text-slate-400" : "text-text-dim"}`}>
                    {pkg.desc}
                  </p>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-line/60 dark:border-dark-border">
                    {pkg.priceOld && (
                      <span className="text-xs line-through text-slate-500 block mb-0.5">
                        {pkg.priceOld}
                      </span>
                    )}
                    <div className="font-display font-black text-3xl sm:text-4xl text-orange tracking-tight">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs">
                        <span className="text-orange font-bold shrink-0 mt-0.5">✓</span>
                        <span className={isFeatured ? "text-slate-300" : "text-ink/80"}>
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
                      className={`block w-full py-3.5 px-4 rounded-full font-bold text-xs text-center transition-all shadow-md ${
                        isFeatured
                          ? "bg-orange text-white hover:bg-orange-hover shadow-orange/20"
                          : "bg-ink text-white hover:bg-orange transition-colors"
                      }`}
                    >
                      {t.packagesSection.selectPackage}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-panel border border-line p-8 rounded-2xl"
        >
          <p className="text-sm font-semibold text-text-dim">
            Have a specialized requirement, mobile app, or multi-tenant system in mind?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-bold text-orange hover:text-orange-hover mt-2"
          >
            {t.packagesSection.customQuote}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
