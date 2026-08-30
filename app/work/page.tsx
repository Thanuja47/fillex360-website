"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, useReducedMotion } from "framer-motion";

export default function WorkPage() {
  const { t, fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const appleShadow =
    "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06),0_24px_48px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.05),0_16px_32px_rgba(0,0,0,0.09),0_32px_64px_rgba(0,0,0,0.07)]";

  return (
    <div className={`py-16 md:py-24 bg-background ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal delay={0}>
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block">
              {t.work.eyebrow}
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-ink tracking-tight">
              {t.work.title}
            </h1>
            <p className="text-lg text-text-dim leading-relaxed font-medium">
              {t.work.desc}
            </p>
          </div>
        </Reveal>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <motion.div
                id={project.id}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`bg-white rounded-[28px] p-8 sm:p-10 ${appleShadow} grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start scroll-mt-28 transition-all duration-300 ease-out`}
              >
                {/* LEFT COLUMN */}
                <div>
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span className="bg-orange-soft text-orange text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border border-orange/20">
                      {project.category || project.tag}
                    </span>
                    <span className="text-text-dim text-sm">{project.subtitle || project.meta}</span>
                  </div>

                  <h2 className="font-display font-bold text-3xl text-ink mb-4">{project.name}</h2>

                  <p className="text-text-dim text-[15px] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="bg-panel rounded-2xl p-5 mb-4 border border-line/50">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-text-dim mb-2">
                      The operational challenge
                    </div>
                    <p className="text-ink text-sm leading-relaxed">
                      {project.challenge || project.problem}
                    </p>
                  </div>

                  <div className="bg-ink rounded-2xl p-5 shadow-sm">
                    <div className="text-[11px] font-bold uppercase tracking-wide text-white/60 mb-2">
                      The measured outcome
                    </div>
                    <p className="text-white text-sm leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wide text-text-dim mb-3">
                    Verified performance metrics
                  </div>
                  <div className="flex flex-col gap-2 mb-6">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center justify-between bg-panel rounded-xl px-4 py-3 border border-line/40"
                      >
                        <span className="text-sm text-ink font-medium">{m.label}</span>
                        <span className="font-display font-bold text-orange text-base">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wide text-text-dim mb-3">
                    Technology stack
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-text-dim bg-panel px-3 py-1.5 rounded-md border border-line/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block text-center bg-orange text-white font-extrabold text-sm py-3.5 rounded-full hover:bg-orange-hover transition-colors shadow-md hover:shadow-orange/20"
                  >
                    Start a project →
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
