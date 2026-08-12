"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ActionButton } from "@/components/ActionButton";
import { gentleEase } from "@/lib/motion";

type PromiseTicketProps = {
  stored: boolean;
  onStore: () => void;
};

function CheckMark() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <motion.path
        d="m4.5 10.2 3.3 3.3 7.8-8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.56, delay: 0.58, ease: gentleEase }}
      />
    </svg>
  );
}

const gatheringPetals = [
  { x: -132, y: -128, tone: "gold" },
  { x: 126, y: -94, tone: "pink" },
  { x: -114, y: 72, tone: "blue" },
  { x: 132, y: 94, tone: "apricot" },
  { x: 2, y: -158, tone: "gold" },
] as const;

/** The closing keepsake: a compact promise ticket that can be folded away. */
export function PromiseTicket({ stored, onStore }: PromiseTicketProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="promise-scene">
      {gatheringPetals.map((petal, index) => (
        <motion.span
          key={`${petal.x}-${petal.y}`}
          className={`gathering-petal petal-${petal.tone}`}
          initial={false}
          animate={
            stored
              ? { x: 0, y: 172, opacity: 0, scale: 0.35, rotate: 120 }
              : { x: petal.x, y: petal.y, opacity: 0.56, rotate: index * 34 }
          }
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.86,
            delay: prefersReducedMotion ? 0 : index * 0.045,
            ease: gentleEase,
          }}
          aria-hidden="true"
        />
      ))}

      <AnimatePresence mode="wait">
        {!stored ? (
          <motion.div
            key="ticket"
            className="promise-ticket"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28, rotate: -1.2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{
              opacity: 0,
              y: 176,
              scale: 0.18,
              rotateX: 72,
              filter: "blur(4px)",
            }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.78, ease: gentleEase }}
          >
            <div className="ticket-waterline" aria-hidden="true" />
            <p className="ticket-number">纪念票号&nbsp; YDI-001</p>
            <h1>那就这样约定啦</h1>
            <p className="ticket-movie">《去你的岛》</p>

            <div className="ticket-promises">
              <p><span><CheckMark /></span>一起看电影</p>
              <p><span><CheckMark /></span>看完去散步</p>
            </div>

            <p className="ticket-goodbye">那天见</p>
            <ActionButton variant="primary" className="positive-action mt-6" onClick={onStore}>
              收好这张票
            </ActionButton>
          </motion.div>
        ) : (
          <motion.div
            key="stored"
            className="stored-message"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.68, delay: 0.36, ease: gentleEase }}
            aria-live="polite"
          >
            <h1>约定已经收好</h1>
            <p>期待和你一起看电影</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="ticket-envelope"
        initial={false}
        animate={stored ? { y: -12, scale: 1.04, opacity: 1 } : { y: 10, scale: 0.92, opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.62, delay: stored ? 0.18 : 0, ease: gentleEase }}
        aria-hidden="true"
      >
        <span />
      </motion.div>
    </div>
  );
}
