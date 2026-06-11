import type { ProjectLink } from "@/types/project";
import { projectLinksStyles } from "@/lib/styles/projectStyles";

import { WorkLinkItem } from "./WorkLinkItem";

type WorkLinksProps = {
  links: readonly ProjectLink[];
};

export function WorkLinks({ links }: WorkLinksProps) {
  return (
    <div className={projectLinksStyles.list}>
      {links.map((link) => (
        <WorkLinkItem key={link.type} link={link} />
      ))}
    </div>
  );
}
