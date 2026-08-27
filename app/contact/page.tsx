import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Fillex360 Solutions",
  description: "Start a software project with Fillex360 Solutions. Request a quote or schedule a technical call.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-forest text-cream min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Side */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-terracotta bg-terracotta-soft/20 px-3 py-1 rounded-full border border-terracotta/30">
            Direct Studio Contact
          </span>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-cream tracking-tight leading-tight">
            Let's discuss your next <span className="text-terracotta italic font-semibold">software release.</span>
          </h1>

          <p className="text-green-text/80 text-base sm:text-lg leading-relaxed max-w-xl">
            Fill out the form with your project goals, desired launch timeframe, or technical requirements. We review every message personally.
          </p>

          <div className="space-y-4 pt-4 border-t border-forest-soft text-sm text-green-text">
            <div>
              <strong className="text-cream block mb-1">Office Locations:</strong>
              <p>Fort District, Galle 80000, Sri Lanka</p>
              <p>Colombo 03, Western Province, Sri Lanka</p>
            </div>
            <div className="pt-2">
              <strong className="text-cream block mb-1">Direct Inquiries:</strong>
              <p className="font-mono text-cream">hello@fillex360.com</p>
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
