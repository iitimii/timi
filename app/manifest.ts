import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Timi Owolabi | Machine Learning & Robotics",
    short_name: "Timi Owolabi",
    description:
      "Timi Owolabi's machine learning, robotics, research, and embodied AI portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/letter-t.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/letter-t.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "machine learning",
      "robotics",
      "research",
      "embodied AI",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
