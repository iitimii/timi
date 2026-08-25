import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Timi Owolabi | Robotics & Machine Learning Researcher",
    short_name: "Timi Owolabi",
    description:
      "Timi Owolabi - Robotics and machine learning researcher working on reinforcement learning, vision-language-action models, and learning-based control.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "robotics",
      "ai",
      "machine learning",
      "research",
      "control systems",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
