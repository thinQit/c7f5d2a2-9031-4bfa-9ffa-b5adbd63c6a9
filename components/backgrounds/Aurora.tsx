"use client";

import React from "react";

interface AuroraProps {
  colorStops?: [string, string, string];
  amplitude?: number;
  blend?: number;
  speed?: number;
}

export default function Aurora({
  colorStops = ["#E63946", "#F4A261", "#2A9D8F"],
  amplitude = 1,
  blend = 0.6,
  speed = 0.7,
}: AuroraProps) {
  const [first, second, third] = colorStops;

  return (
    <div className="h-full w-full">
      <div
        className="h-full w-full animate-aurora"
        style={{
          backgroundImage: `radial-gradient(circle at 18% 18%, ${first} 0%, transparent 55%), radial-gradient(circle at 75% 28%, ${second} 0%, transparent 60%), radial-gradient(circle at 45% 78%, ${third} 0%, transparent 55%)`,
          backgroundSize: "200% 200%",
          opacity: blend,
          filter: `blur(${48 * amplitude}px)`,
          animationDuration: `${60 / speed}s`,
          mixBlendMode: "screen",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
