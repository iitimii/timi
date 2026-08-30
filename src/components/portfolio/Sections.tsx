import { useRef, type ReactNode } from "react";
import {
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import {
  experience,
  impact,
  news,
  profile,
  projects,
  publications,
  researchExperience,
  skillGroups,
  writings,
  type ImpactItem,
  type PortfolioProject,
  type PublicationAuthor,
  type TimelineItem,
} from "@/data/portfolio";
import { Chip, Reveal, Section } from "./primitives";

const linkClass =
  "font-mono text-xs text-accent underline-offset-4 transition-colors hover:text-accent-glow hover:underline";

const inlineLinkClass =
  "font-mono text-[1em] text-accent underline-offset-4 transition-colors hover:text-accent-glow hover:underline";

function ExternalLink({
  href,
  children,
  inline = false,
}: {
  href: string;
  children: ReactNode;
  inline?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={inline ? inlineLinkClass : linkClass}
    >
      {children}
    </a>
  );
}

function Subheading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <p className="font-mono text-sm font-medium text-foreground">{children}</p>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}

const socialLinks: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
  download?: string;
}> = [
  {
    label: "Download full CV",
    href: profile.cv,
    icon: FileText,
    download: "timi-owolabi-full-cv.pdf",
  },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "X", href: profile.x, icon: Twitter },
  { label: "Google Scholar", href: profile.scholar, icon: GraduationCap },
];

export function SocialIconLinks() {
  return (
    <div className="flex flex-wrap items-center gap-2.5" aria-label="Profile links">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.label}
            href={link.href}
            download={link.download}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
          >
            <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}

function PeopleList({ people }: { people: PublicationAuthor[] }) {
  return (
    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
      {people.map((person, index) => (
        <span key={`${person.name}-${index}`}>
          {index > 0 ? ", " : ""}
          {person.href ? (
            <a
              href={person.href}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 transition-colors hover:text-accent hover:underline"
            >
              {person.self ? (
                <strong className="text-foreground">{person.name}</strong>
              ) : (
                person.name
              )}
            </a>
          ) : person.self ? (
            <strong className="text-foreground">{person.name}</strong>
          ) : (
            person.name
          )}
        </span>
      ))}
    </p>
  );
}

