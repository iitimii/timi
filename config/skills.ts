import type { SkillGroup } from "./constants";

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    name: "Languages",
    description:
      "Programming languages used across research and engineering work.",
    skills: ["Python", "SQL", "C++", "Rust", "Java"],
  },
  {
    id: "ml-robotics",
    name: "ML & Robotics",
    description: "Machine learning and robotics frameworks and tools.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "JAX",
      "MLflow",
      "Kubeflow",
      "FastAPI",
      "LangChain",
      "ROS2",
      "MuJoCo",
      "CasADi",
    ],
  },
  {
    id: "devops-cloud",
    name: "DevOps & Cloud",
    description: "Cloud infrastructure, delivery, and observability tools.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Terraform",
      "GitHub Actions",
      "Argo CD",
      "Grafana",
      "OpenTelemetry",
    ],
  },
];

export const featuredSkillGroups = skillGroups;
