"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { InwardGather, TopDownCascade } from "@/components/CeremonyEffects";
import { InvitationCard } from "@/components/InvitationCard";
import { PageShell } from "@/components/PageShell";
import { gentleEase } from "@/lib/motion";

export function EnvelopeReveal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0.01 : 0.72;

  return (
    <>
      <TopDownCascade active={isOpen} variant="petal" />
      <InwardGather active={isAccepted} />
      <PageShell
        exiting={isExiting}
        className={isOpen ? "items-start sm:items-center" : "items-center"}
      >
        <section
          className={`envelope-stage relative z-10 w-full max-w-[390px] transition-[min-height] duration-700 ${
            isOpen ? "min-h-[850px] sm:min-h-[880px]" : "min-h-[390px]"
          }`}
          aria-label="电影邀请信"
        >
        <motion.div
          className="absolute left-1/2 top-0 w-[min(90vw,354px)] -translate-x-1/2"
          aria-hidden={!isOpen}
          inert={!isOpen}
          initial={false}
          animate={
            isOpen
              ? { y: 0, scale: 1, opacity: 1 }
              : { y: 214, scale: 0.78, opacity: 0 }
          }
          transition={{
            duration,
            delay: isOpen && !prefersReducedMotion ? 0.38 : 0,
            ease: gentleEase,
          }}
          style={{ zIndex: isOpen ? 6 : 2 }}
        >
          <InvitationCard
            onAccept={() => setIsAccepted(true)}
            onExitStart={() => setIsExiting(true)}
          />
        </motion.div>

        <motion.div
          className="absolute left-1/2 top-[96px] h-[225px] w-[min(88vw,340px)] -translate-x-1/2 sm:top-[132px]"
          initial={false}
          animate={
            isOpen
              ? {
                  y: 260,
                  opacity: 0,
                  scale: 0.94,
                  transitionEnd: { display: "none" },
                }
              : { y: 0, opacity: 1, scale: 1, display: "block" }
          }
          transition={{ duration, delay: isOpen ? 0.34 : 0, ease: gentleEase }}
          style={{ perspective: 900 }}
          aria-hidden={isOpen}
        >
          <div className="envelope-back absolute inset-0 rounded-b-[16px]" />

          <motion.div
            className="envelope-flap absolute left-0 top-0 h-[52%] w-full origin-top"
            initial={false}
            animate={{ rotateX: isOpen ? -178 : 0 }}
            transition={{
              duration: prefersReducedMotion ? 0.01 : 0.48,
              ease: gentleEase,
            }}
            style={{ zIndex: isOpen ? 1 : 5, transformStyle: "preserve-3d" }}
          />

          <div className="envelope-pocket absolute inset-0 z-[4] rounded-b-[16px]" />

          {!isOpen && (
            <motion.div
              className="seal absolute left-1/2 top-[46%] z-[6] grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full"
              animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.04, 1] }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 2.4,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="seal-mark" />
            </motion.div>
          )}

          {!isOpen && (
            <button
              type="button"
              className="absolute inset-0 z-10 cursor-pointer rounded-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#178fdd] focus-visible:ring-offset-4 focus-visible:ring-offset-[#eaf6fb]"
              onClick={() => setIsOpen(true)}
              aria-label="打开电影邀请信"
            />
          )}
        </motion.div>

        {!isOpen && (
          <motion.div
            className="absolute inset-x-0 top-[345px] text-center sm:top-[382px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.16em] text-[#24567a]">轻点开启邀请</p>
            <span className="mx-auto mt-3 block h-7 w-px bg-gradient-to-b from-[#178fdd] to-transparent" />
          </motion.div>
        )}
        </section>
      </PageShell>
    </>
  );
}
