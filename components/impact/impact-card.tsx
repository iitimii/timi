import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ImpactInterface } from "@/config/impact";

interface ImpactCardProps {
  item: ImpactInterface;
}

/** Initials from the title, used when no photo has been supplied yet. */
function monogram(title: string): string {
  const words = title
    .replace(/[^A-Za-z ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .filter((w) => !["the", "at", "of", "and"].includes(w.toLowerCase()));

  // A single-word title would give one letter, so take its first two instead.
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function ImpactCard({ item }: ImpactCardProps) {
  return (
    <div className="relative flex h-full w-full flex-col rounded-lg border border-border bg-background p-6">
      <div className="relative h-[200px] w-full flex-shrink-0">
        {item.thumbnail ? (
          <Image
            className="rounded-lg border border-border object-cover"
            src={item.thumbnail}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted">
            <span className="font-heading text-4xl text-muted-foreground">
              {monogram(item.title)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col space-y-3 pt-5">
        <div className="space-y-2">
          <h5 className="line-clamp-2 text-2xl font-bold tracking-tight text-foreground">
            {item.title}
          </h5>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
              {item.role}
            </span>
            {item.period && (
              <span className="text-xs text-muted-foreground">
                {item.period}
              </span>
            )}
          </div>
        </div>

        <p className="line-clamp-3 flex-grow font-normal text-muted-foreground">
          {item.shortDescription}
        </p>

        <Link href={`/impact/${item.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            Read more
            <Icons.chevronRight className="ml-1 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
