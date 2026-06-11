import { heroStyles } from "@/lib/styles/heroStyles";

import { HeroContent } from "./components/HeroContent";
import { HeroVisual } from "./components/HeroVisual";

export function Hero() {
  return (
    <section className={heroStyles.section} aria-labelledby="hero-heading">
      <div className={heroStyles.container}>
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
