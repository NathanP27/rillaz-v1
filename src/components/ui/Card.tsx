import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 bg-[#18181b] border border-white/[0.07] backdrop-blur-sm transition-all duration-300 overflow-hidden",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:pointer-events-none",
        hoverEffect && "hover:border-yellow-500/30 hover:shadow-[0_8px_40px_rgba(234,179,8,0.08),0_0_0_1px_rgba(234,179,8,0.08)] hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
