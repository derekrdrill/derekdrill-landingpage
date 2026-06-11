import { serviceStyles } from "@/lib/styles/serviceStyles";

import { ServicesGrid } from "./components/ServicesGrid";
import { ServicesHeader } from "./components/ServicesHeader";

export function Services() {
  return (
    <section
      id="services"
      className={serviceStyles.section}
      aria-labelledby="services-heading"
    >
      <div className={serviceStyles.container}>
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}
