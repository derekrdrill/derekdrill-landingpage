import { projects } from "@/lib/constants/projects";
import { workStyles } from "@/lib/styles/projectStyles";

import { WorkCard } from "./WorkCard";

export function WorkGrid() {
  return (
    <div className={workStyles.grid}>
      {projects.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
}
