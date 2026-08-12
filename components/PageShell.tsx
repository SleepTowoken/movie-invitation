"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { PetalField } from "@/components/PetalField";
import { pageVariants } from "@/lib/motion";

type PageShellProps = {
  children: React.ReactNode;
  exiting?: boolean;
  className?: string;
};

export function PageShell({ children, exiting = false, className = "" }: PageShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const textureStyle = {
    "--watercolor-texture": `url("${basePath}/watercolor-field.jpg?v=20260812-3")`,
  } as CSSProperties;

  return (
    <motion.main
      variants={pageVariants}
      initial={prefersReducedMotion ? false : "initial"}
      animate={exiting ? "exit" : "visible"}
      className={`page-shell relative isolate flex min-h-svh w-full items-center justify-center overflow-x-hidden px-4 py-[max(24px,env(safe-area-inset-top))] sm:px-6 ${className}`}
      style={textureStyle}
    >
      <div className="watercolor-material" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <PetalField />
      {children}
    </motion.main>
  );
}
