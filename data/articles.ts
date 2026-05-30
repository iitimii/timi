import type { Article } from "./types";

export const articlesPage = {
  intro: {
    eyebrow: "Articles",
    title: "Notes and essays.",
    headingId: "articles-heading",
    lede:
      "A small index of personal writing. Replace the placeholder links with Medium posts, essays, notebooks, or external publications."
  }
};

export const articles: Article[] = [
  {
    title: "Essay title to replace",
    date: "May 2026",
    isoDate: "2026-05",
    excerpt:
      "A short excerpt should make the argument legible without giving away the whole essay.",
    href: "https://medium.com/",
    linkLabel: "Read article"
  },
  {
    title: "Field note title to replace",
    date: "Apr 2026",
    isoDate: "2026-04",
    excerpt:
      "Use article rows for writing that lives elsewhere. Dates should be exact enough to orient the reader.",
    href: "https://medium.com/",
    linkLabel: "Open note"
  },
  {
    title: "Technical note title to replace",
    date: "Mar 2026",
    isoDate: "2026-03",
    excerpt:
      "A technical note can point to a blog post, documentation page, or research memo.",
    href: "https://medium.com/",
    linkLabel: "Read note"
  }
];