function HoverMedia({
  image,
  video,
  alt,
  className = "",
}: {
  image: string;
  video?: string;
  alt: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const play = () => {
    const node = videoRef.current;
    if (node) void node.play().catch(() => undefined);
  };

  const stop = () => {
    const node = videoRef.current;
    if (!node) return;
    node.pause();
    node.currentTime = 0;
  };

  return (
    <div
      className={`group/media relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-raised ${className}`}
      onMouseEnter={video ? play : undefined}
      onMouseLeave={video ? stop : undefined}
      data-hover-media
      data-video-src={video}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition duration-300 group-hover/media:opacity-100"
      />
      {video ? (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-200 group-hover/media:opacity-100"
        />
      ) : null}
    </div>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l border-border pl-6 md:pl-8">
      {items.map((item, index) => (
        <li key={`${item.org}-${item.period}`} className="relative pb-10 last:pb-0">
          <span
            className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-accent md:-left-[37px]"
            aria-hidden="true"
          />
          <Reveal delay={(index % 4) * 50}>
            <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
            <h3 className="mt-1 font-mono text-lg text-foreground">{item.role}</h3>
            <p className="text-sm text-accent">{item.org}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{item.location}</p>
            <ul className="mt-3 space-y-2">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="font-mono text-accent" aria-hidden="true">
                    ›
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface transition-colors hover:border-border-strong">
      {project.image ? (
        <HoverMedia image={project.image} video={project.video} alt={project.imageAlt ?? ""} />
      ) : (
        <div
          className="grid-texture h-20 border-b border-border bg-surface-raised"
          aria-hidden="true"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            {project.kind}
          </p>
          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
            {project.period}
          </span>
        </div>
        <h3 className="mt-2 font-mono text-lg text-foreground">
          {project.titleLink ? (
            <a
              href={project.titleLink}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {project.name} ↗
            </a>
          ) : (
            project.name
          )}
        </h3>
        <PeopleList people={project.collaborators} />
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        {project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
            {project.links.map((link) => (
              <ExternalLink key={link.href} href={link.href}>
                {link.label} ↗
              </ExternalLink>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ImpactCard({ item }: { item: ImpactItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface">
      {item.image ? (
        <div className="aspect-[16/8] overflow-hidden border-b border-border">
          <img
            src={item.image}
            alt="Students and volunteers during The Classroom Project outreach"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-xs text-accent">{item.role}</p>
          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
            {item.period}
          </span>
        </div>
        <h3 className="mt-2 font-mono text-base text-foreground">{item.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {item.organizationUrl ? (
            <a
              href={item.organizationUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              {item.organization} ↗
            </a>
          ) : (
            item.organization
          )}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <ul className="mt-4 space-y-2 border-t border-border pt-4">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
              <span className="text-accent" aria-hidden="true">
                ›
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function About() {
  return (
    <Section id="about" index="01" title="about">
      <Reveal>
        <div className="max-w-4xl space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m an ML Systems Engineer and Embodied AI Researcher. On the systems side, I work
            on the infrastructure behind production ML systems: reliability, deployment,
            observability, and scalability. On the research side, I lead the Embodied AI Research
            Group at{" "}
            <ExternalLink inline href="https://mlcollective.org/">
              ML Collective
            </ExternalLink>
            , where we work on world-action models. My interests span world models, reinforcement
            learning, and control theory.
          </p>
          <p>
            I graduated with a 4.85/5.0 GPA in Electrical Engineering from{" "}
            <ExternalLink inline href="https://www.covenantuniversity.edu.ng/">
              Covenant University
            </ExternalLink>
            . While at Covenant, I led the{" "}
            <ExternalLink
              inline
              href="https://gdg.community.dev/gdg-on-campus-covenant-university-ota-nigeria/"
            >
              Robotics Research Team
            </ExternalLink>
            , working on reinforcement learning, vision-language-action models, and low-cost robotic
            systems. I also worked with{" "}
            <ExternalLink inline href="https://danielomeiza.github.io/">
              Dr. Daniel Omeiza
            </ExternalLink>{" "}
            of the{" "}
            <ExternalLink inline href="https://ori.ox.ac.uk/">
              Oxford Robotics Institute
            </ExternalLink>{" "}
            on autonomous driving and graph neural networks.
          </p>
          <p>
            I care deeply about teaching and mentorship. As president of{" "}
            <ExternalLink inline href="https://www.instagram.com/aeies_cu/">
              AEIES
            </ExternalLink>
            , I founded a student mentorship program to help engineering students develop strong
            first-principles thinking. I taught machine learning to female engineering students of{" "}
            <ExternalLink inline href="https://www.apwen.org.ng/">
              APWEN
            </ExternalLink>
            . I also founded{" "}
            <ExternalLink inline href="https://www.linkedin.com/company/113221087">
              The Classroom Project
            </ExternalLink>
            , an initiative supporting underserved students with classroom infrastructure and STEM
            learning resources.
          </p>
          <p>
            Since I graduated, I&apos;ve realised that my priorities evolve as I learn, so for now
            I&apos;m focused on continuing to learn, build ML systems, and use them to solve
            meaningful problems.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" index="02" title="skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={(index % 3) * 50}>
            <div className="h-full rounded-md border border-border bg-surface p-5">
              <p className="font-mono text-xs text-accent">// {group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" index="03" title="experience">
      <Subheading>professional experience</Subheading>
      <Timeline items={experience} />
      <div className="mt-16">
        <Subheading>research experience</Subheading>
        <Timeline items={researchExperience} />
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="04" title="projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 3) * 50}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Research() {
  return (
    <Section id="research" index="05" title="research">
      <Subheading>publications & manuscripts</Subheading>
      <div className="space-y-5">
        {publications.map((publication, index) => (
          <Reveal key={publication.title} delay={(index % 3) * 50}>
            <article className="grid overflow-hidden rounded-md border border-border bg-surface sm:grid-cols-[10rem_1fr]">
              {publication.image ? (
                <HoverMedia
                  image={publication.image}
                  video={publication.video}
                  alt={`Visual preview for ${publication.title}`}
                  className="sm:aspect-auto sm:min-h-36 sm:border-r sm:border-b-0"
                />
              ) : (
                <div
                  className="grid-texture hidden min-h-36 border-r border-border bg-surface-raised sm:block"
                  aria-hidden="true"
                />
              )}
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-accent">
                  <span>{publication.venue}</span>
                  <span className="text-muted-foreground">{publication.year}</span>
                  {publication.note ? (
                    <span className="rounded-sm border border-red-500/70 bg-red-500/10 px-2 py-0.5 text-red-400">
                      {publication.note}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 font-mono text-base leading-snug text-foreground">
                  {publication.titleLink ? (
                    <a
                      href={publication.titleLink}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {publication.title} ↗
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <PeopleList people={publication.authors} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {publication.description}
                </p>
                {publication.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {publication.links.map((link) => (
                      <ExternalLink key={link.href} href={link.href}>
                        {link.label} ↗
                      </ExternalLink>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Impact() {
  return (
    <Section id="impact" index="06" title="teaching, leadership, & community impact">
      <div className="grid gap-5 md:grid-cols-2">
        {impact.map((item, index) => (
          <Reveal key={item.title} delay={(index % 2) * 50}>
            <ImpactCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Writings() {
  return (
    <Section id="writings" index="07" title="writings">
      <div className="grid gap-5 md:grid-cols-2">
        {writings.map((writing, index) => (
          <Reveal key={writing.href} delay={index * 60}>
            <a
              href={writing.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface transition-colors hover:border-accent"
            >
              {writing.image ? (
                <div className="aspect-[16/8] overflow-hidden border-b border-border">
                  <img
                    src={writing.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
              ) : (
                <div
                  className="grid-texture h-28 border-b border-border bg-surface-raised"
                  aria-hidden="true"
                />
              )}
              <article className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
                  <span>{writing.date}</span>
                  <span>{writing.readingTime}</span>
                </div>
                <h3 className="mt-3 font-mono text-lg leading-snug text-foreground transition-colors group-hover:text-accent">
                  {writing.title} ↗
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {writing.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {writing.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </article>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function News() {
  return (
    <Section id="news" index="08" title="news">
      <Reveal>
        <ol className="divide-y divide-border border-y border-border">
          {news.map((item) => (
            <li
              key={`${item.date}-${item.before}-${item.link?.href ?? ""}`}
              className="grid grid-cols-[5.5rem_1fr] gap-4 py-4 text-sm sm:grid-cols-[7rem_1fr]"
            >
              <time className="font-mono text-xs text-accent">{item.date}</time>
              <p className="leading-relaxed text-foreground">
                {item.before}
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {item.link.label}
                  </a>
                ) : null}
                {item.after}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" index="09" title="contact">
      <Reveal>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Collaborations I am interested in are: robotics and embodied AI research and machine
          learning systems projects.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block break-all font-mono text-lg text-accent underline-offset-4 hover:underline sm:text-2xl md:text-3xl"
        >
          {profile.email}
        </a>
        <div className="mt-7 sm:mt-8">
          <SocialIconLinks />
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl px-5 sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Timi Owolabi · ML Systems Engineer.
        </p>
      </div>
    </footer>
  );
}
