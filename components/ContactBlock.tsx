"use client";

import ContactForm from "./ContactForm";

export default function ContactBlock() {
  return (
    <section className="py-20 bg-forest text-cream" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Callout */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-soft/20 px-3 py-1 rounded-full border border-terracotta/30">
            Get in touch
          </span>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-cream tracking-tight leading-tight">
            Let's build something <span className="text-terracotta italic font-semibold">real.</span>
          </h2>

          <p className="text-green-text/80 text-base sm:text-lg leading-relaxed max-w-xl">
            Whether you need a full new platform, an LMS, or a custom payment workflow for your Sri Lankan business, we respond with a clear technical roadmap and timeline.
          </p>

          <div className="space-y-4 pt-4 border-t border-forest-soft">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-terracotta text-lg font-bold">✓</span>
              <span>No pushy sales calls — talk directly with lead developers</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-terracotta text-lg font-bold">✓</span>
              <span>Fixed quote & milestone delivery contract provided</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-terracotta text-lg font-bold">✓</span>
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
