import type { MetadataRoute } from "next";

// Web app manifest: makes the History Lab installable ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 8 History Lab",
    short_name: "History Lab",
    description: "Learn, practise and master Year 8 History — Dictatorship and Democracy: enquiry-led lessons, source skills, auto-marked practice and a daily mixed set.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f7f4ee",
    theme_color: "#233056",
    categories: ["education", "kids"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
