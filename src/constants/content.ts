export const HERO = {
  eyebrow: "for the macOS poweruser",
  tagline: {
    lead: "Address your apps",
    emphasisPre: "like a",
    emphasisWord: "poweruser",
    emphasisPost: ".",
    annotation: "yes, you.",
  },
  subline:
    "postab replaces ⌘+Tab with a leader key and a short sequence. Hold Right ⌘, type d to land on Discord. Type fa for Firefox. No cycling, no search, no mouse.",
  primaryCta: { label: "Download for macOS", note: "free, no account" },
  secondaryCta: { label: "How it works", href: "#how" },
} as const;

export const PRIVACY = {
  eyebrow: "privacy",
  title: "Captured while held. Discarded on release.",
  body: "postab listens for keystrokes only while the leader key is held. Nothing is stored. Nothing is logged. Nothing leaves your machine.",
  setup:
    "On first launch postab will ask for Accessibility access in System Settings, Privacy and Security, Accessibility. It is the only permission it ever needs.",
  claims: [
    "No telemetry, no analytics, no network calls.",
    "No keystroke logs, no transcripts, no buffers retained.",
    "No cloud dependency. Everything runs on device.",
  ],
} as const;

export const DOWNLOAD = {
  eyebrow: "ready when you are",
  title: "Free to try. Yours to keep.",
  body: "Download the binary, grant Accessibility, and you are addressing apps within a minute.",
  cta: { label: "Download for macOS", note: "auto-updates via Sparkle" },
} as const;

export const FOOTER = {
  line: "postab · keystrokes never stored or transmitted · macOS 26 Tahoe and later",
} as const;
