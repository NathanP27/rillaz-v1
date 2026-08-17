import React from "react";
import { CheckCircle2, ShieldCheck, Clock, MapPin } from "lucide-react";

interface TrustBadgesProps {
  className?: string;
  variant?: "horizontal" | "vertical" | "grid";
}

export const TrustBadges = ({
  className = "",
  variant = "horizontal",
}: TrustBadgesProps) => {
  const items = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />,
      text: "No lock-in contracts or hidden fees",
    },
    {
      icon: <Clock className="w-4 h-4 text-yellow-400 shrink-0" />,
      text: "Daily walk-ins welcome (8:00 AM – 9:00 PM)",
    },
    {
      icon: <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />,
      text: "Located at 91 Saudi Arabia St, Parañaque",
    },
  ];

  if (variant === "vertical") {
    return (
      <div className={`space-y-2.5 pt-4 text-xs font-semibold text-zinc-300 ${className}`}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-semibold text-zinc-300 ${className}`}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-2 bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs font-semibold text-zinc-300 ${className}`}>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-2">
          {item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};
