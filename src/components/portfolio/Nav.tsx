import { useEffect, useRef, useState } from "react";
import { ChevronUp, Grid2X2, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

type SectionId = (typeof navItems)[number]["id"];
const legacySections: Record<string, SectionId> = {
  top: "home",
  about: "home",
  contact: "home",
  skills: "experience",
};

export function Nav() {
  const [active, setActive] = useState<SectionId>("home");
  const [open, setOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const dockRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = Math.min(window.innerHeight * 0.25, 180);
      let current: SectionId = "home";
      for (let i = 0; i < sections.length; i++) {
        if ((sections[i]?.getBoundingClientRect().top ?? Infinity) <= readingLine)
          current = navItems[i]!.id;
      }
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      )
        current = "news";
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const legacy = legacySections[window.location.hash.slice(1)];
    if (legacy) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#${legacy}`,
      );
      document.getElementById(legacy)?.scrollIntoView({ behavior: "instant" });
    }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    const main = document.querySelector("main");
    if (main) observer.observe(main);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const row = sectionsRef.current;
    if (!row) return;
    const measure = () => {
      const link = row.querySelector<HTMLElement>('[aria-current="location"]');
      if (link) setIndicator({ left: link.offsetLeft, width: link.offsetWidth });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    return () => observer.disconnect();
  }, [active]);

  useEffect(() => {
    if (!open) return;
    const closeOnOutside = (event: PointerEvent) => {
      if (!dockRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={dockRef} className="dock-container">
      {open ? (
        <div id="section-menu" className="dock-menu">
          <div className="dock-menu-heading">
            <span>Explore</span>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
            >
              <X size={17} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="All sections" className="dock-menu-sections">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <SocialLinks variant="menu" />
        </div>
      ) : null}
      <nav className="glass-dock" aria-label="Primary navigation">
        <div className="dock-sections" ref={sectionsRef}>
          <span
            className="dock-selection"
            aria-hidden="true"
            style={{
              transform: `translateX(${indicator.left}px)`,
              width: indicator.width,
              opacity: indicator.width ? 1 : 0,
            }}
          />
          {navItems.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined}>
              {label}
            </a>
          ))}
        </div>
        <button
          ref={toggleRef}
          className="dock-menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="section-menu"
          aria-label={`Navigation: ${navItems.find(({ id }) => id === active)?.label}`}
          onClick={() => setOpen((value) => !value)}
        >
          <Grid2X2 size={17} aria-hidden="true" />
          <span>{navItems.find(({ id }) => id === active)?.label}</span>
          <ChevronUp size={14} aria-hidden="true" className={open ? "is-open" : ""} />
        </button>
        <span className="dock-divider" aria-hidden="true" />
        <SocialLinks variant="dock" />
      </nav>
    </div>
  );
}
