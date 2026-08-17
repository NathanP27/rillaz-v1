import React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#EAB308",
      shimmerSize = "0.1em",
      shimmerDuration = "2.5s",
      borderRadius = "9999px",
      background = "rgba(24, 24, 27, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        style={
          {
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-yellow-500/25 px-6 py-3 font-extrabold uppercase tracking-wider text-yellow-400 [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-200 ease-out hover:border-yellow-400/60 hover:text-yellow-300 hover:shadow-[0_0_28px_rgba(234,179,8,0.35),0_0_8px_rgba(234,179,8,0.15)] active:scale-[0.97] active:shadow-none",
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]"
          )}
        >
          <div className="absolute inset-0 h-[100cqh] animate-shimmer-spin [aspect-ratio:1] [border-radius:0] [inset:0_auto_auto_0] [background:radial-gradient(circle_at_50%_50%,var(--shimmer-color)_0%,transparent_60%)]" />
        </div>
        {children}

        {/* Highlight overlay */}
        <div className="absolute inset-0 z-10 rounded-[inherit] bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";
