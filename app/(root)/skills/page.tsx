import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { pagesConfig } from "@/config/pages";
import { skillGroups } from "@/config/skills";
import { buildRouteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildRouteMetadata({
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <SkillsCard groups={skillGroups} />
    </PageContainer>
  );
}
