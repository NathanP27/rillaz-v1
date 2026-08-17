"use client";

import React from "react";
import Link from "next/link";
import { Check, Flame, Star } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const PricingMatrixSection = () => {
  const plans = [
    {
      name: "Walk-In Day Pass",
      badge: "Pay Per Visit",
      price: "PHP 120",
      period: "per visit",
      description: "Ideal for travelers, guests, or lifters testing out the Gymrillaz vibe.",
      features: [
        "Full Open Gym Access (8 AM - 9 PM)",
        "Free Weights & Dumbbells up to 60 lbs",
        "Multi-Cable Rig & Leg Press Zone",
        "Locker & Refreshment Area Access",
      ],
      popular: false,
      ctaText: "Get Day Pass",
    },
    {
      name: "Monthly Membership",
      badge: "Best Value",
      price: "PHP 1,200",
      period: "per month",
      description: "Unlimited access to all heavy iron, machine circuits, and conditioning equipment.",
      features: [
        "Unlimited Open Gym Access Daily",
        "Full Access to All Dumbbells & Racks",
        "Multi-Cable Rigs & Plate Loaded Machines",
        "Locker & Shower Facility Access",
        "No Lock-In Contract",
      ],
      popular: true,
      ctaText: "Join Monthly",
    },
  ];

  return (
    <section className="below-fold py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-b border-white/[0.05]">
      <ScrollReveal className="max-w-7xl mx-auto text-center space-y-4 mb-14">
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400">
          MEMBERSHIPS & RATES
        </h2>
        <p className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          TRANSPARENT PRICING. NO HIDDEN FEES.
        </p>
        <p className="max-w-xl mx-auto text-zinc-400 text-sm sm:text-base">
          Choose the access plan that matches your training frequency. Pay per visit or lock in full monthly privileges.
        </p>
      </ScrollReveal>

      <StaggerContainer className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, idx) => (
          <StaggerItem key={idx}>
            <CardSpotlight
              className={`h-full flex flex-col justify-between space-y-6 ${
                plan.popular ? "border-yellow-500/80 shadow-2xl shadow-yellow-500/10 md:-translate-y-1" : ""
              }`}
            >
              {plan.popular && (
                <>
                  <BorderBeam size={300} duration={12} colorFrom="#EAB308" colorTo="#FACC15" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-500 text-black text-xs font-black uppercase tracking-wider shadow-lg flex items-center space-x-1 z-20">
                    <Flame className="w-3.5 h-3.5 fill-black" />
                    <span>{plan.badge}</span>
                  </div>
                </>
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-2xl uppercase text-white">
                    {plan.name}
                  </h3>
                  {!plan.popular && (
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 bg-zinc-800/80 px-3 py-1 rounded-full border border-zinc-700">
                      {plan.badge}
                    </span>
                  )}
                </div>

              <div className="flex items-baseline space-x-2">
                <span className="text-4xl sm:text-5xl font-black text-white">
                  {plan.price}
                </span>
                <span className="text-xs font-bold text-zinc-400 uppercase">
                  {plan.period}
                </span>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {plan.description}
              </p>

              <ul className="pt-4 border-t border-zinc-800 space-y-3">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start space-x-3 text-sm text-zinc-300">
                    <Check className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="block w-full">
                {plan.popular ? (
                  <ShimmerButton className="w-full text-sm py-3.5 min-h-[48px] font-black">
                    {plan.ctaText}
                  </ShimmerButton>
                ) : (
                  <button
                    type="button"
                    className="w-full py-3.5 min-h-[48px] rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 active:scale-[0.98] text-white font-extrabold uppercase tracking-wider text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    {plan.ctaText}
                  </button>
                )}
              </Link>
            </div>
          </CardSpotlight>
        </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Member Review Callout Badges */}
      <ScrollReveal className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { text: "“Clean floor, serious lifters, and dumbbells up to 60 lbs.”", author: "Marco D. • Member" },
          { text: "“Best ₱120 walk-in day pass in Parañaque.”", author: "Kenji M. • Lifter" },
          { text: "“Coaches are super helpful with form checks.”", author: "Sarah G. • Member" },
        ].map((badge, bIdx) => (
          <div key={bIdx} className="p-4 rounded-xl bg-[#18181b] border border-white/[0.07] space-y-1.5 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />
            <div className="flex text-yellow-400 space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400" />
              ))}
            </div>
            <p className="text-xs text-zinc-300 italic">{badge.text}</p>
            <p className="text-xs font-bold text-yellow-400 uppercase">{badge.author}</p>
          </div>
        ))}
      </ScrollReveal>

      {/* Global Trust Markers */}
      <TrustBadges className="mt-10" />
    </section>
  );
};

