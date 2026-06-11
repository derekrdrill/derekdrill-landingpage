import { services } from "@/lib/constants/services";
import { serviceStyles } from "@/lib/styles/serviceStyles";

import { ServicesCard } from "./ServicesCard";

export function ServicesGrid() {
  return (
    <div className={serviceStyles.grid}>
      {services.map((service) => (
        <ServicesCard key={service.id} service={service} />
      ))}
    </div>
  );
}
