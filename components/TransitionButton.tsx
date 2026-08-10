"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useRouter } from "next/navigation";
import { ActionButton } from "@/components/ActionButton";

type TransitionButtonProps = {
  href: "/after-movie" | "/confirmed";
  children: React.ReactNode;
  onExitStart: () => void;
  buttonRef?: RefObject<HTMLButtonElement | null>;
};

/** Handles the desktop exit animation and immediate mobile navigation. */
export function TransitionButton({
  href,
  children,
  onExitStart,
  buttonRef,
}: TransitionButtonProps) {
  const router = useRouter();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    router.prefetch(href);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [href, router]);

  const handleClick = () => {
    if (isNavigating) return;

    const isDesktop = window.matchMedia(
      "(min-width: 768px) and (pointer: fine)",
    ).matches;

    if (!isDesktop) {
      router.push(href);
      return;
    }

    setIsNavigating(true);
    onExitStart();
    timerRef.current = setTimeout(() => router.push(href), 420);
  };

  return (
    <ActionButton
      ref={buttonRef}
      variant="primary"
      onClick={handleClick}
      disabled={isNavigating}
      aria-label={`${String(children)}，进入下一页`}
      animate={
        isNavigating
          ? {
              scale: [1, 0.96, 1.04],
              boxShadow: [
                "0 12px 28px rgba(67,76,139,0.24)",
                "0 8px 40px rgba(125,113,189,0.42)",
                "0 12px 32px rgba(67,76,139,0.18)",
              ],
            }
          : undefined
      }
      transition={{ duration: 0.38 }}
    >
      {children}
    </ActionButton>
  );
}
