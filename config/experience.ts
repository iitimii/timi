import type { Experience } from "./constants";

export const experiences: Experience[] = [
  {
    id: "quidax",
    position: "Graduate Trainee, Software Engineering & DevOps",
    organization: "Quidax Technologies",
    location: "Toronto, Ontario (Remote)",
    startDate: "Jan 2026",
    endDate: "Present",
    summary:
      "Optimized AWS EKS autoscaling with Karpenter, increasing CPU utilization from 20% to 50% and memory utilization from 30% to 70%, reducing infrastructure costs by 8% while maintaining reliability.",
    achievements: [
      "Optimized AWS EKS autoscaling with Karpenter, increasing CPU utilization from 20% to 50% and memory utilization from 30% to 70%, reducing infrastructure costs by 8% while maintaining reliability.",
      "Instrumented the merchant platform with distributed tracing and logging using OpenTelemetry, enabling engineers to root-cause production incidents independently and reducing cross-team escalations.",
      "Led the development of QuidaxOS, an AI agent that supports Engineering, Product, and Design teams from product discovery to deployment, reducing handoff friction and aligning execution with company objectives.",
    ],
    technologies: ["AWS EKS", "Karpenter", "OpenTelemetry"],
  },
  {
    id: "eief",
    position: "Co-Founder",
    organization: "Engineering Innovation Empowerment Foundation (EIEF)",
    location: "Abuja, Nigeria",
    startDate: "Dec 2024",
    endDate: "Present",
    summary:
      "Designed and produced hands-on engineering kits to teach core engineering principles.",
    achievements: [
      "Designed and produced hands-on engineering kits to teach core engineering principles.",
      "Organized and led technical training programs, mentoring students in practical engineering skills.",
      "Launched The Classroom Project to provide tutoring, mentoring, and learning materials for low-resource public secondary schools.",
    ],
    technologies: [],
  },
  {
    id: "trotta",
    position: "Founding Machine Learning Engineer",
    organization: "Trotta Technologies, Inc",
    location: "San Francisco, California (Remote)",
    startDate: "Jan 2026",
    endDate: "Feb 2026",
    summary:
      "Founding engineer and ML team lead on a short-term contract, building the company’s AI infrastructure on Google Cloud Vertex AI and shipping a production multi-agent defense system for phishing, deepfake audio, and synthetic video detection.",
    achievements: [
      "Founding engineer and ML team lead on a short-term contract, building the company’s AI infrastructure on Google Cloud Vertex AI and shipping a production multi-agent defense system for phishing, deepfake audio, and synthetic video detection.",
      "Developed a self-improving AI threat detection system using LangSmith-hosted agents and anomaly detection neural networks on Google Cloud Run, reducing malicious email and phone call verification time from about 1 hour to under 20 seconds while enabling continuous self-supervised model retraining from production signals.",
    ],
    technologies: ["Google Cloud Vertex AI", "LangSmith", "Google Cloud Run"],
  },
  {
    id: "gdg-robotics",
    position: "Robotics Research Team Lead",
    organization: "Google Developer Groups on Campus",
    location: "Ogun, Nigeria",
    startDate: "Sep 2024",
    endDate: "Aug 2025",
    summary:
      "Led replication of Stanford’s ALOHA bimanual robotic manipulation paper in simulation.",
    achievements: [
      "Led replication of Stanford’s ALOHA bimanual robotic manipulation paper in simulation.",
      "Developed vision-based manipulation policies for box-picking and object interaction tasks using MuJoCo and JAX.",
      "Prototyped a low-cost 3D-printed robot arm for object sorting, matching WidowX 250 S performance at 2.5% of its cost.",
    ],
    technologies: ["ALOHA", "MuJoCo", "JAX"],
  },
  {
    id: "aeies",
    position: "President",
    organization:
      "Association of Electrical and Information Engineering Students",
    location: "Ogun, Nigeria",
    startDate: "Sep 2024",
    endDate: "Aug 2025",
    summary:
      "Led a 20-member executive team in coordinating projects and competitions for over 2,000 students.",
    achievements: [
      "Led a 20-member executive team in coordinating projects and competitions for over 2,000 students.",
      "Launched a student mentorship program pairing juniors with seniors for academic and career guidance.",
    ],
    technologies: [],
  },
  {
    id: "scrella",
    position: "Lead Machine Learning Engineer",
    organization: "Scrella Technologies",
    location: "Lagos, Nigeria",
    startDate: "Jul 2024",
    endDate: "Dec 2024",
    summary:
      "Led a three-person ML team and built the company’s AI infrastructure on AWS SageMaker, architecting the full MLOps lifecycle from data collection through production deployment.",
    achievements: [
      "Led a three-person ML team and built the company’s AI infrastructure on AWS SageMaker, architecting the full MLOps lifecycle from data collection through production deployment.",
      "Designed and deployed an AI-powered phone inspection pipeline using fine-tuned YOLOv11, CLAHE, spectral analysis, and Google PaliGemma to detect device imperfections from user videos, eliminating manual approval and reducing onboarding review time from 5 minutes to 18 seconds.",
    ],
    technologies: ["AWS SageMaker", "YOLOv11", "CLAHE", "Google PaliGemma"],
  },
  {
    id: "waysense",
    position: "Undergraduate Research Assistant",
    organization: "WaySense — Dr. Daniel Omeiza, Oxford Robotics Institute",
    location: "Oxford, United Kingdom (Remote)",
    startDate: "Mar 2024",
    endDate: "Sep 2024",
    summary:
      "Analyzed the Lyft Level 5 dataset to estimate multi-agent vehicle positions and velocities, detect lane-change maneuvers, and improve explainability of autonomous driving decisions using ego- and agent-centric representations.",
    achievements: [
      "Analyzed the Lyft Level 5 dataset to estimate multi-agent vehicle positions and velocities, detect lane-change maneuvers, and improve explainability of autonomous driving decisions using ego- and agent-centric representations.",
      "Pioneered adaptation of the fast subset-scan algorithm on Graph Neural Networks to identify statistically significant anomalies in traffic datasets.",
    ],
    technologies: ["Lyft Level 5", "Graph Neural Networks"],
  },
  {
    id: "schneider-electric",
    position: "Sustainability Intern",
    organization: "Schneider Electric",
    location: "Lagos, Nigeria",
    startDate: "Aug 2023",
    endDate: "Oct 2023",
    summary:
      "Conducted robotics workshops for young students on building a self-driving car.",
    achievements: [
      "Conducted robotics workshops for young students on building a self-driving car.",
      "Partnered with NGOs to deliver STEM tutoring aligned with Schneider Electric’s global initiative to empower 1 million youths.",
      "Reviewed NGO support budgets exceeding $60,000 each, ensuring alignment with sustainability program objectives.",
    ],
    technologies: ["Robotics"],
  },
];

export const featuredExperiences = experiences.slice(0, 3);
