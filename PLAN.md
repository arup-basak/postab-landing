# postab — Feature List & Landing Page Copy

---

## Feature List

### Core Mechanics
- **Trie-based prefix matching** — key sequences resolve without conflicts or ambiguity; the trie is traversed live as you type
- **Leader key trigger** — hold Right ⌘ (or any configurable modifier) to activate; release to dismiss
- **Floating overlay** — appears above the menu bar showing all mapped apps and their remaining key hints as you type
- **1–2 keystroke app addressing** — `d` → Discord, `fa` → Firefox, `fb` → Finder; no cycling, no search

### Actions
- **Switch mode** (default) — bring any app to focus instantly
- **Quit mode** — hold Right ⌘ + Control; overlay turns red; type a sequence to quit that app
- **Hide mode** — hold Right ⌘ + Shift; overlay turns yellow; type a sequence to hide that app
- All three modes share the same key map — one mental model, three outcomes

### Configuration
- **Auto-assignment on first run** — postab assigns keys to all running apps with no setup required
- **Fully configurable mappings** — override any auto-assigned key via native SwiftUI settings panel
- **Configurable leader key** — Right ⌘, Left ⌥, Right ⌃, or any supported modifier
- **App blacklist** — exclude any app from the overlay entirely
- **Launch at login** — single toggle, no launchd wrangling

### Distribution & Updates
- **Auto-updates via Sparkle** — no App Store, no manual downloads
- **Free / indie distribution** — direct download, no account required
- **macOS native** — Swift + SwiftUI; no Electron, no background services

### Privacy & Trust
- **No telemetry** — no analytics, no network calls, no tracking
- **No keystroke logging** — input is captured only while leader key is held, discarded immediately after
- **No cloud dependency** — everything runs on-device
- **Accessibility permission only** — grant once in System Settings → Privacy & Security → Accessibility; no other sensitive entitlements

### System Requirements
- macOS 26 Tahoe or later
- Apple Silicon + Intel (Universal Binary)
- Sandboxing disabled by design (required for CGEventTap)

---

## Landing Page Copy

---

### Hero

**Tagline**
Address your apps like a pro.

**Subline**
postab replaces ⌘+Tab with a leader key and a short sequence.
Hold Right ⌘, type `d` — Discord. Type `fa` — Firefox.
No cycling. No search. No mouse.

**CTA**
Download for macOS — free, no account

---

### How It Works

**Step 1 — Hold**
Hold Right ⌘. The overlay appears above your menu bar, showing every mapped app and its key hint.

**Step 2 — Type**
Type a sequence. `d` resolves to Discord. `fa` resolves to Firefox. The overlay narrows as you type — like autocomplete, but instant.

**Step 3 — Act**
Release. The target app is in focus. Hold Control before releasing to quit it. Hold Shift to hide it. Same sequence, different modifier, different outcome.

---

### Features

**Direct addressing, not cycling**
⌘+Tab asks you to count. postab asks you to name.
Every app in your trie has an address. You type it; you're there. 1–2 keystrokes for any app, any time.

**Three actions, one gesture**
Switch. Quit. Hide.
The same key sequence does all three depending on which modifier you hold. No separate shortcuts to memorize — the leader key is the only new thing you learn.

**Trie-based, conflict-free**
postab uses a prefix trie to resolve sequences. `f` and `fa` coexist without ambiguity — `f` alone resolves to whichever app you assigned it, `fa` is a different branch. The tree is yours to define.

**Zero config to start**
Launch postab. It reads your running apps and assigns keys automatically. You can override any mapping in the settings panel, but you don't have to.

**Invisible until needed**
Lives in the menu bar. No Dock icon. No background UI. Zero CPU when idle. Shows up when you hold the leader key; disappears when you release it.

**macOS native, no overhead**
Written in Swift. No Electron, no helper processes, no runtime dependencies. Intercepts at the system level via CGEventTap — the same mechanism the OS uses.

---

### Privacy

postab captures keystrokes only while the leader key is held.
Nothing is stored. Nothing is logged. Nothing is transmitted.

**Setup:** On first launch, postab will prompt you to grant Accessibility access in System Settings → Privacy & Security → Accessibility. This is the only permission it requires, and the only configuration needed before use.

---

### Download / CTA

**postab**
Free. No account. No App Store.

- macOS 26 Tahoe or later
- Apple Silicon + Intel
- Requires Accessibility permission

[Download for macOS →]  ·  Auto-updates via Sparkle

---

### FAQ

**Why does it need Accessibility permission?**
postab intercepts the leader key before it reaches the OS using CGEventTap — a standard macOS API for system-level input handling. Without it, there is no way to intercept a modifier key globally. Granting access in System Settings → Privacy & Security → Accessibility takes under ten seconds.

**Does it affect performance?**
No. postab is idle when the overlay is closed. When active, it traverses a trie in memory — the overhead is unmeasurable.

**Is there a free trial?**
postab is free.

**Where does it live?**
Menu bar only. No Dock icon. No startup splash. It is a tool, not an app.

---

### Footer

postab — Keystrokes never stored or transmitted · macOS 26 Tahoe+
