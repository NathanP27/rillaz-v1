"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Free Trial Pass",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Direct Info & Location Details */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-yellow-400 mb-2">
              CLAIM YOUR PASS OR GET IN TOUCH
            </h2>
            <p className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
              READY TO HIT THE IRON?
            </p>
            <p className="mt-4 text-zinc-400 text-base leading-relaxed">
              Fill out the form to claim your free 1-day pass, request membership pricing, or speak directly with a trainer.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <MapPin className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-extrabold text-white uppercase text-sm">Gym Address</h4>
                <p className="text-zinc-400 text-sm mt-1">{siteConfig.address.full}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Clock className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-extrabold text-white uppercase text-sm">Operating Hours</h4>
                <p className="text-zinc-400 text-sm mt-1">{siteConfig.hours.display}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <Phone className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-extrabold text-white uppercase text-sm">Direct Phone</h4>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-yellow-400 font-bold text-sm hover:underline block mt-1"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="rounded-2xl p-8 bg-zinc-900/90 border border-zinc-800 shadow-2xl relative">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-yellow-400 mx-auto animate-bounce" />
              <h3 className="text-2xl font-black uppercase text-white">
                PASS RESERVED SUCCESSFULLY!
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                Thanks for reaching out, <span className="text-white font-bold">{formData.name}</span>. Show this confirmation or your ID at the front desk to claim your free pass.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-zinc-800 text-yellow-400 text-xs font-extrabold uppercase hover:bg-zinc-700"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-black text-2xl uppercase text-white mb-4">
                REQUEST A FREE TRIAL PASS
              </h3>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Juan Dela Cruz"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-2">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 917 000 0000"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-2">
                  Inquiry Type
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                >
                  <option value="Free Trial Pass">Free 1-Day Trial Pass</option>
                  <option value="Monthly Membership">Monthly Membership Inquiry</option>
                  <option value="Personal Coaching">1-on-1 Coaching Session</option>
                  <option value="Day Pass Inquiry">Walk-In Pass Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-2">
                  Additional Notes / Workout Goals
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals or questions..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors text-sm"
                />
              </div>

              <ShimmerButton
                type="submit"
                disabled={loading}
                className="w-full py-4 text-sm font-black"
              >
                {loading ? "Processing Pass..." : "Submit Pass Request"}
              </ShimmerButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
