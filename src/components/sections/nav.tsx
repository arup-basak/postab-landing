"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { DownloadButton } from "@/components/ui/download-button";
import { LogoMark } from "@/components/ui/logo";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SITE } from "@/constants/site";

export const Nav = () => {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 10]);
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10,10,13,0)", "rgba(10,10,13,0.7)"],
  );
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"],
  );

  return (
    <motion.header
      style={{
        backdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        WebkitBackdropFilter: blur.get() ? `blur(${blur.get()}px)` : undefined,
        backgroundColor: bg,
        borderColor: border,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2">
          <LogoMark size={22} />
          <span className="font-display text-xl leading-none tracking-tight">
            postab
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
            v0.1
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {SITE.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <DownloadButton label="Download" size="sm" />
      </div>
      <ScrollProgress />
    </motion.header>
  );
};
