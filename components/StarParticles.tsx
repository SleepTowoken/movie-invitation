"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "8%", top: "19%", size: 6, duration: 5.7, delay: 0.2, type: "star" },
  { left: "18%", top: "73%", size: 4, duration: 7.1, delay: 1.2, type: "dot" },
  { left: "30%", top: "11%", size: 3, duration: 6.4, delay: 0.8, type: "dot" },
  { left: "73%", top: "17%", size: 7, duration: 6.8, delay: 1.5, type: "star" },
  { left: "87%", top: "37%", size: 4, duration: 5.9, delay: 0.4, type: "dot" },
  { left: "79%", top: "79%", size: 5, duration: 7.3, delay: 1.9, type: "star" },
  { left: "54%", top: "88%", size: 3, duration: 6.1, delay: 0.7, type: "dot" },
  { left: "12%", top: "46%", size: 5, duration: 6.6, delay: 2.1, type: "star" },
] as const;

export function StarParticles() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className={particle.type === "star" ? "particle-star" : "particle-dot"}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.55 }
              : {
                  y: [0, -16 - (index % 3) * 5, 0],
                  x: [0, index % 2 === 0 ? 8 : -7, 0],
                  opacity: [0.28, 0.9, 0.28],
                  rotate: [0, 40, 0],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
