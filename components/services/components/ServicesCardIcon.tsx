import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faArrowsRotate,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import type { ServiceIcon } from "@/types/service";
import { serviceCardStyles } from "@/lib/styles/serviceStyles";

type ServicesCardIconProps = {
  icon: ServiceIcon;
};

const iconByName: Record<ServiceIcon, IconDefinition> = {
  greenfield: faRocket,
  modernization: faArrowsRotate,
  architecture: faLayerGroup,
};

export function ServicesCardIcon({ icon }: ServicesCardIconProps) {
  return (
    <span className={serviceCardStyles.iconWrapper}>
      <FontAwesomeIcon
        icon={iconByName[icon]}
        className={serviceCardStyles.icon}
      />
    </span>
  );
}
