"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function ProjectGrid() {
  return (
    <section className="py-20 bg-cream" id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-2">
              Selected Engagements
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-ink">
              Recently shipped systems.
            </h2>
          </div>
          <Link
            href="/work"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-forest hover:text-terracotta transition-colors"
          >
            View all detailed write-ups →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* 4th CTA Card: "Yours?" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-forest text-cream border border-forest-soft rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-forest-soft/30 text-8xl font-display font-extrabold select-none">
              ?
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-soft/20 px-3 py-1 rounded-full border border-terracotta/30">
                Next Slot Available
              </span>
              <h3 className="font-display font-bold text-2xl text-cream mt-4 mb-2">
                Your system here?
              </h3>
              <p className="text-green-text/80 text-sm leading-relaxed mb-6">
                Have a web application, API integration, or legacy system in Sri Lanka that needs a modern overhaul? We deliver in 4-6 weeks with guaranteed performance.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl bg-terracotta text-white font-semibold text-sm hover:bg-terracotta/90 transition-all text-center shadow-md"
              >
                Reserve your build slot →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
