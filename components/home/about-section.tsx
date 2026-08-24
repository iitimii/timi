import { AnimatedSection } from "@/components/common/animated-section";
import { profile } from "@/config/profile";

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="mx-auto max-w-3xl space-y-6 py-16 md:py-24"
    >
      <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        About
      </h2>
      <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
        {profile.biography.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </AnimatedSection>
  );
}
