"use client";

import { useState } from "react";

import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/config/constants";
import { projects } from "@/config/projects";

export const projectFilters = [
  "All",
  "Research",
  "Robotics",
  "Machine Learning",
] as const satisfies readonly (Project["kind"] | "All")[];

export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects(filter: ProjectFilter) {
  return filter === "All"
    ? projects
    : projects.filter((project) => project.kind === filter);
}

export default function ProjectCollection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const visibleProjects = filterProjects(activeFilter);

  return (
    <section aria-label="Project collection">
      <div
        className="flex flex-wrap gap-2 py-4"
        role="toolbar"
        aria-label="Filter projects by category"
      >
        {projectFilters.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant={activeFilter === filter ? "default" : "outline"}
            aria-pressed={activeFilter === filter}
            aria-controls="filtered-projects"
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div
        id="filtered-projects"
        className="mx-auto my-4 grid items-stretch justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        {visibleProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
