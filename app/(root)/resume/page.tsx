import type { Metadata } from "next";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/resume`,
  },
};

const resumes = [
  {
    title: "Professional Resume",
    description:
      "A focused overview of my engineering experience, technical skills, and industry projects.",
    context: "Best for engineering and industry roles",
    href: "/resumes/timi-owolabi-professional-resume.pdf",
    pages: 2,
    primary: true,
  },
  {
    title: "Research Resume",
    description:
      "A research-focused profile covering publications, research interests, and technical work.",
    context: "Best for labs and graduate opportunities",
    href: "/resumes/timi-owolabi-research-resume.pdf",
    pages: 2,
    primary: false,
  },
  {
    title: "Full CV",
    description:
      "My complete academic and professional history, including publications, teaching, and projects.",
    context: "The most comprehensive version",
    href: "/resumes/timi-owolabi-full-cv.pdf",
    pages: 4,
    primary: false,
  },
] as const;

export default function ResumePage() {
  return (
    <PageContainer
      title={pagesConfig.resume.title}
      description={pagesConfig.resume.description}
    >
      <AnimatedSection direction="up" className="mx-auto max-w-6xl pb-16 pt-2">
        <div className="grid gap-5 md:grid-cols-3">
          {resumes.map((resume, index) => (
            <AnimatedSection
              key={resume.href}
              direction="up"
              delay={0.08 * index}
              className="h-full"
            >
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border bg-background p-6 transition-colors",
                  resume.primary
                    ? "border-primary/60 bg-primary/[0.03]"
                    : "border-border hover:border-primary/40"
                )}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-lg border border-border bg-muted p-2.5 text-foreground">
                    <Icons.post className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {resume.primary && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                      Recommended
                    </span>
                  )}
                </div>

                <h2 className="font-heading text-xl text-foreground">
                  {resume.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {resume.description}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {resume.context} · {resume.pages} pages
                </p>

                <div className="mt-6 flex flex-wrap gap-2 pt-2 md:mt-auto md:pt-8">
                  <a
                    href={resume.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({
                        variant: resume.primary ? "default" : "outline",
                        size: "sm",
                      }),
                      "gap-2"
                    )}
                  >
                    Open PDF
                    <Icons.externalLink
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={resume.href}
                    download
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "gap-2"
                    )}
                  >
                    <Icons.post className="h-4 w-4" aria-hidden="true" />
                    Download
                  </a>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </PageContainer>
  );
}
