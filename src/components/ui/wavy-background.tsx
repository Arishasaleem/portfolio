"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = useRef(createNoise3D()).current; // Use useRef to store noise instance
  const wRef = useRef<number>(0); // Mutable reference for width
  const hRef = useRef<number>(0); // Mutable reference for height
  const ntRef = useRef<number>(0); // Mutable reference for noise time
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationId = useRef<number>(0); // Using useRef for animationId

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = useCallback((n: number, ctx: CanvasRenderingContext2D) => {
    ntRef.current += getSpeed();
    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < wRef.current; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
        ctx.lineTo(x, y + hRef.current * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  }, [getSpeed, waveWidth, waveColors, noise]); // Add noise as dependency

  const render = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, wRef.current, hRef.current);
    drawWave(5, ctx); // Pass ctx here
    animationId.current = requestAnimationFrame(() => render(ctx)); // Assign animationId here
  }, [backgroundFill, waveOpacity, drawWave]); // Add drawWave as a dependency

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d"); // Narrow ctx type here
      if (ctx) {
        wRef.current = ctx.canvas.width = window.innerWidth;
        hRef.current = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        ntRef.current = 0;
        window.onresize = function () {
          wRef.current = ctx.canvas.width = window.innerWidth;
          hRef.current = ctx.canvas.height = window.innerHeight;
          ctx.filter = `blur(${blur}px)`;
        };
        render(ctx); // Pass ctx to render
      }
    }
  }, [blur, render]); // Add render as a dependency

  useEffect(() => {
    init();
    return () => {
      if (animationId.current) cancelAnimationFrame(animationId.current); // Cleanup animation frame
    };
  }, [init]); // Only depend on init

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsSafari(
      typeof window !== "undefined" &&
        userAgent.includes("Safari") &&
        !userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
