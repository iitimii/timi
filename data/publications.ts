import type { Publication } from "./types";

export const publications: Publication[] = [
  {
    title: "Publication title to replace",
    authors: "First Surname, Collaborator Name",
    venue: "Conference or journal name",
    year: "2026",
    summary:
      "Add a two-sentence plain-language summary of the paper: the question, the method, and the result worth remembering.",
    href: "#",
    linkLabel: "Open publication"
  },
  {
    title: "Working paper title to replace",
    authors: "First Surname",
    venue: "Preprint or workshop",
    year: "2025",
    summary:
      "Use this row for preprints, workshop papers, or accepted manuscripts. Keep the language factual and avoid invented metrics.",
    href: "#",
    linkLabel: "Read preprint"
  },
  {
    title: "Thesis or technical report title to replace",
    authors: "First Surname",
    venue: "Institution or lab",
    year: "2024",
    summary:
      "A compact annotation helps visitors understand why the work belongs here before they open the PDF or publisher page.",
    href: "#",
    linkLabel: "View report"
  }
];
