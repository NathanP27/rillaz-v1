"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Phone, MapPin, Clock, AlertTriangle } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^(\+?63|0)?9\d{9}$|^(\+\d{1,3}[- ]?)?\d{10,14}$/;

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Free Trial Pass",
    message: "",
    website_url_hp: "", // Honeypot field for bots
  });
  const [renderTime, setRenderTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [deviceLocked, setDeviceLocked] = useState(false);

  useEffect(() => {
    setRenderTime(Date.now());
    // Check local device submission lock
    const lastSub = localStorage.getItem("gymrillaz_pass_sub_time");
    if (lastSub) {
      const elapsed = Date.now() - Number(lastSub);
      if (elapsed < 24 * 60 * 60 * 1000) {
        setDeviceLocked(true);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // 1. Device Lock Check
    if (deviceLocked) {
      setErrorMsg("A pass request has already been submitted from this device today. Please visit the front desk or call us directly.");
      setLoading(false);
      return;
    }

    // 2. Strict Client-side Validation
    if (!formData.name || formData.name.trim().length < 2) {
      setErrorMsg("Please enter your full name.");
      setLoading(false);
      return;
    }

    if (!formData.email || !EMAIL_REGEX.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address (e.g. name@domain.com).");
      setLoading(false);
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (!cleanPhone || !PHONE_REGEX.test(cleanPhone)) {
      setErrorMsg("Please enter a valid mobile phone number (e.g. 0917 123 4567).");
      setLoading(false);
      return;
    }

    // Optimistically update UI immediately (< 50ms response)
    setSubmitted(true);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          form_render_time: renderTime,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        // Revert optimistic update on failure
        setSubmitted(false);
        throw new Error(result.error || "Failed to send inquiry. Please try again.");
      }

      // Record local submission timestamp
      localStorage.setItem("gymrillaz_pass_sub_time", Date.now().toString());
    } catch (err: any) {
      setSubmitted(false);
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
                Thanks for reaching out, <span className="text-white font-bold">{formData.name}</span>. Show this confirmation or your ID at the front desk during your visit.
              </p>
            </div>
          ) : deviceLocked ? (
            <div className="py-12 text-center space-y-4">
              <AlertTriangle className="w-14 h-14 text-yellow-400 mx-auto" />
              <h3 className="text-xl font-black uppercase text-white">
                PASS ALREADY REQUESTED TODAY
              </h3>
              <p className="text-zinc-400 text-sm max-w-md mx-auto">
                You have already requested a pass from this device today. Simply walk in or call us directly at <span className="text-yellow-400 font-bold">{siteConfig.phone}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-black text-2xl uppercase text-white mb-4">
                REQUEST A FREE TRIAL PASS
              </h3>

              {/* Honeypot hidden input */}
              <input
                type="text"
                name="website_url_hp"
                value={formData.website_url_hp}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                style={{ display: "none" }}
              />

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-extrabold flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
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
                    placeholder="0917 123 4567"
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

