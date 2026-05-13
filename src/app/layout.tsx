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

export const metadata: Metadata = {
  title: "postab · address your apps like a poweruser",
  description:
    "postab replaces ⌘+Tab with a leader key and a short sequence. Hold Right ⌘, type d to land on Discord. No cycling, no search, no mouse.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
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
      </body>
    </html>
  );
}
