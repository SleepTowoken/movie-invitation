"use client";

import { useState } from "react";
import { InwardGather } from "@/components/CeremonyEffects";
import { PageShell } from "@/components/PageShell";
import { PromiseTicket } from "@/components/PromiseTicket";

export function Finale() {
  const [stored, setStored] = useState(false);

  return (
    <>
      <InwardGather active={stored} />
      <PageShell>
        <section className="relative z-10 w-full max-w-[520px] px-3 text-center">
          <PromiseTicket stored={stored} onStore={() => setStored(true)} />
        </section>
      </PageShell>
    </>
  );
}
