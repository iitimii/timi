import { MetadataRoute } from "next";

import { experiences } from "@/config/experience";
import { projectIds } from "@/config/projects";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const createEntry = (
    path: string,
    priority: number
  ): MetadataRoute.Sitemap[number] => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  });

  return [
    createEntry("", 1),
    createEntry("/projects", 0.9),
    ...projectIds.map((projectId) =>
      createEntry(`/projects/${projectId}`, 0.8)
    ),
    createEntry("/experience", 0.9),
    ...experiences.map(({ id }) => createEntry(`/experience/${id}`, 0.8)),
    createEntry("/publications", 0.8),
    createEntry("/skills", 0.8),
    createEntry("/contact", 0.7),
  ];
}
