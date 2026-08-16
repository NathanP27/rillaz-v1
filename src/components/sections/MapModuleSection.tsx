import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Navigation } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const MapModuleSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
      <ScrollReveal className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400">
            LOCATION & ACCESSIBILITY
          </h2>
          <p className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            FIND GYMRILLAZ IN PARAÑAQUE
          </p>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Conveniently situated at 91 Saudi Arabia St, Parañaque, 1700 Metro Manila. Street parking and motor parking available.
          </p>
        </div>

        {/* Building Facade Photo + Embedded Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Building Facade Photo */}
          <div className="relative h-80 lg:h-auto rounded-2xl overflow-hidden border border-zinc-800 group shadow-2xl">
            <Image
              src="/images/gallery/568388773_1240230681458815_2900459971296832085_n.jpg"
              alt="Gymrillaz Parañaque building exterior"
              fill
              quality={85}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <span className="px-3 py-1 text-[10px] font-black tracking-widest uppercase text-yellow-400 bg-black/70 border border-yellow-500/30 rounded-full backdrop-blur-sm">
                PARANAQUE FACADE
              </span>
              <h3 className="text-xl font-extrabold text-white uppercase mt-2">THE GYMRILLAZ HQ</h3>
              <p className="text-xs text-zinc-300 mt-1">91 Saudi Arabia St, Parañaque • Open Daily 8 AM – 9 PM</p>
            </div>
          </div>

          {/* Embedded Map Container */}
          <div className="w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative shadow-2xl">
            <iframe
              title="Gymrillaz Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.65487714246!2d121.015215!3d14.475853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce3818e5471d%3A0x8e833fb22c0cf60b!2s91%20Saudi%20Arabia%20St%2C%20Para%C3%B1aque%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale contrast-125 invert-[0.9] opacity-80 hover:opacity-100 transition-opacity duration-300"
            />

            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 backdrop-blur-md space-y-2 z-10">
              <div className="flex items-center space-x-2 text-yellow-400 font-extrabold text-xs uppercase">
                <MapPin className="w-4 h-4" />
                <span>Gymrillaz Parañaque</span>
              </div>
              <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                {siteConfig.address.full}
              </p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  siteConfig.address.full
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold text-yellow-400 hover:underline pt-1"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
