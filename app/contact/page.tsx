"use client";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MapPin, Mail } from "lucide-react";

export default function ContactPage() {
  const { t, fontClass } = useLanguage();

  return (
    <div className={`py-16 md:py-24 bg-dark text-white min-h-[85vh] flex items-center relative overflow-hidden ${fontClass}`}>
      {/* Ambient background drift glow */}
      <div className="absolute -z-10 top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange/10 blur-[100px] animate-[drift_8s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full relative z-10">
        {/* Left Side */}
        <div className="lg:col-span-6 space-y-6">
          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange" />
              </span>
              {t.nav.contact}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              {t.contact.titlePre}
              <span className="text-orange italic font-semibold">{t.contact.titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {t.contact.desc}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-4 pt-4 border-t border-dark-border text-sm text-slate-300">
              <div>
                <strong className="text-white block mb-1 inline-flex items-center gap-1.5">
                  <MapPin size={16} className="text-orange shrink-0" />
                  Office Locations:
                </strong>
                <p className="pl-5 text-slate-400">Fort District, Galle 80000, Sri Lanka</p>
                <p className="pl-5 text-slate-400">Colombo 03, Western Province, Sri Lanka</p>
              </div>
              <div className="pt-2">
                <strong className="text-white block mb-1 inline-flex items-center gap-1.5">
                  <Mail size={16} className="text-orange shrink-0" />
                  Direct Inquiries:
                </strong>
                <p className="pl-5 font-mono text-white">hello@fillex360.com</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-6">
          <Reveal delay={0.2} y={30}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
