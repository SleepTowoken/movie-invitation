"use client";

import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { gentleEase } from "@/lib/motion";

export type RefusalBurst = {
  id: number;
  x: number;
  y: number;
  final: boolean;
};

type RefusalParticleBurstProps = {
  burst: RefusalBurst | null;
  onComplete: (id: number) => void;
};

const particleDirections = [
  { x: -0.92, y: -0.42, size: 5, type: "star" },
  { x: -0.62, y: -0.88, size: 4, type: "dot" },
  { x: -0.18, y: -1, size: 6, type: "star" },
  { x: 0.32, y: -0.94, size: 4, type: "dot" },
  { x: 0.76, y: -0.62, size: 5, type: "star" },
  { x: 1, y: -0.12, size: 3, type: "dot" },
  { x: 0.9, y: 0.46, size: 6, type: "star" },
  { x: 0.5, y: 0.88, size: 4, type: "dot" },
  { x: 0.04, y: 1, size: 5, type: "star" },
  { x: -0.48, y: 0.86, size: 3, type: "dot" },
  { x: -0.84, y: 0.5, size: 5, type: "star" },
  { x: -1, y: 0.08, size: 4, type: "dot" },
  { x: -0.42, y: -0.42, size: 3, type: "dot" },
  { x: 0.45, y: -0.38, size: 4, type: "star" },
  { x: 0.52, y: 0.34, size: 3, type: "dot" },
  { x: -0.38, y: 0.42, size: 4, type: "star" },
  { x: 0.08, y: -0.58, size: 3, type: "dot" },
  { x: -0.04, y: 0.62, size: 3, type: "dot" },
] as const;

/** A short, cool-toned paper-light burst anchored to the last button position. */
export function RefusalParticleBurst({
  burst,
  onComplete,
}: RefusalParticleBurstProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!burst || prefersReducedMotion) return null;

  const particleCount = burst.final ? particleDirections.length : 10;
  const travel = burst.final ? 74 : 44;
  const duration = burst.final ? 0.78 : 0.52;

  return createPortal(
    <div
      className="pointer-events-none fixed z-[49] h-0 w-0"
      style={{ left: burst.x, top: burst.y }}
      aria-hidden="true"
    >
      {particleDirections.slice(0, particleCount).map((particle, index) => (
        <motion.span
          key={`${burst.id}-${index}`}
          className={particle.type === "star" ? "particle-star" : "particle-dot"}
          style={{
            width: particle.size,
            height: particle.size,
            marginLeft: -particle.size / 2,
            marginTop: -particle.size / 2,
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0.45 }}
          animate={{
            x: particle.x * travel,
            y: particle.y * travel,
            opacity: [0, 0.9, 0],
            scale: [0.45, 1, 0.65],
            rotate: particle.type === "star" ? 70 + index * 11 : 0,
          }}
          transition={{
            duration,
            delay: index * 0.012,
            ease: gentleEase,
          }}
          onAnimationComplete={
            index === particleCount - 1 ? () => onComplete(burst.id) : undefined
          }
        />
      ))}
    </div>,
    document.body,
  );
}
