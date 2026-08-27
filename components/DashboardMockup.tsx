"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function DashboardMockup() {
  const { t, fontClass } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`bg-dark-card rounded-2xl p-6 shadow-2xl border border-dark-border text-slate-200 relative overflow-hidden ${fontClass}`}
    >
      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-dark-border pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-orange" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-xs font-mono text-slate-400">
            fillex360://analytics-v2.live
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-orange/10 border border-orange/30 px-2.5 py-1 rounded-full text-orange font-medium">
            {t.dashboard.live}
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-dark p-4 rounded-xl border border-dark-border">
          <div className="text-xs text-slate-400 mb-1 font-medium">{t.dashboard.onTimePayments}</div>
          <div className="text-xl font-bold font-display text-white">LKR 4,820,000</div>
          <div className="text-xs text-orange mt-1 flex items-center gap-1 font-medium">
            <span>↑ 18.4%</span>
            <span className="text-slate-500">vs last month</span>
          </div>
        </div>
        <div className="bg-dark p-4 rounded-xl border border-dark-border">
          <div className="text-xs text-slate-400 mb-1 font-medium">{t.dashboard.activeStudents}</div>
          <div className="text-xl font-bold font-display text-white">10,480+</div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <span>✓ Verified</span>
            <span className="text-slate-500">0 downtime alerts</span>
          </div>
        </div>
      </div>

      {/* Visual Bar Chart */}
      <div className="bg-dark p-4 rounded-xl border border-dark-border mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold text-slate-200">Transaction Volume (24h)</span>
          <span className="text-xs text-orange font-medium">Live Gateway</span>
        </div>
        <div className="flex items-end gap-2 h-28 pt-4 justify-between px-2">
          {[40, 65, 45, 80, 55, 95, 70, 85, 100, 75, 90, 85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="w-full bg-gradient-to-t from-dark-border to-orange rounded-t-sm opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Latest Verified Events
        </div>
        <div className="flex items-center justify-between text-xs bg-dark px-3 py-2 rounded-lg border border-dark-border">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            PayHere Webhook #8921
          </span>
          <span className="font-mono text-orange">LKR 45,000.00 — Success</span>
        </div>
        <div className="flex items-center justify-between text-xs bg-dark px-3 py-2 rounded-lg border border-dark-border">
          <span className="text-slate-300 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            STCW Cert Sync (OceanCrew)
          </span>
          <span className="font-mono text-slate-400">Auto-validated</span>
        </div>
      </div>
    </motion.div>
  );
}
