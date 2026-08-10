"use client";

import { useRef } from "react";
import { FloatingButton } from "@/components/FloatingButton";
import { TransitionButton } from "@/components/TransitionButton";

type ChoiceButtonsProps = {
  acceptLabel: string;
  declineLabels: readonly string[];
  href: "/after-movie" | "/confirmed";
  onExitStart: () => void;
};

/** Keeps both choices and their interaction rules in one reusable component. */
export function ChoiceButtons({
  acceptLabel,
  declineLabels,
  href,
  onExitStart,
}: ChoiceButtonsProps) {
  const acceptRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex min-h-12 items-center justify-center gap-3.5 sm:gap-4">
      <TransitionButton href={href} onExitStart={onExitStart} buttonRef={acceptRef}>
        {acceptLabel}
      </TransitionButton>
      <FloatingButton avoidRef={acceptRef} labels={declineLabels} />
    </div>
  );
}
