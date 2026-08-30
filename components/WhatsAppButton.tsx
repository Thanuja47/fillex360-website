"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+94770000000";
  const defaultMessage = encodeURIComponent(
    "Hi Fillex360 Solutions! I visited your website and would like to discuss a software project for my business."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white flex items-center justify-center border border-line/60 cursor-pointer group transition-all duration-200 shadow-[0_4px_12px_rgba(37,211,102,0.35),0_2px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5),0_2px_8px_rgba(0,0,0,0.15)] ${
        shouldReduceMotion ? "" : "animate-[whatsappPulse_2.5s_ease-out_infinite]"
      }`}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute right-full mr-3 bg-dark text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-dark-border">
        Chat with us on WhatsApp
      </span>
      <FaWhatsapp size={28} color="#25D366" />
    </motion.a>
  );
}
