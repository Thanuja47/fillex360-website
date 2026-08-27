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
      className={`bg-white border border-line rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-orange/60 hover:shadow-xl transition-all duration-300 shadow-sm group ${fontClass}`}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange-soft px-3 py-1 rounded-full border border-orange/20">
            {project.tag}
          </span>
          <span className="text-xs text-text-dim font-medium">{project.meta}</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-ink mb-2 group-hover:text-orange transition-colors">
          {project.name}
        </h3>

        <p className="text-text-dim text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Key Metrics Pill Grid */}
        <div className="grid grid-cols-3 gap-2 bg-panel p-3 rounded-xl border border-line mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display font-bold text-sm text-ink">{m.value}</div>
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
              className="text-xs bg-panel text-ink font-mono px-2.5 py-1 rounded-md border border-line"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/work#${project.id}`}
          className="inline-flex items-center gap-1 text-sm font-bold text-orange hover:text-orange-hover transition-colors"
        >
          {t.work.viewSystem} <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
