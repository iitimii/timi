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
    id: "quidax",
    position: "Graduate Trainee, Platform & AI Engineering",
    company: "Quidax Technologies",
    location: "Lagos, Nigeria (Remote)",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "Optimized AWS EKS autoscaling with Karpenter, raising cluster utilization and cutting infrastructure costs.",
      "Instrumented the merchant platform with distributed tracing and logging using OpenTelemetry.",
      "Led the engineering track of QuidaxOS, an AI agent supporting Engineering, Product, and Design.",
    ],
    achievements: [
      "Optimized AWS EKS autoscaling with Karpenter, increasing CPU utilization from 20% to 50% and memory utilization from 30% to 70%, reducing infrastructure costs by 8% while maintaining reliability.",
      "Instrumented the merchant platform with distributed tracing and logging using OpenTelemetry, enabling engineers to root-cause production incidents independently and reducing cross-team escalations.",
      "Led the engineering track of QuidaxOS, an AI agent that supports Engineering, Product, and Design teams from product discovery to deployment, reducing handoff friction and aligning execution with company objectives.",
    ],
    skills: [
      "AWS",
      "Kubernetes",
      "OpenTelemetry",
      "AI Agents",
      "Docker",
      "Python",
    ],
    companyUrl: "https://quidax.com",
  },
  {
    id: "trotta",
    position: "Founding Machine Learning Engineer",
    company: "Trotta Technologies, Inc",
    location: "San Francisco, California (Remote)",
    startDate: new Date("2026-01-01"),
    endDate: new Date("2026-02-01"),
    description: [
      "Founding engineer and ML team lead on a short-term contract, building the company's AI infrastructure on Google Cloud Vertex AI.",
      "Shipped a production multi-agent defense system for phishing, deepfake audio, and synthetic video detection.",
      "Developed a self-improving AI threat detection system with continuous self-supervised retraining from production signals.",
    ],
    achievements: [
      "Founding engineer and ML team lead on a short-term contract, building the company's AI infrastructure on Google Cloud Vertex AI and shipping a production multi-agent defense system for phishing, deepfake audio, and synthetic video detection.",
      "Developed a self-improving AI threat detection system using LangSmith-hosted agents and anomaly detection neural networks on Google Cloud Run, reducing malicious email and phone call verification time from about 1 hour to under 20 seconds while enabling continuous self-supervised model retraining from production signals.",
    ],
    skills: [
      "Google Cloud",
      "AI Agents",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
      "Python",
    ],
  },
  {
    id: "scrella",
    position: "Lead Machine Learning Engineer",
    company: "Scrella Technologies",
    location: "Lagos, Nigeria",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Led a three-person ML team and built the company's AI infrastructure on AWS SageMaker.",
      "Architected the full MLOps lifecycle from data collection through production deployment.",
      "Designed and deployed an AI-powered phone inspection pipeline that detects device imperfections from user videos.",
    ],
    achievements: [
      "Led a three-person ML team and built the company's AI infrastructure on AWS SageMaker, architecting the full MLOps lifecycle from data collection through production deployment.",
      "Designed and deployed an AI-powered phone inspection pipeline using fine-tuned YOLOv11, CLAHE, spectral analysis, and Google PaliGemma to detect device imperfections from user videos, eliminating manual approval and reducing onboarding review time from 5 minutes to 18 seconds.",
    ],
    skills: [
      "AWS",
      "MLOps",
      "Computer Vision",
      "Deep Learning",
      "PyTorch",
      "Python",
    ],
  },
  {
    id: "schneider-electric",
    position: "Sustainability Intern",
    company: "Schneider Electric",
    location: "Lagos, Nigeria",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-10-01"),
    description: [
      "Conducted robotics workshops for young students on building a self-driving car.",
      "Partnered with NGOs to deliver STEM tutoring aligned with Schneider Electric's global initiative to empower 1 million youths.",
      "Reviewed NGO support budgets exceeding $60,000 each.",
    ],
    achievements: [
      "Conducted robotics workshops for young students on building a self-driving car.",
      "Partnered with NGOs to deliver STEM tutoring aligned with Schneider Electric's global initiative to empower 1 million youths.",
      "Reviewed NGO support budgets exceeding $60,000 each, ensuring alignment with sustainability program objectives.",
    ],
    skills: ["Robotics", "Python"],
    companyUrl: "https://www.se.com",
  },
];
