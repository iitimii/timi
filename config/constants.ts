export type PortfolioLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  status?: string;
  kind: "Research" | "Robotics" | "Machine Learning";
  summary: string;
  paragraphs: string[];
  technologies: string[];
  authors: string[];
  image: string;
  video?: string;
  links: PortfolioLink[];
  note?: string;
};

export type Experience = {
  id: string;
  position: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  achievements: string[];
  technologies: string[];
  organizationUrl?: string;
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status?: "Published" | "Under review";
  summary?: string;
  links: PortfolioLink[];
};

export type SkillGroup = {
  id: string;
  name: string;
  description: string;
  skills: string[];
};
