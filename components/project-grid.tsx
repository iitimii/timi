import type { Project } from "@/data/types";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" data-featured={project.featured} key={project.title}>
          <div className="project-card__meta">
            <span>{project.year}</span>
            <span>{project.type}</span>
          </div>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__summary">{project.summary}</p>
          <ul className="project-card__tags" aria-label={project.tagsLabel}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a className="text-link" href={project.href}>
            {project.linkLabel}
          </a>
        </article>
      ))}
    </div>
  );
}
