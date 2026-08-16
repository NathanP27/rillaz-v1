import type { Metadata } from "next";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { MapModuleSection } from "@/components/sections/MapModuleSection";
import { siteConfig } from "@/config/site";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find Gymrillaz at 91 Saudi Arabia St, Parañaque, 1700 Metro Manila. Open 8 AM – 9 PM daily. Claim your free day pass or inquire about memberships.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.07)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-yellow-400">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            CONTACT
          </h1>
          <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We're in the heart of Parañaque, open every day from 8 AM to 9 PM. Walk in anytime or send us a message to claim your free pass.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center space-x-2 px-8 py-3.5 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold uppercase tracking-wider text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>Call Now: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Map & Location Details */}
      <MapModuleSection />

      {/* Contact Form */}
      <ContactFormSection />
    </>
  );
}
