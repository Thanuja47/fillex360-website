"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ApproachSection() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-background ${fontClass}`} id="approach">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Visual Code-style Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-dark rounded-2xl p-6 font-mono text-xs text-slate-300 border border-dark-border shadow-2xl space-y-4"
        >
          <div className="flex items-center justify-between border-b border-dark-border pb-3 text-slate-500 text-[11px]">
            <span>// engineering-manifesto.ts</span>
            <span>Galle, Sri Lanka</span>
          </div>

          <div className="space-y-2 leading-relaxed">
            <p className="text-orange font-semibold">
              export const studioPromise = &#123;
            </p>
            <p className="pl-4 text-white">
              studio: <span className="text-emerald-400">"{t.approach.terminalLine1}"</span>,
            </p>
            <p className="pl-4 text-white">
              guarantee: <span className="text-emerald-400">"{t.approach.terminalLine2}"</span>,
            </p>
            <p className="pl-4 text-white">
              paymentGatewaysTested: <span className="text-amber-400">true</span>,
            </p>
            <p className="pl-4 text-white">
              guaranteedHandoverWeeks: <span className="text-amber-400">5</span>,
            </p>
            <p className="pl-4 text-white">
              zeroBloatPolicy: <span className="text-amber-400">true</span>,
            </p>
            <p className="text-orange font-semibold">&#125;;</p>
          </div>

          <div className="bg-dark-card p-3 rounded-lg border border-dark-border text-[11px] text-white">
            <span className="text-emerald-400 font-bold">✓ Status:</span> All 30-day post-launch checks active.
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3 py-1 rounded-full border border-orange/20">
              {t.approach.eyebrow}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-ink mt-3">
              {t.approach.title}
            </h2>
            <p className="text-text-dim text-base mt-2 leading-relaxed">
              {t.approach.desc}
            </p>
          </div>

          <div className="space-y-6">
            {t.approach.promises.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-line shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display font-black text-2xl text-orange shrink-0">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-dim leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
