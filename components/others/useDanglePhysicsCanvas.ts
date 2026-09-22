"use client";

import { useEffect, useRef, useCallback } from "react";
import { DanglePhysics } from "@/lib/DanglePhysics";

export function useDanglePhysicsCanvas(selectedCharm: string) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const physicsRef = useRef<DanglePhysics | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Instantiate physics engine
    if (!physicsRef.current) {
      physicsRef.current = new DanglePhysics({
        anchorX: canvas.width / 2,
        anchorY: 15,
        restLength: 180,
      });
    }

    let animationFrameId: number;
    let lastTime = performance.now();

    const charmImg = new Image();
    charmImg.src = selectedCharm;

    const render = (now: number) => {
      const dt = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;

      // Handle Canvas resize & Anchor positioning
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        physicsRef.current?.setAnchor(canvas.width / 2, 15);
      }

      const p = physicsRef.current;
      if (p) {
        // Advance physics by dt
        p.step(dt);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // --- 1. Render Multi-Node Verlet Rope ---
        if (p.nodes.length > 0) {
          // Outer Fabric Ribbon
          ctx.beginPath();
          ctx.moveTo(p.nodes[0].x, p.nodes[0].y);
          for (let i = 1; i < p.nodes.length; i++) {
            ctx.lineTo(p.nodes[i].x, p.nodes[i].y);
          }
          // ctx.strokeStyle = "#536DE8";
          ctx.strokeStyle = "#566BE8"; // outer line color
          ctx.lineWidth = 6;
          ctx.lineCap = "round";
          ctx.stroke();

          // Inner Accent Thread
          ctx.beginPath();
          ctx.moveTo(p.nodes[0].x, p.nodes[0].y);
          for (let i = 1; i < p.nodes.length; i++) {
            ctx.lineTo(p.nodes[i].x, p.nodes[i].y);
          }
          ctx.strokeStyle = "#0B121D"; // inner line color
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        // Top Mounting Pin
        // ctx.fillStyle = "#EE9D03";
        // ctx.beginPath();
        // ctx.arc(p.anchorX, p.anchorY, 6, 0, Math.PI * 2);
        // ctx.fill();

        // Metallic Hook Ring
        ctx.fillStyle = "#EE9D03";
        ctx.beginPath();
        ctx.arc(p.x, p.y - 10, 5, 0, Math.PI * 2);
        ctx.fill();

        // --- 2. Render Hanging Charm Image ---
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
        ctx.shadowBlur = 18;
        ctx.shadowOffsetY = 8;

        const size = 100;

        if (charmImg.complete && charmImg.naturalWidth > 0) {
          // if rounded image is ok recomment this code
          // ctx.beginPath();
          // ctx.arc(0, size / 2 - 10, size / 2, 0, Math.PI * 2);
          // ctx.clip();
          ctx.drawImage(charmImg, -size / 2, -10, size, size);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedCharm]);

  // Pointer Handlers connected directly to DanglePhysics methods
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas || !physicsRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      physicsRef.current.grab(x, y);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current;
      if (!canvas || !physicsRef.current) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      physicsRef.current.dragTo(x, y);
    },
    [],
  );

  const handlePointerUp = useCallback(() => {
    physicsRef.current?.release();
  }, []);

  return {
    canvasRef,
    events: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
    },
  };
}
