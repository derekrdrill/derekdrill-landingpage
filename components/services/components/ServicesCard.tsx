import type { Service } from "@/types/service";
import { serviceCardStyles } from "@/lib/styles/serviceStyles";

import { ServicesCardIcon } from "./ServicesCardIcon";

type ServicesCardProps = {
  service: Service;
};

export function ServicesCard({ service }: ServicesCardProps) {
  return (
    <article className={serviceCardStyles.card}>
      <ServicesCardIcon icon={service.icon} />
      <div className={serviceCardStyles.body}>
        <h3 className={serviceCardStyles.title}>{service.title}</h3>
        <p className={serviceCardStyles.description}>{service.description}</p>
      </div>
    </article>
  );
}
