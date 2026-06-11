import { workSection } from "@/lib/constants/projects";
import { workHeaderStyles } from "@/lib/styles/projectStyles";

export function WorkHeader() {
  const { eyebrow, title, subtitle } = workSection;

  return (
    <div className={workHeaderStyles.wrapper}>
      <span className={workHeaderStyles.eyebrow}>{eyebrow}</span>
      <h2 id="work-heading" className={workHeaderStyles.title}>
        {title}
      </h2>
      <p className={workHeaderStyles.subtitle}>{subtitle}</p>
    </div>
  );
}
