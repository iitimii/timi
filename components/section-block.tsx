import type { ReactNode } from "react";

type SectionBlockProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function SectionBlock({ id, title, children }: SectionBlockProps) {
  return (
    <section className="section-block" id={id} aria-labelledby={`${id}-heading`}>
      <header className="section-block__head">
        <h2 className="section-block__title" id={`${id}-heading`}>
          {title}
        </h2>
      </header>
      <div className="section-block__body">{children}</div>
    </section>
  );
}
