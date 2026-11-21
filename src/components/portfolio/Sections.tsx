import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  education,
  experience,
  impact,
  news,
  profile,
  projects,
  publications,
  researchExperience,
  skillGroups,
  talks,
  writings,
  type LinkItem,
  type PublicationAuthor,
  type TimelineItem,
} from "@/data/portfolio";
import { Section } from "./primitives";

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function ResourceLinks({ links }: { links: LinkItem[] }) {
  return links.length ? (
    <div className="resource-links">
      {links.map(({ label, href }) => (
        <ExternalLink key={href} href={href}>
          {label.replace(/\s*↗/g, "")}
        </ExternalLink>
      ))}
    </div>
  ) : null;
}

function PeopleList({ people }: { people: PublicationAuthor[] }) {
  return (
    <p className="people">
      {people.map((person, index) => (
        <span key={`${person.name}-${index}`}>
          {index ? ", " : ""}
          {person.self ? (
            <strong>{person.name}</strong>
          ) : person.href ? (
            <ExternalLink href={person.href}>{person.name}</ExternalLink>
          ) : (
            person.name
          )}
        </span>
      ))}
    </p>
  );
}

function Media({ image, video, alt }: { image: string; video?: string | undefined; alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const play = () => {
    const node = ref.current;
    if (node) void node.play().catch(() => setPlaying(false));
  };
  const stop = () => {
    const node = ref.current;
    if (!node) return;
    node.pause();
    node.currentTime = 0;
  };

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) {
        node.pause();
        node.currentTime = 0;
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [video]);

  const toggle = () => {
    const node = ref.current;
    if (!node) return;
    if (playing) node.pause();
    else play();
  };
  return (
    <div
      className={`record-media${playing ? " is-playing" : ""}`}
      onPointerEnter={(event) => {
        if (
          event.pointerType === "mouse" &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          play();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") stop();
      }}
    >
      <img src={image} alt={alt} loading="lazy" width={320} height={240} />
      {video ? (
        <>
          <video
            ref={ref}
            src={video}
            muted
            loop
            playsInline
            preload="none"
            aria-label={alt}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <button
            type="button"
            className="media-toggle"
            aria-label={`${playing ? "Pause" : "Play"} ${alt}`}
            onClick={toggle}
          />
        </>
      ) : null}
    </div>
  );
}

const organizationLogos: Record<string, { src: string; name: string }[]> = {
  "Quidax Technologies": [{ src: "quidax.png", name: "Quidax" }],
  "Trotta Technologies, Inc": [{ src: "trotta.png", name: "Trotta" }],
  "Scrella Technologies": [{ src: "scrella.ico", name: "Scrella" }],
  "ML Collective": [{ src: "ml-collective.ico", name: "ML Collective" }],
  WaySense: [{ src: "waysense.webp", name: "WaySense" }],
  "Covenant University": [{ src: "covenant.png", name: "Covenant University" }],
  "Schneider Electric": [{ src: "schneider.png", name: "Schneider Electric" }],
};

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={`${item.org}-${item.period}`}>
          <div className="organization-logos">
            {item.monogram ? (
              <span className="organization-monogram" aria-hidden="true">
                {item.monogram}
              </span>
            ) : item.image ? (
              <img
                src={item.image}
                alt={item.imageAlt ?? `${item.org} logo`}
                width={44}
                height={44}
                loading="lazy"
              />
            ) : (
              organizationLogos[item.org]?.map(({ src, name }) => (
                <img
                  key={src}
                  src={`/organizations/${src}`}
                  alt={`${name} logo`}
                  width={44}
                  height={44}
                  loading="lazy"
                />
              ))
            )}
          </div>
          <div className="timeline-body">
            <div className="record-meta">
              <span>
                {item.organizationUrl ? (
                  <ExternalLink href={item.organizationUrl}>{item.org}</ExternalLink>
                ) : (
                  item.org
                )}
              </span>
              <span>{item.period}</span>
            </div>
            <h3>{item.role}</h3>
            {item.supervisor ? (
              <p className="timeline-supervisor">
                — <ExternalLink href={item.supervisor.href}>{item.supervisor.name}</ExternalLink>,{" "}
                <ExternalLink href={item.supervisor.affiliationHref}>
                  {item.supervisor.affiliation}
                </ExternalLink>
                <img src="/organizations/oxford.png" alt="" width={18} height={18} loading="lazy" />
              </p>
            ) : null}
            <p className="timeline-location">{item.location}</p>
            {item.description ? (
              <p className="record-description">
                {item.description}
                {item.descriptionLink ? (
                  <>
                    {" "}
                    <ExternalLink href={item.descriptionLink.href}>
                      {item.descriptionLink.label}
                    </ExternalLink>
                    .
                  </>
                ) : null}
              </p>
            ) : null}
            {item.bullets?.length ? (
              <ul className="bullet-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

function ExperienceGroup({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <details className="experience-group">
      <summary>
        <span>
          <span className="experience-group-title">{title}</span>
          <span className="experience-group-description">{summary}</span>
        </span>
        <ChevronDown size={18} aria-hidden="true" />
      </summary>
      <div className="experience-group-content">{children}</div>
    </details>
  );
}

export function Research() {
  return (
    <Section
      id="research"
      title="Research"
      description="Publications & manuscripts"
      extra={
        <ExternalLink href={profile.scholar} className="section-link">
          Google Scholar
        </ExternalLink>
      }
    >
      <div className="records">
        {publications.map((publication) => (
          <article key={publication.title} className="record research-record">
            {publication.image ? (
              <Media
                image={publication.image}
                video={publication.video}
                alt={publication.imageAlt ?? `Research illustration: ${publication.title}`}
              />
            ) : null}
            <div className="record-body">
              <h3>
                {publication.titleLink ? (
                  <ExternalLink href={publication.titleLink}>{publication.title}</ExternalLink>
                ) : (
                  publication.title
                )}
              </h3>
              <PeopleList people={publication.authors} />
              <p className="publication-venue">
                <em>
                  {publication.venuePrefix ? `${publication.venuePrefix} ` : null}
                  {publication.venue}
                </em>
                , {publication.year}
              </p>
              <p className="record-description">{publication.description}</p>
              <ResourceLinks
                links={
                  publication.links.length
                    ? publication.links
                    : publication.titleLink
                      ? [{ label: "Paper", href: publication.titleLink }]
                      : []
                }
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="From inference engines to robots in the real world"
      extra={
        <ExternalLink href={profile.github} className="section-link">
          GitHub
        </ExternalLink>
      }
    >
      <div className="records">
        {projects.map((project) => (
          <article key={project.name} className="record project-record">
            {project.image ? (
              <Media
                image={project.image}
                video={project.video}
                alt={project.imageAlt ?? project.name}
              />
            ) : null}
            <div className="record-body">
              <div className="record-heading">
                <h3>
                  {project.titleLink ? (
                    <ExternalLink href={project.titleLink}>{project.name}</ExternalLink>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="record-date">{project.period}</span>
              </div>
              <PeopleList people={project.collaborators} />
              <p className="record-description">{project.description}</p>
              <p className="project-tags">{[project.kind, ...project.tags].join(" · ")}</p>
              <ResourceLinks links={project.links} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Engineering, research, and the foundations behind my work"
    >
      <div className="experience-groups">
        <ExperienceGroup
          title="Professional Experience"
          summary="Quidax · Trotta · Scrella · Schneider Electric"
        >
          <Timeline items={experience} />
        </ExperienceGroup>
        <ExperienceGroup title="Research Experience" summary="ML Collective · WaySense">
          <Timeline items={researchExperience} />
        </ExperienceGroup>
        <ExperienceGroup title="Education" summary="Covenant University · Electrical Engineering">
          <Timeline items={education} />
        </ExperienceGroup>
        <ExperienceGroup
          title="Skills"
          summary="Machine learning · Robotics & control · Cloud & MLOps"
        >
          <dl className="skills-list">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </ExperienceGroup>
      </div>
    </Section>
  );
}

export function Writings() {
  return (
    <Section id="writings" title="Writings" description="Notes on what I’m learning and building">
      <div className="records">
        {writings.map((writing) => (
          <article key={writing.href} className="record writing-record">
            {writing.image ? (
              <Media image={writing.image} alt="Animated tensor memory views" />
            ) : null}
            <div className="record-body">
              <div className="record-heading">
                <h3>
                  <ExternalLink href={writing.href}>{writing.title}</ExternalLink>
                </h3>
                <time className="record-date">{writing.date}</time>
              </div>
              <p className="record-description">{writing.description}</p>
              <p className="project-tags">{writing.tags.join(" · ")}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Talks() {
  return (
    <Section
      id="talks"
      title="Talks"
      description="Sharing ideas, from neural networks to the engineering journey"
    >
      <ol className="talk-list">
        {talks.map((talk) => (
          <li key={talk.title}>
            <time>{talk.date}</time>
            <div>
              <h3>
                {"href" in talk ? (
                  <ExternalLink href={talk.href}>{talk.title}</ExternalLink>
                ) : (
                  talk.title
                )}
              </h3>
              <p>{talk.organization}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Impact() {
  return (
    <Section id="impact" title="Impact" description="Teaching, leadership & community">
      <Timeline items={impact} />
    </Section>
  );
}

export function News() {
  return (
    <Section id="news" title="News" description="Recent milestones & updates">
      <ol className="news-list">
        {news.map((item) => (
          <li key={`${item.date}-${item.before}-${item.link?.href ?? ""}`}>
            <time>{item.date}</time>
            <p>
              {item.before}
              {item.link ? (
                <ExternalLink href={item.link.href}>
                  {item.link.label.replace(/\s*↗/g, "")}
                </ExternalLink>
              ) : null}
              {item.after}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="footer page-width">
      <span>© 2026 {profile.name}</span>
      <a href="#home">Back to top</a>
    </footer>
  );
}
