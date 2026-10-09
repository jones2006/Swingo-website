"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { colors } from "@/lib/Colors";
import { Coffee, X, ChevronLeft, ChevronRight, Link } from "lucide-react";

const creators = [
  {
    name: "Jones J.",
    role: "Designer & Mobile App Developer",
    image: "/jones1.png",
    linkedin: "https://www.linkedin.com/in/jones-j06/",
  },
  {
    name: "Surya Perumal Jeyapandi",
    role: "Full-Stack Developer",
    image: "/surya.png",
    linkedin: "https://www.linkedin.com/in/surya-pj/",
  },
];

export default function CreatorSection() {
  const [showQrModal, setShowQrModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % creators.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? creators.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % creators.length);
  };

  return (
    <section
      className="w-full py-20 px-6 sm:px-12 text-white"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Photo Box with Slider */}
        <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[520px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
          {/* Creator Images Stack */}
          {creators.map((creator, index) => (
            <div
              key={creator.name}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={creator.image}
                alt={creator.name}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            aria-label="Previous Creator"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white border border-white/10 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
            aria-label="Next Creator"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dynamic Creator Badge */}
          <div className="absolute bottom-4 left-4 z-20 bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 flex flex-col gap-0.5">
            <span className="text-xs font-bold text-white">
              {creators[currentIndex].name}
            </span>
            <span className="text-[10px] text-slate-300">
              {creators[currentIndex].role}
            </span>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full border border-white/10">
            {creators.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "w-6 bg-[#566BE8]"
                    : "w-2 bg-slate-500/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{
              color: colors.brand.primary,
            }}
          >
            — BUILT INDEPENDENTLY. IN INDIA.
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Could a desktop & mobile feel a little more personal?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Swingo & WingGo started with a simple idea: your screens can carry a
            little more of the things that matter to you. Built independently,
            actively maintained, and continuously updated.
          </p>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4 my-2">
            <a
              href="https://www.linkedin.com/in/jones-j06/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-2xl bg-slate-900/80 border transition-all flex items-center gap-3 ${
                currentIndex === 0
                  ? "border-[#566BE8]"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <Link className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Jones J.</p>
                <p className="text-[11px] text-slate-400">
                  Designer & Mobile App Developer
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/surya-pj/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-2xl bg-slate-900/80 border transition-all flex items-center gap-3 ${
                currentIndex === 1
                  ? "border-[#566BE8]"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              <Link className="w-5 h-5 text-blue-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Surya Perumal</p>
                <p className="text-[11px] text-slate-400">
                  Full-Stack Developer
                </p>
              </div>
            </a>
          </div>

          {/* Buy Creator a Coffee Button */}
          <button
            onClick={() => setShowQrModal(true)}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#566BE8] to-[#566BE8] text-white font-bold text-base  hover:opacity-95 active:scale-95 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* <Coffee className="w-6 h-6" /> */}
              <div className="text-left">
                <div>Buy Creators a Coffee</div>
                <div className="text-xs font-normal text-amber-100 opacity-90">
                  A little appreciation via GPay UPI
                </div>
              </div>
            </div>
            <span className="text-xl">↗</span>
          </button>
        </div>
      </div>

      {/* GPay Scanner Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col items-center text-center gap-4 shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="w-12 h-12 rounded-full text-blue-200 flex items-center justify-center mt-2"
              style={{
                backgroundColor: colors.brand.primary,
              }}
            >
              <Coffee className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white">Scan & Support</h3>
            <p className="text-xs text-slate-400">
              Scan using GPay, PhonePe, or any UPI app to buy us a coffee! ☕
            </p>

            {/* GPay QR Code Image */}
            <div className="relative w-64 h-64 my-2 rounded-2xl overflow-hidden border border-slate-700 bg-white p-2">
              <Image
                src="/gpay-qr-code.jpeg"
                alt="GPay QR Scanner"
                fill
                className="object-contain"
              />
            </div>

            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              jones@upi
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
