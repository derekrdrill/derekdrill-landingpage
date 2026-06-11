import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { siteConfig } from "@/lib/constants/site";
import { headerCtaButtonStyles } from "@/lib/styles/headerStyles";

export function HeaderCtaButton() {
  return (
    <a href={siteConfig.bookCallHref} className={headerCtaButtonStyles.link}>
      <FontAwesomeIcon icon={faPhone} className={headerCtaButtonStyles.icon} />
      Book a Call
    </a>
  );
}
