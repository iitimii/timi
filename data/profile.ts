import type { AnchorLink, Profile, TimelineItem } from "./types";

export const siteMetadata = {
  title: "Timi Owolabi",
  description: "A research, projects, career, and writing portfolio built with the Hallmark Studio theme.",
  language: "en",
  mainId: "content"
};

export const uiCopy = {
  skipLink: "Skip to content",
  brandSlash: "/",
  primaryNavigationLabel: "Primary navigation",
  footerNavigationLabel: "Footer navigation",
  footerColophon: "Built with Next.js. Content is edited from the data directory."
};

export const navigation: AnchorLink[] = [
  { label: "Home", href: "/" },
  { label: "Career", href: "/career" },
  { label: "Articles", href: "/articles" }
];

export const footerLinks: AnchorLink[] = [
  { label: "Publications", href: "/#publications" },
  { label: "Projects", href: "/#projects" },
  { label: "News", href: "/#news" }
];

export const profile: Profile = {
  firstName: "Timi",
  surname: "Owolabi",
  fullName: "Timi Owolabi",
  hero: {
    eyebrow: "Research / Engineering / Writing",
    headingId: "profile-heading"
  },
  longBio:
    "Replace this biography with a first-person or close third-person account of your work: the questions you study, the systems you build, the communities you contribute to, and the problems you want collaborators to bring you. Keep the paragraph long enough to feel editorial, not like a hero tagline.",
  linksLabel: "Profile links",
  footerStatement: "A compact record of research, projects, teaching, and notes in progress.",
  image: {
    src: "/profile.svg",
    alt: "Profile portrait placeholder",
    caption: "Portrait placeholder",
    width: 720,
    height: 840
  },
  links: [
    { label: "Email", href: "mailto:timilehin.owolabi@stu.cu.edu.ng" },
    { label: "CV", href: "/timi-research-cv.pdf", download: true },
    { label: "Scholar", href: "https://scholar.google.com/citations?user=mJOLhAcAAAAJ&hl=en", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/timi-owolabi/", external: true },
    { label: "GitHub", href: "https://github.com/iitimii", external: true },
    { label: "X", href: "https://x.com/iitiimii", external: true },
    { label: "Medium", href: "https://medium.com/@timiiowolabi", external: true }
  ]
};

export const homeAnchors: AnchorLink[] = [
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" }
];

export const homePage = {
  anchorLabel: "Home sections",
  sections: {
    publications: {
      id: "publications",
      title: "Publications"
    },
    projects: {
      id: "projects",
      title: "Projects"
    },
    news: {
      id: "news",
      title: "News"
    }
  },
  news: [
    {
      date: "May 2026",
      isoDate: "2026-05",
      title: "Portfolio scaffolded",
      description: "Initial structure is ready. Replace this feed with lab updates, talks, launches, awards, or field notes."
    },
    {
      date: "Apr 2026",
      isoDate: "2026-04",
      title: "Add a recent talk or project milestone",
      description: "Use short chronological entries. One sentence is enough when the date and title are doing real work."
    },
    {
      date: "Mar 2026",
      isoDate: "2026-03",
      title: "Add a publication, grant, or workshop note",
      description: "This placeholder keeps the rhythm honest without inventing achievements."
    }
  ] satisfies TimelineItem[]
};
