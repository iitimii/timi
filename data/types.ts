export type AnchorLink = {
  label: string;
  href: string;
};

export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
};

export type Profile = {
  firstName: string;
  surname: string;
  fullName: string;
  longBio: string;
  linksLabel: string;
  footerStatement: string;
  hero: {
    eyebrow: string;
    headingId: string;
  };
  image: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  links: ProfileLink[];
};

export type TimelineItem = {
  date: string;
  isoDate: string;
  title: string;
  description: string;
};

export type PageIntroContent = {
  eyebrow: string;
  title: string;
  headingId: string;
  lede: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export type Project = {
  title: string;
  type: string;
  year: string;
  summary: string;
  href: string;
  linkLabel: string;
  tagsLabel: string;
  tags: string[];
  featured?: boolean;
};

export type CareerItem = {
  title: string;
  institution: string;
  location: string;
  dates: string;
  description: string;
};

export type Article = {
  title: string;
  date: string;
  isoDate: string;
  excerpt: string;
  href: string;
  linkLabel: string;
};
