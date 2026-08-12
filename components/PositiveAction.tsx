"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { ActionButton } from "@/components/ActionButton";

type PositiveActionProps = {
  href: "/after-movie" | "/confirmed";
  label: string;
  busyLabel: string;
  delayMs?: number;
  onActivate?: () => void;
  onExitStart: () => void;
};

/** Plays the route's meaningful micro-scene before advancing to the next chapter. */
export function PositiveAction({
  href,
  label,
  busyLabel,
  delayMs = 820,
  onActivate,
  onExitStart,
}: PositiveActionProps) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const timers = timersRef.current;
    router.prefetch(href);
    return () => timers.forEach(clearTimeout);
  }, [href, router]);

  const handleClick = () => {
    if (isNavigating) return;

    setIsNavigating(true);
    onActivate?.();

    const totalDelay = prefersReducedMotion ? 40 : delayMs;
    const exitDelay = prefersReducedMotion ? 10 : Math.max(totalDelay - 360, 260);
    timersRef.current.push(setTimeout(onExitStart, exitDelay));
    timersRef.current.push(setTimeout(() => router.push(href), totalDelay));
  };

  return (
    <ActionButton
      variant="primary"
      className="positive-action"
      onClick={handleClick}
      disabled={isNavigating}
      aria-label={`${label}，进入下一页`}
      animate={
        isNavigating
          ? {
              scale: [1, 0.96, 1.03, 1],
              boxShadow: [
                "0 12px 30px rgba(23,143,221,0.28)",
                "0 10px 42px rgba(244,181,47,0.48)",
                "0 12px 30px rgba(23,143,221,0.22)",
              ],
            }
          : undefined
      }
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.48 }}
    >
      {isNavigating ? busyLabel : label}
    </ActionButton>
  );
}
