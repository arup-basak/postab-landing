export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "Why does it need Accessibility permission?",
    a: "postab intercepts the leader key before it reaches the OS using CGEventTap, a standard macOS API for system level input handling. Without it there is no way to intercept a modifier key globally. Granting access takes about ten seconds.",
  },
  {
    q: "Does it affect performance?",
    a: "No. postab is idle when the overlay is closed. When active it traverses a trie in memory. The overhead is unmeasurable.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The Monthly plan is cancellable any time, with a short trial before billing begins. The Lifetime plan is a single payment.",
  },
  {
    q: "Is postab open source?",
    a: "No. postab is closed source and indie made. Lifetime customers receive every future update at no extra cost.",
  },
  {
    q: "Where does it live?",
    a: "Menu bar only. No Dock icon. No startup splash. It is a tool, not an app.",
  },
];
