import type { PageIntroContent } from "@/data/types";

type PageIntroProps = {
  intro: PageIntroContent;
};

export function PageIntro({ intro }: PageIntroProps) {
  return (
    <header className="page-intro" aria-labelledby={intro.headingId}>
      <p className="page-intro__eyebrow">{intro.eyebrow}</p>
      <h1 className="page-intro__title" id={intro.headingId}>
        {intro.title}
      </h1>
      <p className="page-intro__lede">{intro.lede}</p>
    </header>
  );
}
