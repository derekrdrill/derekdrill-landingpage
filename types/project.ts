export type ProjectLinkType = "live" | "source";

export type ProjectLink = {
  readonly type: ProjectLinkType;
  readonly href: string;
};

export type Project = {
  readonly id: string;
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly links: readonly ProjectLink[];
};
