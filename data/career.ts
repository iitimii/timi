import type { AnchorLink, CareerItem } from "./types";

export const careerAnchors: AnchorLink[] = [
  { label: "Education", href: "#education" },
  { label: "Work Experience", href: "#work-experience" },
  { label: "Volunteering", href: "#volunteering" }
];

export const careerPage = {
  anchorLabel: "Career sections",
  intro: {
    eyebrow: "Career record",
    title: "Education, work, and teaching.",
    headingId: "career-heading",
    lede:
      "A structured career page for degrees, roles, and service. Replace each row with verified dates and context."
  },
  sections: {
    education: {
      id: "education",
      title: "Education"
    },
    work: {
      id: "work-experience",
      title: "Work Experience"
    },
    volunteering: {
      id: "volunteering",
      title: "Volunteering & Teaching"
    }
  }
};

export const education: CareerItem[] = [
  {
    title: "Degree title to replace",
    institution: "Institution name",
    location: "City, Country",
    dates: "2024 - 2026",
    description:
      "Add thesis title, research group, advisor, honours, or concentration. Keep it concrete and date-bound."
  },
  {
    title: "Previous degree title to replace",
    institution: "Institution name",
    location: "City, Country",
    dates: "2020 - 2024",
    description:
      "Use this description for academic focus, capstone work, awards, or relevant coursework."
  }
];

export const workExperience: CareerItem[] = [
  {
    title: "Role title to replace",
    institution: "Company, lab, or studio",
    location: "Remote or location",
    dates: "2025 - Present",
    description:
      "Name the team, the systems or research questions you worked on, and the responsibility you held."
  },
  {
    title: "Previous role to replace",
    institution: "Company, lab, or studio",
    location: "Remote or location",
    dates: "2023 - 2025",
    description:
      "Keep this brief: product area, research area, technologies, or operational scope."
  }
];

export const volunteering: CareerItem[] = [
  {
    title: "Teaching role to replace",
    institution: "Course, bootcamp, or community",
    location: "City, Country",
    dates: "2026",
    description:
      "Add teaching context: audience, subject, format, and what participants left knowing how to do."
  },
  {
    title: "Volunteer role to replace",
    institution: "Organization or community",
    location: "City, Country",
    dates: "2024 - 2025",
    description:
      "Use this for mentoring, curriculum work, open-source maintenance, or community organizing."
  }
];
