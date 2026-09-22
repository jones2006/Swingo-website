// import Footer from "@/components/Footer";
// import React from "react";

// export default function page() {
//   return (
//     <>
//       <div className="flex items-center justify-center bg-black min-h-screen">
//         <span className="text-blue-600 text-3xl font-extrabold">
//           terms and conditions section
//         </span>
//       </div>
//       <Footer />
//     </>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import { colors } from "@/lib/Colors";

interface TermSection {
  number: string;
  title: string;
  content: string;
  isLink?: boolean;
  linkText?: string;
}

export default function TermsPage() {
  const termsData: TermSection[] = [
    {
      number: "01",
      title: "Using Swingo",
      content:
        "You may download and use Swingo for personal use. You may not sell, redistribute, modify, or present Swingo as your own software without permission.",
    },
    {
      number: "02",
      title: "Using the App",
      content:
        "By downloading or using Swingo or the Swingo website, you agree to these Terms. If you don't agree, please don't use Swingo.",
    },
    {
      number: "03",
      title: "Your Content",
      content:
        "If you add custom images or characters, you keep ownership of them. Make sure you have the right to use anything you add to Swingo.",
    },
    {
      number: "04",
      title: "Keep It Safe",
      content:
        "Don't use Swingo to distribute malware, illegal content, or anything that could harm other people, devices, or services.",
    },
    {
      number: "05",
      title: "Updates & Availability",
      content:
        "Swingo may change over time as we add features, fix bugs, and improve the app. We can't guarantee that it will always be available or completely error-free.",
    },
    {
      number: "06",
      title: "Changes to These Terms",
      content:
        "These Terms may be updated as Swingo evolves. Any changes will be reflected on this page with an updated date.",
    },
    {
      number: "07",
      title: "Contact",
      content: "Questions about these Terms?",
      isLink: true,
      linkText: "support@swingo.app",
    },
  ];

  return (
    <div
      className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 text-white relative flex flex-col justify-between"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* TOP NAVIGATION & UPDATED DATE */}
        <div className="flex flex-row items-center justify-between mb-8">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            <span>‹</span> Back to Home
          </Link>

          {/* Last Updated Badge */}
          <div className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
            Last Updated: <span className="text-slate-300">September 2026</span>
          </div>
        </div>

        {/* HEADER SECTION */}
        <div className="mb-10 sm:mb-12">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-400 text-xs font-medium mb-4 shadow-sm">
            <span>Terms and Conditions</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            The rules are <span className="text-indigo-400">Simple.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            A few straightforward guidelines for using Swingo and keeping things
            safe, respectful, and enjoyable.
          </p>
        </div>

        {/* TERMS CARDS STACK */}
        <div className="space-y-4">
          {termsData.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800/80 bg-[#0c1120]/80 p-6 sm:p-7 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-slate-700/80"
            >
              {/* Number Tag */}
              <span className="text-indigo-400 font-extrabold text-lg sm:text-xl block mb-2">
                {item.number}
              </span>

              {/* Title */}
              <h2 className="text-base sm:text-lg font-bold text-indigo-300 mb-2">
                {item.title}
              </h2>

              {/* Content / Text */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.content}{" "}
                {item.isLink && (
                  <a
                    href={`mailto:${item.linkText}`}
                    className="text-indigo-400 hover:underline font-medium block sm:inline mt-1 sm:mt-0"
                  >
                    {item.linkText}
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER TAGLINE */}
        <div className="mt-16 text-center text-slate-400 text-xs sm:text-sm font-medium">
          Simple rules. More swinging.{" "}
          <span className="inline-block text-indigo-400">💬</span>
        </div>
      </div>
    </div>
  );
}
