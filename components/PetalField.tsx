"use client";

import { motion, useReducedMotion } from "framer-motion";

const petals = [
  { left: "7%", top: "18%", size: 8, tone: "gold", drift: 14, delay: 0.2 },
  { left: "17%", top: "73%", size: 11, tone: "pink", drift: -12, delay: 1.4 },
  { left: "31%", top: "9%", size: 7, tone: "blue", drift: 10, delay: 2.1 },
  { left: "69%", top: "13%", size: 10, tone: "apricot", drift: -13, delay: 0.8 },
  { left: "84%", top: "35%", size: 7, tone: "blue", drift: 12, delay: 2.7 },
  { left: "91%", top: "77%", size: 12, tone: "gold", drift: -9, delay: 1.1 },
  { left: "73%", top: "91%", size: 8, tone: "pink", drift: 11, delay: 3.2 },
  { left: "41%", top: "87%", size: 6, tone: "gold", drift: -10, delay: 2.3 },
] as const;

type PetalFieldProps = {
  active?: boolean;
  className?: string;
};

/** A tiny deterministic particle field inspired by the poster's watercolor blossoms. */
export function PetalField({ active = true, className = "" }: PetalFieldProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`petal-field ${className}`} aria-hidden="true">
      {petals.map((petal, index) => (
        <motion.span
          key={`${petal.left}-${petal.top}`}
          className={`watercolor-petal petal-${petal.tone}`}
          style={{
            left: petal.left,
            top: petal.top,
            width: petal.size,
            height: petal.size * 1.45,
          }}
          initial={false}
          animate={
            active && !prefersReducedMotion
              ? {
                  x: [0, petal.drift, 0],
                  y: [0, -10 - (index % 3) * 3, 0],
                  rotate: [index * 18, index * 18 + 42, index * 18],
                  opacity: [0.3, 0.68, 0.3],
                }
              : { opacity: 0.38 }
          }
          transition={{
            duration: 6.4 + (index % 4),
            delay: petal.delay,
            repeat: active && !prefersReducedMotion ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
