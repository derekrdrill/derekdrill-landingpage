import { heroActions } from "@/lib/constants/hero";
import { heroActionsStyles } from "@/lib/styles/heroStyles";

import { HeroButton } from "./HeroButton";

export function HeroActions() {
  return (
    <div className={heroActionsStyles.wrapper}>
      {heroActions.map((action) => (
        <HeroButton
          key={action.href}
          label={action.label}
          href={action.href}
          variant={action.variant}
        />
      ))}
    </div>
  );
}
