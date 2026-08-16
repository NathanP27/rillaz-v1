import type { Metadata } from "next";
import Image from "next/image";
import { Dumbbell, Target, Users, Trophy, Star, Zap } from "lucide-react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the origin, mission, and culture behind Gymrillaz — Parañaque's elite strength and conditioning gym.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | GYMRILLAZ Parañaque",
    description:
      "Learn the origin, mission, and culture behind Gymrillaz — Parañaque's elite strength and conditioning gym.",
    url: "/about",
  },
};

// Photo assignments for facility showcase:
// 565347324 = Dumbbell rack
// 565701890 = Cable tower
// 566221347 = Leg press
// 566253456 = Chest/pec deck machine
// 567681849 = Barbell/power rack
// 569804635 = Smith/cable rig
// 566224649 = Seated cable row

const facilities = [
  {
    name: "Free Weight Zone",
    description:
      "Hex dumbbell sets from 5 lbs to 60 lbs, EZ bars, curl bars, and a full selection of flat/incline/decline benches.",
    icon: <Dumbbell className="w-6 h-6 text-yellow-400" />,
    badge: "Heavy Iron",
    photo: "/images/gallery/565347324_1240239081457975_5465180222937013689_n.jpg",
  },
  {
    name: "Multi-Station Cable Rigs",
    description:
      "Dual lat pulldowns, cable crossover stations, seated row machines, and dedicated tricep/bicep stations for comprehensive upper body development.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    badge: "Cable Zone",
    photo: "/images/gallery/565701890_1240239291457954_7097484542453069551_n.jpg",
  },
  {
    name: "Leg & Lower Body Zone",
    description:
      "Heavy-duty incline leg press, hack squat, seated leg curl & extension machines, and standing calf raise apparatus.",
    icon: <Trophy className="w-6 h-6 text-yellow-400" />,
    badge: "Power Zone",
    photo: "/images/gallery/566221347_1240239151457968_1912780956013468_n.jpg",
  },
  {
    name: "Machine Circuit Area",
    description:
      "Chest press, shoulder press, pec deck, lat pulldown isolators, and Smith machine for structured machine-based programming.",
    icon: <Target className="w-6 h-6 text-yellow-400" />,
    badge: "Isolation Zone",
    photo: "/images/gallery/566253456_1240238881457995_9212084558149844448_n.jpg",
  },
];

const coaches = [
  {
    name: "Head Coach / Trainer",
    specialty: "Strength & Hypertrophy Programming",
    bio: "Expert in progressive overload periodization, muscle-building protocol design, and strength fundamentals for intermediate to advanced lifters.",
    credentials: "Certified Strength Practitioner",
  },
  {
    name: "Conditioning Coach",
    specialty: "Functional Fitness & Athletic Conditioning",
    bio: "Specializes in metabolic conditioning, HIIT protocols, and functional movement patterns for athletes and fitness beginners.",
    credentials: "CPR / First Aid Certified",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Heading */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(234,179,8,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-6">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400">
            THE RILLAZ ORIGIN STORY
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none max-w-4xl">
            BUILT FOR THOSE WHO TAKE IT SERIOUSLY.
          </h1>
          <p className="max-w-2xl text-zinc-400 text-base sm:text-xl leading-relaxed">
            Gymrillaz was created to provide lifters in Parañaque with a dedicated training facility featuring heavy equipment, structured coaching, and an encouraging community environment.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <ShimmerButton className="py-3 px-8 text-sm">
                Start Your Journey
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
              CORE IDENTITY
            </h2>
            <p className="text-3xl sm:text-4xl font-black uppercase text-white">
              THE RILLAZ CODE
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Dumbbell className="w-8 h-8 text-yellow-400" />,
                title: "IRON DISCIPLINE",
                body: "We operate on a culture of consistent progress, focused workouts, and evidence-backed training.",
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-400" />,
                title: "COMMUNITY FIRST",
                body: "Gymrillaz is built around community support, welcoming every lifter who steps onto the gym floor.",
              },
              {
                icon: <Star className="w-8 h-8 text-yellow-400" />,
                title: "TECHNIQUE & QUALITY",
                body: "We prioritize proper form, consistency, and long-term athletic health over short-term ego lifting.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/30 transition-colors space-y-4"
              >
                {value.icon}
                <h3 className="font-black text-xl uppercase text-white tracking-wide">
                  {value.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Photo Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto mb-14 text-center space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            THE EQUIPMENT
          </h2>
          <p className="text-3xl sm:text-4xl font-black uppercase text-white">
            STEEL, IRON & SWEAT
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl overflow-hidden group min-h-[280px] border border-zinc-800 hover:border-yellow-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <Image
                src={facility.photo}
                alt={facility.name}
                fill
                quality={80}
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
              <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-black tracking-widest uppercase text-yellow-400 bg-black/70 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                {facility.badge}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="mb-1 text-yellow-400">{facility.icon}</div>
                <h3 className="font-extrabold text-base text-white uppercase">{facility.name}</h3>
                <p className="text-zinc-400 text-xs mt-1 leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto mb-12 text-center space-y-3">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            MEET YOUR COACHES
          </h2>
          <p className="text-3xl sm:text-4xl font-black uppercase text-white">
            COACHED BY THE BEST
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-yellow-500/30 transition-colors space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-black text-xl uppercase text-white">{coach.name}</h3>
                <p className="text-yellow-400 text-xs font-extrabold uppercase tracking-wider mt-1">
                  {coach.specialty}
                </p>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{coach.bio}</p>
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  {coach.credentials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
