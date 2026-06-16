import type { MetadataRoute } from "next";
import { routes } from "@/data/routes";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "tuyen-xe", "bang-gia", "lien-he"];
  const routePaths = routes.map((route) => route.slug);
  const lastModified = new Date();

  return [...staticPaths, ...routePaths].map((path) => ({
    url: `${siteConfig.baseUrl}/${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
