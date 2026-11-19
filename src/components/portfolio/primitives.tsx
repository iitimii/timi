import type { ReactNode } from "react";

export function Section({
  id,
  title,
  description,
  children,
  extra,
}: {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
  extra?: ReactNode;
}) {
  return (
    <section id={id} className="section page-width" tabIndex={-1} aria-labelledby={`${id}-title`}>
      <header className="section-heading">
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <p>{description}</p>
        </div>
        {extra}
      </header>
      {children}
    </section>
  );
}
