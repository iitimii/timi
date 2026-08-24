import { AnimatedSection } from "@/components/common/animated-section";
import ExperienceCard from "@/components/experience/experience-card";
import type { Experience } from "@/config/constants";

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <ExperienceCard experience={experience} />
        </AnimatedSection>
      ))}
    </div>
  );
}
