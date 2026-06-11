export type ServiceIcon = "greenfield" | "modernization" | "architecture";

export type Service = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: ServiceIcon;
};
