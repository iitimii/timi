import type { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import { PublicationCard } from "@/components/publications/publication-card";
import { pagesConfig } from "@/config/pages";
import { publications } from "@/config/publications";
import { buildRouteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildRouteMetadata({
  title: pagesConfig.publications.metadata.title,
  description: pagesConfig.publications.metadata.description,
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <PageContainer
      title={pagesConfig.publications.title}
      description={pagesConfig.publications.description}
    >
      <div className="mx-auto grid max-w-5xl gap-5 pb-16">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </PageContainer>
  );
}
