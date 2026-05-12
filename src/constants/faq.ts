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
