import type { Metadata } from "next";
import { Bodoni_Moda, Caveat, Geist, Geist_Mono } from "next/font/google";
import { Noise } from "@/components/ui/noise";
import "./globals.css";
import { Nav } from "@/components/sections/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SITE_URL = "https://postab.app";
const SITE_NAME = "postab";
const TITLE = "postab · address your apps like a poweruser";
const DESCRIPTION =
  "postab replaces ⌘+Tab with a leader key and a short sequence. Hold Right ⌘, type d to land on Discord. No cycling, no search, no mouse.";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
        width: 512,
        height: 512,
        caption: SITE_NAME,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      description: DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/icon.svg`,
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "Productivity",
      operatingSystem: "macOS 26 Tahoe or later",
      processorRequirements: "Apple Silicon or Intel",
      softwareRequirements: "Accessibility permission",
      releaseNotes: "https://postab.app/#download",
      downloadUrl: `${SITE_URL}/#download`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: [
        {
          "@type": "Offer",
          name: "Monthly",
          price: "3.00",
          priceCurrency: "USD",
          category: "subscription",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Lifetime",
          price: "15.00",
          priceCurrency: "USD",
          category: "one-time",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  ],
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · postab",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "postab",
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "postab",
    "app switcher",
    "macOS app switcher",
    "leader key",
    "keyboard launcher",
    "command tab replacement",
    "productivity",
    "mac productivity",
    "window switcher",
    "keyboard shortcuts",
  ],
  authors: [{ name: "postab" }],
  creator: "postab",
  publisher: "postab",
  category: "productivity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "postab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/icon.svg"],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <Noise />
        <Nav />
        {children}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify of a static object literal — no user input
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </body>
    </html>
  );
}
