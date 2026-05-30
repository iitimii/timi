import type { AnchorLink } from "@/data/types";

type AnchorStripProps = {
  items: AnchorLink[];
  label: string;
};

export function AnchorStrip({ items, label }: AnchorStripProps) {
  return (
    <nav className="anchor-strip" aria-label={label}>
      {items.map((item) => (
        <a href={item.href} className="anchor-strip__link" key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
