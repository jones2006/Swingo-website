"use client";

import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";
import React, { useEffect, useState, useRef } from "react";

export default function HoverCard() {
  const [currentTime, setCurrentTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Live time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle click outside for mobile/tablet toggle
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center mb-3">
      <div ref={cardRef} className="relative group">
        {/* Default Badge View */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex items-center gap-2 bg-[#121927] border border-slate-800 px-4 py-1 rounded-full text-xs text-slate-300 shadow-sm cursor-pointer hover:bg-[#1a2336] transition-all duration-300 select-none outline-none"
        >
          <span className="text-sm font-medium">😃</span>
          <span className="font-medium text-white">
            Just vibing on your screen.
          </span>
        </button>

        {/* Dynamic Card Reveal (Hover on Desktop / Click on Mobile & Tablet) */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out transform z-50 
            /* Width sizing: 75% screen width on mobile, max 340px */
            w-[75vw] sm:w-[320px] lg:w-80
            ${
              isOpen
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none translate-y-1"
            }
            /* Desktop hover fallback override */
            lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0`}
        >
          <div className="bg-black text-white p-3.5 rounded-b-2xl rounded-t-xl border border-slate-800 shadow-2xl flex items-center justify-between gap-2 sm:gap-4 border-t-2 border-t-blue-600">
            {/* Profile Avatar with Glowing Online Indicator */}
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="relative shrink-0">
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 p-0.5"
                  style={{ borderColor: colors.brand.primary }}
                >
                  <img
                    src={images.profile}
                    alt="Creator Avatar"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Green Dot */}
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-black rounded-full ring-2 ring-emerald-500/30"></span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col truncate">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-white leading-snug truncate">
                  Designed by Jones
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-normal truncate">
                  its our first product.
                </span>
              </div>
            </div>

            {/* Time Indicator */}
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] sm:text-xs font-semibold shrink-0">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{currentTime || "1:04 PM"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
