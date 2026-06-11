import { servicesSection } from "@/lib/constants/services";
import { servicesHeaderStyles } from "@/lib/styles/serviceStyles";

export function ServicesHeader() {
  const { eyebrow, title, subtitle } = servicesSection;

  return (
    <div className={servicesHeaderStyles.wrapper}>
      <span className={servicesHeaderStyles.eyebrow}>{eyebrow}</span>
      <h2 id="services-heading" className={servicesHeaderStyles.title}>
        {title}
      </h2>
      <p className={servicesHeaderStyles.subtitle}>{subtitle}</p>
    </div>
  );
}
