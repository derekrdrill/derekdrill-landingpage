import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import type { ButtonVariant } from "@/types/button";
import { heroButtonStyles } from "@/lib/styles/heroStyles";

type HeroButtonProps = {
  label: string;
  href: string;
  variant: ButtonVariant;
};

const iconByVariant: Partial<Record<ButtonVariant, IconDefinition>> = {
  primary: faArrowRight,
};

export function HeroButton({ label, href, variant }: HeroButtonProps) {
  const className = `${heroButtonStyles.base} ${heroButtonStyles.variant[variant]}`;
  const icon = iconByVariant[variant];

  return (
    <a href={href} className={className}>
      {label}
      {icon && (
        <FontAwesomeIcon icon={icon} className={heroButtonStyles.icon} />
      )}
    </a>
  );
}
