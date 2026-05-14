"use client";

import { AppleIcon } from "@/components/ui/apple-icon";
import { SITE } from "@/constants/site";
import { useModalStore } from "@/store/modal";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export const DownloadButton = ({ label, size = "md", className }: Props) => {
  const openModal = useModalStore((s) => s.openModal);

  return (
    <button
      type="button"
      onClick={() => openModal("install", { downloadHref: SITE.downloadHref })}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg bg-primary font-sans font-semibold tracking-tight text-primary-ink shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition-colors hover:bg-primary-soft",
        size === "sm" && "px-3 py-1.5 text-[13px]",
        size === "md" && "px-5 py-3.5 text-sm",
        size === "lg" && "px-6 py-4 text-base",
        className,
      )}
    >
      <AppleIcon
        size={size === "lg" ? 18 : size === "sm" ? 13 : 16}
        className="-mt-0.5"
      />
      {label}
    </button>
  );
};
