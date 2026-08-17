import type { Metadata } from "next";
import { PricingMatrixSection } from "@/components/sections/PricingMatrixSection";
import { Check, HelpCircle } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Explore Gymrillaz membership plans, monthly rates (₱1,200/mo), and walk-in day pass options (₱120/visit). Transparent pricing, zero hidden fees.",
  alternates: {
    canonical: "/memberships",
  },
  openGraph: {
    title: "Gymrillaz | Memberships",
    description:
      "Explore Gymrillaz membership plans, monthly rates (₱1,200/mo), and walk-in day pass options (₱120/visit). Transparent pricing, zero hidden fees.",
    url: "/memberships",
  },
};

const faqs = [
  {
    q: "Can I cancel my monthly membership anytime?",
    a: "Monthly memberships have no lock-in contracts. You may pause or stop your membership anytime.",
  },
  {
    q: "What are the peak hours at Gymrillaz?",
    a: "Peak hours are typically 5:00 PM – 8:00 PM on weekday evenings. For a quieter session, we recommend mornings between 8:00 AM – 12:00 PM.",
  },
  {
    q: "Is personal training available?",
    a: "Yes! 1-on-1 personal training sessions with a Gymrillaz coach are available as a dedicated add-on program tailored to your goals.",
  },
  {
    q: "How does the free day trial pass work?",
    a: "Fill out our contact form or call directly to reserve a free 1-day pass. Simply show up with a valid ID and your confirmation during operating hours.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            ACCESS PLANS
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            MEMBERSHIPS & RATES
          </h1>
          <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose between flexible walk-in day passes or full monthly membership access with zero hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Matrix */}
      <PricingMatrixSection />

      {/* Amenities Included */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            WHAT'S INCLUDED
          </h2>
          <p className="text-3xl font-black uppercase text-white">
            EVERY MEMBERSHIP INCLUDES
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "Full Open Gym Floor Access",
            "All Free Weight Stations",
            "Multi-Cable Rigs & Machines",
            "Leg Press & Squat Racks",
            "Locker Room Availability",
            "Complimentary Water Station",
            "Training Guidance on Request",
            "Clean & Secure Environment",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <Check className="w-5 h-5 text-yellow-400 shrink-0" />
              <span className="text-sm font-semibold text-zinc-200">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
              FREQUENTLY ASKED
            </h2>
            <p className="text-3xl font-black uppercase text-white">
              GOT QUESTIONS?
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/30 transition-colors"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <HelpCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <h3 className="font-extrabold text-white text-sm uppercase tracking-wide">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed ml-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-col items-center justify-center">
            <p className="text-zinc-400 text-sm mb-4">
              Still have questions? Contact us directly or walk in during operating hours.
            </p>
            <Link href="/contact" className="inline-block">
              <ShimmerButton className="py-3 px-8 text-sm">
                Talk to Our Team
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
