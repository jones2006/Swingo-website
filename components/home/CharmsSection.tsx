"use client";
import React, { useState } from "react";
import Image from "next/image";
import { colors } from "@/lib/Colors";

const categories = [
  "All",
  "Protection & Luck",
  "Pop Culture",
  "Anime & Cartoons",
  "Classic",
];

const charmsData = [
  {
    title: "Protection",
    subtitle: "GOOD ENERGY, ALWAYS.",
    desc: "Evil eye, Hamsa, and lemon chillies for good vibes.",
    category: "Protection & Luck",
    image: "/charms/protection.png",
  },
  {
    title: "Religion",
    subtitle: "A LITTLE GOOD FORTUNE.",
    desc: "Daruma, Maneki-neko, and fortune bells that hang around.",
    category: "Protection & Luck",
    image: "/charms/luck.png",
  },
  {
    title: "Memes",
    subtitle: "DESKTOP & MOBILE FREEDOM.",
    desc: "Animated floating companions reacting to gravity.",
    category: "Pop Culture",
    image: "/charms/meme.png",
  },
  {
    title: "Game character",
    subtitle: "SIMPLE, ALWAYS.",
    desc: "Stars, hearts, diamonds and minimalist physics charms.",
    category: "Classic",
    image: "/charms/classic.png",
  },
];

export default function CharmsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCharms =
    activeCategory === "All"
      ? charmsData
      : charmsData.filter((item) => item.category === activeCategory);

  return (
    <section
      id="charms"
      className="w-full py-12 px-6 sm:px-12 text-white"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div>
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{
              color: colors.brand.primary,
            }}
          >
            — FIND YOUR LITTLE OBSESSION
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tight">
            A charm for every personality.
          </h2>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#566BE8] text-white"
                  : "bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Charms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {filteredCharms.map((charm, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 border border-slate-800/80 hover:border-[#566BE8] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-48 mb-6 rounded-2xl bg-gradient-to-b from-slate-800/30 to-transparent flex items-center justify-center overflow-hidden">
                <Image
                  src={charm.image}
                  alt={charm.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {charm.subtitle}
                </span>
                <h3 className="text-xl font-bold mt-1 text-white">
                  {charm.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {charm.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
