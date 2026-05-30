import type { CareerItem } from "@/data/types";

type CareerListProps = {
  items: CareerItem[];
};

export function CareerList({ items }: CareerListProps) {
  return (
    <ol className="career-list">
      {items.map((item) => (
        <li className="career-row" key={`${item.dates}-${item.title}`}>
          <div className="career-row__meta">
            <span>{item.dates}</span>
            <span>{item.location}</span>
          </div>
          <div className="career-row__body">
            <h3 className="career-row__title">{item.title}</h3>
            <p className="career-row__institution">{item.institution}</p>
            <p className="career-row__description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
