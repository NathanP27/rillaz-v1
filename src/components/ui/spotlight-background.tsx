"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function SpotlightBackground({
  children,
  className = "",
}: SpotlightBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden bg-zinc-950", className)}>
      {/* Ambient Moving Radial Spotlights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.14)_0%,rgba(11,12,14,0)_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(234,179,8,0.06)_0%,transparent_60%)] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(234,179,8,0.06)_0%,transparent_60%)] blur-[120px]" />

      {/* Grid Pattern Overlay with Radial Masking */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a0a_1px,transparent_1px),linear-gradient(to_bottom,#27272a0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {children}
    </div>
  );
}
