"use client";

import { motion, useReducedMotion } from "framer-motion";
import React, { useState, useEffect } from "react";

/**
 * SSR-safe wrapper around Framer Motion's useReducedMotion.
 * Always returns false on the first render (matching the server snapshot),
 * then syncs to the real OS preference after hydration to avoid mismatches.
 */
function useSafeReducedMotion(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before mount, behave as if motion is enabled (SSR default).
  return mounted ? (prefersReducedMotion ?? false) : false;
}

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const shouldReduceMotion = useSafeReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 0 };
    switch (direction) {
      case "up":
        return { y: 16, scale: 0.97, opacity: 0 };
      case "down":
        return { y: -16, scale: 0.97, opacity: 0 };
      case "left":
        return { x: -16, scale: 0.97, opacity: 0 };
      case "right":
        return { x: 16, scale: 0.97, opacity: 0 };
      case "none":
        return { opacity: 0, scale: 0.97 };
      default:
        return { y: 16, scale: 0.97, opacity: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
