"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ActionButton } from "@/components/ActionButton";
import {
  RefusalParticleBurst,
  type RefusalBurst,
} from "@/components/RefusalParticleBurst";
import { gentleEase, springTransition } from "@/lib/motion";

type Point = { x: number; y: number };

type FloatingButtonProps = {
  labels: readonly string[];
  avoidRef?: RefObject<HTMLElement | null>;
};

const EDGE_PADDING = 16;
const AVOID_GAP = 22;
const MIN_BUTTON_WIDTH = 104;

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

function estimateButtonWidth(label: string) {
  return Math.max(MIN_BUTTON_WIDTH, Array.from(label).length * 17 + 42);
}

/** A refusal button with progressive copy, safe movement, and a final dissolve. */
export function FloatingButton({ labels, avoidRef }: FloatingButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isFloating, setIsFloating] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [labelIndex, setLabelIndex] = useState(0);
  const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
  const [burst, setBurst] = useState<RefusalBurst | null>(null);

  const safeLabels = useMemo(
    () => (labels.length > 0 ? labels : ["不愿意"]),
    [labels],
  );
  const currentLabel = safeLabels[Math.min(labelIndex, safeLabels.length - 1)];

  const findSafePosition = useCallback((targetWidth: number, targetHeight: number) => {
    const button = buttonRef.current;
    if (!button) return position;

    const visualViewport = window.visualViewport;
    const viewportWidth = visualViewport?.width ?? window.innerWidth;
    const viewportHeight = visualViewport?.height ?? window.innerHeight;
    const offsetX = visualViewport?.offsetLeft ?? 0;
    const offsetY = visualViewport?.offsetTop ?? 0;
    const rect = button.getBoundingClientRect();
    const avoidRect = avoidRef?.current?.getBoundingClientRect();
    const currentX = isFloating ? position.x : rect.left;
    const currentY = isFloating ? position.y : rect.top;

    let candidate = { x: currentX, y: currentY };

    // Retry so the button visibly moves and does not cover the positive action.
    for (let attempt = 0; attempt < 14; attempt += 1) {
      const centerX = offsetX + viewportWidth * (0.2 + Math.random() * 0.6);
      const centerY = offsetY + viewportHeight * (0.2 + Math.random() * 0.6);
      const x = clamp(
        centerX - targetWidth / 2,
        offsetX + EDGE_PADDING,
        offsetX + viewportWidth - targetWidth - EDGE_PADDING,
      );
      const y = clamp(
        centerY - targetHeight / 2,
        offsetY + EDGE_PADDING,
        offsetY + viewportHeight - targetHeight - EDGE_PADDING,
      );
      const nextRect = new DOMRect(x, y, targetWidth, targetHeight);
      const movedFarEnough = Math.hypot(x - currentX, y - currentY) > 72;

      candidate = { x, y };
      if (movedFarEnough && (!avoidRect || !overlaps(nextRect, avoidRect, AVOID_GAP))) {
        break;
      }
    }

    return candidate;
  }, [avoidRef, isFloating, position]);

  const handleClick = useCallback(() => {
    const button = buttonRef.current;
    if (!button || isDismissing) return;

    const rect = button.getBoundingClientRect();
    const isFinalClick = labelIndex >= safeLabels.length - 1;
    const nextBurst: RefusalBurst = {
      id: Date.now(),
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      final: isFinalClick,
    };

    setBurst(nextBurst);

    if (isFinalClick) {
      setIsDismissing(true);
      return;
    }

    const nextIndex = labelIndex + 1;
    const nextLabel = safeLabels[nextIndex];
    const nextPosition = findSafePosition(
      estimateButtonWidth(nextLabel),
      rect.height,
    );

    setPosition(nextPosition);
    setLabelIndex(nextIndex);
    setIsFloating(true);
  }, [findSafePosition, isDismissing, labelIndex, safeLabels]);

  const clearBurst = useCallback((id: number) => {
    setBurst((current) => (current?.id === id ? null : current));
  }, []);

  useEffect(() => {
    if (!isFloating) return;

    buttonRef.current?.focus({ preventScroll: true });

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

  if (isDismissed) {
    return <RefusalParticleBurst burst={burst} onComplete={clearBurst} />;
  }

  if (!isFloating) {
    return (
      <>
        <ActionButton
          ref={buttonRef}
          onClick={handleClick}
          data-floating-button="true"
          aria-label={`${currentLabel}，再次点击会改变选择`}
        >
          {currentLabel}
        </ActionButton>
        <RefusalParticleBurst burst={burst} onComplete={clearBurst} />
      </>
    );
  }

  return (
    <>
      {createPortal(
        <motion.button
          ref={buttonRef}
          type="button"
          data-floating-button="true"
          aria-label={`${currentLabel}，再次点击会改变选择`}
          onClick={handleClick}
          initial={false}
          animate={
            isDismissing
              ? {
                  x: position.x,
                  y: position.y,
                  opacity: 0,
                  scale: 0.72,
                  filter: "blur(7px)",
                }
              : {
                  x: position.x,
                  y: position.y,
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }
          }
          whileTap={isDismissing ? undefined : { scale: 0.96 }}
          transition={
            prefersReducedMotion
              ? { duration: 0.01 }
              : isDismissing
                ? { duration: 0.42, ease: gentleEase }
                : springTransition
          }
          onAnimationComplete={() => {
            if (!isDismissing) return;
            setIsDismissed(true);
            avoidRef?.current?.focus();
          }}
          className="choice-button fixed left-0 top-0 z-50 bg-white/92 text-[#59617b] shadow-[0_12px_30px_rgba(66,76,128,0.18)] backdrop-blur-sm"
        >
          <span className="sr-only" aria-live="polite">{currentLabel}</span>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={currentLabel}
              className="relative z-10 whitespace-nowrap"
              aria-hidden="true"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 5, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -4, filter: "blur(3px)" }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.2, ease: gentleEase }}
            >
              {currentLabel}
            </motion.span>
          </AnimatePresence>
        </motion.button>,
        document.body,
      )}
      <RefusalParticleBurst burst={burst} onComplete={clearBurst} />
    </>
  );
}
