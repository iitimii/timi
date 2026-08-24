import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import type { Experience } from "@/config/constants";
import { formatDateRange } from "@/lib/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="rounded-lg border bg-background p-4 transition-colors sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">
              {experience.position}
            </h2>
            <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
              {formatDateRange(experience.startDate, experience.endDate)}
            </span>
          </div>

          <div className="mt-1 flex flex-col items-start gap-1 text-sm font-medium text-muted-foreground sm:flex-row sm:items-center sm:gap-2">
            {experience.organizationUrl ? (
              <a
                href={experience.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                {experience.organization}
                <Icons.externalLink className="h-4 w-4" />
              </a>
            ) : (
              <span>{experience.organization}</span>
            )}
            <span className="hidden sm:inline" aria-hidden="true">
              •
            </span>
            <span>{experience.location}</span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {experience.summary}
          </p>

          {experience.technologies.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {experience.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-lg sm:w-auto"
          asChild
        >
          <Link href={`/experience/${experience.id}`}>
            View Details
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
