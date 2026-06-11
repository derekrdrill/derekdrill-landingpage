import { contactSection } from "@/lib/constants/contact";
import { contactHeaderStyles } from "@/lib/styles/contactStyles";

export function ContactHeader() {
  const { eyebrow, title, subtitle } = contactSection;

  return (
    <div className={contactHeaderStyles.wrapper}>
      <span className={contactHeaderStyles.eyebrow}>{eyebrow}</span>
      <h2 id="contact-heading" className={contactHeaderStyles.title}>
        {title}
      </h2>
      <p className={contactHeaderStyles.subtitle}>{subtitle}</p>
    </div>
  );
}
