import { useEffect, useState } from "react";
import { academicNavItems, navItems, profile } from "@/data/portfolio";

export function Nav({ academic, onToggleView }: { academic: boolean; onToggleView: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const items = academic ? academicNavItems : navItems;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:h-16 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <a href="#top" className="shrink-0 font-mono text-sm text-foreground">
            <span className="text-accent">~/</span>timi
          </a>
          <button
            type="button"
            aria-controls="portfolio-content"
            onClick={onToggleView}
            className="min-h-10 rounded-sm border border-accent bg-background px-3 py-2 font-mono text-[11px] text-accent transition-colors hover:bg-accent hover:text-accent-foreground sm:text-xs"
          >
            {academic ? "click to view full website" : "click to view academic website"}
          </button>
        </div>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 xl:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download="timi-owolabi-full-cv.pdf"
            className="rounded-sm border border-accent px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            resume.pdf
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 font-mono text-xs text-muted-foreground xl:hidden"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-6xl flex-col gap-3.5 px-5 py-4 sm:px-6"
          >
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download="timi-owolabi-full-cv.pdf"
              className="font-mono text-sm text-accent"
            >
              resume.pdf
            </a>
            <a href={`mailto:${profile.email}`} className="font-mono text-sm text-muted-foreground">
              email
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
