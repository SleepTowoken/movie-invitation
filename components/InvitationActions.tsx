import { HesitationButton } from "@/components/HesitationButton";
import { PositiveAction } from "@/components/PositiveAction";

type InvitationActionsProps = {
  acceptLabel: string;
  busyLabel: string;
  declineLabelPools: readonly [readonly string[], readonly string[], readonly string[], readonly string[]];
  href: "/after-movie" | "/confirmed";
  noteTitle: string;
  delayMs?: number;
  onAccept?: () => void;
  onExitStart: () => void;
};

/** Keeps the clear forward action and the playful hesitation branch in one safe arena. */
export function InvitationActions({
  acceptLabel,
  busyLabel,
  declineLabelPools,
  href,
  noteTitle,
  delayMs,
  onAccept,
  onExitStart,
}: InvitationActionsProps) {
  return (
    <div className="invitation-actions">
      <PositiveAction
        label={acceptLabel}
        busyLabel={busyLabel}
        href={href}
        delayMs={delayMs}
        onActivate={onAccept}
        onExitStart={onExitStart}
      />
      <HesitationButton labelPools={declineLabelPools} noteTitle={noteTitle} />
    </div>
  );
}
