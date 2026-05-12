import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "primary" | "ghost";
  className?: string;
};

const SIZE: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-6 min-w-6 px-1.5 text-[11px]",
  md: "h-8 min-w-8 px-2 text-[12px]",
  lg: "h-10 min-w-10 px-3 text-[13px]",
};

const TONE: Record<NonNullable<Props["tone"]>, string> = {
  default:
    "bg-surface-2 text-foreground border-border shadow-[inset_0_-1px_0_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]",
  primary:
    "bg-[color-mix(in_oklab,var(--color-primary)_22%,var(--color-surface-2))] text-foreground border-[color-mix(in_oklab,var(--color-primary)_45%,transparent)] shadow-[inset_0_-1px_0_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.07)]",
  ghost: "bg-transparent text-muted border-border",
};

export const Keycap = ({
  children,
  size = "md",
  tone = "default",
  className,
}: Props) => {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center rounded-md border font-mono leading-none align-middle",
        SIZE[size],
        TONE[tone],
        className,
      )}
    >
      {children}
    </kbd>
  );
};
