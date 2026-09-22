// import { colors } from "@/lib/Colors";
// import React from "react";

// export default function HowItWorks() {
//   return (
//     <>
//       <div
//         className="flex items-center justify-center bg-black min-h-screen"
//         style={{ backgroundColor: colors.brand.background }}
//       >
//         <span className="text-blue-600 text-3xl font-extrabold">
//           how its works section
//         </span>
//       </div>
//     </>
//   );
// }

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

interface StepCard {
  step: string;
  title: string;
  headline: string;
  description: string;
  image: string | StaticImageData;
}

export default function HowItWorks() {
  const steps: StepCard[] = [
    {
      step: "01 — Pick",
      title: "Choose your dangle",
      headline: "Choose your favourite companion.",
      description: "Pick from a growing gallery of charms and companions.",
      image: images.stepimg1 || images.logo || "/placeholder.png",
    },
    {
      step: "02 — Place",
      title: "It sits at the top of your screen.",
      headline: "Move them around and make them fit your screen.",
      description:
        "Drag and position it right where you want it on your display.",
      image: images.stepimg2 || images.logo || "/placeholder.png",
    },
    {
      step: "03 — Swing",
      title: "Now forget about them.",
      headline: "They'll be right there when you look back.",
      description: "Enjoy subtle physics animations reacting to your workflow.",
      image: images.stepimg3 || images.logo || "/placeholder.png",
    },
  ];

  return (
    <section
      id="how-it-works-steps"
      className="w-full py-8 px-4 sm:px-6 lg:px-8 text-white relative"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* TOP BADGE */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs sm:text-sm font-medium mb-6 shadow-sm"
          style={{
            color: colors.brand.primary,
            background: colors.brand.bgcard,
          }}
        >
          <span className="font-medium">✦ HOW SWINGO WORKS</span>
        </div>

        {/* SECTION HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white tracking-tight mb-3">
          Pick. Place. Swing.
        </h2>

        {/* SUBTITLE */}
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-xl mb-12 sm:mb-16">
          Three simple steps. Zero complicated setup.
        </p>

        {/* 3-STEP CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {steps.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-indigo-500/30 bg-[#0b101f]/90 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-sm hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 group"
            >
              {/* TOP CARD CONTENT */}
              <div className="flex flex-col items-start mb-6">
                {/* Step Number Tag */}
                <span className="text-indigo-400 font-bold text-sm sm:text-base mb-3 tracking-wide">
                  {item.step}
                </span>

                {/* Step Main Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  {item.title}
                </h3>

                {/* Step Description / Headline */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.headline}
                </p>
              </div>

              {/* BOTTOM IMAGE CONTAINER */}
              <div
                className="w-full aspect-video rounded-2xl bg-[#060a14] border-4 overflow-hidden"
                style={{ borderColor: colors.brand.primary }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100px, 160px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
