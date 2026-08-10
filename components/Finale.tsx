"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { StarParticles } from "@/components/StarParticles";
import { gentleEase } from "@/lib/motion";

export function Finale() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <PageShell>
      <StarParticles />
      <section className="relative z-10 w-full max-w-[520px] px-5 text-center">
        <motion.div
          className="projector-halo mx-auto mb-9 grid h-24 w-24 place-items-center rounded-full"
          initial={prefersReducedMotion ? false : { scale: 0.72, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.8, ease: gentleEase }}
          aria-hidden="true"
        >
          <span className="film-mark"><i /><i /></span>
        </motion.div>

        <motion.h1
          className="font-display text-[2.15rem] font-medium leading-[1.4] tracking-[-0.03em] text-[#303954] sm:text-[2.75rem]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.72, delay: 0.28, ease: gentleEase }}
        >
          我们看完电影
          <br />
          可以去散步吗？
          <span className="film-mark title-film-mark" aria-hidden="true"><i /><i /></span>
        </motion.h1>

        <motion.div
          className="mx-auto mt-9 flex w-40 items-center gap-3"
          initial={prefersReducedMotion ? false : { opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.75, delay: 0.55, ease: gentleEase }}
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#a2aac9]" />
          <span className="h-2 w-2 rotate-45 border border-[#8b95ba]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#a2aac9]" />
        </motion.div>
      </section>
    </PageShell>
  );
}
