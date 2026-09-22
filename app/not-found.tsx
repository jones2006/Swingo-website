"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { colors } from "@/lib/Colors";
import { images } from "@/lib/images";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  // Automatic redirect countdown to Home page
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      router.push("/");
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
      style={{ backgroundColor: colors?.brand?.background || "#070b14" }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 flex flex-col items-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-xs font-semibold tracking-wider uppercase mb-6"
          style={{
            color: colors?.brand?.primary || "#566BE8",
          }}
        >
          ✦ 404 ERROR • PAGE NOT FOUND
        </div>
        Swingo Illustration / Logo
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-6 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
          <Image
            src={images?.illustration || "/illustration.png"}
            alt="Page Not Found"
            fill
            sizes="176px"
            priority
            className="object-contain"
          />
        </div>
        {/* 404 Heading & Subtitle */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
          Lost in Space?
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm font-medium mb-6 leading-relaxed max-w-sm">
          The page you are looking for doesn't exist or was moved. Redirecting
          you home in{" "}
          <span
            className="font-bold"
            style={{ color: colors?.brand?.primary || "#566BE8" }}
          >
            {countdown}s
          </span>
          .
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#566BE8] hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-500/20 group"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#121929] hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
