import React from "react";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import { Dumbbell, Zap, Flame, Users, Trophy } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { Tooltip } from "@/components/ui/tooltip";

type BentoPhotoCardProps = {
  src: string;
  alt: string;
  badge?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  objectPosition?: string;
  children?: React.ReactNode;
};

const BentoPhotoCard = ({
  src,
  alt,
  badge,
  icon,
  title,
  description,
  className = "",
  objectPosition = "center",
  children,
}: BentoPhotoCardProps) => (
  <div
    className={`relative rounded-2xl overflow-hidden group border border-white/[0.07] hover:border-yellow-500/35 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(234,179,8,0.08)] p-6 flex flex-col justify-between ${className}`}
  >
    {/* Real photo background */}
    <Image
      src={src}
      alt={alt}
      fill
      quality={85}
      loading="lazy"
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ objectPosition }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    {/* Enhanced Multi-stop Contrast Scrim */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/72 to-[#09090b]/15 z-0" />
    <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/40 via-transparent to-transparent z-0" />

    {/* Header Badge Row */}
    {badge ? (
      <div className="relative z-10 flex justify-end">
        <Tooltip content={`Facility Zone: ${badge}`} side="left">
          <span className="px-3.5 py-1.5 text-xs font-black tracking-widest uppercase text-yellow-400 bg-zinc-950/90 border border-yellow-500/40 rounded-full backdrop-blur-md">
            {badge}
          </span>
        </Tooltip>
      </div>
    ) : (
      <div />
    )}

    {/* Content with high contrast text */}
    <div className="relative z-10 space-y-2 pt-12">
      {icon && <div className="text-yellow-400">{icon}</div>}
      <h3 className="font-extrabold text-xl sm:text-2xl text-white uppercase tracking-wide leading-tight">
        {title}
      </h3>
      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-prose opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        {description}
      </p>
    </div>

    {children}
  </div>
);

export const VibeBentoSection = () => {
  return (
    <section className="below-fold py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b] border-b border-white/[0.05] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[150px] rounded-full pointer-events-none" />

      <ScrollReveal className="max-w-7xl mx-auto mb-14 text-center space-y-4 relative z-10">
        <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400">
          THE GYMRILLAZ EXPERIENCE
        </h2>
        <p className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          BUILT FOR PERFORMANCE
        </p>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base">
          From heavy dumbbell racks to precision multi-station cable towers, step inside Parañaque's dedicated strength facility.
        </p>
      </ScrollReveal>

      <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
        <StaggerItem className="md:col-span-2">
          <BentoPhotoCard
            src="/images/gallery/565943734_1240239054791311_8688744286061597014_n.jpg"
            alt="Gymrillaz reception desk and Gorilla logo"
            badge="HQ RECEPTION"
            icon={<Flame className="w-6 h-6 text-yellow-400" />}
            title="THE GORILLA COMMUNITY DESK"
            description="High-energy welcome, pre-workout refreshers, supplements, and instant day-pass check-ins. Step into an environment built to fire you up."
            className="w-full min-h-[360px]"
            objectPosition="center 30%"
          >
            <BorderBeam size={300} duration={14} colorFrom="#EAB308" colorTo="#FACC15" />
          </BentoPhotoCard>
        </StaggerItem>

        <StaggerItem className="md:col-span-1">
          <BentoPhotoCard
            src="/images/gallery/565347324_1240239081457975_5465180222937013689_n.jpg"
            alt="Heavy hex dumbbell rack"
            badge="FREE WEIGHTS"
            icon={<Dumbbell className="w-5 h-5 text-yellow-400" />}
            title="HEAVY DUMBBELL RACK"
            description="Hex sets up to 60 lbs, multi-angle benches - precision hypertrophy territory."
            className="w-full min-h-[360px]"
            objectPosition="center"
          />
        </StaggerItem>

        <StaggerItem className="md:col-span-1">
          <BentoPhotoCard
            src="/images/gallery/566221347_1240239151457968_1912780956013468_n.jpg"
            alt="Incline leg press machine"
            badge="LEG DAY"
            icon={<Trophy className="w-5 h-5 text-yellow-400" />}
            title="INCLINE LEG PRESS"
            description="Plate-loaded incline leg presses and hack squats - maximum lower body overload."
            className="w-full min-h-[280px]"
            objectPosition="center"
          />
        </StaggerItem>

        <StaggerItem className="md:col-span-2">
          <BentoPhotoCard
            src="/images/gallery/565701890_1240239291457954_7097484542453069551_n.jpg"
            alt="Multi-station cable tower"
            badge="CABLE ZONE"
            icon={<Zap className="w-5 h-5 text-yellow-400" />}
            title="MULTI-CABLE TOWER"
            description="Dual lat pulldowns, cable crossovers, and seated rows for full upper body conditioning."
            className="w-full min-h-[280px]"
            objectPosition="center 40%"
          >
            <BorderBeam size={250} duration={12} delay={9} />
          </BentoPhotoCard>
        </StaggerItem>

        <StaggerItem className="md:col-span-1">
          <BentoPhotoCard
            src="/images/gallery/566253456_1240238881457995_9212084558149844448_n.jpg"
            alt="Chest press and pec deck machine"
            badge="CHEST ZONE"
            icon={<Flame className="w-5 h-5 text-yellow-400" />}
            title="PEC DECK & CHEST PRESS"
            description="Machine isolation for chest, shoulders, and tricep development."
            className="w-full min-h-[280px]"
            objectPosition="center"
          />
        </StaggerItem>

        <StaggerItem className="md:col-span-2">
          <BentoPhotoCard
            src="/images/gallery/569392249_1240239278124622_9046190202363309963_n.jpg"
            alt="Full gym floor overhead view"
            badge="COMMUNITY"
            icon={<Users className="w-5 h-5 text-yellow-400" />}
            title="THE RILLAZ FLOOR"
            description="Zero judgment, 100% energy. Train alongside passionate lifters every single day."
            className="w-full min-h-[280px]"
            objectPosition="center 20%"
          />
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
};

