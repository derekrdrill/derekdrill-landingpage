import type { ButtonVariant } from "@/types/button";

export type HeroAction = {
  readonly label: string;
  readonly href: string;
  readonly variant: ButtonVariant;
};
