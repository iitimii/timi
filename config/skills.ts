import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Reinforcement Learning",
    description:
      "Train policies that learn control from interaction, for swarms, manipulators, and humanoids.",
    rating: 5,
    icon: Icons.cyberpunk,
  },
  {
    name: "Control Theory",
    description:
      "Design classical, adaptive, optimal, and learning-based controllers for real dynamical systems.",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Robotics",
    description:
      "Build and control legged, aerial, and manipulator platforms, in simulation and on hardware.",
    rating: 5,
    icon: Icons.work,
  },
  {
    name: "Computer Vision",
    description:
      "Perception for robots and medical imaging: segmentation, tracking, and action recognition.",
    rating: 5,
    icon: Icons.media,
  },
  {
    name: "Deep Learning",
    description:
      "Design and train neural networks, from U-Nets for segmentation to vision-language-action models.",
    rating: 5,
    icon: Icons.aurora,
  },
  {
    name: "Python",
    description:
      "My primary language for research code, training pipelines, and robot control stacks.",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Simulation",
    description:
      "Model and evaluate robots in MuJoCo, Gazebo, and gym-pybullet-drones before touching hardware.",
    rating: 5,
    icon: Icons.synthwave,
  },
  {
    name: "Research",
    description:
      "Publish peer-reviewed work in control, optimization, and medical imaging journals.",
    rating: 4,
    icon: Icons.post,
  },
  {
    name: "Teaching & Mentorship",
    description:
      "Teach machine learning to engineers and run a student mentorship program from first principles.",
    rating: 4,
    icon: Icons.userFill,
  },
  {
    name: "Git",
    description:
      "Version control and open-source collaboration across every project I release.",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "FastAPI",
    description:
      "Serve models behind fast, typed Python APIs for interactive demos and applications.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "Linux",
    description:
      "The environment I develop, train, and deploy robot software in.",
    rating: 4,
    icon: Icons.paper,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
