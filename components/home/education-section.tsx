import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { awards, education, talks, teaching } from "@/config/profile";

function BlockTitle({ children }: { children: React.ReactNode }) {
  return <CardTitle className="text-xl">{children}</CardTitle>;
}

export function EducationSection() {
  return (
    <AnimatedSection id="background" className="space-y-8 py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-3 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
          Education & community
        </h2>
        <p className="text-muted-foreground sm:text-lg">
          Academic training, recognition, talks, and teaching.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <BlockTitle>Education</BlockTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {education.map((item) => (
              <article key={item.id} className="space-y-1">
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.institution} · {item.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  {item.startDate} - {item.endDate} · GPA {item.gpa}
                </p>
                <p className="pt-2 text-sm leading-6 text-muted-foreground">
                  Thesis: {item.thesis}
                </p>
              </article>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BlockTitle>Awards</BlockTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {awards.map((award) => (
                <li key={award.id} className="flex justify-between gap-4">
                  <div>
                    <p className="font-medium">{award.title}</p>
                    <p className="text-sm leading-6 text-muted-foreground">
                      {award.organization}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {award.year}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BlockTitle>Talks</BlockTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {talks.map((talk) => (
                <li key={talk.id}>
                  {talk.href ? (
                    <Link
                      href={talk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {talk.title}
                    </Link>
                  ) : (
                    <p className="font-medium">{talk.title}</p>
                  )}
                  <p className="text-sm leading-6 text-muted-foreground">
                    {talk.organization} · {talk.year}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BlockTitle>Teaching</BlockTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {teaching.map((item) => (
                <li key={item.id}>
                  <p className="font-medium">{item.position}</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.organization}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.startDate} - {item.endDate}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </AnimatedSection>
  );
}
