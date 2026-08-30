"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Loader2, Check } from "lucide-react";

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

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

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
    <div className={`bg-white border border-line rounded-3xl p-6 sm:p-10 shadow-2xl text-ink ${fontClass}`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        {formData.selectedPackage && (
          <div className="bg-orange-soft p-4 rounded-2xl border border-orange/30 text-xs">
            <span className="font-bold text-orange uppercase tracking-wider block mb-1">
              {t.contact.selectedPackageLabel}
            </span>
            <span className="font-bold text-ink">{formData.selectedPackage}</span>
          </div>
        )}

        {/* Floating Label Field 1: Name */}
        <div className="relative">
          <input
            type="text"
            id="contact-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange focus:bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(255,85,0,0.15)]"
          />
          <label
            htmlFor="contact-name"
            className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-orange peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider pointer-events-none"
          >
            {t.contact.namePh}
          </label>
        </div>

        {/* Floating Label Field 2: Email */}
        <div className="relative">
          <input
            type="email"
            id="contact-email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange focus:bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(255,85,0,0.15)]"
          />
          <label
            htmlFor="contact-email"
            className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-orange peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider pointer-events-none"
          >
            {t.contact.emailPh}
          </label>
        </div>

        {/* Floating Label Field 3: Message */}
        <div className="relative">
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder=" "
            className="peer w-full px-4 pt-6 pb-2 rounded-2xl bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-orange focus:bg-white transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(255,85,0,0.15)] resize-none"
          />
          <label
            htmlFor="contact-message"
            className="absolute left-4 top-4 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-black peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-orange peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:font-black peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider pointer-events-none"
          >
            {t.contact.messagePh}
          </label>
        </div>

        {status === "error" && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-semibold">
            {errorMessage}
          </div>
        )}

        <motion.button
          type="submit"
          disabled={status === "loading"}
          animate={status === "success" ? { scale: [1, 1.04, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
          className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer ${
            status === "success"
              ? "bg-emerald-600 text-white shadow-emerald-600/20"
              : "bg-orange text-white hover:bg-orange-hover shadow-orange/20 hover:shadow-orange/30 disabled:opacity-50"
          }`}
        >
          {status === "loading" && (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending message...</span>
            </>
          )}

          {status === "success" && (
            <>
              <Check className="w-5 h-5 stroke-[3]" />
              <span>{t.contact.sent}</span>
            </>
          )}

          {status === "idle" && (
            <>
              <span>{t.contact.send}</span>
              <span>→</span>
            </>
          )}

          {status === "error" && (
            <>
              <span>{t.contact.send}</span>
              <span>→</span>
            </>
          )}
        </motion.button>
      </form>
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
