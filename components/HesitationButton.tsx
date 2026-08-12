"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ActionButton } from "@/components/ActionButton";
import { gentleEase } from "@/lib/motion";

const safeLandings = [
  { x: "-34%", y: 68, rotate: -2.5 },
  { x: "34%", y: 82, rotate: 2.5 },
  { x: "0%", y: 72, rotate: 0 },
] as const;

const burstPetals = [
  { x: -23, y: -17, tone: "gold", rotate: -42 },
  { x: 22, y: -12, tone: "pink", rotate: 38 },
  { x: 7, y: -27, tone: "blue", rotate: 72 },
] as const;

type HesitationButtonProps = {
  labelPools: readonly [readonly string[], readonly string[], readonly string[], readonly string[]];
  noteTitle: string;
};

function pickGentleLabel(pool: readonly string[], previous: string) {
  const choices = pool.filter((label) => label !== previous);
  const source = choices.length > 0 ? choices : pool;
  return source[Math.floor(Math.random() * source.length)] ?? previous;
}

/** A playful refusal branch: it can hesitate forever, but never navigates or disappears. */
export function HesitationButton({ labelPools, noteTitle }: HesitationButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const noteTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [step, setStep] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(labelPools[0][0] ?? "再想想");
  const [noteCycle, setNoteCycle] = useState(0);
  const [showNote, setShowNote] = useState(false);

  useEffect(() => () => {
    if (noteTimerRef.current) clearTimeout(noteTimerRef.current);
  }, []);

  const handleClick = () => {
    if (step < safeLandings.length) {
      const nextStep = step + 1;
      setCurrentLabel((previous) => pickGentleLabel(labelPools[nextStep], previous));
      setStep((current) => current + 1);
      return;
    }

    if (noteTimerRef.current) clearTimeout(noteTimerRef.current);
    setNoteCycle((current) => current + 1);
    setShowNote(true);
    noteTimerRef.current = setTimeout(() => setShowNote(false), 3600);
  };

  const landing = step === 0 ? { x: "0%", y: 64, rotate: 0 } : safeLandings[step - 1];
  const animatedLanding = prefersReducedMotion
    ? { x: "0%", y: 68, rotate: 0, scale: 1 }
    : { ...landing, scale: step > 0 ? [1, 0.92, 1.08, 1] : 1 };

  return (
    <div className="hesitation-layer">
      <motion.div
        className="hesitation-button-wrap"
        animate={animatedLanding}
        transition={
          prefersReducedMotion
            ? { duration: 0.01 }
            : {
                x: { type: "spring", stiffness: 350, damping: 16, mass: 0.76 },
                y: { type: "spring", stiffness: 410, damping: 14, mass: 0.72 },
                rotate: { type: "spring", stiffness: 320, damping: 18 },
                scale: { duration: 0.42, times: [0, 0.28, 0.68, 1], ease: gentleEase },
              }
        }
        style={{ willChange: step > 0 ? "transform" : "auto" }}
      >
        <ActionButton
          variant="secondary"
          className="hesitation-action"
          onClick={handleClick}
          aria-label={`${currentLabel}，不会离开当前页面`}
        >
          <span aria-live="polite">{currentLabel}</span>
        </ActionButton>

        <AnimatePresence>
          {step > 0 && step <= safeLandings.length && !prefersReducedMotion
            ? burstPetals.map((petal, index) => (
                <motion.i
                  key={`${step}-${index}`}
                  className={`hesitation-petal petal-${petal.tone}`}
                  initial={{ x: 0, y: 0, opacity: 0.9, scale: 0.8, rotate: 0 }}
                  animate={{
                    x: petal.x,
                    y: petal.y,
                    opacity: 0,
                    scale: 1.2,
                    rotate: petal.rotate,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.62, ease: gentleEase }}
                  aria-hidden="true"
                />
              ))
            : null}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {showNote ? (
          <motion.div
            key={noteCycle}
            className="hesitation-note"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8, clipPath: "inset(0 50% 0 50% round 12px)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0% 0 0% round 12px)" }}
            exit={{ opacity: 0, y: 5, clipPath: "inset(0 48% 0 48% round 12px)" }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.42, ease: gentleEase }}
            role="status"
          >
            <strong>{noteTitle}</strong>
            <span>想好了，再点蓝色按钮告诉我</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
