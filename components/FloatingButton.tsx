"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ActionButton } from "@/components/ActionButton";
import { springTransition } from "@/lib/motion";

type Point = { x: number; y: number };

type FloatingButtonProps = {
  children: React.ReactNode;
  avoidRef?: RefObject<HTMLElement | null>;
};

const EDGE_PADDING = 16;
const AVOID_GAP = 22;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), Math.max(minimum, maximum));
}

function overlaps(a: DOMRect, b: DOMRect, gap: number) {
  return !(
    a.right + gap < b.left ||
    a.left - gap > b.right ||
    a.bottom + gap < b.top ||
    a.top - gap > b.bottom
  );
}

/** A reusable refusal button that moves within the visible 20–80% area. */
export function FloatingButton({ children, avoidRef }: FloatingButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isFloating, setIsFloating] = useState(false);
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });

  const findSafePosition = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;

    const visualViewport = window.visualViewport;
    const viewportWidth = visualViewport?.width ?? window.innerWidth;
    const viewportHeight = visualViewport?.height ?? window.innerHeight;
    const offsetX = visualViewport?.offsetLeft ?? 0;
    const offsetY = visualViewport?.offsetTop ?? 0;
    const rect = button.getBoundingClientRect();
    const avoidRect = avoidRef?.current?.getBoundingClientRect();

    let candidate = position;

    // Retry so the button visibly moves and does not cover the positive action.
    for (let attempt = 0; attempt < 14; attempt += 1) {
      const centerX = offsetX + viewportWidth * (0.2 + Math.random() * 0.6);
      const centerY = offsetY + viewportHeight * (0.2 + Math.random() * 0.6);
      const x = clamp(
        centerX - rect.width / 2,
        offsetX + EDGE_PADDING,
        offsetX + viewportWidth - rect.width - EDGE_PADDING,
      );
      const y = clamp(
        centerY - rect.height / 2,
        offsetY + EDGE_PADDING,
        offsetY + viewportHeight - rect.height - EDGE_PADDING,
      );
      const nextRect = new DOMRect(x, y, rect.width, rect.height);
      const movedFarEnough = Math.hypot(x - position.x, y - position.y) > 72;

      candidate = { x, y };
      if (movedFarEnough && (!avoidRect || !overlaps(nextRect, avoidRect, AVOID_GAP))) {
        break;
      }
    }

    setPosition(candidate);
    setIsFloating(true);
  }, [avoidRef, position]);

  useEffect(() => {
    if (!isFloating) return;

    const keepInsideViewport = () => {
      const button = buttonRef.current;
      if (!button) return;
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const rect = button.getBoundingClientRect();
      setPosition((current) => ({
        x: clamp(current.x, EDGE_PADDING, viewportWidth - rect.width - EDGE_PADDING),
        y: clamp(current.y, EDGE_PADDING, viewportHeight - rect.height - EDGE_PADDING),
      }));
    };

    window.addEventListener("resize", keepInsideViewport);
    window.visualViewport?.addEventListener("resize", keepInsideViewport);
    return () => {
      window.removeEventListener("resize", keepInsideViewport);
      window.visualViewport?.removeEventListener("resize", keepInsideViewport);
    };
  }, [isFloating]);

  if (!isFloating) {
    return (
      <ActionButton ref={buttonRef} onClick={findSafePosition} data-floating-button="true">
        {children}
      </ActionButton>
    );
  }

  return createPortal(
    <motion.button
      ref={buttonRef}
      type="button"
      data-floating-button="true"
      aria-label={`${String(children)}，点击后按钮会移动`}
      onClick={findSafePosition}
      initial={false}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.96 }}
      transition={prefersReducedMotion ? { duration: 0.01 } : springTransition}
      className="choice-button fixed left-0 top-0 z-50 bg-white/92 text-[#59617b] shadow-[0_12px_30px_rgba(66,76,128,0.18)] backdrop-blur-sm"
    >
      {children}
    </motion.button>,
    document.body,
  );
}
