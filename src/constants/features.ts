import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwiseIcon,
  CircleHalfIcon,
  CommandIcon,
  CompassIcon,
  KeyboardIcon,
  LightningIcon,
  SwapIcon,
  TreeStructureIcon,
} from "@phosphor-icons/react/dist/ssr";

export type Feature = {
  icon: Icon;
  title: string;
  body: string;
  large?: boolean;
};

export const FEATURES: Feature[] = [
  {
    icon: LightningIcon,
    title: "Direct addressing, not cycling",
    body: "⌘+Tab asks you to count. postab asks you to name. Every app has an address. You type it, you are there. One or two keystrokes for any app, any time.",
    large: true,
  },
  {
    icon: ArrowsClockwiseIcon,
    title: "Three actions, one gesture",
    body: "Switch, quit, or hide with the same sequence. Hold a different modifier to change the outcome. One mental model, three results.",
    large: true,
  },
  {
    icon: TreeStructureIcon,
    title: "Trie based, conflict free",
    body: "A prefix trie resolves sequences as you type. f and fa coexist without ambiguity. The tree is yours to define.",
  },
  {
    icon: SwapIcon,
    title: "Lives next to ⌘+Tab",
    body: "Keep ⌘+Tab for the moments you want to cycle. Use postab when you already know where you are going. Both gestures, side by side.",
  },
  {
    icon: KeyboardIcon,
    title: "Zero config to start",
    body: "Launch postab. It assigns keys to your running apps automatically. Override anything from the settings panel later.",
  },
  {
    icon: CommandIcon,
    title: "macOS native, no overhead",
    body: "Written in Swift with SwiftUI. No Electron, no helper processes. Intercepts at the system level via CGEventTap.",
  },
  {
    icon: CircleHalfIcon,
    title: "Light and dark, both tuned",
    body: "Overlay and settings panel render natively in either appearance. Follows macOS, or pin it to one mode.",
  },
  {
    icon: CompassIcon,
    title: "Guided on first launch",
    body: "A short in-app tour covers the leader key, the three modes, and your auto-assigned mappings. Built for the first five minutes.",
  },
];
