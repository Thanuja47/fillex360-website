"use client";

import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactPage() {
  const { t, fontClass } = useLanguage();

  return (
    <div className={`py-16 md:py-24 bg-dark text-white min-h-[85vh] flex items-center ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-orange bg-orange/10 px-3 py-1 rounded-full border border-orange/30">
            {t.nav.contact}
          </span>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            {t.contact.titlePre}
            <span className="text-orange italic font-semibold">{t.contact.titleHighlight}</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
            {t.contact.desc}
          </p>

          <div className="space-y-4 pt-4 border-t border-dark-border text-sm text-slate-300">
            <div>
              <strong className="text-white block mb-1">Office Locations:</strong>
              <p>Fort District, Galle 80000, Sri Lanka</p>
              <p>Colombo 03, Western Province, Sri Lanka</p>
            </div>
            <div className="pt-2">
              <strong className="text-white block mb-1">Direct Inquiries:</strong>
              <p className="font-mono text-white">hello@fillex360.com</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
