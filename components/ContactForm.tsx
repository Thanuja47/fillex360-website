"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ContactFormContent() {
  const { t, fontClass } = useLanguage();
  const searchParams = useSearchParams();

  const pkgParam = searchParams.get("package");
  const estimateParam = searchParams.get("estimate");
  const specsParam = searchParams.get("specs");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    selectedPackage: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (pkgParam) {
      const match = t.packagesList.find((p) => p.id === pkgParam);
      if (match) {
        setFormData((prev) => ({ ...prev, selectedPackage: `${match.name} (${match.price})` }));
      }
    } else if (estimateParam) {
      setFormData((prev) => ({
        ...prev,
        selectedPackage: `Custom Estimator Build (${estimateParam}) - ${specsParam || ""}`,
      }));
    }
  }, [pkgParam, estimateParam, specsParam, t.packagesList]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.selectedPackage
          ? `[SELECTED SPECIFICATION: ${formData.selectedPackage}]\n\n${formData.message}`
          : formData.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", selectedPackage: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit request.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <div className={`bg-white border border-line rounded-2xl p-6 sm:p-8 shadow-2xl text-ink ${fontClass}`}>
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-10 space-y-4"
        >
          <div className="w-14 h-14 bg-orange/10 text-orange rounded-full flex items-center justify-center text-2xl mx-auto font-bold border border-orange/30">
            ✓
          </div>
          <h3 className="font-display font-black text-2xl text-ink">
            {t.contact.sent}
          </h3>
          <p className="text-sm text-text-dim max-w-md mx-auto leading-relaxed">
            Thank you for reaching out to Fillex360 Solutions. Our engineering team in Galle will review your project requirements and respond within 24 hours.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="inline-flex items-center text-xs font-bold text-orange hover:underline pt-2 cursor-pointer"
          >
            Send another inquiry →
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.selectedPackage && (
            <div className="bg-orange-soft p-3.5 rounded-xl border border-orange/30 text-xs">
              <span className="font-bold text-orange uppercase tracking-wider block mb-1">
                {t.contact.selectedPackageLabel}
              </span>
              <span className="font-bold text-ink">{formData.selectedPackage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
              {t.contact.namePh}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/20 transition-all text-sm font-semibold text-slate-900 placeholder:text-slate-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
              {t.contact.emailPh}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/20 transition-all text-sm font-semibold text-slate-900 placeholder:text-slate-500 shadow-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
              {t.contact.messagePh}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you're building..."
              className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 focus:outline-none focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/20 transition-all text-sm font-semibold text-slate-900 placeholder:text-slate-500 resize-none shadow-sm"
            />
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-semibold">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-orange text-white font-extrabold text-sm hover:bg-orange-hover disabled:opacity-50 transition-all shadow-lg shadow-orange/20 hover:shadow-orange/30 text-center cursor-pointer"
          >
            {status === "loading" ? "Submitting..." : `${t.contact.send} →`}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-text-dim">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
