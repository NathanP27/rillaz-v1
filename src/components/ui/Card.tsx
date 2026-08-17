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
        "rounded-2xl p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm transition-all duration-300",
        hoverEffect && "hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/5 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
