"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, fontClass } = useLanguage();

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-line/90 transition-all ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
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
