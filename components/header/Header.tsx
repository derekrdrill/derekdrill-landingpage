import { headerStyles } from "@/lib/styles/headerStyles";

import { HeaderBrand } from "./components/HeaderBrand";
import { HeaderCtaButton } from "./components/HeaderCtaButton";
import { HeaderNav } from "./components/HeaderNav";

export function Header() {
  return (
    <header className={headerStyles.root}>
      <div className={headerStyles.inner}>
        <HeaderBrand />

        <div className={headerStyles.navWrapper}>
          <HeaderNav />
        </div>

        <div className={headerStyles.ctaWrapper}>
          <HeaderCtaButton />
        </div>
      </div>
    </header>
  );
}
