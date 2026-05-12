import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SectionLabel = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
        className,
      )}
    >
      <span className="h-px w-6 bg-border-strong" />
      {children}
    </div>
  );
};
