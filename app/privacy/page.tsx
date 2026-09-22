// import Footer from "@/components/Footer";
// import React from "react";

// export default function page() {
//   return (
//     <>
//       <div className="flex items-center justify-center bg-black min-h-screen">
//         <span className="text-blue-600 text-3xl font-extrabold">
//           privacy and policy section
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

interface PrivacySection {
  number: string;
  title: string;
  content?: string;
  bullets?: string[];
  subText?: string;
  isLink?: boolean;
  linkText?: string;
}

export default function PrivacyPage() {
  const privacyData: PrivacySection[] = [
    {
      number: "01",
      title: "Information We Collect",
      content:
        "We only collect information that is necessary to provide and improve Swingo.",
      subText:
        "If a feature requires additional information, we'll make that clear.",
    },
    {
      number: "02",
      title: "Your Custom Content",
      content:
        "If you add your own images, characters, or other content, you remain the owner of that content.",
      subText:
        "We don't claim ownership of anything you create or add to Swingo.",
    },
    {
      number: "03",
      title: "How We Use Information",
      content: "Any information we collect may be used to:",
      bullets: [
        "Improve Swingo",
        "Fix bugs and technical issues",
        "Understand how features are used",
        "Keep the app secure",
      ],
      subText:
        "We don't use your information for purposes unrelated to Swingo without appropriate notice.",
    },
    {
      number: "04",
      title: "Third-Party Services",
      content:
        "Some Swingo features may use third-party services. These services may process information according to their own privacy policies.",
      subText:
        "We aim to use only the services needed to provide Swingo's features.",
    },
    {
      number: "05",
      title: "Your Choices",
      content:
        "You can choose whether to use optional features that require additional information.",
      subText:
        "We'll aim to keep you informed about what a feature needs and why.",
    },
    {
      number: "06",
      title: "Data Security",
      content:
        "We take reasonable steps to protect information associated with Swingo.",
      subText: "However, no digital service can guarantee complete security.",
    },
    {
      number: "07",
      title: "Changes to This Policy",
      content:
        "As Swingo evolves, this Privacy Policy may change. Updates will be published on this page with a new Last Updated date.",
    },
    {
      number: "08",
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
            <span>Privacy & Transparency</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Your privacy <span className="text-indigo-400">matters.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Swingo is made to be a fun desktop companion — not something that
            gets in the way of your privacy.
          </p>
        </div>

        {/* PRIVACY CARDS STACK */}
        <div className="space-y-4">
          {privacyData.map((item) => (
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

              {/* Primary Content */}
              {item.content && (
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-2">
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
              )}

              {/* Bullet Points if present */}
              {item.bullets && (
                <ul className="list-disc list-inside text-slate-300 text-xs sm:text-sm space-y-1 my-3 pl-2">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}

              {/* Secondary Subtext */}
              {item.subText && (
                <p className="text-slate-400 text-xs leading-relaxed mt-2">
                  {item.subText}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
