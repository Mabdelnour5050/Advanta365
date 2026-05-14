import { absoluteUrl, siteConfig } from "./seo-config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url
  };
}
