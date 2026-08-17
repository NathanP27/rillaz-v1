import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-[#09090b] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/gallery/LOGO.jpg"
                  alt="Gymrillaz"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase text-white group-hover:text-yellow-400 transition-colors duration-300">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              {siteConfig.description}
            </p>
            <div className="pt-1 flex items-center space-x-3">
            <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#18181b] border border-white/[0.07] text-xs font-bold text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/30 transition-all duration-200"
              >
                Facebook
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#18181b] border border-white/[0.07] text-xs font-bold text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/30 transition-all duration-200"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-xs uppercase tracking-widest text-yellow-400 border-l-2 border-yellow-500 pl-3">
              NAVIGATION
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Schedule */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-xs uppercase tracking-widest text-yellow-400 border-l-2 border-yellow-500 pl-3">
              OPERATING HOURS
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-extrabold text-white uppercase text-xs">Monday – Sunday</span>
                  <span className="text-zinc-400 font-medium text-sm">{siteConfig.hours.display}</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed pt-1">
                Open gym access & personal trainer coaching available daily during operational hours.
              </p>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-xs uppercase tracking-widest text-yellow-400 border-l-2 border-yellow-500 pl-3">
              PARAÑAQUE HQ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-zinc-400 leading-relaxed">{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="font-bold text-white hover:text-yellow-400 transition-colors duration-200"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-zinc-400">{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] text-center md:text-left flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Gymrillaz Parañaque. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">
            91 Saudi Arabia St, Parañaque, 1700 Metro Manila
          </p>
        </div>
      </div>
    </footer>
  );
};
