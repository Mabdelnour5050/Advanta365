import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/MotionReveal";
import { communicationsChannels } from "@/lib/content";
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

const audiences = [
  { role: "Site Owners", note: "Operational ownership of sites, content, and permissions." },
  { role: "IM Leads", note: "Information management, metadata, and classification standards." },
  { role: "End Users", note: "Day-to-day work in Teams, SharePoint, and OneDrive." },
  { role: "Executives", note: "Sponsorship, visible support, and program direction." },
];

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
        label="The WOW program"
        title="Structured onboarding workshops"
        lede="A series of focused, scenario-driven workshops that drive adoption and engagement across your organization, from site owners and IM leads to end users and executives."
        cta={{ label: "Learn more", href: "/contact" }}
        numberStrip={6}
      />

      {/* By role */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          index="01"
          label="By role"
          title="Tailored to every audience"
          lede="Each role gets its own onboarding journey, scoped to what that audience actually needs to do."
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 70}
              className="flex flex-col border-t-2 border-ink bg-background py-6 pr-5"
            >
              <span className="figure-index mb-3 text-lg">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="h-card text-ink">{a.role}</h3>
              <p className="body-base mt-2 text-ink-2">{a.note}</p>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      {/* Reinforcement channels */}
      <SectionShell tone="muted">
        <SectionHeader
          index="02"
          label="Reinforced over time"
          title="How adoption is reinforced"
          lede="Workshops are one moment. Engagement is sustained through the channels that keep Microsoft 365 part of daily work."
          className="mb-10 md:mb-12"
        />
        <ul className="flex flex-wrap gap-3">
          {communicationsChannels.map((channel, idx) => (
            <MotionReveal
              key={idx}
              as="li"
              from="fade"
              delay={idx * 40}
              className="border border-rule-strong bg-background px-4 py-2 text-sm font-medium text-ink"
            >
              {channel}
            </MotionReveal>
          ))}
        </ul>
      </SectionShell>

      <CTABand
        label="Get started"
        title="Make your Microsoft 365 launch land."
        lede="Talk to us about running the WOW program in your organization."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Adoption approach", href: "/adoption" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
