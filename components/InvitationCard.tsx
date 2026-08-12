"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MovieCover } from "@/components/MovieCover";
import { PositiveAction } from "@/components/PositiveAction";
import { gentleEase } from "@/lib/motion";

type InvitationCardProps = {
  onExitStart: () => void;
  reveal?: boolean;
};

export function InvitationCard({ onExitStart, reveal = true }: InvitationCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <article className="invitation-paper relative w-full overflow-hidden rounded-[16px] px-6 pb-7 pt-7 text-center sm:px-8 sm:pb-8 sm:pt-8">
      <div className="paper-corner paper-corner-left" aria-hidden="true" />
      <div className="paper-corner paper-corner-right" aria-hidden="true" />

      <AnimatePresence>
        {isAccepted ? (
          <motion.div
            className="accepted-stamp"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.7, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.42, ease: gentleEase }}
            aria-hidden="true"
          >
            已收下
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={reveal ? { opacity: 0, y: 12, filter: "blur(7px)" } : false}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: prefersReducedMotion ? 0.01 : 0.65,
          delay: prefersReducedMotion ? 0 : 0.72,
          ease: gentleEase,
        }}
      >
        <h1 className="font-display text-[1.72rem] font-medium leading-[1.42] tracking-[-0.025em] text-[#24567a] sm:text-[1.92rem]">
          有一场电影
          <br />
          想邀请你一起看
        </h1>

        <div className="my-5 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-px w-8 bg-[#8ecbec]" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#f4b52f]" />
          <span className="h-px w-8 bg-[#8ecbec]" />
        </div>

        <MovieCover />

        <p className="font-display mb-5 mt-3 text-[1.12rem] tracking-[0.04em] text-[#24567a]">
          《去你的岛》
        </p>

        <PositiveAction
          label="收下电影票"
          busyLabel="已收下"
          href="/after-movie"
          onActivate={() => setIsAccepted(true)}
          onExitStart={onExitStart}
        />
      </motion.div>
    </article>
  );
}
