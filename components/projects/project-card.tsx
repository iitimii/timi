import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import type { Project } from "@/config/constants";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full w-full flex-col rounded-lg border border-border bg-background p-5">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-muted">
        <Image
          className="object-cover"
          src={project.image}
          alt={`${project.title} project`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <p className="text-sm font-medium text-muted-foreground">
          {project.year}
          {project.status && project.status !== project.year
            ? ` · ${project.status}`
            : ""}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
          {project.title}
        </h2>
        <p className="mt-3 flex-grow text-muted-foreground">
          {project.summary}
        </p>

        <ChipContainer textArr={[project.kind]} />

        <Link
          href={`/projects/${project.id}`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "mt-2 w-full sm:w-fit"
          )}
        >
          View project
          <Icons.chevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
