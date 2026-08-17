"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function CardSpotlight({
  children,
  className = "",
  spotlightColor = "rgba(234, 179, 8, 0.12)",
  ...props
}: CardSpotlightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 bg-zinc-900/80 border border-zinc-800/90 overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-yellow-500/40 hover:shadow-2xl hover:shadow-yellow-500/10 group",
        className
      )}
      {...props}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />

      {/* Subtle Ambient Top Border Highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
