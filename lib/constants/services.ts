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
      "Turning product concepts and wireframes into fast, fully functional web applications. I focus on building solid foundations integrated with user-tracking and analytics so your software is stable, responsive, and ready for real users.",
    icon: "greenfield",
  },
  {
    id: "application-modernization",
    title: "App Modernization & Performance",
    description:
      "Cleaning up legacy codebases and upgrading them to modern, fast frameworks (like Next.js). I eliminate technical debt, fix bugs, implement robust error-monitoring, and optimize loading speeds from the ground up.",
    icon: "modernization",
  },
  {
    id: "ui-architecture",
    title: "Content Systems & Marketing Infrastructure",
    description:
      "Building modular component libraries connected to flexible content tools (like Sanity). I deliver clean code that allows your team to launch landing pages, run A/B tests, and update copy autonomously.",
    icon: "architecture",
  },
];
