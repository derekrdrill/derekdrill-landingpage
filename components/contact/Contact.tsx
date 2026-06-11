import { contactStyles } from "@/lib/styles/contactStyles";

import { ContactHeader } from "./components/ContactHeader";
import { ContactScheduler } from "./components/ContactScheduler";

export function Contact() {
  return (
    <section
      id="contact"
      className={contactStyles.section}
      aria-labelledby="contact-heading"
    >
      <div className={contactStyles.container}>
        <ContactHeader />
        <ContactScheduler />
      </div>
    </section>
  );
}
