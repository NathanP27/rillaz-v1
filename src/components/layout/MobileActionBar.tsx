"use client";

import React from "react";
import Link from "next/link";
import { Phone, Ticket } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-zinc-950/95 border-t border-zinc-800/80 backdrop-blur-xl shadow-2xl">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <Link href="/contact" className="flex-1">
          <ShimmerButton className="w-full text-xs py-3 px-4 font-black min-h-[48px] flex items-center justify-center space-x-1.5">
            <Ticket className="w-4 h-4 shrink-0" />
            <span>Get Free Pass</span>
          </ShimmerButton>
        </Link>
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="px-4 py-3 min-h-[48px] rounded-full border border-zinc-700 bg-zinc-900 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-1.5 active:scale-[0.97] shrink-0"
        >
          <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};
