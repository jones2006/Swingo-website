"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

interface Feature {
  id: string;
  title: string;
  description: string;
  subDescription: string;
  icon: React.ReactNode;
  activeColor: string;
  defaultToggled: boolean;
}

export default function FeaturesSection() {
  // State to simulate UI toggle switches in the right mockup
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    lock: true,
    desktop: false,
    mute: true,
  });

  const handleToggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const featuresList: Feature[] = [
    {
      id: "lock",
      title: "Windows Lock",
      description: "Lock your PC instantly.",
      subDescription:
        "Keep your desktop secure without reaching for the Start menu.",
      defaultToggled: true,
      activeColor: "bg-blue-600",
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      ),
    },
    {
      id: "desktop",
      title: "Show Desktop",
      description: "Clear your screen in a click.",
      subDescription:
        "Instantly hide your open windows and reveal your desktop.",
      defaultToggled: false,
      activeColor: "bg-blue-600",
      icon: (
        <svg
          className="w-5 h-5 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      id: "snap",
      title: "Snap",
      description: "Capture what's on screen.",
      subDescription: "Take a quick screenshot whenever you need one.",
      defaultToggled: false,
      activeColor: "bg-amber-600",
      icon: (
        <svg
          className="w-5 h-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
    },
    {
      id: "mute",
      title: "Mute",
      description: "Silence your system instantly.",
      subDescription: "Mute your computer's volume with a single click.",
      defaultToggled: true,
      activeColor: "bg-blue-600",
      icon: (
        <svg
          className="w-5 h-5 text-teal-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full py-8 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* TOP HEADER SECTION */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 lg:mb-4 md:items-center lg:items-start">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs sm:text-sm font-medium mb-5 shadow-sm"
            style={{
              color: colors.brand.primary,
              background: colors.brand.bgcard,
            }}
          >
            <span className="font-medium">✦ More Than Just a Companion</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Swingo can do a{" "}
            <span
              style={{
                color: colors.brand.primary,
              }}
            >
              Little more.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white text-sm sm:text-base max-w-2xl leading-relaxed md:text-center lg:text-left">
            It may hang around your Screen, but Swingo comes with handy controls
            that make everyday desktop actions just a Playful way.
          </p>
        </div>

        {/* TWO COLUMN CONTENT AREA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center md:items-center">
          {/* LEFT COLUMN: FEATURES LIST */}
          <div className="lg:col-span-5 space-y-7 md:mx-auto md:max-w-xl lg:mx-0 lg:max-w-none w-full">
            {featuresList.map((item) => (
              <div key={item.id} className="flex items-start gap-4 group">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#0e1628] border border-slate-800/80 flex items-center justify-center shadow-md group-hover:border-blue-500/50 transition-colors">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                    {item.subDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: ILLUSTRATION IMAGE COMPONENT */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Mobile lo normal (`max-w-sm`), Tablet lo thondaraga peddadi (`md:max-w-xl`), Desktop lo peddadi (`lg:max-w-2xl`) */}
            <div className="relative w-full max-w-sm md:max-w-xl lg:max-w-2xl aspect-square sm:aspect-[4/3] drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <Image
                src={images.illustration || "/illustration.png"}
                alt="Swingo Illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
