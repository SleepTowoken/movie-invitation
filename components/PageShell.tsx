"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageVariants } from "@/lib/motion";

type PageShellProps = {
  children: React.ReactNode;
  exiting?: boolean;
  className?: string;
};

export function PageShell({ children, exiting = false, className = "" }: PageShellProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.main
      variants={pageVariants}
      initial={prefersReducedMotion ? false : "initial"}
      animate={exiting ? "exit" : "visible"}
      className={`page-shell relative isolate flex min-h-svh w-full items-center justify-center overflow-x-hidden px-4 py-[max(24px,env(safe-area-inset-top))] sm:px-6 ${className}`}
    >
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      {children}
    </motion.main>
  );
}
