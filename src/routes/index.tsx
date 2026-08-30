import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Experience,
  Footer,
  Impact,
  News,
  Projects,
  Research,
  Skills,
  Writings,
} from "@/components/portfolio/Sections";
import { profile } from "@/data/portfolio";

const siteUrl = "https://timi-iitimiis-projects.vercel.app/";
const title = "Timi Owolabi · ML Systems Engineer · Embodied AI Research";
const description =
  "Portfolio of Timi Owolabi, an ML systems engineer working on embodied AI, robot learning, real-world control, and machine learning infrastructure.";

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
        content: "Timi Owolabi, ML systems engineer and embodied AI researcher",
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
        content: "Timi Owolabi, ML systems engineer and embodied AI researcher",
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
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Impact />
        <Writings />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
