import type { PortfolioLink } from "./constants";

export type Education = {
  id: string;
  institution: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  gpa: string;
  thesis: string;
};

export type Award = {
  id: string;
  title: string;
  organization: string;
  year: number;
};

export type Talk = {
  id: string;
  title: string;
  organization: string;
  year: number;
  href?: string;
};

export type Teaching = {
  id: string;
  position: string;
  organization: string;
  startDate: string;
  endDate: string | "Present";
};

export const profile = {
  fullName: "Timi Owolabi",
  formalName: "Oluwatimilehin Emmanuel Owolabi",
  aliasNote: "Also appears as Oluwatimilehin or Timilehin",
  focus:
    "Meta-learning for self-improving policies, and learning-based model predictive control for mobility and manipulation in legged and aerial robots.",
  email: "timilehin.owolabi@stu.cu.edu.ng",
  biography: [
    "I graduated with a 4.85/5.0 GPA in Electrical Engineering from Covenant University. During my time at Covenant, I led the Robotics Research Team for Google Developer Groups on Campus, where we worked on reinforcement learning, vision-language-action models, and low-cost robotic systems. Also, I worked with Dr. Daniel Omeiza of the Oxford Robotics Institute on autonomous driving and graph neural networks.",
    "I'm passionate about teaching and mentorship. I currently teach machine learning to undergraduate and graduate women of APWEN. I was the president of the Association of Electrical and Information Engineering Students and I founded the AEIES student mentorship program to help students master engineering concepts from first principles.",
    "My vision is to unify machine learning, control theory, and cognitive science to build embodied AI systems that think, remember, and learn continuously.",
  ],
  image: "/profile/timi.jpg",
  resume: "/documents/timi-owolabi-research-cv.pdf",
  socialLinks: [
    { label: "Email", href: "mailto:timilehin.owolabi@stu.cu.edu.ng" },
    {
      label: "Scholar",
      href: "https://scholar.google.com/citations?user=mJOLhAcAAAAJ&hl=en",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/timi-owolabi/" },
    { label: "GitHub", href: "https://github.com/iitimii/" },
    { label: "X", href: "https://x.com/iitiimii" },
  ] satisfies PortfolioLink[],
};

export const education: Education[] = [
  {
    id: "covenant-university",
    institution: "Covenant University",
    location: "Ogun, Nigeria",
    degree: "Bachelor of Engineering in Electrical & Electronics Engineering",
    startDate: "September 2020",
    endDate: "August 2025",
    gpa: "4.85/5.0",
    thesis:
      "Coordinated Control of Quadrotor Swarms: Classical, Adaptive, and Learning-Based Methods",
  },
];

export const awards: Award[] = [
  {
    id: "first-class-honours",
    title: "First Class Honours",
    organization:
      "Dept. of Electrical and Information Engineering, Covenant University",
    year: 2025,
  },
  {
    id: "pan-african-robotics-competition",
    title: "Finalist",
    organization: "Pan-African Robotics Competition",
    year: 2024,
  },
  {
    id: "founders-award",
    title: "Founder’s Award, Best WASSCE Result",
    organization: "Wellspring College",
    year: 2021,
  },
  {
    id: "valedictorian",
    title: "Valedictorian, Department of Science",
    organization: "Wellspring College",
    year: 2020,
  },
];

export const talks: Talk[] = [
  {
    id: "nse-ai-trajectory",
    title: "AI: Our Current Reality and Future Trajectory",
    organization: "Nigerian Society of Engineers (NSE)",
    year: 2024,
    href: "/documents/nse-ai-training.pdf",
  },
  {
    id: "apwen-deep-learning",
    title: "Deep Learning: Neural Networks",
    organization:
      "Association of Professional Women Engineers of Nigeria (APWEN)",
    year: 2024,
    href: "/documents/deep-learning-neural-networks.pdf",
  },
  {
    id: "campus-to-career",
    title: "From Campus to Career: Navigating the Engineering Journey",
    organization:
      "Redeemer's University Electrical Engineering Students Association",
    year: 2025,
  },
];

export const teaching: Teaching[] = [
  {
    id: "apwen-machine-learning",
    position: "Machine Learning Tutor",
    organization: "Association of Professional Women Engineers of Nigeria",
    startDate: "2024",
    endDate: "Present",
  },
  {
    id: "whitesands-robotics",
    position: "Robotics Instructor",
    organization: "Whitesands School",
    startDate: "2024",
    endDate: "2024",
  },
];
