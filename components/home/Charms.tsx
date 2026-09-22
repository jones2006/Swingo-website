"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

interface CharmItem {
  id: string;
  name: string;
  tag: string;
  image: string | StaticImageData;
}

const CHARMS_DATA: CharmItem[] = [
  { id: "evil-eye", name: "Evil Eye", tag: "Lucky", image: images.evilEye },
  {
    id: "hamsa-hand",
    name: "Hamsa hand",
    tag: "Lucky",
    image: images.hamsahand,
  },
  {
    id: "nimbu-mirchi",
    name: "Nimbu Mirchi",
    tag: "Lucky",
    image: images.lemon,
  },
  {
    id: "banana-cat",
    name: "Banana Cat",
    tag: "Fun",
    image: images.bananaCat || images.ganeshcat,
  },
  {
    id: "kaipulla",
    name: "kaipulla",
    tag: "Fun",
    image: images.kaipulla || images.vanakam,
  },
  { id: "ganesh", name: "Ganesh", tag: "Fun", image: images.ganeshcat },
  { id: "vankam", name: "Vankam", tag: "Fun", image: images.vanakam },
  { id: "gvm", name: "GVM", tag: "Sarcasm", image: images.gvm },
  { id: "anger", name: "Anger", tag: "Fun", image: images.anger || images.gvm },
  {
    id: "vijay",
    name: "Vijay",
    tag: "CM",
    image: images.vijay || images.vanakam,
  },
];

interface CharmsSectionProps {
  onSelectCharm?: (src: string | StaticImageData) => void;
}

export default function Charms({ onSelectCharm }: CharmsSectionProps) {
  const [selectedCharmId, setSelectedCharmId] = useState<string>("evil-eye");

  const handleCharmClick = (charm: CharmItem) => {
    setSelectedCharmId(charm.id);
    if (onSelectCharm) {
      onSelectCharm(charm.image);
    }
  };

  return (
    <section
      id="charms"
      className="w-full py-8 px-4 sm:px-6 lg:px-8 text-white relative"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs sm:text-sm font-medium mb-6 shadow-sm lg:px-8"
          style={{
            color: colors.brand.primary,
            background: colors.brand.bgcard,
          }}
        >
          <span>✦ Charms Collections</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white tracking-tight mb-3">
          Pick Your Vibe .
        </h2>
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-xl mb-12">
          Click any charm to test it swinging from your screen right now.
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full">
          {CHARMS_DATA.map((charm) => {
            const isSelected = selectedCharmId === charm.id;

            return (
              <div
                key={charm.id}
                onClick={() => handleCharmClick(charm)}
                className={`relative cursor-pointer rounded-3xl p-5 sm:p-6 flex flex-col items-center justify-between transition-all duration-300 border bg-[#0b101d]/80 hover:bg-[#101728] backdrop-blur-sm group ${
                  isSelected
                    ? "border-[#566BE8] ring-2 ring-[#566BE8] shadow-lg shadow-blue-500/10 scale-[1.02]"
                    : "border-slate-800/80 hover:border-slate-700/80"
                }`}
              >
                {/* Selected Checkmark Indicator */}
                {isSelected && (
                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white shadow-md animate-in fade-in zoom-in duration-200"
                    style={{ background: colors.brand.primary }}
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-current stroke-3"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}

                {/* Charm Image Container */}
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 flex items-center justify-center my-2 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={charm.image}
                    alt={charm.name}
                    fill
                    sizes="(max-width: 640px) 80px, 96px"
                    className="object-contain filter drop-shadow-md"
                  />
                </div>

                {/* Name & Tag */}
                <div className="flex flex-col items-center gap-2 mt-2 w-full">
                  <span className="text-sm sm:text-base font-bold text-white text-center line-clamp-1">
                    {charm.name}
                  </span>

                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-800/70 text-slate-400 group-hover:bg-indigo-950/60 group-hover:text-indigo-300 transition-colors">
                    {charm.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
