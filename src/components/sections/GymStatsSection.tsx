import React from "react";
import { gymStats } from "@/config/site";
import { NumberTicker } from "@/components/ui/number-ticker";

export const GymStatsSection = () => {
  return (
    <section className="bg-zinc-900 border-b border-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {gymStats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80"
          >
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">
              <NumberTicker
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-yellow-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
