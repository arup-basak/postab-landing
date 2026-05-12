export type ShowcaseMedia = {
  kind: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
};

export const SITE: {
  name: string;
  tagline: string;
  downloadHref: string;
  requirements: readonly string[];
  showcase: ShowcaseMedia;
  nav: readonly { label: string; href: string }[];
} = {
  name: "postab",
  tagline: "Address your apps like a poweruser.",
  downloadHref: "#download",
  requirements: [
    "macOS 26 Tahoe or later",
    "Apple Silicon and Intel",
    "Accessibility permission",
  ],
  showcase: {
    kind: "video",
    src: "/showcase.mp4",
    poster: "/showcase-poster.jpg",
    alt: "postab overlay above the macOS menu bar, narrowing as keys are typed",
  },
  nav: [
    { label: "How it works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "Privacy", href: "#privacy" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
};
