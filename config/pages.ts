type PageConfig = {
  title: string;
  description: string;
  metadata: {
    title: string;
    description: string;
  };
};

type PageKey =
  | "home"
  | "projects"
  | "experience"
  | "publications"
  | "skills"
  | "contact";

export const pagesConfig: Record<PageKey, PageConfig> = {
  home: {
    title: "Home",
    description: "Machine learning, robotics, and embodied AI research.",
    metadata: {
      title: "Home",
      description:
        "Timi Owolabi's portfolio in machine learning, robotics, control, and embodied AI.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Research and engineering projects in machine learning, robotics, and control.",
    metadata: {
      title: "Projects",
      description:
        "Timi Owolabi's machine learning, robotics, and control projects.",
    },
  },
  experience: {
    title: "Experience",
    description: "Research, engineering, leadership, and community experience.",
    metadata: {
      title: "Experience",
      description:
        "Timi Owolabi's research, engineering, leadership, and community experience.",
    },
  },
  publications: {
    title: "Publications",
    description:
      "Publications and manuscripts in control, machine learning, energy, and medical imaging.",
    metadata: {
      title: "Publications",
      description: "Timi Owolabi's publications and research manuscripts.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technical skills across programming, machine learning, robotics, DevOps, and cloud.",
    metadata: {
      title: "Skills",
      description:
        "Timi Owolabi's technical skills in programming, machine learning, robotics, DevOps, and cloud.",
    },
  },
  contact: {
    title: "Contact",
    description: "Get in touch or connect through a professional profile.",
    metadata: {
      title: "Contact",
      description: "Contact Timi Owolabi.",
    },
  },
};
