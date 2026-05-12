import { cn } from "@/lib/utils";

type Mode = "switch" | "quit" | "hide";

const STYLES: Record<Mode, string> = {
  switch:
    "bg-[color-mix(in_oklab,var(--color-foreground)_8%,transparent)] text-foreground border-border",
  quit: "bg-[color-mix(in_oklab,#ff3b30_18%,transparent)] text-[#ff8a80] border-[color-mix(in_oklab,#ff3b30_45%,transparent)]",
  hide: "bg-[color-mix(in_oklab,#ffd60a_15%,transparent)] text-[#ffd97a] border-[color-mix(in_oklab,#ffd60a_40%,transparent)]",
};

const LABEL: Record<Mode, string> = {
  switch: "Switch",
  quit: "Quit",
  hide: "Hide",
};

export const ModeBadge = ({
  mode,
  className,
}: {
  mode: Mode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em]",
        STYLES[mode],
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          mode === "switch" && "bg-foreground/70",
          mode === "quit" && "bg-[#ff5b51]",
          mode === "hide" && "bg-[#ffd060]",
        )}
      />
      {LABEL[mode]}
    </span>
  );
};
