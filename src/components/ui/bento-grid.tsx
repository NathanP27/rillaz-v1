import React from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-2xl hover:shadow-yellow-500/10 transition duration-300 p-6 bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between space-y-4 overflow-hidden relative backdrop-blur-sm",
        className
      )}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-bold tracking-wider uppercase text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
          {badge}
        </div>
      )}
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 z-10">
        {icon && <div className="mb-2 text-yellow-400">{icon}</div>}
        <div className="font-extrabold text-xl text-white mb-2 tracking-wide uppercase">
          {title}
        </div>
        <div className="font-normal text-zinc-400 text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
