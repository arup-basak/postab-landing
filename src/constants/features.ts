import type { Icon } from "@phosphor-icons/react";
import {
  ArrowsClockwiseIcon,
  CircleHalfIcon,
  CommandIcon,
  CompassIcon,
  EyeSlashIcon,
  GaugeIcon,
  KeyboardIcon,
  LightningIcon,
  ShieldCheckIcon,
  StackIcon,
  SwapIcon,
  TargetIcon,
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
    icon: KeyboardIcon,
    title: "Zero config to start",
    body: "Launch postab. It assigns keys to your running apps automatically. Override anything from the settings panel later.",
  },
  {
    icon: EyeSlashIcon,
    title: "Invisible until needed",
    body: "Lives in the menu bar. No Dock icon, no background UI. Shows up when you hold the leader key, disappears the moment you release.",
  },
  {
    icon: CommandIcon,
    title: "macOS native, no overhead",
    body: "Written in Swift with SwiftUI. No Electron, no helper processes. Intercepts at the system level via CGEventTap.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Privacy by construction",
    body: "Keystrokes are captured only while the leader key is held and discarded the instant it is released.",
  },
  {
    icon: GaugeIcon,
    title: "Idle by default",
    body: "When the overlay is closed postab does nothing. When active it traverses a trie in memory. The overhead is unmeasurable.",
  },
  {
    icon: SwapIcon,
    title: "Coexists with ⌘+Tab",
    body: "Keep ⌘+Tab for the times you want to cycle. Use postab when you already know where you are going. Two gestures, side by side, neither in the way.",
    large: true,
  },
  {
    icon: TargetIcon,
    title: "Knows what is focused",
    body: "The overlay marks the app you are currently on. Even with a dozen apps mapped, your reference point is never more than a glance away.",
    large: true,
  },
  {
    icon: StackIcon,
    title: "Floating overlay",
    body: "Sits above the menu bar. Shows mapped apps and the remaining key hints, narrowing live as you type.",
  },
  {
    icon: CircleHalfIcon,
    title: "Light and dark, both tuned",
    body: "Overlay and settings panel render natively in either appearance. Follows macOS automatically, or pin it to one mode if you prefer.",
  },
  {
    icon: CompassIcon,
    title: "Guided on first launch",
    body: "A short in-app tour covers the leader key, the three modes, and your auto-assigned mappings. Built for the first five minutes.",
  },
];
