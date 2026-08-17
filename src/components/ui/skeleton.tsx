import React from "react";
import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-xl bg-zinc-900/80 border border-zinc-800/60 relative overflow-hidden",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-zinc-800/30 before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

export function BentoSkeleton() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto mb-14 text-center space-y-4">
        <Skeleton className="h-4 w-44 mx-auto rounded-full" />
        <Skeleton className="h-10 w-96 max-w-full mx-auto" />
        <Skeleton className="h-5 w-[500px] max-w-full mx-auto" />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skeleton className="md:col-span-2 h-[360px]" />
        <Skeleton className="md:col-span-1 h-[360px]" />
        <Skeleton className="md:col-span-1 h-[280px]" />
        <Skeleton className="md:col-span-2 h-[280px]" />
        <Skeleton className="md:col-span-1 h-[280px]" />
        <Skeleton className="md:col-span-2 h-[280px]" />
      </div>
    </div>
  );
}

export function PricingSkeleton() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-14">
        <Skeleton className="h-4 w-44 mx-auto rounded-full" />
        <Skeleton className="h-10 w-96 max-w-full mx-auto" />
        <Skeleton className="h-5 w-[450px] max-w-full mx-auto" />
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Skeleton className="h-[460px] rounded-2xl" />
        <Skeleton className="h-[460px] rounded-2xl" />
      </div>
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <div className="py-20 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center space-y-3">
        <Skeleton className="h-4 w-36 mx-auto rounded-full" />
        <Skeleton className="h-9 w-64 mx-auto" />
      </div>
      <div className="flex space-x-4 max-w-7xl mx-auto px-4">
        <Skeleton className="w-80 h-44 shrink-0 rounded-2xl" />
        <Skeleton className="w-80 h-44 shrink-0 rounded-2xl hidden sm:block" />
        <Skeleton className="w-80 h-44 shrink-0 rounded-2xl hidden md:block" />
      </div>
    </div>
  );
}
