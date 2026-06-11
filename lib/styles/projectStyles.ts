export const workStyles = {
  section: "relative w-full scroll-mt-24 border-t border-border/40 py-20 lg:py-28",
  container: "mx-auto max-w-6xl px-6 lg:px-8",
  grid: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3",
} as const;

export const workHeaderStyles = {
  wrapper: "flex max-w-2xl flex-col gap-4",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground",
  title:
    "text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
  subtitle: "text-pretty text-base leading-relaxed text-muted sm:text-lg",
} as const;

export const projectCardStyles = {
  card: "group flex flex-col gap-6 rounded-2xl border border-border/60 bg-surface/40 p-7 transition-colors duration-300 hover:border-muted/30 hover:bg-surface-elevated/60 lg:p-8",
  header: "flex flex-col gap-2",
  name: "text-xs font-semibold uppercase tracking-[0.22em] text-accent/80",
  title: "text-xl font-semibold tracking-tight text-foreground",
  description: "text-sm leading-relaxed text-muted",
  footer: "mt-auto flex flex-wrap items-center justify-between gap-4 pt-1",
} as const;

export const projectTagsStyles = {
  list: "flex flex-wrap gap-2",
  tag: "rounded-md border border-border/60 bg-surface-elevated/60 px-2.5 py-1 text-xs font-medium text-muted",
} as const;

export const projectLinksStyles = {
  list: "flex flex-wrap items-center gap-5",
  link: "group/link inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-accent",
  placeholder:
    "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/60",
  icon: "text-xs",
} as const;
