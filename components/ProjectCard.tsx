"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import StatCounter from "./StatCounter";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const tagContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const tagItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const cardContent = (
    <div className={`p-6 sm:p-8 flex flex-col justify-between h-full ${fontClass}`}>
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange-soft px-3 py-1 rounded-full border border-orange/20">
            {project.tag}
          </span>
          <span className="text-xs text-text-dim font-medium">{project.meta}</span>
        </div>

        <h3 className="font-display font-bold text-2xl text-ink mb-2 group-hover:text-orange transition-colors duration-200">
          {project.name}
        </h3>

        <p className="text-text-dim text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        {/* Key Metrics Pill Grid with Animated Stat Counters */}
        <div className="grid grid-cols-3 gap-2 bg-panel p-3 rounded-xl border border-line mb-6 group-hover:border-orange/20 transition-colors">
          {project.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-display font-bold text-sm text-ink">
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div className="text-[10px] text-text-dim uppercase tracking-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Staggered Tag Chips */}
        {shouldReduceMotion ? (
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
        ) : (
          <motion.div
            className="flex flex-wrap gap-1.5 mb-6"
            variants={tagContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {project.stack.map((tech) => (
              <motion.span
                key={tech}
                variants={tagItemVariants}
                className="text-xs bg-panel text-ink font-mono px-2.5 py-1 rounded-md border border-line"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        )}

        {/* Arrow Nudge Link */}
        <Link
          href={`/work#${project.id}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-orange-hover transition-colors"
        >
          {t.work.viewSystem}{" "}
          <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );

  const shadowClass =
    "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06),0_24px_48px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.09),0_32px_64px_rgba(0,0,0,0.07)]";

  if (shouldReduceMotion) {
    return (
      <div className={`rounded-[28px] bg-white ${shadowClass} group`}>
        {cardContent}
      </div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`rounded-[28px] bg-white ${shadowClass} transition-all duration-300 ease-out group h-full`}
    >
      {cardContent}
    </motion.div>
  );
}
