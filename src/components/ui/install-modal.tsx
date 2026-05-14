"use client";

import {
  ArrowSquareOutIcon,
  CheckIcon,
  CopyIcon,
  FolderOpenIcon,
  TerminalIcon,
  XIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CMD = "xattr -dr com.apple.quarantine /Applications/postab.app";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    icon: ArrowSquareOutIcon,
    title: "Open the DMG",
    body: "Double-click the downloaded postab.dmg to mount the disk image.",
  },
  {
    n: "02",
    icon: FolderOpenIcon,
    title: "Move to Applications",
    body: "Drag postab.app into your Applications folder, then eject the disk image.",
  },
  {
    n: "03",
    icon: TerminalIcon,
    title: "Clear the quarantine flag",
    body: "Because postab isn't notarized yet, macOS will block it. Open Terminal and run:",
  },
] as const;

export const InstallModal = ({ open, onClose }: Props) => {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(CMD);
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Installation instructions"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={(e) => e.target === overlayRef.current && onClose()}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

          {/* card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.38, ease: EASE }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-border surface-gradient bg-surface/90 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.7)] backdrop-blur-sm"
          >
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <div className="grid gap-0.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  getting started
                </p>
                <h2 className="font-sans text-base font-semibold text-foreground">
                  Install postab
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <XIcon size={15} weight="bold" />
              </button>
            </div>

            {/* steps */}
            <ol className="grid gap-px bg-border">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <li
                    key={step.n}
                    className={cn(
                      "grid grid-cols-[auto_1fr] gap-4 bg-surface/90 px-6 py-5",
                      i === 0 && "pt-6",
                      isLast && "rounded-b-none pb-5",
                    )}
                  >
                    {/* numeral + line */}
                    <div className="flex flex-col items-center gap-2 pt-0.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-2 font-mono text-[11px] text-muted">
                        {step.n}
                      </span>
                      {!isLast && (
                        <span className="w-px flex-1 bg-border" />
                      )}
                    </div>

                    {/* content */}
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          size={14}
                          weight="bold"
                          className="text-primary-soft"
                        />
                        <h3 className="font-sans text-sm font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm leading-relaxed text-muted">
                        {step.body}
                      </p>

                      {/* terminal block — only on last step */}
                      {isLast && (
                        <div className="mt-1 flex items-stretch overflow-hidden rounded-lg border border-border bg-background/60">
                          <div className="flex flex-1 items-center gap-2 px-3.5 py-3">
                            <span className="shrink-0 font-mono text-[11px] text-primary-soft select-none">
                              $
                            </span>
                            <code className="flex-1 font-mono text-[11px] leading-relaxed text-foreground/90 break-all">
                              {CMD}
                            </code>
                          </div>
                          <button
                            type="button"
                            onClick={copy}
                            aria-label="Copy command"
                            className={cn(
                              "flex shrink-0 items-center gap-1.5 border-l border-border px-3.5 font-mono text-[11px] tracking-wide transition-colors",
                              copied
                                ? "text-emerald-400"
                                : "text-muted hover:text-foreground",
                            )}
                          >
                            {copied ? (
                              <>
                                <CheckIcon size={12} weight="bold" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <CopyIcon size={12} weight="bold" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* footer */}
            <div className="flex items-center justify-between rounded-b-2xl border-t border-border bg-surface-2/50 px-6 py-4">
              <p className="font-mono text-[10px] text-muted">
                This step goes away once the app is notarized.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 font-sans text-sm font-semibold tracking-tight text-primary-ink shadow-[0_6px_20px_-6px_color-mix(in_oklab,var(--color-primary)_70%,transparent)] transition-colors hover:bg-primary-soft"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
