import React from "react";
import { gymStats } from "@/config/site";
import { NumberTicker } from "@/components/ui/number-ticker";

export const GymStatsSection = () => {
  return (
    <section className="bg-[#0f0f12] border-b border-white/[0.05] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {gymStats.map((stat, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col items-center justify-center text-center p-5 sm:p-6 rounded-2xl bg-[#18181b] border border-white/[0.07] overflow-hidden transition-all duration-300 hover:border-yellow-500/25 hover:shadow-[0_8px_32px_rgba(234,179,8,0.06)]"
          >
            {/* Top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            {/* Ambient glow on hover */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(234,179,8,0.06),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative text-3xl sm:text-4xl font-black text-white mb-1.5 tracking-tight">
              <NumberTicker
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="relative text-[10px] sm:text-xs font-black uppercase tracking-widest text-yellow-400/80 group-hover:text-yellow-400 transition-colors duration-200">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
