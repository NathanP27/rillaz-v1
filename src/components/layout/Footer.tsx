import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navigation } from "@/config/site";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:scale-105 transition-transform duration-300">
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
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/40 transition-colors"
              >
                Facebook
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/40 transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-yellow-400 hover:border-yellow-500/40 transition-colors flex items-center space-x-1"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-yellow-500 pl-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm font-semibold">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-400 transition-colors flex items-center space-x-1 group"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Schedule */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-yellow-500 pl-3">
              Gym Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Monday – Sunday</span>
                  <span className="text-zinc-400">{siteConfig.hours.display}</span>
                </div>
              </li>
              <li className="pt-2 text-xs text-zinc-400">
                Open gym access & personal trainer coaching available daily during operational hours.
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-yellow-500 pl-3">
              Parañaque HQ
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="font-bold text-white hover:text-yellow-400 transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Gymrillaz Parañaque. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
