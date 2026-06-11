import type { Project } from "@/types/project";
import { projectCardStyles } from "@/lib/styles/projectStyles";

import { WorkLinks } from "./WorkLinks";
import { WorkTags } from "./WorkTags";

type WorkCardProps = {
  project: Project;
};

export function WorkCard({ project }: WorkCardProps) {
  return (
    <article className={projectCardStyles.card}>
      <div className={projectCardStyles.header}>
        <span className={projectCardStyles.name}>{project.name}</span>
        <h3 className={projectCardStyles.title}>{project.title}</h3>
      </div>

      <p className={projectCardStyles.description}>{project.description}</p>

      <WorkTags tags={project.tags} />

      <div className={projectCardStyles.footer}>
        <WorkLinks links={project.links} />
      </div>
    </article>
  );
}
