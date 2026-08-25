import { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import ImpactCard from "@/components/impact/impact-card";
import { impact } from "@/config/impact";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: pagesConfig.impact.metadata.title,
  description: pagesConfig.impact.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/impact`,
  },
};

export default function ImpactPage() {
  return (
    <PageContainer
      title={pagesConfig.impact.title}
      description={pagesConfig.impact.description}
    >
      <div className="mx-auto my-4 grid grid-cols-1 items-stretch justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impact.map((item, index) => (
          <AnimatedSection
            key={item.id}
            delay={0.1 * (index + 1)}
            direction="up"
            className="h-full w-full min-w-0"
          >
            <ImpactCard item={item} />
          </AnimatedSection>
        ))}
      </div>
    </PageContainer>
  );
}
