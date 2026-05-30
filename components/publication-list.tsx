import type { Publication } from "@/data/types";

type PublicationListProps = {
  publications: Publication[];
};

export function PublicationList({ publications }: PublicationListProps) {
  return (
    <ol className="publication-list">
      {publications.map((publication) => (
        <li className="publication" key={`${publication.year}-${publication.title}`}>
          <div className="publication__meta">
            <span>{publication.year}</span>
            <span>{publication.venue}</span>
          </div>
          <div className="publication__body">
            <h3 className="publication__title">{publication.title}</h3>
            <p className="publication__authors">{publication.authors}</p>
            <p className="publication__summary">{publication.summary}</p>
            <a className="text-link" href={publication.href}>
              {publication.linkLabel}
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
