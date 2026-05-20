import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";
import { buildMetadata, jsonLd, serviceSchema, webPageSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "WOW Program — Microsoft 365 Onboarding Workshops",
  description:
    "Structured, scenario-driven onboarding workshops that drive Microsoft 365 adoption and engagement across site owners, IM leads, end users, and executives.",
  path: "wow",
  keywords: [
    "Microsoft 365 onboarding",
    "WOW program",
    "M365 workshops",
    "site owner training",
    "executive enablement",
    "champions program",
  ],
});

export default function WOW() {
  const wowGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "wow",
        name: "WOW Program",
        description:
          "Microsoft 365 onboarding workshops for site owners, IM leads, end users, and executives.",
        breadcrumb: [
          { name: "Home", path: "" },
          { name: "WOW Program", path: "wow" },
        ],
      }),
      serviceSchema({
        name: "ADVANTA365 WOW Program",
        serviceType: "Microsoft 365 Onboarding Workshops",
        description:
          "A series of focused, scenario-driven workshops that introduce Microsoft 365 by role, building lasting engagement.",
        path: "wow",
      }),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-wow"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(wowGraph) }}
      />
      <PageHero
        eyebrow="The WOW program"
        title="Structured onboarding workshops"
        lede="A series of focused, scenario-driven workshops that drive adoption and engagement across your organization — from site owners and IM leads to end users and executives."
        cta={{ label: "Learn more", href: "/contact" }}
        numberStrip={6}
      />

      <CTABand
        eyebrow="Get started"
        title="Make your Microsoft 365 launch land."
        lede="Talk to us about running the WOW program in your organization."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Adoption approach", href: "/adoption" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
