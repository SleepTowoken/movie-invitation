"use client";

import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { PromiseTicket } from "@/components/PromiseTicket";

export function Finale() {
  const [stored, setStored] = useState(false);

  return (
    <PageShell>
      <section className="relative z-10 w-full max-w-[520px] px-3 text-center">
        <PromiseTicket stored={stored} onStore={() => setStored(true)} />
      </section>
    </PageShell>
  );
}
