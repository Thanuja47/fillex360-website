"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ShieldCheck, UserCheck, ClockCheck, Cpu, Code2, Server, Database, Lock, CreditCard, Cloud, Rocket } from "lucide-react";

const promiseIcons = [ShieldCheck, UserCheck, ClockCheck];

const stackItems = [
  { name: "Next.js 14", category: "Core Framework", desc: "App router, SSR, static page optimization.", icon: Cpu },
  { name: "TypeScript", category: "Language", desc: "End-to-end type safety across API & components.", icon: Code2 },
  { name: "Node.js / Express", category: "Backend Runtime", desc: "High-throughput microservices and REST APIs.", icon: Server },
  { name: "PostgreSQL", category: "Relational Database", desc: "ACID compliant relational data persistence.", icon: Database },
  { name: "MongoDB", category: "Document Database", desc: "Flexible unstructured analytics storage.", icon: Database },
  { name: "Supabase", category: "Backend as a Service", desc: "Real-time subscriptions & row-level security.", icon: Server },
  { name: "Prisma", category: "ORM", desc: "Schema migrations and type-safe database queries.", icon: Code2 },
  { name: "JWT", category: "Authentication", desc: "Secure token-based session management.", icon: Lock },
  { name: "Stripe", category: "Global Payments", desc: "International card payments and webhooks.", icon: CreditCard },
  { name: "PayHere", category: "Sri Lanka Payments", desc: "LKR card, Mobile Wallet, and Internet Banking.", icon: CreditCard },
  { name: "Cloudinary", category: "Media CDN", desc: "Optimized image and document storage.", icon: Cloud },
  { name: "Vercel", category: "Deployment", desc: "Zero-downtime CI/CD and global edge caching.", icon: Rocket },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function ApproachPage() {
  const { t, fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`py-16 md:py-24 bg-background ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <Reveal delay={0}>
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block">
              {t.approach.eyebrow}
            </span>
            <h1 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
              {t.approach.title}
            </h1>
            <p className="text-lg text-text-dim leading-relaxed font-medium">
              {t.approach.desc}
            </p>
          </div>
        </Reveal>

        {/* Detailed 3 Promises with Reveal staggering */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.approach.promises.map((promise, idx) => {
            const IconComp = promiseIcons[idx] || ShieldCheck;

            return (
              <Reveal key={idx} delay={idx * 0.12}>
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { y: -8, boxShadow: "0 20px 30px -15px rgba(255,85,0,0.15)" }}
                  className="bg-white border border-line p-8 rounded-3xl space-y-5 shadow-md hover:border-orange/50 transition-all group h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 text-orange flex items-center justify-center border border-orange/20 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                      <IconComp className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    <span className="font-display font-black text-3xl text-orange/30 group-hover:text-orange transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-xl text-ink group-hover:text-orange transition-colors">
                    {promise.title}
                  </h3>
                  <p className="text-sm text-text-dim leading-relaxed">
                    {promise.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Tech Stack Grid with Stagger Container */}
        <Reveal delay={0.2}>
          <div className="bg-dark text-white rounded-3xl p-8 sm:p-12 border-2 border-dark-border shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mb-12 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-orange bg-orange/10 px-3.5 py-1.5 rounded-full border border-orange/30 inline-block">
                Approved Ecosystem
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white pt-2">
                Our Core Technology Stack
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Battle-tested tools we leverage to deliver responsive frontends, secure APIs, and resilient data layers.
              </p>
            </div>

            {shouldReduceMotion ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {stackItems.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="bg-dark-card p-5 rounded-2xl border border-dark-border space-y-2"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-orange/10 text-orange flex items-center justify-center border border-orange/20 shrink-0">
                          <ItemIcon className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div className="font-display font-black text-base text-white truncate">
                          {item.name}
                        </div>
                      </div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-orange pl-1">
                        {item.category}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed pl-1">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                {stackItems.map((item) => {
                  const ItemIcon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="bg-dark-card p-5 rounded-2xl border border-dark-border space-y-2 hover:border-orange/60 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-orange/10 text-orange flex items-center justify-center border border-orange/20 group-hover:bg-orange group-hover:text-white transition-colors shrink-0">
                          <ItemIcon className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div className="font-display font-black text-base text-white group-hover:text-orange transition-colors truncate">
                          {item.name}
                        </div>
                      </div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-orange pl-1">
                        {item.category}
                      </div>
                      <div className="text-xs text-slate-400 leading-relaxed pl-1">
                        {item.desc}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={0.3}>
          <div className="text-center py-8 space-y-4">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink">
              Ready to build with a disciplined Sri Lankan studio?
            </h3>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-orange text-white font-extrabold text-sm hover:bg-orange-hover transition-all shadow-xl shadow-orange/20 hover:shadow-orange/30"
              >
                {t.nav.cta}
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
