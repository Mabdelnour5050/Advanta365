import { siteConfig } from "./seo-config";

export default function manifest() {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortTitle,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: siteConfig.themeColor,
    lang: siteConfig.language,
    categories: ["business", "productivity", "consulting"]
  };
}
