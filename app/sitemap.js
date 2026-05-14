import { siteConfig } from "./seo-config";

const lastModified = new Date("2026-05-14T00:00:00.000Z");

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
