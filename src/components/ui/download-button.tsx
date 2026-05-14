"use client";

import { useState } from "react";
import { AppleIcon } from "@/components/ui/apple-icon";
import { InstallModal } from "@/components/ui/install-modal";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  size?: "sm" | "md";
  className?: string;
};

export const DownloadButton = ({ label, size = "md", className }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group inline-flex items-center gap-2.5 rounded-lg bg-primary font-sans font-semibold tracking-tight text-primary-ink shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition-colors hover:bg-primary-soft",
          size === "md" && "px-5 py-3.5 text-sm",
          size === "lg" && "px-6 py-4 text-base",
          className,
        )}
      >
        <AppleIcon size={size === "lg" ? 18 : 16} className="-mt-0.5" />
        {label}
      </button>

      <InstallModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};
