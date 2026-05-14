export const siteConfig = {
  name: "Advanta365",
  legalName: "Advanta365",
  url: "https://advanta365.com",
  email: "hello@advanta365.com",
  locale: "en_US",
  language: "en-US",
  themeColor: "#07111f",
  title: "Advanta365 | Microsoft 365 Adoption, Governance, and Rollout Strategy",
  shortTitle: "Advanta365",
  description:
    "Advanta365 helps organizations plan, govern, roll out, and sustain Microsoft 365 adoption across SharePoint Online, Microsoft Teams, OneDrive, Power Platform, and the modern workplace.",
  shortDescription:
    "Structured Microsoft 365 adoption, governance, rollout, and enablement for modern enterprises.",
  category: "Microsoft 365 consulting",
  services: [
    "Microsoft 365 adoption strategy",
    "SharePoint Online implementation",
    "Microsoft Teams rollout governance",
    "OneDrive enablement",
    "Power Platform governance",
    "Change management",
    "Role-based training",
    "Adoption measurement"
  ],
  keywords: [
    "Microsoft 365 adoption",
    "Microsoft 365 rollout strategy",
    "SharePoint Online governance",
    "SharePoint implementation",
    "Microsoft Teams rollout",
    "Microsoft Teams governance",
    "OneDrive training",
    "Power Platform governance",
    "modern workplace consulting",
    "digital workplace adoption",
    "Microsoft 365 change management",
    "site owner enablement",
    "Microsoft 365 training",
    "champions network",
    "adoption measurement"
  ],
  sections: [
    { id: "diagnostic", label: "Readiness Diagnostic" },
    { id: "engagements", label: "Engagement Models" },
    { id: "services", label: "Services" },
    { id: "journey", label: "Adoption Journey" },
    { id: "framework", label: "Framework" },
    { id: "learning", label: "Learning and Enablement" },
    { id: "outcomes", label: "Outcomes" },
    { id: "contact", label: "Contact" }
  ]
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function jsonLdScript(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
