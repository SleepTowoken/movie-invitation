import type { Transition, Variants } from "framer-motion";

export const gentleEase = [0.22, 1, 0.36, 1] as const;

export const pageTransition: Transition = {
  duration: 0.7,
  ease: gentleEase,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 230,
  damping: 24,
  mass: 0.82,
};

export const pageVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: pageTransition,
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    y: -8,
    transition: { duration: 0.4, ease: gentleEase },
  },
};
