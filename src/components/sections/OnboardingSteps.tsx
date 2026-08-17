import React from "react";
import { Ticket, MapPin, Dumbbell, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const steps = [
  {
    step: "01",
    title: "CLAIM YOUR PASS",
    description: "Fill out our quick form to reserve your free 1-day pass or choose a ₱120 walk-in pass option.",
    icon: <Ticket className="w-6 h-6 text-yellow-400" />,
  },
  {
    step: "02",
    title: "VISIT PARAÑAQUE HQ",
    description: "Head to 91 Saudi Arabia St. Open daily 8:00 AM – 9:00 PM with available street and motor parking.",
    icon: <MapPin className="w-6 h-6 text-yellow-400" />,
  },
  {
    step: "03",
    title: "HIT THE FLOOR",
    description: "Show your confirmation or ID at the front desk. Lift solo or get form tips from floor coaches.",
    icon: <Dumbbell className="w-6 h-6 text-yellow-400" />,
  },
];

export const OnboardingSteps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center space-y-3 mb-14">
          <h2 className="text-fluid-meta text-yellow-400">
            FIRST TIME VISITOR GUIDE
          </h2>
          <p className="text-fluid-h2 font-black uppercase text-white tracking-tight">
            HOW TO GET STARTED IN 3 EASY STEPS
          </p>
          <p className="text-zinc-300 text-fluid-body max-w-prose mx-auto">
            Zero friction, no lock-in contracts. Here is how your first session at Gymrillaz works.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => (
            <StaggerItem key={idx} className="relative">
              <CardSpotlight className="h-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-yellow-400 shadow-md">
                      {item.icon}
                    </div>
                    <span className="font-black text-2xl text-zinc-700 group-hover:text-yellow-400 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xl uppercase text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-zinc-700">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </CardSpotlight>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
