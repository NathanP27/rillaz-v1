import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Flame, ShieldCheck, Dumbbell, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Real gym floor background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/565123458_1240238891457994_3695900658646377638_n.jpg"
          alt="Gymrillaz gym floor"
          fill
          priority
          quality={90}
          className="object-cover object-center scale-[1.02] transition-transform duration-[8000ms] ease-out"
          sizes="100vw"
        />
        {/* Multi-layer dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/60" />
      </div>

      {/* Radial glow accent */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(234,179,8,0.12),transparent)]" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#27272a08_1px,transparent_1px),linear-gradient(to_bottom,#27272a08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center space-y-8">
        {/* Badge */}
        <div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-black/60 border border-yellow-500/40 text-yellow-400 text-xs sm:text-sm font-extrabold uppercase tracking-wider backdrop-blur-xl shadow-2xl shadow-yellow-500/10 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <Flame className="w-4 h-4 text-yellow-400 animate-pulse" />
          <span>PARAÑAQUE'S MOST INTENSE COMMUNITY GYM</span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase text-white leading-[0.9] animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          UNLEASH YOUR{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 drop-shadow-[0_0_40px_rgba(234,179,8,0.4)]">
            INNER BEAST
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl mx-auto text-zinc-300 text-base sm:text-xl font-normal leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          No gimmicks. Heavy iron, specialized bodybuilding rigs, functional conditioning, and a relentless brotherhood of lifters in the heart of Parañaque.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link href="/contact">
            <ShimmerButton className="w-full sm:w-auto text-sm sm:text-base py-4 px-10">
              Claim Free Day Pass
            </ShimmerButton>
          </Link>
          <Link
            href="/memberships"
            className="w-full sm:w-auto px-10 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-extrabold uppercase tracking-wider text-sm sm:text-base transition-all duration-300 hover:border-white/40 text-center backdrop-blur-sm"
          >
            Explore Memberships
          </Link>
        </div>

        {/* Quick Highlights */}
        <div
          className="pt-8 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          {[
            { icon: <Dumbbell className="w-4 h-4 text-yellow-400 shrink-0" />, text: "Dumbbells Up to 60 lbs" },
            { icon: <ShieldCheck className="w-4 h-4 text-yellow-400 shrink-0" />, text: "No Lock-In Contracts" },
            { icon: <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />, text: siteConfig.hours.display },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-center space-x-2 bg-black/40 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300 ${i === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              {item.icon}
              <span className="text-xs sm:text-sm font-bold text-zinc-200">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
    </section>
  );
};
