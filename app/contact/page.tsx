//

"use client";

import React from "react";
import Link from "next/link";
import { colors } from "@/lib/Colors";

interface ContactMethod {
  title: string;
  description: string;
  linkText: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
}

export default function ContactPage() {
  const contactMethods: ContactMethod[] = [
    {
      title: "Direct Email",
      description:
        "Have something to share? Our team monitors this inbox daily.",
      linkText: "support@swingo.app",
      href: "mailto:support@swingo.app",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "GitHub Issues",
      description:
        "Found a bug or have a feature request? Open an issue on our repo.",
      linkText: "github.com/swingo-desktop",
      href: "https://github.com",
      external: true,
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      title: "Social",
      description:
        "Want to follow Swingo's journey? Follow us for updates and news.",
      linkText: "@swingodesktop",
      href: "https://x.com",
      external: true,
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 text-white relative flex flex-col justify-between"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* TOP NAVIGATION */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <span>‹</span> Back to Home
          </Link>
        </div>

        {/* HEADER SECTION */}
        <div className="mb-12 sm:mb-16">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-400 text-xs font-medium mb-4 shadow-sm">
            <span>✦ GET IN TOUCH</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's talk.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Found a bug? Have an idea? Want a new companion? Tell us what's on
            your mind. We'd love to hear from you.
          </p>
        </div>

        {/* 3-CARD CONTACT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="rounded-3xl border border-indigo-500/20 bg-[#0b101f]/90 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/5 group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-indigo-500/40 transition-colors">
                  {method.icon}
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-indigo-300 mb-2">
                  {method.title}
                </h2>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {method.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : "_self"}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="text-xs sm:text-sm font-semibold text-indigo-400 hover:underline break-all"
                >
                  {method.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM FAQ PROMPT BANNER */}
        <div className="rounded-3xl border border-slate-800 bg-[#090d19]/90 p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-md shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4">
            <span>NEED A QUICK ANSWER?</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            Got Quick Questions?
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Before reaching out, check the Frequently Asked Questions. You might
            find your answer there.
          </p>

          {/* View FAQ Button */}
          <Link
            href="/#faq"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-colors"
          >
            View FAQ →
          </Link>
        </div>
      </div>
    </div>
  );
}
