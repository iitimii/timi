import { AnchorStrip } from "@/components/anchor-strip";
import { CareerList } from "@/components/career-list";
import { PageIntro } from "@/components/page-intro";
import { SectionBlock } from "@/components/section-block";
import { careerAnchors, careerPage, education, volunteering, workExperience } from "@/data/career";

export default function CareerPage() {
  return (
    <>
      <PageIntro intro={careerPage.intro} />
      <AnchorStrip items={careerAnchors} label={careerPage.anchorLabel} />
      <SectionBlock id={careerPage.sections.education.id} title={careerPage.sections.education.title}>
        <CareerList items={education} />
      </SectionBlock>
      <SectionBlock id={careerPage.sections.work.id} title={careerPage.sections.work.title}>
        <CareerList items={workExperience} />
      </SectionBlock>
      <SectionBlock id={careerPage.sections.volunteering.id} title={careerPage.sections.volunteering.title}>
        <CareerList items={volunteering} />
      </SectionBlock>
    </>
  );
}
