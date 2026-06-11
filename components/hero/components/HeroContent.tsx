import { heroContent } from "@/lib/constants/hero";
import { heroContentStyles } from "@/lib/styles/heroStyles";

import { HeroActions } from "./HeroActions";

export function HeroContent() {
  const { eyebrow, heading, description } = heroContent;

  return (
    <div className={heroContentStyles.wrapper}>
      <span className={heroContentStyles.eyebrow}>
        <span className={heroContentStyles.eyebrowDot}>
          <span className={heroContentStyles.eyebrowDotPing} />
          <span className={heroContentStyles.eyebrowDotCore} />
        </span>
        {eyebrow}
      </span>

      <h1 id="hero-heading" className={heroContentStyles.heading}>
        {heading.lead}{" "}
        <span className={heroContentStyles.headingAccent}>
          {heading.highlight}
        </span>
        {heading.trail}
      </h1>

      <p className={heroContentStyles.description}>{description}</p>

      <HeroActions />
    </div>
  );
}
