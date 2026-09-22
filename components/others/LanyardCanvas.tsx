"use client";

import React from "react";
import { useDanglePhysicsCanvas } from "@/components/others/useDanglePhysicsCanvas";

interface LanyardCanvasProps {
  selectedCharm: string;
}

export function LanyardCanvas({ selectedCharm }: LanyardCanvasProps) {
  const { canvasRef, events } = useDanglePhysicsCanvas(selectedCharm);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] bg-[#050811] rounded-2xl border border-slate-800/80 overflow-hidden flex justify-center items-center">
      <canvas
        ref={canvasRef}
        {...events}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />
    </div>
  );
}
