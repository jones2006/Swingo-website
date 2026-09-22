// import { colors } from "@/lib/Colors";
// import React from "react";

// export default function FAQ() {
//   return (
//     <>
//       <div
//         className="flex items-center justify-center bg-black min-h-screen"
//         style={{ backgroundColor: colors.brand.background }}
//       >
//         <span className="text-blue-600 text-3xl font-extrabold">
//           FAQ section
//         </span>
//       </div>
//     </>
//   );
// }

"use client";

import React, { useState } from "react";
import { colors } from "@/lib/Colors";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  // State to track open accordion items
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FaqItem[] = [
    {
      question: "What exactly is Swingo?",
      answer:
        "Swingo is an interactive desktop companion that hangs from the top of your monitor or active windows. It features realistic physics animations and quick utility controls to keep your workflow fun and convenient.",
    },
    {
      question: "Is Swingo completely free?",
      answer:
        "Yes! Swingo is completely free and open source. There are no monthly subscriptions, hidden fees, or ad tracking.",
    },
    {
      question: "Which platforms and operating systems are supported?",
      answer:
        "Swingo supports Windows 10/11 (both Apple Silicon and Intel chips). Linux and MacOS support is currently in development.",
    },
    {
      question: "Can I use my own character, drawing, or meme PNG?",
      answer:
        "Absolutely! You can upload custom PNG assets directly into Swingo to turn your favorite characters, logos, or memes into screen companions.",
    },
    {
      question: "Can I have multiple Swingos hanging at the same time?",
      answer: "No, you can't spawn multiple companions on a single display.",
    },
    {
      question: "Does Swingo affect gaming performance or FPS?",
      answer:
        "Not at all. Swingo is engineered to be extremely lightweight, utilizing low system resources so your gaming FPS remains completely unaffected.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full pt-16 pb-24 px-4 sm:px-6 lg:px-8 text-white relative"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* TOP BADGE */}
        <div
          className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm"
          style={{
            color: colors.brand.primary,
            background: colors.brand.navbg,
          }}
        >
          <span className="font-bold">✦ HELP & ANSWERS</span>
        </div>

        {/* SECTION HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white tracking-tight mb-4">
          Questions you probably have.
        </h2>

        {/* SUBTITLE */}
        <p className="text-slate-400 text-sm sm:text-base text-center max-w-2xl mb-12 leading-relaxed">
          Everything you need to know about desktop companions, safety, and why
          Swingo is hanging from your monitor.
        </p>

        {/* ACCORDION LIST */}
        <div className="w-full space-y-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800/80 bg-[#0d1322]/90 overflow-hidden transition-all duration-300 hover:border-[#566BE8] shadow-md"
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 text-white hover:text-blue-600 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold tracking-wide">
                    {faq.question}
                  </span>

                  {/* CHEVRON ICON */}
                  <div
                    className={`shrink-0 w-6 h-6 flex items-center justify-center  transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    style={{ color: colors.brand.primary }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* ANSWER ACCORDION CONTENT */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden px-6">
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 border-t border-slate-800/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
