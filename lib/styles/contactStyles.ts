export const contactStyles = {
  section: "relative w-full scroll-mt-24 border-t border-border/40 py-20 lg:py-28",
  container: "mx-auto max-w-6xl px-6 lg:px-8",
} as const;

export const contactHeaderStyles = {
  wrapper: "flex max-w-2xl flex-col gap-4",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground",
  title:
    "text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
  subtitle: "text-pretty text-base leading-relaxed text-muted sm:text-lg",
} as const;

export const contactSchedulerStyles = {
  wrapper:
    "mt-12 overflow-hidden rounded-2xl border border-border/60 bg-surface/40 lg:mt-16",
} as const;
