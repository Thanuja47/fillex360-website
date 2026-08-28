"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectGrid() {
  const { t, fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const yoursCardContent = (
    <div className="p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 p-8 text-dark-border/40 text-8xl font-display font-black select-none">
        ?
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full border border-orange/30">
          {t.work.yours.meta}
        </span>
        <h3 className="font-display font-bold text-2xl text-white mt-4 mb-2">
          {t.work.yours.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Have a web application, API integration, or legacy system in Sri Lanka that needs a modern overhaul? We deliver in 4-6 weeks with guaranteed performance.
        </p>
      </div>

      <div className="pt-4">
        <Link
          href="/contact"
          className="group/link inline-flex items-center justify-center w-full py-3.5 px-4 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange-hover transition-all text-center shadow-lg hover:shadow-orange/20"
        >
          {t.work.yours.cta}{" "}
          <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 ml-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className={`py-24 bg-background ${fontClass}`} id="work">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-xs font-bold text-orange uppercase tracking-wider mb-2">
              {t.work.eyebrow}
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl text-ink">
              {t.work.title}
            </h2>
            <p className="text-text-dim text-sm mt-2 max-w-xl">
              {t.work.desc}
            </p>
          </div>
          <Link
            href="/work"
            className="group/link mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-orange hover:text-orange-hover transition-colors"
          >
            {t.work.viewSystem}{" "}
            <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 ml-1">
              →
            </span>
          </Link>
        </div>

        {shouldReduceMotion ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
            <div className="bg-dark text-white border border-dark-border rounded-2xl shadow-xl">
              {yoursCardContent}
            </div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}

            {/* 4th CTA Card: "Yours?" */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -20px rgba(255,85,0,0.25)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-dark text-white border border-dark-border rounded-2xl relative overflow-hidden shadow-xl transition-colors hover:border-orange/40 h-full"
            >
              {yoursCardContent}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
