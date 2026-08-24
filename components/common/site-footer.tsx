import Link from "next/link";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container mt-10 flex flex-col items-center justify-center gap-4 py-10 md:min-h-24 md:flex-row md:justify-between">
        <div className="flex items-center justify-center gap-3">
          {SocialLinks.map((item) => (
            <CustomTooltip
              icon={item.icon}
              text={item.username}
              key={item.name}
            >
              <Link
                href={item.link}
                target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.link.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={
                  item.name === "Email"
                    ? `Email ${item.username}`
                    : `Visit Timi Owolabi on ${item.name}`
                }
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  }),
                  "h-10 w-10 p-2"
                )}
              >
                <item.icon className="h-5 w-5" />
              </Link>
            </CustomTooltip>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Built from the{" "}
          <Link
            href={siteConfig.links.templateRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            minimal-next-portfolio template
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
