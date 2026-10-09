"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, Sparkles, Layers, Zap } from "lucide-react";
import { colors } from "@/lib/Colors";

export default function WingGoSection() {
  return (
    <section
      className="w-full py-20 px-6 sm:px-12  text-white border-y border-slate-800/50"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-bold w-max"
            style={{
              color: colors.brand.primary,
            }}
          >
            <Smartphone className="w-6 h-4" />
            <span>NOW ON ANDROID</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Meet{" "}
            <span
              style={{
                color: colors.brand.primary,
              }}
            >
              WingGo
            </span>{" "}
            — Your Android Companion
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            WingGo brings the charm experience to your mobile screen! Featuring
            an animated flying mascot with floating overlay controls that hang
            around while you scroll and use other apps.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex gap-3">
              <Sparkles className="w-6 h-6 text-indigo-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Flying Mascot</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Smooth physics & interactive flight routines.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex gap-3">
              <Layers className="w-6 h-6 text-indigo-400 shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Floating Overlay</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Stays over any app with zero lag execution.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="https://github.com/jones2006/Swingo-website/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl  hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all active:scale-95 cursor-pointer"
              style={{
                backgroundColor: colors.brand.primary,
              }}
            >
              <Zap className="w-5 h-5" />
              Download WingGo APK
            </a>
          </div>
        </div>

        {/* Right Preview */}
        <div className="relative w-full h-[420px] sm:h-[500px] rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center">
          <Image
            src="/winggo-mobile-preview.png"
            alt="WingGo Android Companion"
            fill
            className="object-contain p-6"
          />
        </div>
      </div>
    </section>
  );
}
