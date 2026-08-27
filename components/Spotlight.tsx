"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <section className="py-20 bg-panel border-y border-line" id="packages">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-terracotta uppercase tracking-wider bg-terracotta-soft px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mt-3">
            Single transparent package. No hidden retainer fees.
          </h2>
        </div>

        {/* Pricing Card Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-cream border-2 border-forest rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Feature List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-forest bg-green-text/50 px-3 py-1 rounded-md mb-2">
                Turnkey Custom Build
              </div>
              <h3 className="font-display font-extrabold text-3xl text-ink">
                "The Full Build" Studio Package
              </h3>
              <p className="text-text-dim text-sm mt-2">
                Designed for Sri Lankan mid-market platforms, educational institutes, and logistics providers moving off legacy software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-forest text-cream flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-ink">
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
          <div className="lg:col-span-5 bg-forest text-cream rounded-2xl p-8 border border-forest-soft text-center flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-semibold text-green-text uppercase tracking-widest">
                Fixed Price Investment
              </span>
              <div className="mt-4 mb-2">
                <span className="text-sm line-through text-text-dim/80 mr-2 font-medium">
                  LKR 850,000
                </span>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-1">
                  LKR 650,000
                </div>
              </div>
              <p className="text-xs text-green-text/70 mb-6">
                50% deposit on milestone kickoff • 50% upon verified production handover
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/contact"
                className="block w-full py-4 rounded-full bg-terracotta text-white font-bold text-sm hover:bg-terracotta/90 transition-all shadow-md text-center"
              >
                Claim your build slot →
              </Link>
              <div className="text-[11px] text-text-dim">
                Average turnaround: 4 to 6 calendar weeks
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
