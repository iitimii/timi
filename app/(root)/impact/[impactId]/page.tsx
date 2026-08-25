import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { impact } from "@/config/impact";
import { siteConfig } from "@/config/site";

interface ImpactDetailPageProps {
  params: Promise<{
    impactId: string;
  }>;
}

export async function generateMetadata({
  params,
}: ImpactDetailPageProps): Promise<Metadata> {
  const { impactId } = await params;
  const item = impact.find((i) => i.id === impactId);

  if (!item) {
    return { title: "Not Found" };
  }

  return {
    title: `${item.title} | Impact`,
    description: item.shortDescription,
    alternates: {
      canonical: `${siteConfig.url}/impact/${impactId}`,
    },
  };
}

export default async function ImpactDetailPage({
  params,
}: ImpactDetailPageProps) {
  const { impactId } = await params;
  const item = impact.find((i) => i.id === impactId);

  if (!item) {
    redirect("/impact");
  }

  return (
    <ClientPageWrapper>
      <div className="container max-w-4xl py-8">
        <Link href="/impact">
          <Button variant="ghost" size="sm" className="mb-6 -ml-2">
            <Icons.chevronLeft className="mr-1 h-4 w-4" />
            Back to Impact
          </Button>
        </Link>

        <AnimatedSection direction="up" className="space-y-4">
          <h1 className="font-heading text-3xl tracking-tight lg:text-4xl">
            {item.title}
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              {item.role}
            </span>
            {item.organizationUrl ? (
              <a
                href={item.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline"
              >
                {item.organization}
              </a>
            ) : (
              <span className="font-medium text-foreground">
                {item.organization}
              </span>
            )}
            {item.location && (
              <>
                <span>•</span>
                <span>{item.location}</span>
              </>
            )}
            {item.period && (
              <>
                <span>•</span>
                <span>{item.period}</span>
              </>
            )}
          </div>
        </AnimatedSection>

        {item.thumbnail && (
          <AnimatedSection direction="up" className="mt-8">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={1280}
              height={960}
              className="w-full rounded-lg border border-border object-cover"
              priority
            />
          </AnimatedSection>
        )}

        <AnimatedSection direction="up" className="mt-8 space-y-4">
          {item.descriptionDetails.paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </AnimatedSection>

        {item.descriptionDetails.bullets.length > 0 && (
          <AnimatedSection direction="up" className="mt-8 mb-10">
            <h2 className="font-heading text-2xl tracking-tight">Highlights</h2>
            <hr className="my-4" />
            <ul className="space-y-2">
              {item.descriptionDetails.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <Icons.check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="leading-relaxed text-muted-foreground">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        )}
      </div>
    </ClientPageWrapper>
  );
}
