export interface ImpactInterface {
  id: string;
  title: string;
  organization: string;
  role: string;
  /** e.g. "2024 - Present". Optional while dates are still being confirmed. */
  period?: string;
  location?: string;
  shortDescription: string;
  /** Omit until an image is supplied; the card renders a monogram instead. */
  thumbnail?: string;
  organizationUrl?: string;
  descriptionDetails: {
    paragraphs: string[];
    bullets: string[];
  };
}

export const impact: ImpactInterface[] = [
  {
    id: "classroom-project",
    title: "The Classroom Project",
    organization: "Engr. Atinuke Wuraola Owolabi STEM Empowerment Foundation",
    role: "Co-Founder",
    period: "2026",
    location: "Durumi IDP Camp, FCT Abuja, Nigeria",
    shortDescription:
      "Co-founded an outreach project bringing classroom furniture and STEM learning to children at the Durumi IDP camp in Abuja.",
    thumbnail: "/impact/classroom-project/thumbnail.jpg",
    descriptionDetails: {
      paragraphs: [
        "The Classroom Project is an outreach effort under the Engr. Atinuke Wuraola Owolabi STEM Empowerment Foundation, built to give displaced children a real place to learn.",
        "The 2026 outreach reached the Durumi IDP camp in FCT Abuja, delivering classroom desks to the camp's learning hub for the children living there.",
      ],
      bullets: [
        "Co-founded the project and helped run the Durumi camp outreach.",
        "Delivered classroom desks to the camp's learning hub for IDP children.",
        "Focused on STEM empowerment for children with limited access to schooling.",
      ],
    },
  },
  {
    id: "schneider-electric-sustainability",
    title: "Sustainability Initiatives at Schneider Electric",
    organization: "Schneider Electric",
    role: "Sustainability Intern",
    period: "Aug 2023 - Oct 2023",
    location: "Lagos, Nigeria",
    shortDescription:
      "Ran robotics workshops for young students and partnered with NGOs on STEM tutoring, as part of Schneider Electric's global initiative to empower 1 million youths.",
    organizationUrl: "https://www.se.com",
    descriptionDetails: {
      paragraphs: [
        "As a sustainability intern at Schneider Electric, I worked on the education and youth-empowerment side of the company's sustainability programme in Nigeria.",
        "The work combined hands-on teaching with the operational side of running NGO partnerships.",
      ],
      bullets: [
        "Conducted robotics workshops for young students on building a self-driving car.",
        "Partnered with NGOs to deliver STEM tutoring aligned with Schneider Electric's global initiative to empower 1 million youths.",
        "Reviewed NGO support budgets exceeding $60,000 each, ensuring alignment with sustainability program objectives.",
      ],
    },
  },
  {
    id: "enactus",
    title: "Enactus",
    organization: "Enactus",
    role: "Member",
    shortDescription:
      "Member of Enactus, the student network that builds entrepreneurial projects with social impact.",
    descriptionDetails: {
      paragraphs: [
        "Enactus is an international network of students who build entrepreneurial projects aimed at social and environmental impact.",
      ],
      bullets: ["Member of Enactus."],
    },
  },
  {
    id: "aeies",
    title: "AEIES",
    organization:
      "Association of Electrical and Information Engineering Students, Covenant University",
    role: "President",
    location: "Ota, Nigeria",
    shortDescription:
      "Led the electrical and information engineering student body and founded the AEIES mentorship program.",
    organizationUrl: "https://www.instagram.com/aeies_cu/",
    descriptionDetails: {
      paragraphs: [
        "I served as president of the Association of Electrical and Information Engineering Students at Covenant University.",
        "The work I care most about from that term is the mentorship program, built on the belief that engineering is best learned from first principles rather than memorised.",
      ],
      bullets: [
        "Served as president of the AEIES student body.",
        "Founded the AEIES student mentorship program to help students master engineering concepts from first principles.",
      ],
    },
  },
  {
    id: "apwen",
    title: "APWEN",
    organization: "Association of Professional Women Engineers of Nigeria",
    role: "ML Tutor",
    period: "2024 - Present",
    location: "Nigeria",
    shortDescription:
      "Teach machine learning to undergraduate and graduate women engineers, and delivered an invited talk on deep learning.",
    organizationUrl: "https://www.apwen.org.ng/",
    descriptionDetails: {
      paragraphs: [
        "I teach machine learning to undergraduate and graduate women of APWEN, the Association of Professional Women Engineers of Nigeria.",
      ],
      bullets: [
        "Teach machine learning to undergraduate and graduate women engineers.",
        "Delivered the invited talk “Deep Learning: Neural Networks” to APWEN in 2024.",
      ],
    },
  },
  {
    id: "projectcage",
    title: "ProjectCage",
    organization: "ProjectCage",
    role: "Robotics Tutor",
    shortDescription: "Taught robotics with ProjectCage.",
    descriptionDetails: {
      paragraphs: ["I taught robotics as a tutor with ProjectCage."],
      bullets: ["Robotics tutor."],
    },
  },
];

export const impactSection = {
  title: "Impact",
  description:
    "Teaching, mentorship, and outreach work beyond research and engineering.",
};

export const featuredImpact = impact.slice(0, 3);
