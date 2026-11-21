import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  Experience,
  Footer,
  Impact,
  News,
  Projects,
  Research,
  Talks,
  Writings,
} from "@/components/portfolio/Sections";
import { profile } from "@/data/portfolio";

const siteUrl = "https://www.timiowolabi.com/";
const title = "Timi Owolabi";
const description = "Hi, I'm Timi. I work on making physical AI and generative AI more efficient.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:site_name", content: "Timi Owolabi" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: `${siteUrl}timi.jpg` },
      {
        property: "og:image:alt",
        content: "Timi Owolabi, ML systems engineer",
      },
      { property: "og:image:width", content: "978" },
      { property: "og:image:height", content: "978" },
      { property: "profile:first_name", content: "Timi" },
      { property: "profile:last_name", content: "Owolabi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${siteUrl}timi.jpg` },
      {
        name: "twitter:image:alt",
        content: "Timi Owolabi, ML systems engineer",
      },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: `mailto:${profile.email}`,
          image: `${siteUrl}timi.jpg`,
          url: siteUrl,
          sameAs: [profile.github, profile.linkedin, profile.x, profile.scholar],
          address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Covenant University" },
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="portfolio">
      <a href="#portfolio-content" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="portfolio-content" tabIndex={-1}>
        <Hero />
        <Research />
        <Projects />
        <Experience />
        <Writings />
        <Talks />
        <Impact />
        <News />
      </main>
      <Footer />
    </div>
  );
}
