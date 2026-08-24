import { profile } from "./profile";

export const siteConfig = {
  name: "Timi Owolabi - Machine Learning & Robotics",
  authorName: "Timi Owolabi",
  username: "iitimii",
  twitterUsername: "iitiimii",
  description:
    "Timi Owolabi works at the intersection of machine learning, control theory, and cognitive science to build embodied AI systems.",
  url: "https://iitimii.github.io",
  links: {
    twitter: "https://x.com/iitiimii",
    github: "https://github.com/iitimii/",
    templateRepo: "https://github.com/namanbarkiya/minimal-next-portfolio",
  },
  ogImage: "/profile/timi.jpg",
  iconIco: "/icons/letter-t.png",
  logoIcon: "/icons/letter-t.png",
  keywords: [
    "Timi Owolabi",
    "Oluwatimilehin Emmanuel Owolabi",
    "Machine Learning",
    "Robotics",
    "Embodied AI",
    "Control Theory",
    "Cognitive Science",
    "Reinforcement Learning",
    "Vision-Language-Action Models",
  ],
};

type AnalyticsEnvironment = Record<string, string | undefined>;

export function getGoogleAnalyticsId(
  environment: AnalyticsEnvironment = process.env
): string | undefined {
  return environment.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || undefined;
}

const socialProfileUrls = profile.socialLinks
  .map(({ href }) => href)
  .filter((href) => !href.startsWith("mailto:"));

export const globalStructuredData: Array<Record<string, unknown>> = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    alternateName: profile.formalName,
    description: profile.focus,
    email: profile.email,
    image: `${siteConfig.url}${profile.image}`,
    url: siteConfig.url,
    sameAs: socialProfileUrls,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: profile.fullName,
      url: siteConfig.url,
    },
  },
];
