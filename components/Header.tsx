"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-line transition-all">
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
            Work
          </Link>
          <Link
            href="/approach"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            Approach
          </Link>
          <Link
            href="/#packages"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            Packages
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-ink/80 hover:text-forest transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Pill */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-forest text-cream font-medium text-sm hover:bg-forest-soft transition-all duration-200 shadow-sm hover:shadow"
          >
            Start a project →
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-forest focus:outline-none"
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
                Work
              </Link>
              <Link
                href="/approach"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                Approach
              </Link>
              <Link
                href="/#packages"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                Packages
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink hover:text-forest py-1"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-forest text-cream font-medium text-sm text-center mt-2 shadow"
              >
                Start a project →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
