import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { GymStatsSection } from "@/components/sections/GymStatsSection";
import { VibeBentoSection } from "@/components/sections/VibeBentoSection";
import { ReviewsMarqueeSection } from "@/components/sections/ReviewsMarqueeSection";
import { PricingMatrixSection } from "@/components/sections/PricingMatrixSection";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "GYMRILLAZ | Parañaque High-Intensity Community Gym",
  description:
    "Gymrillaz — Parañaque's premier gym for heavy lifting, bodybuilding, and functional fitness. Open 8 AM – 9 PM daily at 91 Saudi Arabia St. Claim your free day pass today.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GYMRILLAZ | Parañaque High-Intensity Community Gym",
    description:
      "Parañaque's premier gym for heavy lifting, bodybuilding, and functional fitness. Open 8 AM – 9 PM daily.",
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GymStatsSection />
      <VibeBentoSection />
      <ReviewsMarqueeSection />
      <PricingMatrixSection />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <p className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            GYMRILLAZ PARANAQUE
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            YOUR FIRST SESSION IS ON US.
          </h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto">
            Drop by the front desk with your ID or send us a quick message for a free 1-day pass. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <ShimmerButton className="text-base py-4 px-10">
                Claim Free Day Pass
              </ShimmerButton>
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center space-x-2 px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-white font-extrabold uppercase tracking-wider text-base transition-all"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
