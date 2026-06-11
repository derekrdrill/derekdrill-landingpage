import type { Project } from "@/types/project";

export const workSection = {
  eyebrow: "Selected Work",
  title: "Shipped to Production",
  subtitle:
    "A look at functional applications built with clean code, smooth state management, and solid execution.",
} as const;

export const projects: readonly Project[] = [
  {
    id: "morning-dough",
    name: "Morning Dough",
    title: "E-Commerce App & Live Menu System",
    description:
      "A high-fidelity digital storefront featuring design system consistency, interactive menus, loyalty reward logic, and seamless transactional flows connected to the Square POS API.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Square POS API"],
    links: [
      { type: "live", href: "https://morning-dough.vercel.app/" },
      { type: "source", href: "#" },
    ],
  },
  {
    id: "nba-everything",
    name: "NBA Everything",
    title: "Sports Data Dashboard & Stats Explorer",
    description:
      "A complex data-orchestration engine built to fetch, parse, and efficiently render large historical datasets. Features dynamic client-side filtering, heavy state management, and optimized loading states.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    links: [
      { type: "live", href: "https://nba-everything.vercel.app/" },
      { type: "source", href: "#" },
    ],
  },
  {
    id: "find-cocktails",
    name: "Find Cocktails",
    title: "Recipe Search Engine & Discovery App",
    description:
      "A high-performance product discovery application featuring real-time client-side search filtering, interactive category taxonomy maps, and optimized state management for asset-heavy galleries.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    links: [
      { type: "live", href: "https://find-cocktails.vercel.app/" },
      { type: "source", href: "#" },
    ],
  },
];
