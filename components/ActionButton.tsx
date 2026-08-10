"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ActionButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: ReactNode;
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary:
    "bg-[#5865a8] text-white shadow-[0_12px_28px_rgba(67,76,139,0.24)] hover:bg-[#4d599a]",
  secondary:
    "bg-white/72 text-[#59617b] shadow-[0_9px_24px_rgba(80,91,141,0.11)] hover:bg-white",
};

/** Shared visual and motion foundation for every choice button. */
export const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  function ActionButton(
    { variant = "secondary", className = "", children, disabled, ...props },
    ref,
  ) {
    return (
      <motion.button
        ref={ref}
        type="button"
        disabled={disabled}
        whileHover={disabled ? undefined : { y: -2 }}
        whileTap={disabled ? undefined : { scale: 0.96 }}
        transition={{ type: "spring", stiffness: 420, damping: 26 }}
        className={`choice-button ${variantClasses[variant]} ${className}`}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  },
);
