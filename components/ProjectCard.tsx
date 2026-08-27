"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, fontClass } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-panel border border-line rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-terracotta/50 transition-all duration-300 shadow-sm hover:shadow-md group ${fontClass}`}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-soft px-3 py-1 rounded-full">
            {project.tag}
          </span>
          <span className="text-xs text-text-dim font-medium">{project.meta}</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-ink mb-2 group-hover:text-forest transition-colors">
          {project.name}
        </h3>

        <p className="text-text-dim text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Key Metrics Pill Grid */}
        <div className="grid grid-cols-3 gap-2 bg-cream/70 p-3 rounded-xl border border-line/60 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display font-bold text-sm text-forest">{m.value}</div>
              <div className="text-[10px] text-text-dim uppercase tracking-tight">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-cream text-forest font-mono px-2.5 py-1 rounded-md border border-line/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/work#${project.id}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-forest group-hover:text-terracotta transition-colors"
        >
          {t.work.viewSystem} <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
