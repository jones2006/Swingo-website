"use client";

import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

export default function DownloadCard() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="download"
      className="w-full py-8 px-2 sm:px-4 lg:px-4 text-white"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto w-[90%]">
        {/* MAIN CARD CONTAINER */}
        <div
          className="rounded-3xl border border-slate-800/80 p-6 sm:p-10 lg:p-12 backdrop-blur-md shadow-2xl overflow-hidden"
          style={{ background: colors.brand.bgcard }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: PREVIEW DISPLAY BOX */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="w-full max-w-sm sm:max-w-md aspect-square bg-[#070c18] border border-slate-800/80 flex flex-col items-center justify-center relative p-6 overflow-hidden group shadow-inner">
                {/* Lanyard Rope Line */}
                <div className="w-1 h-28 bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)] z-10" />

                {/* Swinging Charm Card Preview */}
                <div className="relative w-36 h-36 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shadow-xl z-20 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                  <Image
                    src={images.hangimg || "/placeholder.png"}
                    alt="App Preview Charm"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTENT & ACTION */}
            <div className="lg:col-span-7 flex flex-col items-start text-left md:text-center lg:text-left">
              {/* TOP BADGE */}
              <div
                className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-indigo-500/30 mb-5 md:self-center lg:self-start"
                style={{
                  background: colors.brand.background,
                  color: colors.brand.primary,
                }}
              >
                <span className="font-medium">FREE & OPEN SOURCE EDITION</span>
              </div>

              {/* HEADING */}
              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
                Give your screen a personality upgrade today.
              </h2>

              {/* DESCRIPTION */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-base">
                Available on Windows 10/11 and macOS Apple Silicon & Intel.
                Completely free, no ad tracking, and no monthly subscriptions.
              </p>

              {/* ACTION BUTTON */}
              <button
                onClick={() => scrollToSection("nav")}
                style={{
                  backgroundColor: colors.brand.primary,
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 p-4 rounded-xl text-white font-semibold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:opacity-95 active:scale-98 transition-all duration-200 lg:px-8 md:self-center lg:self-start"
              >
                {/* Monitor / Screen Icon */}
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
                <span>Download for Windows</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
