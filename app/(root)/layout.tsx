import Link from "next/link";

import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { routesConfig } from "@/config/routes";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <Link
                href={routesConfig.resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "sm" }), "flex-1")}
              >
                {routesConfig.resume.title}
              </Link>
              <ModeToggle />
            </div>
          </MainNav>
          <nav
            aria-label="Portfolio actions"
            className="hidden items-center gap-3 md:flex"
          >
            <Link
              href={routesConfig.resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              {routesConfig.resume.title}
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
