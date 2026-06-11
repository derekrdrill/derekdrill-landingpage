import { projectTagsStyles } from "@/lib/styles/projectStyles";

type WorkTagsProps = {
  tags: readonly string[];
};

export function WorkTags({ tags }: WorkTagsProps) {
  return (
    <ul className={projectTagsStyles.list}>
      {tags.map((tag) => (
        <li key={tag} className={projectTagsStyles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
