export const heroStyles = {
  section: "relative w-full overflow-hidden",
  container:
    "mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28",
} as const;

export const heroContentStyles = {
  wrapper: "flex flex-col items-start gap-6",
  eyebrow:
    "inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/50 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm",
  eyebrowDot: "relative flex h-2 w-2",
  eyebrowDotPing:
    "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/70",
  eyebrowDotCore: "relative inline-flex h-2 w-2 rounded-full bg-green-500",
  heading:
    "text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]",
  headingAccent: "text-accent",
  description:
    "max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg",
} as const;

export const heroActionsStyles = {
  wrapper:
    "flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center",
} as const;

export const heroButtonStyles = {
  base: "group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-[box-shadow,transform,background-color,border-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]",
  variant: {
    primary:
      "cta-button bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent/50",
    secondary:
      "border border-border bg-surface/40 text-foreground hover:border-muted/40 hover:bg-surface-elevated/60 focus-visible:ring-ring",
  },
  icon: "text-xs transition-transform duration-300 group-hover:translate-x-0.5",
} as const;
