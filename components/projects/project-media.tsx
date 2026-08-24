import Image from "next/image";

import type { Project } from "@/config/constants";

interface ProjectMediaProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectMedia({
  project,
  priority = false,
}: ProjectMediaProps) {
  if (project.video) {
    return (
      <video
        aria-label={`${project.title} demonstration`}
        className="aspect-video w-full rounded-lg border object-cover"
        controls
        loop
        muted
        playsInline
        poster={project.image}
      >
        <source src={project.video} type="video/mp4" />
        Your browser does not support embedded project video.
      </video>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
      <Image
        src={project.image}
        alt={`${project.title} project`}
        fill
        priority={priority}
        sizes="(min-width: 768px) 768px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
