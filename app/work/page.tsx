"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function WorkPage() {
  const { t, fontClass } = useLanguage();

  return (
    <div className={`py-16 md:py-24 bg-cream ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-soft px-3 py-1 rounded-full">
            {t.work.eyebrow}
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-ink tracking-tight">
            {t.work.title}
          </h1>
          <p className="text-lg text-text-dim leading-relaxed">
            {t.work.desc}
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-panel border border-line rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta bg-terracotta-soft px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <span className="text-xs text-text-dim font-medium">{project.meta}</span>
                </div>

                <h2 className="font-display font-extrabold text-3xl text-ink">
                  {project.name}
                </h2>

                <p className="text-base text-text-dim leading-relaxed">
                  {project.description}
                </p>

                {/* Problem -> Outcome breakdown */}
                <div className="space-y-4 pt-2">
                  <div className="bg-cream p-4 rounded-xl border border-line/80">
                    <h3 className="font-display font-bold text-sm text-terracotta uppercase tracking-wider mb-1">
                      The Operational Challenge
                    </h3>
                    <p className="text-sm text-ink/80 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="bg-forest text-cream p-4 rounded-xl border border-forest-soft">
                    <h3 className="font-display font-bold text-sm text-emerald-400 uppercase tracking-wider mb-1">
                      The Measured Outcome
                    </h3>
                    <p className="text-sm text-green-text/90 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-cream p-6 sm:p-8 rounded-2xl border border-line space-y-6">
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-text-dim mb-3">
                    Verified Performance Metrics
                  </h4>
                  <div className="space-y-3">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-center bg-panel px-4 py-3 rounded-xl border border-line/60"
                      >
                        <span className="text-xs text-text-dim font-medium">{m.label}</span>
                        <span className="font-display font-bold text-base text-forest">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-text-dim mb-3">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-panel text-forest font-mono px-3 py-1.5 rounded-lg border border-line"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="block text-center w-full py-3 rounded-xl bg-forest text-cream font-bold text-sm hover:bg-forest-soft transition-colors"
                  >
                    {t.nav.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
