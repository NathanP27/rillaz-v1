import type { Metadata } from "next";
import Image from "next/image";
import { Dumbbell, Flame, Target, Clock, Users, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Programs & Training",
  description:
    "Explore strength training, bodybuilding, and personal coaching programs at Gymrillaz, Parañaque. Discover what your first session looks like.",
};

const programs = [
  {
    icon: <Dumbbell className="w-8 h-8 text-yellow-400" />,
    name: "Bodybuilding & Hypertrophy",
    tagline: "BUILD MASS. BUILD SYMMETRY.",
    description:
      "Structured programs focused on progressive overload, muscle group isolation, volume periodization, and physique development. Ideal for those chasing size, definition, and stage-ready conditioning.",
    includes: [
      "Periodized Push/Pull/Legs splits",
      "Isolation machine & free weight combos",
      "Progressive overload tracking guidance",
      "Supplement timing recommendations",
    ],
    suitable: "Intermediate to Advanced",
    photo: "/images/gallery/565347324_1240239081457975_5465180222937013689_n.jpg",
  },
  {
    icon: <Flame className="w-8 h-8 text-yellow-400" />,
    name: "Strength & Conditioning",
    tagline: "GET STRONGER. MOVE BETTER.",
    description:
      "Compound-movement focused programming built around barbell lifts, functional movement patterns, and athletic conditioning for performance athletes and functional fitness enthusiasts.",
    includes: [
      "Barbell compound lift focus (Squat, Deadlift, Bench)",
      "Metabolic conditioning circuits",
      "Mobility and movement prep protocols",
      "Sport-specific strength adaptations",
    ],
    suitable: "Beginner to Advanced",
    photo: "/images/gallery/567681849_1240239134791303_3567685741714747505_n.jpg",
  },
  {
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    name: "1-on-1 Personal Coaching",
    tagline: "YOUR GOALS. YOUR PACE.",
    description:
      "Fully personalized sessions with a Gymrillaz coach. Tailored to your goals, current level, and available schedule. Perfect for beginners who need guidance or advanced lifters who want optimization.",
    includes: [
      "Initial fitness & movement assessment",
      "Custom goal-based program design",
      "Real-time form correction & coaching",
      "Monthly progress tracking sessions",
    ],
    suitable: "All Levels — First-timers Welcome",
    photo: "/images/gallery/569804635_1240238924791324_1100823839523853702_n.jpg",
  },
];

const firstDaySchedule = [
  {
    step: "01",
    time: "Arrival & Check-In",
    description: "Walk into the Gymrillaz reception desk. Show your ID, pass, or confirmation. Grab a locker and get changed.",
  },
  {
    step: "02",
    time: "Quick Orientation",
    description: "A coach will briefly walk you through the facility zones — free weights, cable stations, machines, and bathroom facilities.",
  },
  {
    step: "03",
    time: "Warm-Up",
    description: "Dynamic warm-up using the open floor. Light cardio, mobility drills, and movement prep (5–10 minutes).",
  },
  {
    step: "04",
    time: "Training Session",
    description: "Start your workout independently or with coach guidance. Coaches are available on the floor to assist with any form or equipment questions.",
  },
  {
    step: "05",
    time: "Cool-Down & Wrap-Up",
    description: "Cooldown and stretching. Explore membership options at the front desk or schedule your next session.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            TRAINING PROGRAMS
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            FIND YOUR PROGRAM
          </h1>
          <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you're building mass, chasing strength PRs, or just starting out — Gymrillaz has a training stream built for you.
          </p>
        </div>
      </section>

      {/* Training Stream Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto space-y-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-yellow-500/5"
            >
              {/* Program Heading Panel with real photo background */}
              <div className="lg:col-span-2 relative min-h-[260px] p-8 flex flex-col justify-between overflow-hidden">
                <Image
                  src={program.photo}
                  alt={program.name}
                  fill
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-0" />
                <div className="relative z-10 space-y-3">
                  {program.icon}
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">
                    {program.tagline}
                  </p>
                  <h2 className="font-black text-3xl uppercase text-white leading-tight">
                    {program.name}
                  </h2>
                </div>
                <div className="relative z-10 flex items-center space-x-2 text-xs font-bold text-zinc-300 border-t border-white/10 pt-4 mt-4">
                  <Users className="w-4 h-4 text-yellow-400 shrink-0" />
                  <span>{program.suitable}</span>
                </div>
              </div>

              {/* Program Details Panel */}
              <div className="lg:col-span-3 p-8 bg-zinc-900/90 space-y-5 flex flex-col justify-between">
                <div>
                  <p className="text-zinc-300 text-base leading-relaxed">
                    {program.description}
                  </p>
                  <ul className="space-y-2.5 mt-5">
                    {program.includes.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start space-x-3 text-sm text-zinc-300">
                        <ArrowRight className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <Link href="/contact">
                    <ShimmerButton className="text-xs py-2.5 px-6">
                      Inquire About This Program
                    </ShimmerButton>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Day Walkthrough */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
              NEW MEMBER GUIDE
            </h2>
            <p className="text-3xl sm:text-4xl font-black uppercase text-white">
              YOUR FIRST DAY BREAKDOWN
            </p>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto">
              Not sure what to expect? Here's a simple walkthrough of what your first session at Gymrillaz looks like.
            </p>
          </div>
          <div className="relative space-y-6">
            {firstDaySchedule.map((step, idx) => (
              <div key={idx} className="flex items-start space-x-6">
                <div className="shrink-0 w-12 h-12 rounded-full bg-yellow-500 text-black flex items-center justify-center font-black text-sm shadow-lg shadow-yellow-500/30">
                  {step.step}
                </div>
                <div className="pt-1 pb-6 border-b border-zinc-800 w-full">
                  <h3 className="font-extrabold text-white uppercase text-base mb-1">
                    {step.time}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Hours */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            OPEN GYM ACCESS SCHEDULE
          </h2>
          <p className="text-3xl font-black uppercase text-white">
            TRAIN ANYTIME, ANY DAY
          </p>
          <div className="inline-flex items-center space-x-3 px-8 py-5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white">
            <Clock className="w-6 h-6 text-yellow-400" />
            <div className="text-left">
              <div className="font-black text-xl uppercase">{siteConfig.hours.display}</div>
              <div className="text-sm text-zinc-400 font-medium">Monday through Sunday — All Year Round</div>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/contact">
              <ShimmerButton className="py-3.5 px-10">
                Reserve Your Free Trial
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
