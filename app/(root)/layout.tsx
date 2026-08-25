import { HeaderLinks } from "@/components/common/header-links";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center justify-center gap-1">
              <HeaderLinks />
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-1">
            {/* Six icons plus the toggle need ~240px, which does not fit
                beside the mobile menu button on a narrow phone. Below this
                width the same row renders inside the mobile menu instead. */}
            <HeaderLinks className="hidden min-[480px]:flex" />
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
