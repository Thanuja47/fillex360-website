"use client";

import { motion } from "framer-motion";

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-forest rounded-2xl p-6 shadow-2xl border border-forest-soft/60 text-green-text relative overflow-hidden"
    >
      {/* Top Header Mockup */}
      <div className="flex items-center justify-between border-b border-forest-soft pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-terracotta/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-text-dim/80">
            fillex360://analytics-v2.live
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-forest-soft px-2.5 py-1 rounded-full text-cream font-medium">
            System Live
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-forest-soft/40 p-4 rounded-xl border border-forest-soft/50">
          <div className="text-xs text-text-dim mb-1 font-medium">Monthly Revenue</div>
          <div className="text-xl font-bold font-display text-white">LKR 4,820,000</div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <span>↑ 18.4%</span>
            <span className="text-text-dim/60">vs last month</span>
          </div>
        </div>
        <div className="bg-forest-soft/40 p-4 rounded-xl border border-forest-soft/50">
          <div className="text-xs text-text-dim mb-1 font-medium">System Uptime</div>
          <div className="text-xl font-bold font-display text-white">99.98%</div>
          <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-medium">
            <span>✓ Verified</span>
            <span className="text-text-dim/60">0 downtime alerts</span>
          </div>
        </div>
      </div>

      {/* Visual Bar Chart */}
      <div className="bg-forest-soft/30 p-4 rounded-xl border border-forest-soft/40 mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold text-cream">Transaction Volume (24h)</span>
          <span className="text-xs text-terracotta font-medium">Live Gateway</span>
        </div>
        <div className="flex items-end gap-2 h-28 pt-4 justify-between px-2">
          {[40, 65, 45, 80, 55, 95, 70, 85, 100, 75, 90, 85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="w-full bg-gradient-to-t from-forest-soft to-terracotta rounded-t-sm opacity-90 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Recent Activity Log */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-2">
          Latest Verified Events
        </div>
        <div className="flex items-center justify-between text-xs bg-forest-soft/20 px-3 py-2 rounded-lg">
          <span className="text-cream flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            PayHere Webhook #8921
          </span>
          <span className="font-mono text-emerald-300">LKR 45,000.00 — Success</span>
        </div>
        <div className="flex items-center justify-between text-xs bg-forest-soft/20 px-3 py-2 rounded-lg">
          <span className="text-cream flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            STCW Cert Sync (OceanCrew)
          </span>
          <span className="font-mono text-text-dim">Auto-validated</span>
        </div>
      </div>
    </motion.div>
  );
}
