"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, fontClass } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all overflow-visible drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] ${fontClass}`}>
      {/* Flat White Bar */}
      <div
        className={`bg-white flex items-center justify-between px-6 md:px-8 transition-all duration-200 ease-out ${
          scrolled ? "pb-2.5 pt-2.5" : "pb-0 pt-4 md:pt-5"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo with smaller "360" in vibrant orange */}
          <Link href="/" className="group flex items-center gap-0.5">
            <span className="font-display font-black text-2xl md:text-3xl tracking-tight text-ink">
              Fillex<span className="text-orange text-lg md:text-xl font-black align-baseline ml-0.5">360</span>
              <span className="text-orange font-black text-2xl md:text-3xl">.</span>
            </span>
          </Link>

          {/* Desktop Nav - High Contrast Bold Typography */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/work"
              className="font-display font-extrabold text-base tracking-wide text-ink hover:text-orange transition-colors relative py-1 group"
            >
              {t.nav.work}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/approach"
              className="font-display font-extrabold text-base tracking-wide text-ink hover:text-orange transition-colors relative py-1 group"
            >
              {t.nav.approach}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/#packages"
              className="font-display font-extrabold text-base tracking-wide text-ink hover:text-orange transition-colors relative py-1 group"
            >
              {t.nav.packages}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link
              href="/contact"
              className="font-display font-extrabold text-base tracking-wide text-ink hover:text-orange transition-colors relative py-1 group"
            >
              {t.nav.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-200 group-hover:w-full" />
            </Link>
          </nav>

          {/* Language Toggle & CTA Pill */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-orange text-white font-black text-sm hover:bg-orange-hover transition-all duration-200 shadow-md shadow-orange/20 hover:shadow-lg hover:shadow-orange/30"
              >
                {t.nav.cta}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Toggle & Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* SVG Wavy Bottom Edge — absolutely positioned so it overhangs below without consuming layout height */}
      <div
        className={`absolute left-0 right-0 bottom-0 pointer-events-none translate-y-full transition-all duration-200 ease-out`}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className={`block w-full transition-all duration-200 ease-out ${
            scrolled ? "h-[50px]" : "h-[90px]"
          }`}
        >
          <path
            d="M0,10 C90,70 90,90 180,90 C270,90 270,20 360,20 C450,20 450,85 540,85 C630,85 630,30 720,30 C810,30 810,70 900,70 C990,70 990,25 1080,25 C1170,25 1170,15 1260,15 C1330,15 1380,5 1440,5 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-line px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-extrabold text-lg text-ink hover:text-orange py-1"
              >
                {t.nav.work}
              </Link>
              <Link
                href="/approach"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-extrabold text-lg text-ink hover:text-orange py-1"
              >
                {t.nav.approach}
              </Link>
              <Link
                href="/#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-extrabold text-lg text-ink hover:text-orange py-1"
              >
                {t.nav.packages}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display font-extrabold text-lg text-ink hover:text-orange py-1"
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-orange text-white font-extrabold text-sm text-center mt-2 shadow-md shadow-orange/20"
              >
                {t.nav.cta}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
