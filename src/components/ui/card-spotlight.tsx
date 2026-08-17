"use client";

import React, { useState, useRef, useCallback } from "react";
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
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current);
    // Capture values synchronously before the rAF callback fires
    const clientX = e.clientX;
    const clientY = e.clientY;
    const rect = e.currentTarget.getBoundingClientRect();
    rafRef.current = requestAnimationFrame(() => {
      setPosition({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    });
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        cancelAnimationFrame(rafRef.current);
        setIsHovered(false);
      }}
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 bg-[#18181b] border border-white/[0.07] overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-yellow-500/30 hover:shadow-[0_8px_40px_rgba(234,179,8,0.07),0_0_0_1px_rgba(234,179,8,0.08)] group",
        "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:pointer-events-none",
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
