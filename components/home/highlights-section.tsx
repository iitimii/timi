import Link from "next/link";
import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type {
  Experience,
  Project,
  Publication,
  SkillGroup,
} from "@/config/constants";
import { featuredExperiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { featuredPublications } from "@/config/publications";
import { featuredSkillGroups } from "@/config/skills";
import { cn } from "@/lib/utils";

type HighlightCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  href?: string;
  footer?: ReactNode;
};

function HighlightCard({
  title,
  eyebrow,
  description,
  href,
  footer,
}: HighlightCardProps) {
  const content = (
    <Card
      className={cn(
        "h-full transition-colors",
        href && "hover:border-foreground/25 hover:bg-muted/35"
      )}
    >
      <CardHeader>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {eyebrow}
        </p>
        <CardTitle className="text-xl leading-snug">{title}</CardTitle>
        <CardDescription className="line-clamp-5 leading-6">
          {description}
        </CardDescription>
      </CardHeader>
      {footer ? (
        <CardContent className="flex flex-wrap gap-2">{footer}</CardContent>
      ) : null}
    </Card>
  );

  return href ? (
    <Link
      href={href}
      className="block h-full rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      {content}
    </Link>
  ) : (
    content
  );
}

type HighlightGroupProps<T extends { id: string }> = {
  id: string;
  title: string;
  description: string;
  href: string;
  items: T[];
  renderItem: (item: T) => ReactNode;
  muted?: boolean;
};

function HighlightGroup<T extends { id: string }>({
  id,
  title,
  description,
  href,
  items,
  renderItem,
  muted = false,
}: HighlightGroupProps<T>) {
  return (
    <AnimatedSection
      id={id}
      className={cn(
        "space-y-8 rounded-2xl py-14 md:py-20",
        muted && "bg-muted/50 px-4 sm:px-6 lg:px-8"
      )}
    >
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground sm:text-lg">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <AnimatedSection
            key={item.id}
            delay={0.1 * (index + 1)}
            className="h-full"
          >
            {renderItem(item)}
          </AnimatedSection>
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" className="rounded-xl">
          <Link href={href}>
            View all
            <Icons.arrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </AnimatedSection>
  );
}

const skillPill = (skill: string) => (
  <span
    key={skill}
    className="rounded-full border bg-background px-2.5 py-1 text-xs text-muted-foreground"
  >
    {skill}
  </span>
);

export function HighlightsSection() {
  return (
    <div className="space-y-4">
      <HighlightGroup<Project>
        id="projects"
        title={pagesConfig.projects.title}
        description={pagesConfig.projects.description}
        href="/projects"
        items={featuredProjects}
        muted
        renderItem={(project) => (
          <HighlightCard
            title={project.title}
            eyebrow={`${project.kind} · ${project.year}`}
            description={project.summary}
            href={`/projects/${project.id}`}
            footer={project.technologies.slice(0, 4).map(skillPill)}
          />
        )}
      />
      <HighlightGroup<Experience>
        id="experience"
        title={pagesConfig.experience.title}
        description={pagesConfig.experience.description}
        href="/experience"
        items={featuredExperiences}
        renderItem={(experience) => (
          <HighlightCard
            title={experience.position}
            eyebrow={experience.organization}
            description={experience.summary}
            href={`/experience/${experience.id}`}
            footer={
              <p className="text-sm text-muted-foreground">
                {experience.startDate} - {experience.endDate}
              </p>
            }
          />
        )}
      />
      <HighlightGroup<Publication>
        id="publications"
        title={pagesConfig.publications.title}
        description={pagesConfig.publications.description}
        href="/publications"
        items={featuredPublications}
        muted
        renderItem={(publication) => (
          <HighlightCard
            title={publication.title}
            eyebrow={`${publication.venue} · ${publication.year}`}
            description={publication.summary ?? publication.authors.join(", ")}
            footer={
              publication.status ? (
                <span className="rounded-full border bg-background px-2.5 py-1 text-xs text-muted-foreground">
                  {publication.status}
                </span>
              ) : null
            }
          />
        )}
      />
      <HighlightGroup<SkillGroup>
        id="skills"
        title={pagesConfig.skills.title}
        description={pagesConfig.skills.description}
        href="/skills"
        items={featuredSkillGroups}
        renderItem={(group) => (
          <HighlightCard
            title={group.name}
            eyebrow={`${group.skills.length} tools`}
            description={group.description}
            footer={group.skills.map(skillPill)}
          />
        )}
      />
    </div>
  );
}
