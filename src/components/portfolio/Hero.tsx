import { profile } from "@/data/portfolio";
import { SocialIconLinks } from "./Sections";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-26 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28"
    >
      <div
        className="grid-texture pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="scanlines relative overflow-hidden rounded-md border border-border bg-surface/80 backdrop-blur">
          <div className="flex items-center gap-2 border-b border-border bg-surface-raised px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio</span>
          </div>

          <div className="grid gap-8 p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-10">
            <div className="order-2 md:order-1">
              <p className="font-mono text-xs text-accent">
                $ whoami<span className="caret ml-1">_</span>
              </p>
              <h1 className="mt-3 font-mono text-[1.75rem] font-bold leading-[1.15] tracking-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 font-mono text-[13px] leading-relaxed text-accent sm:text-sm md:text-base">
                {profile.role} . {profile.focus}
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                {profile.tagline}
              </p>
              <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
                // {profile.location}
              </p>

              <div className="mt-7 sm:mt-8">
                <SocialIconLinks />
              </div>
            </div>

            <div className="order-1 justify-self-center md:order-2 md:justify-self-end md:-translate-y-4">
              <div className="relative">
                <div
                  className="absolute -inset-1 rounded-full opacity-30 blur-lg"
                  style={{ background: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                <img
                  src={profile.avatar}
                  alt={`${profile.shortName}, ML systems engineer and embodied AI researcher`}
                  width={288}
                  height={288}
                  loading="eager"
                  className="relative h-52 w-52 rounded-full border border-border-strong object-cover sm:h-56 sm:w-56 md:h-64 md:w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
