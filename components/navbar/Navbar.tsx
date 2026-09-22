"use client";

import React, { useState } from "react";
import HoverCard from "../others/HoverCard";
import { colors } from "@/lib/Colors";
import Image from "next/image";
import { images } from "@/lib/images";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Demo");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Demo", id: "demo" },
    { name: "Charms", id: "charms" },
    { name: "How it works", id: "how-it-works" },
    { name: "FAQ", id: "faq" },
  ];

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
    <header
      className="relative w-full text-white pt-3 pb-4 px-4 sm:px-6 z-40"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <HoverCard />

      {/* SINGLE UNIFIED NAVBAR CONTAINER */}
      <div
        style={{
          backgroundColor: colors?.brand?.navbg || "rgba(15, 23, 42, 0.8)",
        }}
        className="max-w-7xl mx-auto rounded-4xl sm:rounded-full border border-slate-700/60 shadow-xl backdrop-blur-md p-2 sm:px-6 transition-all duration-300"
      >
        <div className="flex items-center justify-between w-full">
          {/* 1. BRAND LOGO */}
          <button
            onClick={() => handleScroll("demo", "Demo")}
            className="flex items-center gap-2 cursor-pointer outline-none pl-2 sm:pl-0"
          >
            <Image
              src={images.logo}
              alt="Logo"
              width={130}
              height={130}
              className="w-24 sm:w-28 md:w-32 h-auto object-contain"
            />
          </button>

          {/* 2. DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.id, item.name)}
                  style={{
                    backgroundColor: isActive
                      ? colors?.brand?.primary || "#3b82f6"
                      : "transparent",
                    fontFamily: "Poppins, sans-serif",
                  }}
                  className={`px-5 lg:px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-md shadow-indigo-500/20 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* 3. DESKTOP DOWNLOAD BUTTON */}
          <div className="hidden md:block pr-1 sm:pr-0">
            <a
              href="https://github.com/jones2006/Swingo-website/releases/download/demo/demo.file.pdf"
              download="demo.file.pdf"
              style={{ backgroundColor: colors?.brand?.primary || "#3b82f6" }}
              className="text-white px-6 lg:px-8 py-2.5 rounded-full font-semibold text-sm shadow-md hover:opacity-95 active:scale-95 transition-all duration-200"
            >
              <span>Download</span>
            </a>
          </div>

          {/* 4. MOBILE / TABLET HAMBURGER BUTTON */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-slate-800/80 text-slate-300 hover:text-white focus:outline-none mr-1"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current rounded transition-all duration-300 transform origin-left ${
                  isMenuOpen ? "rotate-45 translate-x-0.5 -translate-y-0.5" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all duration-300 transform origin-left ${
                  isMenuOpen ? "-rotate-45 translate-x-0.5 translate-y-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* MOBILE & TABLET EXPANDABLE DROPDOWN MENU (INSIDE THE SAME DIV) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out  ${
            isMenuOpen
              ? "max-h-80 opacity-100 pt-3 pb-2"
              : "max-h-0 opacity-0 pt-0 pb-0"
          }`}
        >
          <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-700/50 px-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.id, item.name)}
                  style={{
                    backgroundColor: isActive
                      ? colors?.brand?.primary || "#3b82f6"
                      : "transparent",
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            <div className="pt-2 mt-1">
              <button
                style={{ backgroundColor: colors?.brand?.primary || "#3b82f6" }}
                className="w-full text-center text-white py-2.5 rounded-full font-semibold text-sm shadow-md active:scale-95 transition-all"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
