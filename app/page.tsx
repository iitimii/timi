import { AnchorStrip } from "@/components/anchor-strip";
import { ProfileHero } from "@/components/profile-hero";
import { ProjectGrid } from "@/components/project-grid";
import { PublicationList } from "@/components/publication-list";
import { SectionBlock } from "@/components/section-block";
import { TimelineList } from "@/components/timeline-list";
import { homeAnchors, homePage, profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";

export default function HomePage() {
  return (
    <>
      <ProfileHero profile={profile} />
      <AnchorStrip items={homeAnchors} label={homePage.anchorLabel} />
      <SectionBlock id={homePage.sections.publications.id} title={homePage.sections.publications.title}>
        <PublicationList publications={publications} />
      </SectionBlock>
      <SectionBlock id={homePage.sections.projects.id} title={homePage.sections.projects.title}>
        <ProjectGrid projects={projects} />
      </SectionBlock>
      <SectionBlock id={homePage.sections.news.id} title={homePage.sections.news.title}>
        <TimelineList items={homePage.news} variant="news" />
      </SectionBlock>
    </>
  );
}
