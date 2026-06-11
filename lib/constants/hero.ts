import type { HeroAction } from "@/types/hero";

export const heroContent = {
  eyebrow: "Available for new projects",
  heading: {
    lead: "Production-ready velocity,",
    highlight: "engineering scale",
    trail: ".",
  },
  description:
    "I'm a professional software engineer who builds fast, reliable, and easy-to-maintain web applications. I work directly with companies and product teams to bring complex ideas to life with clean code and zero friction.",
} as const;

export const heroActions: readonly HeroAction[] = [
  { label: "Schedule a Call", href: "#contact", variant: "primary" },
  { label: "View My Work", href: "#work", variant: "secondary" },
];
