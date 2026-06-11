export const serviceStyles = {
  section: "relative w-full scroll-mt-24 border-t border-border/40 py-20 lg:py-28",
  container: "mx-auto max-w-6xl px-6 lg:px-8",
  grid: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3",
} as const;

export const servicesHeaderStyles = {
  wrapper: "flex max-w-2xl flex-col gap-4",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground",
  title:
    "text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
  subtitle: "text-pretty text-base leading-relaxed text-muted sm:text-lg",
} as const;

export const serviceCardStyles = {
  card: "group flex flex-col gap-5 rounded-2xl border border-border/60 bg-surface/40 p-6 transition-colors duration-300 hover:border-muted/30 hover:bg-surface-elevated/60 lg:p-7",
  iconWrapper:
    "flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-surface-elevated/80 text-accent transition-colors duration-300 group-hover:border-accent/40",
  icon: "text-lg",
  body: "flex flex-col gap-2",
  title: "text-lg font-semibold tracking-tight text-foreground",
  description: "text-sm leading-relaxed text-muted",
} as const;
