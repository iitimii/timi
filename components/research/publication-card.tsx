import Image from "next/image";
import React from "react";

import { PublicationInterface } from "@/config/research";

interface PublicationCardProps {
  publication: PublicationInterface;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="relative flex h-full w-full flex-col rounded-lg border border-border bg-background p-6">
      <div className="relative h-[200px] w-full flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={publication.image}
          alt={publication.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-grow flex-col space-y-3 pt-5">
        {publication.titleLink ? (
          <a
            href={publication.titleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-3 text-xl font-bold tracking-tight text-foreground hover:underline"
          >
            {publication.title}
          </a>
        ) : (
          <h5 className="line-clamp-3 text-xl font-bold tracking-tight text-foreground">
            {publication.title}
          </h5>
        )}

        <p className="line-clamp-1 text-sm text-muted-foreground">
          {publication.authors.map((author, i) => (
            <React.Fragment key={i}>
              {i > 0 && ", "}
              <span
                className={
                  i === publication.selfIndex
                    ? "font-bold text-foreground"
                    : undefined
                }
              >
                {author.name}
              </span>
            </React.Fragment>
          ))}
        </p>

        <p className="text-sm text-muted-foreground">
          <em>{publication.venue}</em>, {publication.year}
          {publication.note && (
            <strong className="ml-2 text-destructive">
              {publication.note}
            </strong>
          )}
        </p>

        <p className="line-clamp-3 flex-grow font-normal text-muted-foreground">
          {publication.description}
        </p>

        {publication.links.length > 0 && (
          <p className="mt-auto pt-2 text-sm">
            {publication.links.map((link, i) => (
              <React.Fragment key={link.label}>
                {i > 0 && <span className="text-muted-foreground"> / </span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 hover:no-underline"
                >
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
