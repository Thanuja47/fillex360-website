"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+94770000000";
  const defaultMessage = encodeURIComponent(
    "Hi Fillex360 Solutions! I visited your website and would like to discuss a software project for my business."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-white p-3 rounded-full shadow-2xl flex items-center justify-center border border-line cursor-pointer group hover:border-[#25D366] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute right-full mr-3 bg-dark text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-dark-border">
        Chat with us on WhatsApp
      </span>
      <FaWhatsapp className="w-7 h-7 text-[#25D366]" />
    </motion.a>
  );
}
