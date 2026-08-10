"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChoiceButtons } from "@/components/ChoiceButtons";
import { PageShell } from "@/components/PageShell";
import { gentleEase } from "@/lib/motion";

export function AfterMovieQuestion() {
  const [isExiting, setIsExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageShell exiting={isExiting}>
      <motion.section
        className="question-paper relative z-10 w-full max-w-[390px] overflow-hidden rounded-[16px] px-7 py-12 text-center sm:px-10 sm:py-14"
        initial={prefersReducedMotion ? false : { clipPath: "inset(48% 0 48% 0 round 16px)" }}
        animate={{ clipPath: "inset(0% 0 0% 0 round 16px)" }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.82, ease: gentleEase }}
      >
        <div className="mx-auto mb-8 flex w-24 items-center gap-2" aria-hidden="true">
          <span className="h-px flex-1 bg-[#c2c7dc]" />
          <span className="ticket-dot" />
          <span className="h-px flex-1 bg-[#c2c7dc]" />
        </div>

        <p className="mb-4 text-sm tracking-[0.18em] text-[#59627d]">电影散场之后</p>
        <h1 className="font-display text-[2rem] font-medium leading-[1.5] tracking-[-0.025em] text-[#303954] sm:text-[2.22rem]">
          电影看完啦
          <br />
          可以送你回家吗？
        </h1>

        <p className="mx-auto mb-9 mt-5 max-w-[18rem] text-[0.94rem] leading-7 text-[#59627d]">
          如果夜风刚好温柔，想再陪你走一段路。
        </p>

        <ChoiceButtons
          acceptLabel="可以"
          declineLabel="不可以"
          href="/confirmed"
          onExitStart={() => setIsExiting(true)}
        />
      </motion.section>
    </PageShell>
  );
}
