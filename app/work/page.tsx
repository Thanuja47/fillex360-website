"use client";

import { projects } from "@/lib/projects";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  const { t, fontClass } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const tagContainerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
  };

  const tagItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
  };

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
                className={`bg-white rounded-[28px] p-8 sm:p-12 ${appleShadow} grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28 transition-all duration-300 ease-out group`}
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange-soft px-3 py-1 rounded-full border border-orange/20">
                      {project.tag}
                    </span>
                    <span className="text-xs text-text-dim font-medium">{project.meta}</span>
                  </div>

                  <h2 className="font-display font-extrabold text-3xl text-ink group-hover:text-orange transition-colors">
                    {project.name}
                  </h2>

                  <p className="text-base text-text-dim leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem -> Outcome breakdown */}
                  <div className="space-y-4 pt-2">
                    <div className="bg-background p-5 rounded-2xl border border-line">
                      <h3 className="font-display font-bold text-xs text-orange uppercase tracking-wider mb-1">
                        The Operational Challenge
                      </h3>
                      <p className="text-sm text-ink/80 leading-relaxed font-medium">{project.problem}</p>
                    </div>

                    <div className="bg-dark text-white p-5 rounded-2xl border border-dark-border">
                      <h3 className="font-display font-bold text-xs text-orange uppercase tracking-wider mb-1">
                        The Measured Outcome
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-background p-6 sm:p-8 rounded-2xl border border-line space-y-6">
                  <div>
                    <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-text-dim mb-3">
                      Verified Performance Metrics
                    </h4>
                    <div className="space-y-3">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center bg-white px-4 py-3 rounded-xl border border-line"
                        >
                          <span className="text-xs text-text-dim font-medium">{stat.label}</span>
                          <span className="font-display font-bold text-base text-orange">
                            <StatCounter
                              value={stat.value}
                              prefix={stat.prefix}
                              suffix={stat.suffix}
                              decimals={stat.decimals}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-extrabold text-xs uppercase tracking-wider text-text-dim mb-3">
                      Technology Stack
                    </h4>
                    {shouldReduceMotion ? (
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-white text-ink font-mono px-3 py-1.5 rounded-lg border border-line"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={tagContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                      >
                        {project.stack.map((tech) => (
                          <motion.span
                            key={tech}
                            variants={tagItemVariants}
                            className="text-xs bg-white text-ink font-mono px-3 py-1.5 rounded-lg border border-line"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-orange text-white font-extrabold text-sm hover:bg-orange-hover transition-colors shadow-md group/btn"
                    >
                      <span>{t.nav.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
