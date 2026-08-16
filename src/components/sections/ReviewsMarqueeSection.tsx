import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marco D.",
    role: "Regular Member",
    body: "Great gym in Parañaque. Dumbbell selection and cable rigs are solid, and the community is supportive.",
    rating: 5,
  },
  {
    name: "John Paul K.",
    role: "Strength Lifter",
    body: "Heavy lifting focus with great equipment. The plate-loaded leg press and multi-cable setups are excellent.",
    rating: 5,
  },
  {
    name: "Sarah G.",
    role: "Fitness Member",
    body: "Welcoming atmosphere for all fitness levels. Staff and coaches are helpful with form checks.",
    rating: 5,
  },
  {
    name: "Kenji M.",
    role: "Day Pass Member",
    body: "Walk-in day pass process is easy. Open 8 AM to 9 PM daily makes scheduling workouts convenient.",
    rating: 5,
  },
  {
    name: "Dave S.",
    role: "Bodybuilder",
    body: "Great environment at Gymrillaz. Well-maintained equipment, solid motivation, and focused lifters.",
    rating: 5,
  },
];

export const ReviewsMarqueeSection = () => {
  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400 mb-2">
          WORD ON THE STREET
        </h2>
        <p className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
          WHAT THE RILLAZ SAY
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="w-80 sm:w-96 rounded-2xl p-6 bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between space-y-4 shrink-0 hover:border-yellow-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-6 h-6 text-zinc-700" />
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed italic">
              "{review.body}"
            </p>
            <div className="pt-2 border-t border-zinc-800/80">
              <div className="font-extrabold text-white text-sm uppercase">
                {review.name}
              </div>
              <div className="text-xs text-yellow-400 font-medium">
                {review.role}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
