import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SkillGroup } from "@/config/constants";

type SkillsCardProps = {
  groups: SkillGroup[];
};

export default function SkillsCard({ groups }: SkillsCardProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 pb-16 md:grid-cols-3">
      {groups.map((group) => (
        <Card key={group.id} className="h-full">
          <CardHeader>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              {group.skills.length} technologies
            </p>
            <CardTitle className="text-xl leading-snug">{group.name}</CardTitle>
            <CardDescription className="leading-6">
              {group.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`${group.name} technologies`}
            >
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border bg-background px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
