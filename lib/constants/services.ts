import type { Service } from "@/types/service";

export const servicesSection = {
  eyebrow: "Services",
  title: "Capabilities",
  subtitle:
    "I write clean code, value strict standards, and build digital products designed to work flawlessly from day one.",
} as const;

export const services: readonly Service[] = [
  {
    id: "greenfield-mvp",
    title: "Full-Scale Web Application Development",
    description:
      "Turning product concepts and wireframes into fast, fully functional web applications. I focus on building solid foundations so your application is stable, responsive, and ready for real users.",
    icon: "greenfield",
  },
  {
    id: "application-modernization",
    title: "App Modernization & Performance",
    description:
      "Cleaning up legacy codebases and upgrading them to modern, fast frameworks (like Next.js). I eliminate technical debt, fix bugs, and optimize loading speeds from the ground up.",
    icon: "modernization",
  },
  {
    id: "ui-architecture",
    title: "Content Systems & UI Development",
    description:
      "Building dynamic user interfaces and connecting them to flexible content tools (like Sanity). I deliver clean code that allows your team to easily update pages and copy without needing a developer every time.",
    icon: "architecture",
  },
];
