interface ProjectDescriptionProps {
  paragraphs: string[];
}

export default function ProjectDescription({
  paragraphs,
}: ProjectDescriptionProps) {
  return (
    <div className="space-y-4 text-muted-foreground">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
