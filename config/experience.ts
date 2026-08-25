import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gdg-robotics",
    position: "Robotics Research Team Lead",
    company: "Google Developer Groups on Campus, Covenant University",
    location: "Ota, Nigeria",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    description: [
      "Led the Robotics Research Team, working on reinforcement learning, vision-language-action models, and low-cost robotic systems.",
      "Led the design of an affordable 3D-printed 6-DOF manipulator with performance comparable to the WidowX 250 S.",
      "Led VisionPick, a vision-based pick-and-place policy built with JAX and MuJoCo.",
    ],
    achievements: [
      "Led the Robotics Research Team on reinforcement learning, vision-language-action models, and low-cost robotic systems.",
      "Led the design of a 6-DOF 3D-printed manipulator matching WidowX 250 S reach, repeatability, and payload at 2.5% of the cost, released fully open-source.",
      "Led VisionPick, a vision-based pick-and-place policy trained in JAX on MuJoCo Playground and the DeepMind Control Suite.",
      "Co-authored work on coordinated control of quadrotor swarms, under review at IJCAI 2026.",
    ],
    skills: [
      "Python",
      "JAX",
      "MuJoCo",
      "Reinforcement Learning",
      "Robotics",
      "Computer Vision",
    ],
    companyUrl:
      "https://gdg.community.dev/gdg-on-campus-covenant-university-ota-nigeria/",
  },
  {
    id: "oxford-robotics-institute",
    position: "Research Collaborator",
    company: "Oxford Robotics Institute",
    location: "Oxford, United Kingdom",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-01"),
    description: [
      "Worked with Dr. Daniel Omeiza on autonomous driving and graph neural networks.",
    ],
    achievements: [
      "Collaborated with Dr. Daniel Omeiza of the Oxford Robotics Institute on autonomous driving and graph neural networks.",
    ],
    skills: ["Python", "PyTorch", "Deep Learning", "Robotics"],
    companyUrl: "https://ori.ox.ac.uk/",
  },
  {
    id: "apwen",
    position: "Machine Learning Tutor",
    company: "Association of Professional Women Engineers of Nigeria (APWEN)",
    location: "Nigeria",
    startDate: new Date("2024-01-01"),
    endDate: "Present",
    description: [
      "Teach machine learning to undergraduate and graduate women engineers.",
      "Delivered an invited talk on deep learning and neural networks to the association in 2024.",
    ],
    achievements: [
      "Teach machine learning to undergraduate and graduate women of APWEN.",
      "Delivered the invited talk 'Deep Learning: Neural Networks' to APWEN in 2024.",
    ],
    skills: ["Python", "Machine Learning", "Deep Learning"],
    companyUrl: "https://www.apwen.org.ng/",
  },
  {
    id: "aeies",
    position: "President",
    company: "Association of Electrical and Information Engineering Students",
    location: "Ota, Nigeria",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2025-12-01"),
    description: [
      "Served as president of the student association for electrical and information engineering.",
      "Founded the AEIES student mentorship program.",
    ],
    achievements: [
      "Founded the AEIES student mentorship program to help students master engineering concepts from first principles.",
    ],
    skills: [],
    companyUrl: "https://www.instagram.com/aeies_cu/",
  },
  {
    id: "whitesands",
    position: "Robotics Instructor",
    company: "Whitesands School",
    location: "Lagos, Nigeria",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-01"),
    description: ["Taught robotics to secondary school students."],
    achievements: ["Taught robotics at Whitesands School in 2024."],
    skills: ["Python", "Robotics"],
  },
  {
    id: "zummit-africa",
    position: "Machine Learning Intern",
    company: "Zummit Africa",
    location: "Nigeria",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-12-01"),
    description: [
      "Led a 3D brain tumor segmentation project during the internship.",
    ],
    achievements: [
      "Led a U-Net-based 3D brain tumor segmentation project on FLAIR and T1CE MRI volumes.",
      "Shipped the model behind a FastAPI backend with a Streamlit frontend for interaction and visualization.",
    ],
    skills: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
      "FastAPI",
      "Streamlit",
    ],
  },
];
