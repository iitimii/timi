import { Icons } from "@/components/common/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Publication } from "@/config/constants";

type PublicationCardProps = {
  publication: Publication;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article aria-labelledby={`publication-${publication.id}`}>
      <Card className="h-full overflow-hidden">
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span>
              {publication.venue} · {publication.year}
            </span>
            {publication.status ? (
              <span className="rounded-full border bg-muted/40 px-2.5 py-1 normal-case tracking-normal">
                {publication.status}
              </span>
            ) : null}
          </div>
          <CardTitle
            id={`publication-${publication.id}`}
            className="text-xl leading-snug sm:text-2xl"
          >
            {publication.title}
          </CardTitle>
          <ol
            className="flex flex-wrap text-sm leading-6 text-muted-foreground"
            aria-label={`Authors of ${publication.title}`}
          >
            {publication.authors.map((author, index) => (
              <li key={`${publication.id}-${author}`}>
                {author}
                {index < publication.authors.length - 1 ? ",\u00a0" : ""}
              </li>
            ))}
          </ol>
        </CardHeader>
        <CardContent className="space-y-5">
          {publication.summary ? (
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              {publication.summary}
            </p>
          ) : null}
          {publication.links.length > 0 ? (
            <ul className="flex flex-wrap gap-2" aria-label="Resources">
              {publication.links.map((link) => (
                <li key={`${publication.id}-${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label={`${link.label} for ${publication.title} (opens in a new tab)`}
                  >
                    {link.label}
                    <Icons.externalLink
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </CardContent>
      </Card>
    </article>
  );
}
