"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Delivered in 4–6 weeks",
    subtitle: "Fast, disciplined sprint cycles with zero scope bloat.",
  },
  {
    title: "Tested before handover",
    subtitle: "Stripe, PayHere, and DB triggers tested end-to-end.",
  },
  {
    title: "30-day support promise",
    subtitle: "Dedicated post-launch bug fixes included at zero cost.",
  },
  {
    title: "Docs included",
    subtitle: "Complete API references, architecture blueprints, & video walkthroughs.",
  },
];

export default function StatsStrip() {
  return (
    <section className="bg-forest text-cream py-12 border-y border-forest-soft">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border-l-2 border-terracotta pl-4 py-1"
          >
            <h3 className="font-display font-semibold text-lg text-cream mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-green-text/80 leading-relaxed">
              {item.subtitle}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
