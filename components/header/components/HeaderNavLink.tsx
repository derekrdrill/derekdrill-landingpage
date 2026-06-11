import type { NavItem } from "@/types/navigation";

import { headerNavLinkStyles } from "@/lib/styles/headerStyles";

type HeaderNavLinkProps = {
  item: NavItem;
};

export function HeaderNavLink({ item }: HeaderNavLinkProps) {
  return (
    <a href={item.href} className={headerNavLinkStyles.link}>
      {item.label}
    </a>
  );
}
