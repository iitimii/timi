import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { AboutSection } from "@/components/home/about-section";
import { EducationSection } from "@/components/home/education-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { profile } from "@/config/profile";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.home.metadata.title,
  description: pagesConfig.home.metadata.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  return (
    <ClientPageWrapper>
      <section className="flex min-h-[calc(100svh-5rem)] items-center py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
          <Image
            src={profile.image}
            height={240}
            width={240}
            sizes="(min-width: 640px) 240px, 176px"
            className="h-44 w-44 rounded-full border-8 border-primary object-cover sm:h-60 sm:w-60"
            alt={`${profile.fullName}, machine learning and robotics researcher`}
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-4xl sm:text-6xl md:text-7xl"
          >
            {profile.fullName}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.35}
            className="text-sm text-muted-foreground sm:text-base"
          >
            {profile.aliasNote}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.5}
            className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-xl sm:leading-8"
          >
            {profile.focus}
          </AnimatedText>

          <AnimatedText
            delay={0.65}
            className="mt-5 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "min-w-36")}
              aria-label="View Timi Owolabi's resume"
            >
              <Icons.post className="mr-2 h-4 w-4" aria-hidden="true" />
              Resume
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-w-36"
              )}
              aria-label="Contact Timi Owolabi"
            >
              <Icons.contact className="mr-2 h-4 w-4" aria-hidden="true" />
              Contact
            </Link>
          </AnimatedText>
          <AnimatedText delay={0.9}>
            <Icons.chevronDown
              className="mt-8 h-6 w-6 text-muted-foreground"
              aria-hidden="true"
            />
          </AnimatedText>
        </div>
      </section>

      <AboutSection />
      <HighlightsSection />
      <EducationSection />
    </ClientPageWrapper>
  );
}
