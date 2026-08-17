"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, MapPin, Clock } from "lucide-react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { Card } from "@/components/ui/Card";

export const ContactFormSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Direct Info & Location Details */}
        <div className="space-y-8">
          <div>
            <h2 className="text-fluid-meta text-yellow-400 mb-2">
              CLAIM YOUR PASS OR GET IN TOUCH
            </h2>
            <p className="text-fluid-h2 font-black uppercase text-white tracking-tight leading-none">
              READY TO HIT THE IRON?
            </p>
            <p className="mt-4 text-zinc-300 text-fluid-body leading-relaxed max-w-prose">
              Fill out the form to claim your free 1-day pass, request membership pricing, or speak directly with a trainer.
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <Card hoverEffect={false} className="flex items-start space-x-4 p-5">
              <MapPin className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-white uppercase text-sm">Gym Address</h4>
                <p className="text-zinc-300 text-sm mt-1">{siteConfig.address.full}</p>
              </div>
            </Card>

            <Card hoverEffect={false} className="flex items-start space-x-4 p-5">
              <Clock className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-white uppercase text-sm">Operating Hours</h4>
                <p className="text-zinc-300 text-sm mt-1">{siteConfig.hours.display}</p>
              </div>
            </Card>

            <Card hoverEffect={false} className="flex items-start space-x-4 p-5">
              <Phone className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-white uppercase text-sm">Direct Phone</h4>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-yellow-400 font-bold text-sm hover:underline block mt-1"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Streamlined 3-Field Lead Capture Form */}
        <LeadCaptureForm />
      </div>
    </section>
  );
};

