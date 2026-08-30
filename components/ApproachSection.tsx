"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, ClockCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const promiseIcons = [ShieldCheck, UserCheck, ClockCheck];

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
          className="lg:col-span-5 bg-dark rounded-3xl p-8 font-mono text-xs text-slate-300 border-2 border-dark-border shadow-2xl space-y-6 relative overflow-hidden group hover:border-orange/40 transition-all"
        >
          <div className="flex items-center justify-between border-b border-dark-border pb-4 text-slate-500 text-[11px]">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange animate-pulse" />
              // studio-manifesto.ts
            </span>
            <span>Galle, Sri Lanka</span>
          </div>

          <div className="space-y-3 leading-relaxed">
            <p className="text-orange font-bold">
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
            <p className="text-orange font-bold">&#125;;</p>
          </div>

          <div className="bg-dark-card p-4 rounded-2xl border border-dark-border text-[11px] text-white flex items-center justify-between">
            <span className="text-emerald-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              ✓ Status: Verified Studio Handover
            </span>
            <span className="text-slate-400 font-mono">100% Quality</span>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20">
              {t.approach.eyebrow}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-ink mt-4">
              {t.approach.title}
            </h2>
            <p className="text-text-dim text-base mt-3 leading-relaxed">
              {t.approach.desc}
            </p>
          </div>

          <div className="space-y-6">
            {t.approach.promises.map((p, idx) => {
              const IconComp = promiseIcons[idx] || ShieldCheck;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  whileHover={{ x: 6 }}
                  className="flex gap-5 items-start bg-white p-6 rounded-3xl border border-line shadow-sm hover:shadow-xl hover:border-orange/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange/10 text-orange flex items-center justify-center border border-orange/20 shrink-0 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    <IconComp className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-ink mb-1 group-hover:text-orange transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-dim leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
