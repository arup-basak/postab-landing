import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Keycap } from "@/components/ui/keycap";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

const AppPill = ({
  name,
  active,
  hidden,
}: {
  name: string;
  active?: boolean;
  hidden?: boolean;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 font-sans text-[13px] tracking-tight",
      active &&
        "border-[color-mix(in_oklab,var(--color-primary)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-foreground",
      hidden && "border-border bg-surface-2/60 text-foreground/45",
      !active && !hidden && "border-border bg-surface-2 text-foreground/80",
    )}
  >
    {hidden ? <EyeSlashIcon size={12} weight="duotone" /> : null}
    {name}
  </span>
);

const BounceDemo = () => (
  <div className="flex h-full items-center justify-center gap-3 px-4 sm:gap-5">
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
        now
      </span>
      <AppPill name="Postab" active />
    </div>
    <div className="flex flex-col items-center gap-1">
      <ArrowRightIcon
        size={12}
        weight="bold"
        className="text-foreground/40"
      />
      <Keycap size="sm" tone="primary">
        ⌘ tap
      </Keycap>
      <ArrowLeftIcon
        size={12}
        weight="bold"
        className="text-foreground/40"
      />
    </div>
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
        last
      </span>
      <AppPill name="Linear" />
    </div>
  </div>
);

const HideDemo = () => (
  <div className="flex h-full items-center justify-center gap-2.5 px-4 sm:gap-3">
    <AppPill name="Discord" active />
    <Keycap size="sm">d</Keycap>
    <ArrowRightIcon
      size={12}
      weight="bold"
      className="text-foreground/40"
    />
    <AppPill name="Discord" hidden />
  </div>
);

const RECENTS = [
  { name: "Code", active: true },
  { name: "Safari" },
  { name: "Figma" },
  { name: "Mail" },
  { name: "Notion" },
];

const CANDIDATE_ROW = [
  { key: "d", app: "Discord" },
  { key: "s", app: "Safari" },
  { key: "t", app: "Terminal" },
  { key: "n", app: "Notion" },
];

const RecentsDemo = () => (
  <div className="flex h-full flex-col items-center justify-center gap-3 px-4">
    <div className="flex flex-wrap items-center justify-center gap-1.5">
      {RECENTS.map(({ name, active }) => (
        <span
          key={name}
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-1 font-sans text-[11px] tracking-tight",
            active
              ? "border-[color-mix(in_oklab,var(--color-primary)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-primary)_14%,transparent)] text-foreground"
              : "border-border bg-surface-2/60 text-muted",
          )}
        >
          <span
            className={cn(
              "mr-1.5 inline-block h-1.5 w-1.5 rounded-full",
              active ? "bg-primary" : "bg-border-strong",
            )}
          />
          {name}
        </span>
      ))}
    </div>
    <div className="h-px w-3/4 bg-border" />
    <div className="flex flex-wrap items-center justify-center gap-3 opacity-50">
      {CANDIDATE_ROW.map(({ key, app }) => (
        <div key={key} className="flex items-center gap-1.5">
          <Keycap size="sm">{key}</Keycap>
          <span className="font-sans text-[11px] text-muted">{app}</span>
        </div>
      ))}
    </div>
  </div>
);

const WINDOWS = [
  { key: "c1", label: "Inbox" },
  { key: "c2", label: "Docs" },
  { key: "c3", label: "Roadmap" },
];

const WindowsDemo = () => (
  <div className="flex h-full flex-col items-center justify-center gap-2 px-4">
    <AppPill name="Chrome" />
    <div className="relative grid grid-cols-3 gap-5 pt-1">
      <span
        aria-hidden
        className="-top-0 absolute left-1/6 right-1/6 block h-px bg-border-strong"
      />
      {WINDOWS.map(({ key, label }) => (
        <div key={key} className="relative flex flex-col items-center gap-1.5">
          <span
            aria-hidden
            className="block h-2 w-px bg-border-strong"
          />
          <Keycap size="sm" tone="primary">
            {key}
          </Keycap>
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

type Gesture = {
  id: string;
  title: string;
  body: string;
  Demo: () => React.ReactElement;
};

const GESTURES: Gesture[] = [
  {
    id: "bounce",
    title: "Tap, and bounce back",
    body: "Tap the leader without typing. postab jumps to your last app. Tap again and you are right back where you started.",
    Demo: BounceDemo,
  },
  {
    id: "hide",
    title: "Press again to hide it",
    body: "When the target is already frontmost, the same key hides it instead. One gesture, opposite outcomes.",
    Demo: HideDemo,
  },
  {
    id: "recents",
    title: "Recents float to the top",
    body: "Hold the leader with nothing typed and your last five apps surface as chips above the grid. Click one, or keep typing to filter.",
    Demo: RecentsDemo,
  },
  {
    id: "windows",
    title: "Each window, its own key",
    body: "Turn on multi-window mode and apps with several windows get numbered keys. Land in the exact window, not just the app.",
    Demo: WindowsDemo,
  },
];

export const Gestures = () => {
  return (
    <section id="gestures" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-6 pb-14 sm:grid-cols-[1fr_auto]">
          <div className="grid gap-5">
            <Reveal>
              <SectionLabel>subtle motions</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                The gestures{" "}
                <span className="italic text-muted">do the talking.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-sm text-muted">
              Four small moves that make postab feel less like a launcher and
              more like part of macOS.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {GESTURES.map((g, i) => (
            <Reveal
              key={g.id}
              delay={(i % 2) * 0.06}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border surface-gradient bg-surface/30 transition-colors hover:border-border-strong"
            >
              <div className="relative h-40 border-b border-border/60 bg-surface-2/30 [background-image:radial-gradient(120%_120%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_60%)]">
                <g.Demo />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-sans text-xl text-foreground">{g.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted">
                  {g.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
