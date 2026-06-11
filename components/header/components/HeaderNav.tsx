import { navigationItems } from "@/lib/constants/navigation";
import { headerNavStyles } from "@/lib/styles/headerStyles";

import { HeaderNavLink } from "./HeaderNavLink";

export function HeaderNav() {
  return (
    <nav aria-label="Primary" className={headerNavStyles.shell}>
      <ul className={headerNavStyles.list}>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <HeaderNavLink item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
