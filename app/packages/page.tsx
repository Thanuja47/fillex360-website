"use client";

import PackagesGrid from "@/components/PackagesGrid";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PackagesPage() {
  const { t, fontClass } = useLanguage();

  return (
    <div className={`py-12 bg-background ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6">
        <Reveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-4 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-orange bg-orange-soft px-3.5 py-1.5 rounded-full border border-orange/20 inline-block">
              {t.packagesSection.eyebrow}
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-ink tracking-tight">
              {t.packagesSection.title}
            </h1>
            <p className="text-lg text-text-dim leading-relaxed font-medium">
              {t.packagesSection.desc}
            </p>
          </div>
        </Reveal>
        <PackagesGrid />
      </div>
    </div>
  );
}
