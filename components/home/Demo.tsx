"use client";

import React, { useState, useRef } from "react";
import { LanyardCanvas } from "@/components/others/LanyardCanvas";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

// Fallback SVG in case images object is missing a key
const DEFAULT_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%230284c7'/><circle cx='50' cy='50' r='30' fill='white'/><circle cx='50' cy='50' r='18' fill='%2338bdf8'/><circle cx='50' cy='50' r='9' fill='%230f172a'/></svg>";

const PRESET_CHARMS = [
  { id: "evil-eye", name: "Evil Eye", src: images?.evilEye || DEFAULT_IMAGE },
  { id: "hamsa", name: "Hamsa", src: images?.hamsahand || DEFAULT_IMAGE },
  { id: "lemon", name: "Lemon", src: images?.lemon || DEFAULT_IMAGE },
  { id: "cat", name: "Cat Avatar", src: images?.ganeshcat || DEFAULT_IMAGE },
  { id: "guru", name: "Guru", src: images?.gvm || DEFAULT_IMAGE },
];

export default function Demo() {
  const [selectedCharm, setSelectedCharm] = useState<string>(
    PRESET_CHARMS[0].src,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedCharm(imageUrl);
    }
  };

  return (
    <section
      id="demo"
      className="w-full py-8 px-4 sm:px-6 lg:px-8 text-white"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
        <div
          className="inline-flex flex-row items-center gap-2 px-3.5 py-1 rounded-full border border-slate-800 bg-[#0c121e] text-[10px] sm:text-xs text-slate-400 font-bold"
          style={{ color: colors.brand.primary }}
        >
          <span className="font-medium">✦ INTERACTIVE SWINGO</span>
        </div>
        <h2 className="text-xl sm:text-4xl lg:text-2xl font-medium tracking-tight">
          He’s just hanging around. 🪢
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white">
          Go on. Give Swingo a try.
        </h3>
        <p className="text-white text-sm sm:text-base pt-1 font-light">
          Drag it. Flick it. Watch it swing.
        </p>
      </div>

      {/* Main Interactive Container */}
      <div className="max-w-7xl mx-auto bg-[#0d1322] border border-slate-800/80 rounded-3xl p-5 sm:p-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-3 md:mx-auto md:max-w-xl lg:mx-0 lg:max-w-none w-full md:text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-[10px] font-semibold tracking-wider text-slate-400 uppercase"
              style={{ color: colors.brand.primary }}
            >
              ✦ CUSTOMIZE • PLAY • FUN
            </div>

            <div>
              <h4 className="text-3xl sm:text-2xl text-white font-bold">
                Your screen. Your Swingo.
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 font-medium">
                Pick a character, change its size and position, or add your own
                image.
              </p>
            </div>

            {/* Presets */}
            <div className="flex flex-col gap-2">
              <span
                className="text-base font-semibold"
                style={{ color: colors.brand.primary }}
              >
                Select Your Charm
              </span>
              <div className="flex items-center gap-3 overflow-x-auto py-2 px-1 no-scrollbar md:justify-center lg:justify-start">
                {PRESET_CHARMS.map((charm) => {
                  const isSelected = selectedCharm === charm.src;
                  return (
                    <button
                      key={charm.id}
                      onClick={() => setSelectedCharm(charm.src)}
                      className={`relative shrink-0 w-16 h-16 rounded-2xl border-2 p-1 transition-all duration-200 bg-[#121929] ${
                        isSelected
                          ? "border-[#566BE8] shadow-md shadow-blue-500/20 scale-105"
                          : "border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <img
                        src={charm.src}
                        alt={charm.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Upload Box */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-blue-500/30 hover:border-[#566BE8] bg-[#111827]/50 hover:bg-[#111827] rounded-2xl p-5 text-center cursor-pointer transition-all group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ color: colors.brand.primary }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-white">
                  Upload your own PNG / GIF
                </span>
                <span className="text-[11px] text-slate-400 max-w-xs">
                  Yes, you can put literally anything here. Memes, your CEO’s
                  head, or dog pictures.
                </span>
              </div>
            </div>
          </div>
          {/* Canvas Component Area */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <span className="text-xs text-slate-400 mb-2 font-medium">
              Click and drag Swingo anywhere
            </span>
            <LanyardCanvas selectedCharm={selectedCharm} />
          </div>
        </div>
      </div>
    </section>
  );
}
