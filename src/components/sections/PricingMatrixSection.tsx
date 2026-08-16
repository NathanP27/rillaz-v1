"use client";

import React from "react";
import Link from "next/link";
import { Check, Flame } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";

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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto text-center space-y-4 mb-14">
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400">
          MEMBERSHIPS & RATES
        </h2>
        <p className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          TRANSPARENT PRICING. NO HIDDEN FEES.
        </p>
        <p className="max-w-xl mx-auto text-zinc-400 text-sm sm:text-base">
          Choose the access plan that matches your training frequency. Pay per visit or lock in full monthly privileges.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl p-8 bg-zinc-900/90 border flex flex-col justify-between space-y-6 transition-all duration-300 ${
              plan.popular
                ? "border-yellow-500 shadow-2xl shadow-yellow-500/10 md:-translate-y-1"
                : "border-zinc-800 hover:border-zinc-700"
            }`}
          >
            {plan.popular && (
              <>
                <BorderBeam size={300} duration={12} colorFrom="#EAB308" colorTo="#FACC15" />
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-500 text-black text-xs font-black uppercase tracking-wider shadow-lg flex items-center space-x-1">
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
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full border border-zinc-700">
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
                  <ShimmerButton className="w-full text-sm py-3.5">
                    {plan.ctaText}
                  </ShimmerButton>
                ) : (
                  <button
                    type="button"
                    className="w-full py-3.5 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white font-extrabold uppercase tracking-wider text-sm transition-all"
                  >
                    {plan.ctaText}
                  </button>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

