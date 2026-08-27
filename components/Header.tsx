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
    <header className={`sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-line transition-all ${fontClass}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1">
          <span className="font-display font-extrabold text-2xl tracking-tight text-forest">
            Fillex360<span className="text-terracotta">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            {t.nav.work}
          </Link>
          <Link
            href="/approach"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            {t.nav.approach}
          </Link>
          <Link
            href="/#packages"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            {t.nav.packages}
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            {t.nav.contact}
          </Link>
        </nav>

        {/* Language Toggle & CTA Pill */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-forest text-cream font-medium text-sm hover:bg-forest-soft transition-all duration-200 shadow-sm hover:shadow"
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile Toggle & Menu Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-forest focus:outline-none"
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
            className="md:hidden bg-panel border-b border-line px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              <Link
                href="/work"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                {t.nav.work}
              </Link>
              <Link
                href="/approach"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                {t.nav.approach}
              </Link>
              <Link
                href="/#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                {t.nav.packages}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                {t.nav.contact}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-forest text-cream font-medium text-sm text-center mt-2 shadow"
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
