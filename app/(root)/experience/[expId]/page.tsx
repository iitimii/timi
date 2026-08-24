import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";
import { formatDateRange, getExperience } from "@/lib/portfolio";

interface ExperienceDetailPageProps {
  params: Promise<{
    expId: string;
  }>;
}

export function generateStaticParams() {
  return experiences.map((experience) => ({ expId: experience.id }));
}

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = getExperience(expId);

  if (!experience) {
    return { title: "Experience Not Found" };
  }

  return {
    title: `${experience.position} at ${experience.organization} | Experience`,
    description: experience.summary,
    alternates: {
      canonical: `${siteConfig.url}/experience/${expId}`,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = getExperience(expId);

  if (!experience) {
    notFound();
  }

  const tabItems = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Role Summary
            </h2>
            <p className="text-base leading-relaxed">{experience.summary}</p>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "achievements",
      label: "Achievements",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Key Achievements
            </h2>
            <ul className="space-y-3">
              {experience.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start gap-3 text-base leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      ),
    },
    {
      value: "skills",
      label: "Skills",
      content: (
        <AnimatedSection delay={0.3}>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Technologies &amp; Skills
            </h2>
            {experience.technologies.length > 0 ? (
              <ChipContainer textArr={experience.technologies} />
            ) : (
              <p className="text-sm text-muted-foreground">
                No specific technologies are listed for this role.
              </p>
            )}
          </div>
        </AnimatedSection>
      ),
    },
  ];

  return (
    <ClientPageWrapper>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <AnimatedSection className="mb-6">
          <Button variant="ghost" size="sm" className="mb-4" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Card className="overflow-hidden rounded-lg border bg-background p-2 transition-colors">
            <CardHeader className="pb-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl">
                    {experience.position}
                  </h1>
                  <div className="mb-2 flex items-center gap-2 text-base font-medium text-muted-foreground">
                    {experience.organizationUrl ? (
                      <a
                        href={experience.organizationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                      >
                        {experience.organization}
                        <Icons.externalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span>{experience.organization}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{experience.location}</p>
                </div>
                <span className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {formatDateRange(experience.startDate, experience.endDate)}
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <ResponsiveTabs items={tabItems} defaultValue="summary" />
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-8 flex justify-center">
          <Button variant="outline" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              View All Experience
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </ClientPageWrapper>
  );
}
