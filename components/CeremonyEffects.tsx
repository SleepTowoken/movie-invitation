"use client";

import { motion, useReducedMotion } from "framer-motion";
import { gentleEase } from "@/lib/motion";

const fallingParticles = [
  { left: "7%", drift: 18, delay: 0.02, size: 9, tone: "gold" },
  { left: "15%", drift: -13, delay: 0.18, size: 6, tone: "blue" },
  { left: "24%", drift: 21, delay: 0.36, size: 11, tone: "pink" },
  { left: "34%", drift: -17, delay: 0.08, size: 7, tone: "apricot" },
  { left: "44%", drift: 15, delay: 0.48, size: 8, tone: "blue" },
  { left: "55%", drift: -19, delay: 0.26, size: 10, tone: "gold" },
  { left: "66%", drift: 17, delay: 0.58, size: 6, tone: "pink" },
  { left: "76%", drift: -15, delay: 0.12, size: 9, tone: "blue" },
  { left: "86%", drift: 20, delay: 0.4, size: 11, tone: "apricot" },
  { left: "94%", drift: -12, delay: 0.68, size: 7, tone: "gold" },
] as const;

const inwardParticles = [
  { x: "-34vw", y: "-53vh", tone: "gold", delay: 0 },
  { x: "-8vw", y: "-53vh", tone: "blue", delay: 0.09 },
  { x: "28vw", y: "-53vh", tone: "pink", delay: 0.17 },
  { x: "-34vw", y: "53vh", tone: "apricot", delay: 0.05 },
  { x: "0vw", y: "53vh", tone: "gold", delay: 0.14 },
  { x: "32vw", y: "53vh", tone: "blue", delay: 0.22 },
  { x: "-53vw", y: "-28vh", tone: "pink", delay: 0.04 },
  { x: "-53vw", y: "18vh", tone: "blue", delay: 0.19 },
  { x: "53vw", y: "-24vh", tone: "gold", delay: 0.08 },
  { x: "53vw", y: "22vh", tone: "apricot", delay: 0.25 },
] as const;

type TopDownCascadeProps = {
  active: boolean;
  variant?: "petal" | "night";
};

/** A one-shot shower that turns poster petals or night light into a scene transition. */
export function TopDownCascade({ active, variant = "petal" }: TopDownCascadeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!active || prefersReducedMotion) return null;

  return (
    <div className={`ceremony-layer cascade-${variant}`} aria-hidden="true">
      {fallingParticles.map((particle, index) => (
        <motion.span
          key={`${variant}-${particle.left}-${index}`}
          className={`cascade-particle petal-${variant === "night" && index % 3 !== 0 ? "blue" : particle.tone}`}
          style={{ left: particle.left, width: particle.size, height: particle.size * 1.48 }}
          initial={{ y: "-8vh", x: 0, opacity: 0, rotate: index * 23, scale: 0.7 }}
          animate={{
            y: "92vh",
            x: [0, particle.drift, particle.drift * -0.45],
            opacity: [0, 0.82, 0.66, 0],
            rotate: index * 23 + 190,
            scale: [0.7, 1, 0.82],
          }}
          transition={{
            duration: variant === "night" ? 1.22 : 1.58,
            delay: particle.delay,
            ease: gentleEase,
          }}
        />
      ))}
    </div>
  );
}

type InwardGatherProps = {
  active: boolean;
};

/** Four-edge watercolor fragments converge into one quiet promise point. */
export function InwardGather({ active }: InwardGatherProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!active || prefersReducedMotion) return null;

  return (
    <div className="ceremony-layer inward-gather" aria-hidden="true">
      {inwardParticles.map((particle, index) => (
        <motion.span
          key={`${particle.x}-${particle.y}`}
          className={`inward-particle petal-${particle.tone}`}
          initial={{ x: particle.x, y: particle.y, opacity: 0, scale: 0.65, rotate: index * 29 }}
          animate={{ x: 0, y: 0, opacity: [0, 0.82, 0.72, 0], scale: [0.65, 1, 0.42], rotate: index * 29 + 150 }}
          transition={{ duration: 0.82, delay: particle.delay, ease: gentleEase }}
        />
      ))}
      <motion.span
        className="gather-pulse"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: [0, 0.72, 0], scale: [0.3, 1.65, 2.1] }}
        transition={{ duration: 0.66, delay: 0.5, ease: gentleEase }}
      />
    </div>
  );
}
