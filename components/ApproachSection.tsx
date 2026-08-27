"use client";

import { motion } from "framer-motion";

const promises = [
  {
    num: "01",
    title: "Handcrafted codebase, zero template bloat",
    desc: "We write clean Next.js App Router code tailored to your exact operational domain. No fragile page builders, no heavy unnecessary plugins.",
  },
  {
    num: "02",
    title: "Real payment testing before sign-off",
    desc: "We run actual live LKR and USD micro-transactions through PayHere and Stripe before presenting the handover keys. Production readiness is non-negotiable.",
  },
  {
    num: "03",
    title: "Direct developer communication",
    desc: "No non-technical middle managers or game-of-telephone delays. Speak directly with the engineers in Galle who are architecting your system.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-20 bg-cream" id="approach">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Visual Code-style Block */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-forest rounded-2xl p-6 font-mono text-xs text-green-text border border-forest-soft shadow-lg space-y-4"
        >
          <div className="flex items-center justify-between border-b border-forest-soft pb-3 text-text-dim text-[11px]">
            <span>// engineering-manifesto.ts</span>
            <span>Galle, Sri Lanka</span>
          </div>

          <div className="space-y-2 leading-relaxed">
            <p className="text-terracotta font-semibold">
              export const studioPromise = &#123;
            </p>
            <p className="pl-4 text-cream">
              location: <span className="text-emerald-400">"Colombo & Galle, Sri Lanka"</span>,
            </p>
            <p className="pl-4 text-cream">
              stack: [<span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"PostgreSQL"</span>],
            </p>
            <p className="pl-4 text-cream">
              paymentGatewaysTested: <span className="text-yellow-400">true</span>,
            </p>
            <p className="pl-4 text-cream">
              guaranteedHandoverWeeks: <span className="text-yellow-400">5</span>,
            </p>
            <p className="pl-4 text-cream">
              zeroBloatPolicy: <span className="text-yellow-400">true</span>,
            </p>
            <p className="text-terracotta font-semibold">&#125;;</p>
          </div>

          <div className="bg-forest-soft/40 p-3 rounded-lg border border-forest-soft text-[11px] text-cream">
            <span className="text-emerald-400 font-bold">✓ Status:</span> All 30-day post-launch checks active.
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-semibold text-terracotta uppercase tracking-wider bg-terracotta-soft px-3 py-1 rounded-full">
              Our Principles
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mt-3">
              Coded by hand, in Galle & Colombo.
            </h2>
            <p className="text-text-dim text-base mt-2 leading-relaxed">
              We operate as an agile software studio. Here is how we ensure software projects are completed on schedule without technical debt.
            </p>
          </div>

          <div className="space-y-6">
            {promises.map((p, idx) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex gap-5 items-start bg-panel p-5 rounded-xl border border-line"
              >
                <span className="font-display font-black text-2xl text-terracotta shrink-0">
                  {p.num}
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
