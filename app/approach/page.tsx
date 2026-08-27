"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const stackItems = [
  { name: "Next.js 14", category: "Core Framework", desc: "App router, SSR, static page optimization." },
  { name: "TypeScript", category: "Language", desc: "End-to-end type safety across API & components." },
  { name: "Node.js / Express", category: "Backend Runtime", desc: "High-throughput microservices and REST APIs." },
  { name: "PostgreSQL", category: "Relational Database", desc: "ACID compliant relational data persistence." },
  { name: "MongoDB", category: "Document Database", desc: "Flexible unstructured analytics storage." },
  { name: "Supabase", category: "Backend as a Service", desc: "Real-time subscriptions & row-level security." },
  { name: "Prisma", category: "ORM", desc: "Schema migrations and type-safe database queries." },
  { name: "JWT", category: "Authentication", desc: "Secure token-based session management." },
  { name: "Stripe", category: "Global Payments", desc: "International card payments and webhooks." },
  { name: "PayHere", category: "Sri Lanka Payments", desc: "LKR card, Mobile Wallet, and Internet Banking." },
  { name: "Cloudinary", category: "Media CDN", desc: "Optimized image and seafarer document storage." },
  { name: "Vercel / Railway", category: "Deployment", desc: "Zero-downtime CI/CD and global edge caching." },
];

export default function ApproachPage() {
  const { t, fontClass } = useLanguage();

  return (
    <div className={`py-16 md:py-24 bg-background ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange-soft px-3 py-1 rounded-full border border-orange/20">
            {t.approach.eyebrow}
          </span>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-ink tracking-tight">
            {t.approach.title}
          </h1>
          <p className="text-lg text-text-dim leading-relaxed">
            {t.approach.desc}
          </p>
        </div>

        {/* Detailed 3 Promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.approach.promises.map((promise, idx) => (
            <div key={idx} className="bg-white border border-line p-8 rounded-2xl space-y-4 shadow-sm">
              <span className="font-display font-black text-3xl text-orange">0{idx + 1}</span>
              <h3 className="font-display font-bold text-xl text-ink">{promise.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">{promise.desc}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack Grid */}
        <div className="bg-dark text-white rounded-3xl p-8 sm:p-12 border border-dark-border shadow-2xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange">
              Approved Ecosystem
            </span>
            <h2 className="font-display font-black text-3xl text-white mt-2">
              Our Core Technology Stack
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Battle-tested tools we leverage to deliver responsive frontends, secure APIs, and resilient data layers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="bg-dark-card p-4 rounded-xl border border-dark-border space-y-1 hover:border-orange/50 transition-colors"
              >
                <div className="font-display font-bold text-base text-white">{item.name}</div>
                <div className="text-[10px] font-semibold uppercase text-orange">
                  {item.category}
                </div>
                <div className="text-xs text-slate-400 pt-1 leading-normal">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-8">
          <h3 className="font-display font-bold text-2xl text-ink mb-4">
            Ready to build with a disciplined Sri Lankan studio?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-orange text-white font-bold text-sm hover:bg-orange-hover transition-all shadow-lg hover:shadow-orange/20"
          >
            {t.nav.cta}
          </Link>
        </div>
      </div>
    </div>
  );
}
