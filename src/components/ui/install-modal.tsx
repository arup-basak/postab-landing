"use client";

import {
  ArrowSquareOutIcon,
  CheckIcon,
  CopyIcon,
  DownloadSimpleIcon,
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
  downloadHref: string;
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

export const InstallModal = ({ open, onClose, downloadHref }: Props) => {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [dlState, setDlState] = useState<"idle" | "pending" | "started">("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const dlTimer = useRef<ReturnType<typeof setTimeout>>(null);

  // auto-download 1 s after modal opens
  useEffect(() => {
    if (!open) {
      setDlState("idle");
      return;
    }

    setDlState("pending");
    dlTimer.current = setTimeout(() => {
      const a = document.createElement("a");
      a.href = downloadHref;
      a.setAttribute("download", "");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setDlState("started");
    }, 1000);

    return () => {
      if (dlTimer.current) clearTimeout(dlTimer.current);
    };
  }, [open, downloadHref]);

  // keyboard + scroll lock
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

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(CMD);
    setCopied(true);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  }, []);

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
              <div className="flex items-center gap-3">
                <div className="grid gap-0.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    getting started
                  </p>
                  <h2 className="font-sans text-base font-semibold text-foreground">
                    Install postab
                  </h2>
                </div>

                {/* download status pill */}
                <AnimatePresence mode="wait">
                  {dlState === "pending" && (
                    <motion.span
                      key="pending"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] text-muted"
                    >
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                      Preparing download…
                    </motion.span>
                  )}
                  {dlState === "started" && (
                    <motion.span
                      key="started"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] text-emerald-400"
                    >
                      <DownloadSimpleIcon size={11} weight="bold" />
                      Download started
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
              >
                <XIcon size={15} weight="bold" />
              </button>
            </div>

            {/* steps */}
            <ol className="bg-surface/90">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <li
                    key={step.n}
                    className={cn(
                      "grid grid-cols-[auto_1fr] gap-4 px-6 py-5",
                      i === 0 && "pt-6",
                      isLast && "pb-6",
                      !isLast && "border-b border-border/40",
                    )}
                  >
                    {/* numeral + connector */}
                    <div className="flex flex-col items-center gap-2 pt-0.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 font-mono text-[11px] text-muted">
                        {step.n}
                      </span>
                      {!isLast && (
                        <span className="w-px flex-1 bg-border/60" />
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

                      {isLast && (
                        <div className="mt-1 flex items-stretch overflow-hidden rounded-lg border border-border bg-background/60">
                          <div className="flex flex-1 items-center gap-2 px-3.5 py-3">
                            <span className="shrink-0 select-none font-mono text-[11px] text-primary-soft">
                              $
                            </span>
                            <code className="flex-1 break-all font-mono text-[11px] leading-relaxed text-foreground/90">
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
