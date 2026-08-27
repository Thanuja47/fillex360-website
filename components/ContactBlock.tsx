"use client";

import ContactForm from "./ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactBlock() {
  const { t, fontClass } = useLanguage();

  return (
    <section className={`py-24 bg-dark text-white ${fontClass}`} id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Callout */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full border border-orange/30">
            {t.nav.contact}
          </span>

          <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            {t.contact.titlePre}
            <span className="text-orange italic font-semibold">{t.contact.titleHighlight}</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            {t.contact.desc}
          </p>

          <div className="space-y-4 pt-4 border-t border-dark-border">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-orange text-lg font-bold">✓</span>
              <span>No pushy sales calls — talk directly with lead developers</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-orange text-lg font-bold">✓</span>
              <span>Fixed quote & milestone delivery contract provided</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="text-orange text-lg font-bold">✓</span>
              <span>Direct response within 24 business hours</span>
            </div>
          </div>
        </div>

        {/* Right Contact Form Wrapper */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
