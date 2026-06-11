import { heroVisualStyles } from "@/lib/styles/heroVisualStyles";

import { HeroBrowserMock } from "./HeroBrowserMock";

export function HeroVisual() {
  return (
    <div className={heroVisualStyles.wrapper}>
      <div className={heroVisualStyles.glow} aria-hidden />
      <HeroBrowserMock />
    </div>
  );
}
