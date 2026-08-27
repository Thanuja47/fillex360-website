"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const features = [
  {
    title: "End-to-End Next.js 14 App",
    desc: "Full TypeScript code, responsive mobile layouts, and instant SSR/SSG page performance.",
  },
  {
    title: "Payment Gateway Ready",
    desc: "Pre-integrated with PayHere (Sri Lanka) or Stripe with live webhooks and automated receipts.",
  },
  {
    title: "Custom Admin & Database",
    desc: "Tailored PostgreSQL or Supabase schema with automated migration scripts & role security.",
  },
  {
    title: "30-Day Launch Guarantee",
    desc: "Post-launch hotline support, security patch updates, and production monitoring included.",
  },
];

export default function Spotlight() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-white border-y border-line ${fontClass}`} id="packages">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-orange uppercase tracking-wider bg-orange-soft px-3 py-1 rounded-full border border-orange/20">
            {t.spotlight.tag}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-ink mt-3">
            {t.spotlight.title}
          </h2>
        </div>

        {/* Pricing Card Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-background border-2 border-dark rounded-3xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Feature List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-orange bg-orange-soft px-3 py-1 rounded-md mb-2">
                {t.spotlight.tag}
              </div>
              <h3 className="font-display font-extrabold text-3xl text-ink">
                {t.spotlight.title}
              </h3>
              <p className="text-text-dim text-sm mt-2 leading-relaxed">
                {t.spotlight.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-orange text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-ink">
                      {item.title}
                    </h4>
                    <p className="text-xs text-text-dim mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Pricing Box */}
          <div className="lg:col-span-5 bg-dark text-white rounded-2xl p-8 border border-dark-border text-center flex flex-col justify-between h-full shadow-xl">
            <div>
              <span className="text-xs font-bold text-orange uppercase tracking-widest">
                Fixed Price Investment
              </span>
              <div className="mt-4 mb-2">
                <span className="text-sm line-through text-slate-500 mr-2 font-medium">
                  {t.spotlight.priceOld}
                </span>
                <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mt-1">
                  {t.spotlight.priceNew}
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                50% deposit on milestone kickoff • 50% upon verified production handover
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/contact"
                className="block w-full py-4 rounded-full bg-orange text-white font-bold text-sm hover:bg-orange-hover transition-all shadow-lg hover:shadow-orange/20 text-center"
              >
                {t.spotlight.cta}
              </Link>
              <div className="text-[11px] text-slate-400">
                Average turnaround: 4 to 6 calendar weeks
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
