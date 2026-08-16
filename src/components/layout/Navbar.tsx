"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, navigation } from "@/config/site";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/50"
          : "border-b border-transparent bg-zinc-950/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.25)] group-hover:shadow-[0_0_25px_rgba(234,179,8,0.5)] transition-all duration-300 group-hover:scale-105">
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

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-2 rounded-lg text-xs lg:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/80"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden md:flex items-center space-x-4 shrink-0">
          <Link href="/contact">
            <ShimmerButton className="text-xs py-2 px-5 font-black">
              Free Trial Pass
            </ShimmerButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:border-yellow-500/30 focus:outline-none transition-all duration-200"
            aria-label="Toggle Navigation Menu"
          >
            <span className={`block transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-yellow-400" /> : <Menu className="w-6 h-6" />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[500px] opacity-100 border-b border-zinc-800" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-black uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-yellow-400 bg-yellow-500/10 border border-yellow-500/20"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900/80"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-zinc-800/80">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <ShimmerButton className="w-full text-xs py-3.5 font-black">
                Claim Free Trial Pass
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
