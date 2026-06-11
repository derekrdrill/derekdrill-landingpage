import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import type { ProjectLink, ProjectLinkType } from "@/types/project";
import { projectLinksStyles } from "@/lib/styles/projectStyles";

type WorkLinkItemProps = {
  link: ProjectLink;
};

const PLACEHOLDER_HREF = "#";

const iconByType: Record<ProjectLinkType, IconDefinition> = {
  live: faArrowUpRightFromSquare,
  source: faGithub,
};

const labelByType: Record<ProjectLinkType, string> = {
  live: "Live Site",
  source: "Source",
};

export function WorkLinkItem({ link }: WorkLinkItemProps) {
  const icon = iconByType[link.type];
  const label = labelByType[link.type];
  const isPlaceholder = link.href === PLACEHOLDER_HREF;

  if (isPlaceholder) {
    return (
      <span className={projectLinksStyles.placeholder} aria-disabled="true">
        <FontAwesomeIcon icon={icon} className={projectLinksStyles.icon} />
        {label}
      </span>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={projectLinksStyles.link}
    >
      <FontAwesomeIcon icon={icon} className={projectLinksStyles.icon} />
      {label}
    </a>
  );
}
