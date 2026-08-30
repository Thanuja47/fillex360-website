"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa6";

const socials = [
  { icon: FaInstagram, href: "https://instagram.com/fillex360", label: "Instagram", color: "#E1306C" },
  { icon: FaFacebookF, href: "https://facebook.com/fillex360", label: "Facebook", color: "#1877F2" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/company/fillex360", label: "LinkedIn", color: "#0A66C2" },
  { icon: FaTiktok, href: "https://tiktok.com/@fillex360", label: "TikTok", color: "#000000" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function SocialLinks() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center gap-3">
        {socials.map(({ icon: Icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ backgroundColor: color, boxShadow: `0 4px 16px ${color}55` }}
            />
            <Icon
              size={16}
              className="relative z-10 text-slate-400 group-hover:text-white transition-all duration-300 group-hover:rotate-[8deg]"
            />
          </a>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex items-center gap-3"
    >
      {socials.map(({ icon: Icon, href, label, color }) => (
        <motion.a
          key={label}
          variants={itemVariants}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-0.5"
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ backgroundColor: color, boxShadow: `0 4px 16px ${color}55` }}
          />
          <Icon
            size={16}
            className="relative z-10 text-slate-400 group-hover:text-white transition-all duration-300 group-hover:rotate-[8deg]"
          />
        </motion.a>
      ))}
    </motion.div>
  );
}
