"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TopDownCascade } from "@/components/CeremonyEffects";
import { InvitationActions } from "@/components/InvitationActions";
import { PageShell } from "@/components/PageShell";
import { WalkingPath } from "@/components/WalkingPath";
import { gentleEase } from "@/lib/motion";

export function AfterMovieQuestion() {
  const [isExiting, setIsExiting] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <TopDownCascade active={isWalking} variant="night" />
      <PageShell exiting={isExiting}>
        <motion.section
          className="question-paper relative z-10 w-full max-w-[390px] overflow-hidden rounded-[16px] px-7 py-12 text-center sm:px-10 sm:py-14"
          initial={prefersReducedMotion ? false : { clipPath: "inset(48% 0 48% 0 round 16px)" }}
          animate={{ clipPath: "inset(0% 0 0% 0 round 16px)" }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.82, ease: gentleEase }}
        >
        <div className="mx-auto mb-8 flex w-24 items-center gap-2" aria-hidden="true">
          <span className="h-px flex-1 bg-[#8ecbec]" />
          <span className="ticket-dot" />
          <span className="h-px flex-1 bg-[#8ecbec]" />
        </div>

        <p className="mb-4 text-sm tracking-[0.18em] text-[#3e6f91]">电影散场之后</p>
        <h1 className="font-display text-[2rem] font-medium leading-[1.5] tracking-[-0.025em] text-[#24567a] sm:text-[2.22rem]">
          看完电影
          <br />
          可以带你去散步吗？
        </h1>

        <p className="mx-auto mt-5 max-w-[18rem] text-[0.94rem] leading-7 text-[#3e6f91]">
          如果夜风刚好温柔，想再陪你走一段路。
        </p>

        <WalkingPath active={isWalking} />

        <InvitationActions
          acceptLabel="好呀，去散步"
          busyLabel="一起出发"
          declineLabelPools={[
            ["不可以"],
            ["让我想想路线", "先看看夜风", "再考虑一下"],
            ["夜风会温柔吗", "好像可以走走", "要不再问一次"],
            ["再邀请我一次", "散步先留着", "让我认真想想"],
          ]}
          href="/confirmed"
          delayMs={1120}
          noteTitle="散步的邀请先替你留着"
          onAccept={() => setIsWalking(true)}
          onExitStart={() => setIsExiting(true)}
        />
        </motion.section>
      </PageShell>
    </>
  );
}
