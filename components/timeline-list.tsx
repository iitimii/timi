import type { TimelineItem } from "@/data/types";

type TimelineListProps = {
  items: TimelineItem[];
  variant?: "news";
};

export function TimelineList({ items, variant }: TimelineListProps) {
  return (
    <ol className="timeline-list" data-variant={variant}>
      {items.map((item) => (
        <li className="timeline-row" key={`${item.date}-${item.title}`}>
          <time className="timeline-row__date" dateTime={item.isoDate}>
            {item.date}
          </time>
          <div className="timeline-row__body">
            <h3 className="timeline-row__title">{item.title}</h3>
            <p className="timeline-row__description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
