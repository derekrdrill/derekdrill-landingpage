export const headerStyles = {
  root: "site-header sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50",
  inner:
    "relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8",
  navWrapper: "absolute left-1/2 hidden -translate-x-1/2 md:flex",
  ctaWrapper: "flex shrink-0 items-center",
} as const;

export const headerBrandStyles = {
  link: "group flex items-baseline gap-1.5",
  first: "text-base font-semibold tracking-tight text-foreground lg:text-lg",
  last: "text-base font-medium tracking-tight text-muted transition-colors duration-300 group-hover:text-foreground lg:text-lg",
} as const;

export const headerNavStyles = {
  shell:
    "rounded-full border border-border/50 bg-surface/50 px-1.5 py-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-sm",
  list: "flex items-center gap-0.5",
} as const;

export const headerNavLinkStyles = {
  link: "nav-link rounded-full px-4 py-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface-elevated/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
} as const;

export const headerCtaButtonStyles = {
  link: "cta-button group inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-accent-foreground transition-[box-shadow,transform,background-color] duration-300 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] lg:h-11 lg:px-6",
  icon: "text-xs transition-transform duration-300 group-hover:-translate-y-px group-hover:rotate-12",
} as const;
