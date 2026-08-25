import Link from "next/link";

import { Button } from "@/components/ui/button";
import { headerLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

type HeaderLinksProps = {
  className?: string;
};

export function HeaderLinks({ className }: HeaderLinksProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {headerLinks.map((item) => {
        const isExternal = !item.link.startsWith("/");

        return (
          <Button
            key={item.name}
            variant="ghost"
            size="sm"
            className="h-8 w-8 px-0"
            asChild
          >
            <Link
              href={item.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              title={item.name}
            >
              <item.icon className="h-[1.05rem] w-[1.05rem]" />
              <span className="sr-only">{item.name}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
