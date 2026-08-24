import type { ComponentType } from "react";

import { Icons } from "@/components/common/icons";
import { Card, CardContent } from "@/components/ui/card";
import type { PortfolioLink } from "@/config/constants";

const contactDetails: Record<
  PortfolioLink["label"],
  {
    displayLabel: string;
    description: string;
    icon: ComponentType<{ className?: string }>;
  }
> = {
  Email: {
    displayLabel: "Email",
    description: "Send Timi an email",
    icon: Icons.gmail,
  },
  GitHub: {
    displayLabel: "GitHub",
    description: "Explore Timi’s open-source work",
    icon: Icons.gitHub,
  },
  LinkedIn: {
    displayLabel: "LinkedIn",
    description: "Connect with Timi professionally",
    icon: Icons.linkedin,
  },
  Scholar: {
    displayLabel: "Google Scholar",
    description: "Read Timi’s research profile",
    icon: Icons.externalLink,
  },
  X: {
    displayLabel: "X",
    description: "Follow Timi on X",
    icon: Icons.twitter,
  },
};

type ContactLinksProps = {
  links: PortfolioLink[];
};

export function ContactLinks({ links }: ContactLinksProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2" aria-label="Contact methods">
      {links.map((link) => {
        const detail = contactDetails[link.label];
        const Icon = detail.icon;
        const opensNewTab = !link.href.startsWith("mailto:");

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={opensNewTab ? "_blank" : undefined}
              rel={opensNewTab ? "noopener noreferrer" : undefined}
              className="block h-full rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label={
                opensNewTab
                  ? `${detail.displayLabel} (opens in a new tab)`
                  : detail.displayLabel
              }
            >
              <Card className="h-full transition-colors hover:border-foreground/25 hover:bg-muted/35">
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="rounded-lg border bg-background p-2.5 text-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="space-y-1">
                    <span className="block font-semibold">
                      {detail.displayLabel}
                    </span>
                    <span className="block text-sm leading-6 text-muted-foreground">
                      {detail.description}
                    </span>
                  </span>
                </CardContent>
              </Card>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
