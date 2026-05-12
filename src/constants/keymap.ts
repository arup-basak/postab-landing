export type Mapping = { key: string; app: string; hint?: string };

export const KEYMAP: Mapping[] = [
  { key: "d", app: "Discord" },
  { key: "fa", app: "Firefox" },
  { key: "fb", app: "Finder" },
  { key: "s", app: "Safari" },
  { key: "t", app: "Terminal" },
  { key: "c", app: "Code" },
  { key: "n", app: "Notion" },
  { key: "fi", app: "Figma" },
  { key: "m", app: "Mail" },
];

export type DemoStep = { sequence: string };

export const DEMO_SEQUENCES: DemoStep[] = [
  { sequence: "d" },
  { sequence: "fa" },
  { sequence: "fb" },
  { sequence: "fi" },
];
