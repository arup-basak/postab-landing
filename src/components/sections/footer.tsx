import { FOOTER } from "@/constants/content";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 py-10">
      <div className="hairline mx-auto mb-8 max-w-6xl" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:flex-row">
        <span>{FOOTER.line}</span>
        <span>© {year}</span>
      </div>
    </footer>
  );
};
