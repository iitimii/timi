import type { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCollection from "@/components/projects/project-collection";
import { pagesConfig } from "@/config/pages";
import { buildRouteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildRouteMetadata({
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ProjectCollection />
    </PageContainer>
  );
}
