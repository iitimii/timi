import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import ProjectMedia from "@/components/projects/project-media";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { projects } from "@/config/projects";
import { buildRouteMetadata } from "@/lib/metadata";
import { getProject } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export function generateStaticParams() {
  return projects.map(({ id }) => ({ projectId: id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProject(projectId);

  if (!project) {
    return { title: "Project not found" };
  }

  return buildRouteMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${projectId}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(buttonVariants({ variant: "ghost" }), "mb-6")}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
        Back to projects
      </Link>

      <header>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{project.year}</span>
          {project.status && project.status !== project.year ? (
            <>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
            </>
          ) : null}
        </div>
        <h1 className="mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.title}
        </h1>
        <ChipContainer textArr={[project.kind]} />
      </header>

      <div className="my-8">
        <ProjectMedia project={project} priority />
      </div>

      <div className="space-y-9">
        <section aria-labelledby="project-description">
          <h2
            id="project-description"
            className="mb-3 font-heading text-2xl leading-tight"
          >
            About the project
          </h2>
          <ProjectDescription paragraphs={project.paragraphs} />
        </section>

        {project.note ? (
          <aside className="rounded-lg border bg-muted/40 p-4">
            <h2 className="font-heading text-lg">Project note</h2>
            <p className="mt-2 text-muted-foreground">{project.note}</p>
          </aside>
        ) : null}

        <section aria-labelledby="project-authors">
          <h2
            id="project-authors"
            className="font-heading text-2xl leading-tight"
          >
            Authors
          </h2>
          <p className="mt-3 text-muted-foreground">
            {project.authors.join(", ")}
          </p>
        </section>

        <section aria-labelledby="project-technologies">
          <h2
            id="project-technologies"
            className="font-heading text-2xl leading-tight"
          >
            Technologies
          </h2>
          {project.technologies.length > 0 ? (
            <ChipContainer textArr={project.technologies} />
          ) : (
            <p className="mt-3 text-muted-foreground">
              No technologies are listed for this project.
            </p>
          )}
        </section>

        {project.links.length > 0 ? (
          <section aria-labelledby="project-links">
            <h2
              id="project-links"
              className="font-heading text-2xl leading-tight"
            >
              Project links
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={`${link.label}-${link.href}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: "outline" })}
                >
                  {link.label === "PDF" ? "Paper" : link.label}
                  <Icons.externalLink
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  />
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/projects" className={buttonVariants({ variant: "ghost" })}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>
      </div>
    </article>
  );
}
