export const heroVisualStyles = {
  wrapper: "relative mx-auto w-full max-w-xl lg:mx-0",
  glow: "hero-aura pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem]",
} as const;

export const browserMockStyles = {
  frame:
    "overflow-hidden rounded-xl border border-border/70 bg-surface/70 shadow-2xl shadow-black/50 backdrop-blur-md",
  toolbar:
    "flex items-center gap-3 border-b border-border/60 bg-surface-elevated/70 px-4 py-3",
  controls: "flex items-center gap-1.5",
  control: "h-3 w-3 rounded-full",
  urlBar:
    "flex h-6 flex-1 items-center rounded-md border border-border/50 bg-background/50 px-3 text-[11px] font-medium text-muted-foreground",
  body: "grid grid-cols-[80px_1fr] gap-4 p-5 sm:gap-5 sm:p-6",
} as const;

export const skeletonSidebarStyles = {
  wrapper: "flex flex-col gap-3",
  logo: "h-8 w-8 rounded-lg bg-accent/20",
  item: "h-2.5 rounded-full bg-surface-elevated",
} as const;

export const dashboardSkeletonStyles = {
  wrapper: "flex flex-col gap-5",
  headerRow: "flex items-center justify-between",
  titleBar: "h-3 w-28 rounded-full bg-surface-elevated",
  pill: "h-6 w-20 rounded-md bg-accent/15",
} as const;

export const skeletonStatCardsStyles = {
  grid: "grid grid-cols-3 gap-3",
  card: "flex flex-col gap-2 rounded-lg border border-border/50 bg-surface-elevated/50 p-3",
  label: "h-2 w-10 rounded-full bg-border",
  value: "h-3 w-14 rounded-full bg-muted/40",
} as const;

export const skeletonChartStyles = {
  wrapper:
    "flex flex-col gap-3 rounded-lg border border-border/50 bg-surface-elevated/40 p-4",
  legend: "h-2.5 w-24 rounded-full bg-border",
  bars: "flex h-28 items-end gap-2",
  bar: "flex-1 rounded-t-md bg-gradient-to-t from-accent/30 to-accent/70",
} as const;
