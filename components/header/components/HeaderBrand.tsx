import Link from "next/link";

import { siteConfig } from "@/lib/constants/site";
import { headerBrandStyles } from "@/lib/styles/headerStyles";

export function HeaderBrand() {
  return (
    <Link href="/" className={headerBrandStyles.link}>
      <span className={headerBrandStyles.first}>{siteConfig.brand.first}</span>
      <span className={headerBrandStyles.last}>{siteConfig.brand.last}</span>
    </Link>
  );
}
