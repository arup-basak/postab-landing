export type Plan = {
  id: "monthly" | "lifetime";
  label: string;
  price: string;
  cadence: string;
  note: string;
  cta: string;
  trial?: string;
  featured?: boolean;
  perks: string[];
};

export const PRICING = {
  eyebrow: "pricing",
  title: "Pay once. Or pay less, often.",
  body: "Indie made. Closed source. Free updates forever on the lifetime plan.",
  trialBanner: "7 days free on every plan, no card up front.",
  plans: [
    {
      id: "monthly",
      label: "Monthly",
      price: "$3",
      cadence: "per month",
      note: "cancel anytime",
      cta: "Start free trial",
      trial: "7 days free",
      perks: [
        "7 days free, no card up front",
        "All features unlocked",
        "Sparkle auto-updates",
        "Email support",
      ],
    },
    {
      id: "lifetime",
      label: "Lifetime",
      price: "$15",
      cadence: "one time",
      note: "all future updates included",
      cta: "Start free trial",
      trial: "7 days free",
      featured: true,
      perks: [
        "7 days free before you pay",
        "Everything in Monthly",
        "Pays for itself in five months",
        "Yours to keep, forever",
      ],
    },
  ],
} as const satisfies {
  eyebrow: string;
  title: string;
  body: string;
  trialBanner: string;
  plans: readonly Plan[];
};
