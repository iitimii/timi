import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type RouteMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function buildRouteMetadata({
  title,
  description,
  path,
}: RouteMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: `@${siteConfig.twitterUsername}`,
    },
  };
}
