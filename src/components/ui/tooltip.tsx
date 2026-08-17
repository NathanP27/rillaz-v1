"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Global tracker for adjacent tooltip hover state
let globalTooltipHovered = false;
let globalHoverTimeout: NodeJS.Timeout | null = null;

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  className?: string;
  delayMs?: number;
}

export function Tooltip({
  content,
  children,
  side = "top",
  className = "",
  delayMs = 250,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInstant, setIsInstant] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (globalTooltipHovered) {
      setIsInstant(true);
      setIsOpen(true);
    } else {
      setIsInstant(false);
      timerRef.current = setTimeout(() => {
        setIsOpen(true);
        globalTooltipHovered = true;
      }, delayMs);
    }
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsOpen(false);

    if (globalHoverTimeout) clearTimeout(globalHoverTimeout);
    globalHoverTimeout = setTimeout(() => {
      globalTooltipHovered = false;
    }, 400);
  };

  const getSideStyles = () => {
    switch (side) {
      case "top":
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 origin-bottom";
      case "bottom":
        return "top-full mt-2 left-1/2 -translate-x-1/2 origin-top";
      case "left":
        return "right-full mr-2 top-1/2 -translate-y-1/2 origin-right";
      case "right":
        return "left-full ml-2 top-1/2 -translate-y-1/2 origin-left";
      default:
        return "bottom-full mb-2 left-1/2 -translate-x-1/2 origin-bottom";
    }
  };

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{
              duration: isInstant ? 0 : 0.125,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "absolute z-50 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700/80 text-[11px] font-bold text-zinc-200 shadow-xl whitespace-nowrap pointer-events-none backdrop-blur-md",
              getSideStyles(),
              className
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
