"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactForm() {
  const { t, fontClass } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
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
          <h3 className="font-display font-bold text-2xl text-ink">
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
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-dim mb-2">
              {t.contact.namePh}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t.contact.namePh}
              className="w-full px-4 py-3.5 rounded-xl bg-background border border-line focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all text-sm text-ink placeholder:text-text-dim/40"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-dim mb-2">
              {t.contact.emailPh}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t.contact.emailPh}
              className="w-full px-4 py-3.5 rounded-xl bg-background border border-line focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all text-sm text-ink placeholder:text-text-dim/40"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-dim mb-2">
              {t.contact.messagePh}
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contact.messagePh}
              className="w-full px-4 py-3.5 rounded-xl bg-background border border-line focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all text-sm text-ink placeholder:text-text-dim/40 resize-none"
            />
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 rounded-xl bg-orange text-white font-bold text-sm hover:bg-orange-hover disabled:opacity-50 transition-all shadow-lg hover:shadow-orange/20 text-center cursor-pointer"
          >
            {status === "loading" ? "Submitting..." : `${t.contact.send} →`}
          </button>
        </form>
      )}
    </div>
  );
}
