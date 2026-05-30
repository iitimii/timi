import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Research system to replace",
    type: "Research tooling",
    year: "2026",
    summary:
      "Describe a system you built for experiments, analysis, annotation, data collection, or reproducible workflows.",
    href: "#",
    linkLabel: "View project",
    tagsLabel: "Project tags",
    tags: ["methods", "tooling", "open work"],
    featured: true
  },
  {
    title: "Product or platform to replace",
    type: "Engineering",
    year: "2025",
    summary:
      "Summarize the product problem, your role, and the part of the stack or design process you owned.",
    href: "#",
    linkLabel: "Open case note",
    tagsLabel: "Project tags",
    tags: ["systems", "interface"]
  },
  {
    title: "Community archive to replace",
    type: "Public work",
    year: "2025",
    summary:
      "Use project cards for public datasets, civic tech, talks, independent experiments, or prototypes that show your range.",
    href: "#",
    linkLabel: "See archive",
    tagsLabel: "Project tags",
    tags: ["community", "documentation"]
  },
  {
    title: "Prototype title to replace",
    type: "Prototype",
    year: "2024",
    summary:
      "A smaller card can hold a focused prototype, visualization, essay companion, or teaching artifact.",
    href: "#",
    linkLabel: "Inspect prototype",
    tagsLabel: "Project tags",
    tags: ["prototype", "visualization"]
  }
];
