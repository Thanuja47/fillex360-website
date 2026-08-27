import Link from "next/link";

export const metadata = {
  title: "Engineering Approach & Stack — Fillex360 Solutions",
  description: "Learn about our development principles, zero-bloat standards, and complete tech stack.",
};

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
  return (
    <div className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-soft px-3 py-1 rounded-full">
            Our Blueprint
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
            How we engineer software in Galle.
          </h1>
          <p className="text-lg text-text-dim leading-relaxed">
            We don't ship bloated CMS themes or unmaintained site builders. Every application is custom-coded using modern web standards for speed, security, and long-term durability.
          </p>
        </div>

        {/* Detailed 3 Promises */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-panel border border-line p-8 rounded-2xl space-y-4">
            <span className="font-display font-black text-3xl text-terracotta">01</span>
            <h3 className="font-display font-bold text-xl text-ink">Handcrafted Codebase</h3>
            <p className="text-sm text-text-dim leading-relaxed">
              We structure your codebase clean, modular, and maintainable. Every component is custom-styled with Tailwind CSS tokens and strict TypeScript typings, allowing internal developer teams to take over seamlessly.
            </p>
          </div>

          <div className="bg-panel border border-line p-8 rounded-2xl space-y-4">
            <span className="font-display font-black text-3xl text-terracotta">02</span>
            <h3 className="font-display font-bold text-xl text-ink">Production Payment Audits</h3>
            <p className="text-sm text-text-dim leading-relaxed">
              Before handing over any payment portal (PayHere or Stripe), we execute real live currency transactions in production environments to verify webhook callbacks, database triggers, and customer email receipts.
            </p>
          </div>

          <div className="bg-panel border border-line p-8 rounded-2xl space-y-4">
            <span className="font-display font-black text-3xl text-terracotta">03</span>
            <h3 className="font-display font-bold text-xl text-ink">Direct Engineering Access</h3>
            <p className="text-sm text-text-dim leading-relaxed">
              Communication happens directly with lead developers who write your code. We provide weekly video progress demos, transparent GitHub commits, and immediate technical answers.
            </p>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="bg-forest text-cream rounded-3xl p-8 sm:p-12 border border-forest-soft">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Approved Ecosystem
            </span>
            <h2 className="font-display font-extrabold text-3xl text-cream mt-2">
              Our Core Technology Stack
            </h2>
            <p className="text-sm text-green-text/80 mt-2">
              Battle-tested tools we leverage to deliver responsive frontends, secure APIs, and resilient data layers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="bg-forest-soft/40 p-4 rounded-xl border border-forest-soft/60 space-y-1 hover:border-emerald-500/50 transition-colors"
              >
                <div className="font-display font-bold text-base text-cream">{item.name}</div>
                <div className="text-[10px] font-semibold uppercase text-emerald-400">
                  {item.category}
                </div>
                <div className="text-xs text-green-text/70 pt-1 leading-normal">
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
            className="inline-flex items-center px-8 py-4 rounded-full bg-forest text-cream font-bold text-sm hover:bg-forest-soft transition-all shadow"
          >
            Start your project consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}
