import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Timi Owolabi's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "The tools and disciplines I build robots and models with.",
    metadata: {
      title: "Skills",
      description:
        "Timi Owolabi's core skills across robotics, machine learning, and control.",
    },
  },
  projects: {
    title: "Projects",
    description: "Systems I have built across robotics, vision, and control.",
    metadata: {
      title: "Projects",
      description:
        "Timi Owolabi's robotics and machine learning projects, from humanoid control to autonomous drones.",
    },
  },
  research: {
    title: "Research",
    description:
      "Publications, research interests, and what I am working towards.",
    metadata: {
      title: "Research",
      description:
        "Timi Owolabi's publications and research in robotics, control, and machine learning.",
    },
  },
  impact: {
    title: "Impact",
    description:
      "Teaching, mentorship, and outreach work beyond research and engineering.",
    metadata: {
      title: "Impact",
      description:
        "Timi Owolabi's teaching, mentorship, and community outreach work.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Timi Owolabi.",
    },
  },
  contributions: {
    title: "Open Source",
    description: "Robotics and machine learning code I have released publicly.",
    metadata: {
      title: "Open Source",
      description:
        "Timi Owolabi's open-source robotics and machine learning repositories.",
    },
  },
  resume: {
    title: "Resume",
    description: "Timi Owolabi's resume.",
    metadata: {
      title: "Resume",
      description: "Timi Owolabi's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description:
      "Notes on robotics, machine learning, and building embodied systems.",
    metadata: {
      title: "Blogs",
      description:
        "Timi Owolabi's writing on robotics, machine learning, and embodied AI.",
    },
  },
  experience: {
    title: "Experience",
    description: "Platform, AI, and machine learning engineering roles.",
    metadata: {
      title: "Experience",
      description:
        "Timi Owolabi's experience across platform engineering, AI infrastructure, and machine learning.",
    },
  },
};
