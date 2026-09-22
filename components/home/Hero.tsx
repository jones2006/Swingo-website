"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Demo");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string, name: string) => {
    setActiveTab(name);
    setIsMenuOpen(false);

    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
      className="relative w-full flex items-center justify-center pt-2 pb-8 sm:px-8 overflow-hidden"
      style={{ backgroundColor: colors.brand.background }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* glow circle */}
        <div className="lg:col-span-6 flex justify-center items-center order-1">
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[540px] aspect-[4/3] sm:aspect-square flex justify-center items-center ">
            {/* Subtle Glow Backdrop */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: colors.brand.glow }}
            />

            <Image
              src={images.heroIllustration || images.profile}
              alt="Swingo Desktop Companions"
              width={600}
              height={500}
              priority
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-b-4xl"
            />
          </div>
        </div>

        {/* Hero Content (order-2 on mobile, order-2 on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 space-y-5 sm:space-y-6">
          {/* Top Small Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-800 bg-[#0c121e]/80 shadow-inner">
            <span style={{ color: colors.brand.primary }} className="text-xs">
              ✦
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-300">
              YOUR DESKTOP COMPANION
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] w-[90%]">
            Un desktop-ku <br className="hidden sm:inline" />
            <span style={{ color: colors.brand.primary }}>oru aal </span>
            <span className="relative inline-block border-b-4 border-blue-500 pb-1">
              theva.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="w-[90%] text-sm sm:text-base text-slate-400 font-normal max-w-xl leading-relaxed">
            Meet Swingo — a tiny interactive companion that hangs around your
            screen, swings with physics, and adds a little chaos to your
            everyday desktop.
          </p>

          {/* Action Call-To-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-1">
            {/* Primary Download Button */}
            <a
              href="https://github.com/jones2006/Swingo-website/releases/download/demo/demo.file.pdf"
              download="demo.file.pdf"
              // target="_blank"
              // rel="noopener noreferrer"
              style={{ backgroundColor: colors.brand.primary }}
              className="w-[95%] sm:w-auto inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-2xl font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all active:scale-95 cursor-pointer"
            >
              <svg
                className="w-5 h-5 text-white stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>

              <span>Download Swingo</span>
            </a>
            {/* Secondary Interactive Button */}
            <button
              className="w-[95%] sm:w-auto inline-flex items-center justify-center gap-2 text-slate-300 bg-slate-900/40 hover:bg-slate-800/60 border border-slate-700/80 px-6 py-4 rounded-2xl font-medium text-sm transition-all active:scale-95 cursor-pointer"
              onClick={() => handleScroll("demo", "Demo")}
            >
              <span className="text-base">🤸</span>
              <span>Play with Swingo</span>
            </button>
          </div>

          {/* Platform / Tech Badge Footer */}
          <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 text-sm">✓</span>
              <span className="font-semibold">Windows</span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 text-sm">🔓</span>
              <span className="font-semibold">Open-Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
