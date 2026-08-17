import type { Metadata } from "next";
import Link from "next/link";
import { Dumbbell, Home, Compass } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "404 Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-zinc-950 px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden text-center">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a08_1px,transparent_1px),linear-gradient(to_bottom,#27272a08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-yellow-500/30 text-yellow-400 text-xs font-black uppercase tracking-widest backdrop-blur-md">
          <Compass className="w-4 h-4 text-yellow-400 animate-spin" style={{ animationDuration: "12s" }} />
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        {/* 404 Number */}
        <div className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 tracking-tighter drop-shadow-[0_0_35px_rgba(234,179,8,0.3)]">
          404
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
          LOST IN THE GYM?
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          The page you're looking for doesn't exist, was renamed, or got rerouted during a heavy lifting set.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link href="/">
            <ShimmerButton className="w-full sm:w-auto text-xs py-3.5 px-8 font-black flex items-center space-x-2">
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </ShimmerButton>
          </Link>
          <Link
            href="/programs"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold uppercase tracking-wider text-xs transition-all duration-200 hover:border-zinc-500"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </div>
  );
}
