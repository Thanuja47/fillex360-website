"use client";

import { motion } from "framer-motion";

export default function Announcement() {
  return (
    <div className="bg-forest text-green-text px-4 py-2.5 text-center text-xs md:text-sm font-medium border-b border-forest-soft/40 relative z-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center justify-center gap-2 max-w-7xl mx-auto"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-terracotta animate-pulse" />
        <span>
          Every system we ship is tested with real payments before handover —{" "}
          <strong className="text-white font-semibold">no exceptions.</strong>
        </span>
      </motion.div>
    </div>
  );
}
