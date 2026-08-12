"use client";

import { motion, useReducedMotion } from "framer-motion";
import { gentleEase } from "@/lib/motion";

type WalkingPathProps = {
  active: boolean;
};

const steps = [
  { x: -78, y: 11, rotate: -18, delay: 0.16 },
  { x: -28, y: -5, rotate: 14, delay: 0.38 },
  { x: 24, y: 6, rotate: -14, delay: 0.6 },
  { x: 76, y: -10, rotate: 16, delay: 0.82 },
] as const;

/** A short water-lit walking beat that bridges the question and the promise. */
export function WalkingPath({ active }: WalkingPathProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="walking-path" aria-hidden="true">
      <motion.div
        className="walking-shimmer"
        initial={false}
        animate={active ? { scaleX: 1, opacity: 1 } : { scaleX: 0.36, opacity: 0.28 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.72, ease: gentleEase }}
      />
      {steps.map((step, index) => (
        <motion.span
          key={`${step.x}-${step.y}`}
          className="footprint"
          style={{ x: step.x, y: step.y, rotate: step.rotate }}
          initial={false}
          animate={active ? { opacity: 1, scale: [0.7, 1.08, 1] } : { opacity: 0, scale: 0.7 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.36,
            delay: prefersReducedMotion ? 0 : step.delay,
            ease: gentleEase,
          }}
        >
          <i />
          <i />
          {index % 2 === 0 ? <b /> : null}
        </motion.span>
      ))}
    </div>
  );
}
