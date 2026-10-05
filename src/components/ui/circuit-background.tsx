// src/components/ui/circuit-background.tsx
import React from "react";

export function CircuitBackground() {
  // Define the orthogonal paths mimicking a motherboard layout
  const circuits = [
    { id: 1, d: "M-100 200 H 300 V 450 H 550", color: "#10b981", delay: "0s" },   // Emerald
    { id: 2, d: "M1300 600 H 900 V 450 H 650", color: "#f59e0b", delay: "0s" },  // Amber/Gold
    { id: 3, d: "M200 900 V 700 H 400 V 450 H 550", color: "#06b6d4", delay: "0s" }, // Cyan
    { id: 4, d: "M1000 -100 V 200 H 800 V 450 H 650", color: "#ec4899", delay: "0s" }, // Pink
    { id: 5, d: "M-100 600 H 300 V 450 H 550", color: "#8b5cf6", delay: "0s" },   // Violet
    { id: 6, d: "M1300 200 H 900 V 450 H 650", color: "#f97316", delay: "0s" },  // Orange
    { id: 7, d: "M200 300 V 700 H 400 V 450 H 550", color: "#3b82f6", delay: "0s" }, // Blue
    { id: 8, d: "M1000 900 V 200 H 800 V 450 H 650", color: "#14b8a6", delay: "0s" }, // Teal
    { id: 9, d: "M-100 400 H 300 V 450 H 550", color: "#f43f5e", delay: "0s" },   // Rose
    { id: 10, d: "M1300 800 H 900 V 450 H 650", color: "#22c55e", delay: "0s" }, // Green
    { id: 11, d: "M200 500 V 700 H 400 V 450 H 550", color: "#eab308", delay: "0s" }, // Yellow
    { id: 12, d: "M1000 -200 V 200 H 800 V 450 H 650", color: "#8b5cf6", delay: "0s" }, // Purple
    { id: 13, d: "M-100 800 H 300 V 450 H 550", color: "#f97316", delay: "0s" },   // Orange
    { id: 14, d: "M1300 400 H 900 V 450 H 650", color: "#3b82f6", delay: "0s" },  // Blue
    { id: 15, d: "M200 100 V 700 H 400 V 450 H 550", color: "#ec4899", delay: "0s" }, // Pink
    { id: 16, d: "M1000 600 V 200 H 800 V 450 H 650", color: "#10b981", delay: "0s" }, // Emerald
    { id: 17, d: "M-100 500 H 300 V 450 H 550", color: "#f59e0b", delay: "0s" },   // Amber/Gold
   
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {circuits.map((circuit) => (
            <linearGradient key={`grad-${circuit.id}`} id={`glow-${circuit.id}`}>
              <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor={circuit.color} />
              <stop offset="100%" stopColor={circuit.color} />

            </linearGradient>
          ))}
        </defs>

        {circuits.map((circuit) => (
          <g key={circuit.id}>
            {/* 1. Base dim wire */}
            <path
              d={circuit.d}
              fill="none"
              stroke="#27272a" /* zinc-800 */
              strokeWidth="2.5"
                strokeLinecap="round"
              strokeLinejoin="round"

            />
            {/* 2. Animated neon pulse */}
            <path
              d={circuit.d}
              fill="none"
              stroke={`url(#glow-${circuit.id})`}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-circuit-flow"
              style={{
                animationDelay: circuit.delay,
                
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}