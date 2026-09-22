"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";
import {
  PlayCircle,
  Sparkles,
  ShieldCheck,
  FileText,
  HelpCircle,
  Mail,
  GitFork,
} from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer
      className="w-full relative pt-12 pb-16 px-6 sm:px-10 lg:px-16 text-slate-300 rounded-t-[3rem] border-t-2 border-[#566BE8]"
      style={{ backgroundColor: colors?.brand?.background || "#080d1a" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="self-center gap-2 px-4 py-1.5 rounded-full border border-[#566BE8] bg-[#0c1327] shadow-[0_0_15px_rgba(59,130,246,0.2)] text-[11px] font-bold tracking-wider text-[#566BE8] uppercase">
          <span>🛹</span> HANGING OUT BELOW
        </div>
        {/* TOP ROW: LOGO & NAV LINKS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="relative w-32 h-16">
                <Image
                  src={images.logo || "/logo.png"}
                  alt="Swingo Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-200 mt-1">
              Stay productive. Or don’t. Swingo doesn’t judge.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-sm text-slate-300 font-medium">
            {/* Demo */}
            <button onClick={() => scrollToSection("demo")}>
              <Link
                href="#demo"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="Demo"
              >
                <PlayCircle className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">Demo</span>
              </Link>
            </button>

            {/* Charms */}
            <button onClick={() => scrollToSection("charms")}>
              <Link
                href="#charms"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="Charms"
              >
                <Sparkles className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">Charms</span>
              </Link>
            </button>

            {/* GitHub */}
            <button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="GitHub"
              >
                <GitFork className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">GitHub</span>
              </a>
            </button>

            {/* Privacy */}
            <button>
              <Link
                href="/privacy"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="Privacy"
              >
                <ShieldCheck className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">Privacy</span>
              </Link>
            </button>

            {/* Terms */}
            <button>
              <Link
                href="/terms"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="Terms"
              >
                <FileText className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">Terms</span>
              </Link>
            </button>

            {/* FAQ */}
            <button onClick={() => scrollToSection("faq")}>
              <Link
                href="#faq"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="FAQ"
              >
                <HelpCircle className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">FAQ</span>
              </Link>
            </button>

            {/* Contact */}
            <button>
              <Link
                href="/contact"
                className="flex items-center gap-2 p-2 sm:p-2.5 lg:p-0 rounded-xl bg-slate-800/50 lg:bg-transparent border border-slate-700/50 lg:border-none hover:text-white hover:bg-slate-800 lg:hover:bg-transparent transition-all"
                title="Contact"
              >
                <Mail className="w-5 h-5 lg:hidden" />
                <span className="hidden lg:inline">Contact</span>
              </Link>
            </button>
          </nav>
        </div>

        {/* BOTTOM ROW: COPYRIGHT & CREDITS */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/60 text-xs sm:text-sm text-slate-400">
          {/* Copyright Notice */}
          <p className="text-center sm:text-left font-normal">
            © 2026 SWINGO —{" "}
            <span className="italic">
              Made with code, caffeine & questionable decisions.
            </span>
          </p>

          {/* Made with Love & Separate Links */}
          <div className="flex items-center gap-1 font-bold text-white">
            <span>made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by</span>
            <a
              href="https://www.linkedin.com/in/surya-pj/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#566BE8] hover:underline transition-colors"
            >
              Surya
            </a>
            <span>&</span>
            <a
              href="https://www.linkedin.com/in/jones-j06/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#566BE8] hover:underline transition-colors"
            >
              Jones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
