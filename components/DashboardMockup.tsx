"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DashboardMockup() {
  const { t, fontClass } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`bg-dark-card rounded-2xl p-6 shadow-2xl shadow-orange/10 border border-dark-border text-slate-200 relative overflow-hidden group ${fontClass}`}
    >
      {/* Background Subtle Gradient Pulse */}
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-orange/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange/20 transition-all duration-500" />

      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-dark-border pb-4 mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-orange cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-amber-500 cursor-pointer" />
          <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-emerald-500 cursor-pointer" />
          <span className="ml-2 text-xs font-mono text-slate-400">
            fillex360://analytics-v2.live
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-orange/10 border border-orange/30 px-2.5 py-1 rounded-full text-orange font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-ping" />
            {t.dashboard.live}
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-dark p-4 rounded-xl border border-dark-border hover:border-orange/40 transition-all duration-300"
        >
          <div className="text-xs text-slate-400 mb-1 font-medium">{t.dashboard.onTimePayments}</div>
          <div className="text-xl font-bold font-display text-white tracking-tight">LKR 4,820,000</div>
          <div className="text-xs text-orange mt-1 flex items-center gap-1 font-medium">
            <span className="animate-bounce">↑</span>
            <span>18.4% vs last month</span>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-dark p-4 rounded-xl border border-dark-border hover:border-emerald-500/40 transition-all duration-300"
        >
          <div className="text-xs text-slate-400 mb-1 font-medium">{t.dashboard.activeStudents}</div>
          <div className="text-xl font-bold font-display text-white tracking-tight">10,480+</div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <span>✓ Verified</span>
            <span className="text-slate-500">0 downtime</span>
          </div>
        </motion.div>
      </div>

      {/* Visual Bar Chart */}
      <div className="bg-dark p-4 rounded-xl border border-dark-border mb-4 relative z-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold text-slate-200">Transaction Volume (24h)</span>
          <span className="text-xs text-orange font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            Live Gateway
          </span>
        </div>
        <div className="flex items-end gap-2 h-28 pt-4 justify-between px-2">
          {[40, 65, 45, 80, 55, 95, 70, 85, 100, 75, 90, 85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{
                duration: 0.8,
                delay: 0.3 + 0.05 * i,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scaleY: 1.1, backgroundColor: "#FF5500" }}
              className="w-full bg-gradient-to-t from-dark-border via-orange/60 to-orange rounded-t-sm opacity-90 transition-all duration-200 cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="space-y-2 relative z-10">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Latest Verified Events
        </div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-between text-xs bg-dark px-3 py-2 rounded-lg border border-dark-border hover:border-orange/30 transition-colors"
        >
          <span className="text-slate-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
            PayHere Webhook #8921
          </span>
          <span className="font-mono text-orange font-semibold">LKR 45,000.00 — Success</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-between text-xs bg-dark px-3 py-2 rounded-lg border border-dark-border hover:border-emerald-500/30 transition-colors"
        >
          <span className="text-slate-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            STCW Cert Sync (OceanCrew)
          </span>
          <span className="font-mono text-slate-400">Auto-validated</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
