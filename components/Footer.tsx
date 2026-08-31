"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t, fontClass } = useLanguage();

  return (
    <footer className={`bg-dark border-t border-dark-border text-slate-400 py-16 ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block font-display font-extrabold text-2xl tracking-tight text-white">
              Fillex360<span className="text-orange">.</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              High-performance software studio based in Colombo and Galle, Sri Lanka. Building production web systems for education, healthcare, and maritime fleets.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  {t.nav.work}
                </Link>
              </li>
              <li>
                <Link href="/approach" className="hover:text-white transition-colors">
                  {t.nav.approach}
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-white transition-colors">
                  {t.nav.packages}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Offices & Location
            </h4>
            <div className="text-sm text-slate-400 leading-relaxed space-y-2 font-normal">
              <p><strong className="text-white font-bold">Galle Studio:</strong> Fort District, Galle 80000, Sri Lanka</p>
              <p><strong className="text-white font-bold">Colombo Hub:</strong> Colombo 03, Western Province, Sri Lanka</p>
              <p className="text-xs text-slate-500 pt-2 font-mono">
                Direct Email: <a href="mailto:fillex360solutions@gmail.com" className="text-white underline hover:text-orange transition-colors">fillex360solutions@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Row with Copyright and Social Links */}
        <Reveal delay={0.2}>
          <div className="pt-8 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-xs text-slate-500 font-mono">
              {t.footer.copyright}
            </div>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
