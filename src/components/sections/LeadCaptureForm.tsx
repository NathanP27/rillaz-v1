"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Phone, MapPin, Clock, AlertTriangle, Check, ShieldCheck } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { siteConfig } from "@/config/site";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_REGEX = /^(\+?63|0)?9\d{9}$|^(\+\d{1,3}[- ]?)?\d{10,14}$/;

export const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Beginner / General Fitness",
    website_url_hp: "", // Honeypot trap for bots
  });
  const [renderTime, setRenderTime] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [deviceLocked, setDeviceLocked] = useState(false);

  useEffect(() => {
    setRenderTime(Date.now());
    const lastSub = localStorage.getItem("gymrillaz_pass_sub_time");
    if (lastSub) {
      const elapsed = Date.now() - Number(lastSub);
      if (elapsed < 24 * 60 * 60 * 1000) {
        setDeviceLocked(true);
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const isNameValid = formData.name.trim().length >= 2;
  const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, "");
  const isPhoneValid = PHONE_REGEX.test(cleanPhone);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (deviceLocked) {
      setErrorMsg("A pass request has already been submitted from this device today. Please visit the front desk or call us directly.");
      return;
    }

    if (!isNameValid) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!isPhoneValid) {
      setErrorMsg("Please enter a valid mobile phone number (e.g. 0917 123 4567).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: cleanPhone,
          email: `${cleanPhone}@gymrillaz-lead.com`,
          inquiryType: `Trial Pass (${formData.goal})`,
          message: `Goal: ${formData.goal}`,
          form_render_time: renderTime,
          website_url_hp: formData.website_url_hp,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit request. Please try again.");
      }

      localStorage.setItem("gymrillaz_pass_sub_time", Date.now().toString());
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-zinc-900/90 border border-zinc-800 shadow-2xl relative">
      {submitted ? (
        <div className="py-10 text-center space-y-4">
          <CheckCircle2 className="w-16 h-16 text-yellow-400 mx-auto animate-bounce" />
          <h3 className="text-2xl font-black uppercase text-white">
            PASS RESERVED SUCCESSFULLY!
          </h3>
          <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
            Thanks for reaching out, <span className="text-white font-bold">{formData.name}</span>. Show this confirmation or your ID at the front desk to claim your free day pass.
          </p>
          <div className="pt-2 text-xs text-yellow-400 font-bold">
            91 Saudi Arabia St, Parañaque • Open 8:00 AM – 9:00 PM Daily
          </div>
        </div>
      ) : deviceLocked ? (
        <div className="py-10 text-center space-y-4">
          <AlertTriangle className="w-14 h-14 text-yellow-400 mx-auto" />
          <h3 className="text-xl font-black uppercase text-white">
            PASS ALREADY REQUESTED TODAY
          </h3>
          <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
            You have already requested a pass from this device today. Walk in anytime or call us directly at <span className="text-yellow-400 font-bold">{siteConfig.phone}</span>.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <h3 className="font-black text-2xl uppercase text-white">
              REQUEST A FREE TRIAL PASS
            </h3>
            <p className="text-xs text-zinc-400">
              Claim 1 free day pass with zero commitment.
            </p>
          </div>

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

          {/* Field 1: Full Name */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="field-name"
                className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400"
              >
                Full Name *
              </label>
              {isNameValid && (
                <Check className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
              )}
            </div>
            <input
              id="field-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Juan Dela Cruz"
              className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-zinc-950 border ${
                isNameValid ? "border-green-500/40" : "border-zinc-800"
              } text-white placeholder-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus:border-yellow-400 transition-colors text-sm`}
            />
          </div>

          {/* Field 2: Mobile Number */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="field-phone"
                className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400"
              >
                Mobile Phone Number *
              </label>
              {isPhoneValid && (
                <Check className="w-3.5 h-3.5 text-green-400" aria-hidden="true" />
              )}
            </div>
            <input
              id="field-phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="0917 123 4567"
              className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-zinc-950 border ${
                isPhoneValid ? "border-green-500/40" : "border-zinc-800"
              } text-white placeholder-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus:border-yellow-400 transition-colors text-sm`}
            />
          </div>

          {/* Field 3: Goal / Experience Level */}
          <div>
            <label
              htmlFor="field-goal"
              className="block text-xs font-extrabold uppercase tracking-wider text-zinc-400 mb-1.5"
            >
              Fitness Goal / Experience Level
            </label>
            <select
              id="field-goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus:border-yellow-400 transition-colors text-sm cursor-pointer"
            >
              <option value="Beginner / General Fitness">Beginner / General Fitness</option>
              <option value="Hypertrophy / Bodybuilding">Hypertrophy / Bodybuilding</option>
              <option value="Strength / Powerlifting">Strength / Powerlifting</option>
              <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
            </select>
          </div>

          <ShimmerButton
            type="submit"
            disabled={loading}
            className="w-full min-h-[48px] py-4 text-sm font-black"
          >
            {loading ? "Reserving Pass..." : "Claim Free Day Pass"}
          </ShimmerButton>

          {/* Trust Markers directly below primary CTA */}
          <TrustBadges variant="vertical" className="pt-2" />
        </form>
      )}
    </div>
  );
};
