"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type ActionButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children?: ReactNode;
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary:
    "bg-[#178fdd] text-white shadow-[0_12px_30px_rgba(23,143,221,0.28)] hover:bg-[#087fc9]",
  secondary:
    "bg-[#fafcf7] text-[#24567a] shadow-[0_9px_24px_rgba(36,86,122,0.12)] hover:bg-white",
};

/** Shared visual and motion foundation for the invitation actions. */
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
