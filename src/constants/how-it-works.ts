export type Step = {
  number: string;
  title: string;
  body: string;
  keys: string[];
};

export const HOW_IT_WORKS: Step[] = [
  {
    number: "01",
    title: "Hold",
    body: "Hold Right ⌘. The overlay appears above your menu bar, showing every mapped app and its key hint.",
    keys: ["Right ⌘"],
  },
  {
    number: "02",
    title: "Type",
    body: "Type a sequence. d resolves to Discord. fa resolves to Firefox. The overlay narrows as you go, like autocomplete, but instant.",
    keys: ["d", "fa", "fb"],
  },
  {
    number: "03",
    title: "Act",
    body: "Release to focus the app. Hold Control before releasing to quit it. Hold Shift to hide it. Tap the leader without typing to bounce back to your last app. Same gesture, different outcomes.",
    keys: ["Release", "Tap = back", "⌃ Quit", "⇧ Hide"],
  },
];
