export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "Why does it need Accessibility permission?",
    a: "postab intercepts the leader key before it reaches the OS using CGEventTap, a standard macOS API for system level input handling. Without it there is no way to intercept a modifier key globally. Granting access in System Settings, Privacy and Security, Accessibility takes about ten seconds.",
  },
  {
    q: "Does it affect performance?",
    a: "No. postab is idle when the overlay is closed. When active it traverses a trie in memory. The overhead is unmeasurable.",
  },
  {
    q: "Does it conflict with ⌘+Tab?",
    a: "No. ⌘+Tab still works exactly as it does today. postab listens on Right ⌘ by default, so the classic switcher and postab live side by side. Use whichever fits the moment.",
  },
  {
    q: "Does postab support light mode?",
    a: "Yes. The overlay and the settings panel render natively in light and dark. It follows your macOS appearance by default, or pin it to one mode from settings.",
  },
  {
    q: "How do I learn the mappings?",
    a: "A short guided tour runs on first launch. It introduces the leader key, the three action modes, and walks through your auto-assigned mappings. Muscle memory tends to take about a day.",
  },
  {
    q: "How do I jump back to my last app?",
    a: "Tap the leader and release without typing anything. postab bounces to the previously-active app. Tap again to bounce back. With nothing typed, the overlay also lists your last five apps as chips so you can pick one directly.",
  },
  {
    q: "Can I focus a specific window, not just the app?",
    a: "Yes. Turn on Show each window separately in General settings. Apps with more than one window get numbered keys, so Chrome with three windows becomes c1, c2, c3. postab raises the exact window you addressed. Single-window apps are untouched.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The Monthly plan is cancellable any time, and a short trial is available before billing begins. The Lifetime plan is a single payment.",
  },
  {
    q: "Where does it live?",
    a: "Menu bar only. No Dock icon. No startup splash. It is a tool, not an app.",
  },
  {
    q: "Is postab open source?",
    a: "No. postab is closed source and indie made. Lifetime customers receive every future update at no extra cost.",
  },
  {
    q: "Which macOS versions are supported?",
    a: "macOS 26 Tahoe and later, on Apple Silicon and Intel as a universal binary.",
  },
];
