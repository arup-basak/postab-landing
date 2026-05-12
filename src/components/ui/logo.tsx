import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type Props = SVGProps<SVGSVGElement> & {
  size?: number | string;
  title?: string;
  gradientId?: string;
};

export const LogoMark = ({
  size = 24,
  className,
  title = "postab",
  gradientId = "postab-logo-gradient",
  ...rest
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn(className)}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff5b2e" />
          <stop offset="100%" stopColor="#ff8a64" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gradientId})`}>
        <rect x="6" y="5" width="5" height="23" rx="0.5" />
        <path
          fillRule="evenodd"
          d="M18 5 a8 8 0 1 1 0 16 a8 8 0 1 1 0 -16 z M18 10 a3 3 0 1 0 0 6 a3 3 0 1 0 0 -6 z"
        />
      </g>
    </svg>
  );
};

type WordmarkProps = {
  size?: number;
  showVersion?: boolean;
  className?: string;
};

export const Logo = ({
  size = 24,
  showVersion = false,
  className,
}: WordmarkProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      <span className="font-display text-xl leading-none tracking-tight">
        postab
      </span>
      {showVersion ? (
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
          v0.1
        </span>
      ) : null}
    </span>
  );
};
