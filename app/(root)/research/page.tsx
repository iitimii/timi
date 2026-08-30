import { Metadata } from "next";
import Image from "next/image";
import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import {
  IntroSegment,
  news,
  publications,
  researchIntro,
} from "@/config/research";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.research.metadata.title,
  description: pagesConfig.research.metadata.description,
  alternates: {
    canonical: `${siteConfig.url}/research`,
  },
};

function IntroParagraph({ segments }: { segments: IntroSegment[] }) {
  return (
    <p className="leading-relaxed text-muted-foreground">
      {segments.map((segment, i) =>
        segment.link ? (
          <a
            key={i}
            href={segment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            {segment.text}
          </a>
        ) : (
          <React.Fragment key={i}>{segment.text}</React.Fragment>
        )
      )}
    </p>
  );
}

export default function ResearchPage() {
  return (
    <PageContainer
      title={pagesConfig.research.title}
      description={pagesConfig.research.description}
    >
      <AnimatedSection direction="up" className="max-w-[52rem] space-y-4">
        {researchIntro.map((segments, i) => (
          <IntroParagraph key={i} segments={segments} />
        ))}
        <a
          href="/resumes/timi-owolabi-research-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "mt-2 gap-2"
          )}
        >
          <Icons.post className="h-4 w-4" aria-hidden="true" />
          Research resume
          <Icons.externalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </AnimatedSection>

      <AnimatedSection direction="up" className="mt-12" id="publications">
        <h2 className="font-heading text-3xl tracking-tight">Publications</h2>
        <hr className="my-6" />

        <div className="space-y-10">
          {publications.map((pub, index) => (
            <AnimatedSection
              key={pub.id}
              delay={0.08 * (index + 1)}
              direction="up"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative h-40 w-full flex-shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:h-[9.5rem] sm:w-[9.5rem]">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 152px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1 space-y-1.5">
                  {pub.titleLink ? (
                    <a
                      href={pub.titleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-lg leading-snug text-foreground hover:underline"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    <span className="font-heading text-lg leading-snug text-foreground">
                      {pub.title}
                    </span>
                  )}

                  <p className="text-sm text-muted-foreground">
                    {pub.authors.map((author, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && ", "}
                        {author.link ? (
                          <a
                            href={author.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              i === pub.selfIndex
                                ? "font-bold text-foreground hover:underline"
                                : "hover:underline"
                            }
                          >
                            {author.name}
                          </a>
                        ) : (
                          <span
                            className={
                              i === pub.selfIndex
                                ? "font-bold text-foreground"
                                : undefined
                            }
                          >
                            {author.name}
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <em>{pub.venue}</em>, {pub.year}
                    {pub.note && (
                      <strong className="ml-2 text-destructive">
                        {pub.note}
                      </strong>
                    )}
                  </p>

                  {pub.links.length > 0 && (
                    <p className="text-sm">
                      {pub.links.map((link, i) => (
                        <React.Fragment key={link.label}>
                          {i > 0 && (
                            <span className="text-muted-foreground"> / </span>
                          )}
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground underline underline-offset-4 hover:no-underline"
                          >
                            {link.label}
                          </a>
                        </React.Fragment>
                      ))}
                    </p>
                  )}

                  <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                    {pub.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="mt-14 mb-10" id="news">
        <h2 className="font-heading text-3xl tracking-tight">News</h2>
        <hr className="my-6" />

        <ul className="space-y-3">
          {news.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-1 sm:flex-row sm:gap-4"
            >
              <span className="flex-shrink-0 text-sm font-medium text-foreground sm:w-28">
                {item.date}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">
                {item.content}
              </span>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </PageContainer>
  );
}
