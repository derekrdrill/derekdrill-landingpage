import { workStyles } from "@/lib/styles/projectStyles";

import { WorkGrid } from "./components/WorkGrid";
import { WorkHeader } from "./components/WorkHeader";

export function Work() {
  return (
    <section
      id="work"
      className={workStyles.section}
      aria-labelledby="work-heading"
    >
      <div className={workStyles.container}>
        <WorkHeader />
        <WorkGrid />
      </div>
    </section>
  );
}
