import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CardGrid, { type GridItem } from "@/components/sections/CardGrid";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/MotionReveal";
import { modules } from "@/lib/content";
import {
  buildMetadata,
  itemListSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Governance by Design — Microsoft 365 at Enterprise Scale",
  description:
    "Embed governance into provisioning, templates, and onboarding — not as policy documents. Five working modules operationalize governance across SharePoint, Teams, and OneDrive for large, regulated organizations.",
  path: "governance",
  keywords: [
    "Microsoft 365 governance",
    "SharePoint governance",
    "Teams governance",
    "governed provisioning",
    "M365 policy automation",
    "regulated organizations",
    "governance by design",
  ],
});

export default function Governance() {
  const moduleItems: GridItem[] = modules.map((m, idx) => ({
    title: m.title,
    description: m.description,
    number: `M0${idx + 1}`,
  }));

  const governanceGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "governance",
        name: "Governance by Design",
        description:
          "Embed governance into provisioning, templates, and onboarding across Microsoft 365.",
        breadcrumb: [
          { name: "Home", path: "" },
          { name: "Governance", path: "governance" },
        ],
      }),
      serviceSchema({
        name: "Microsoft 365 Governance by Design",
        serviceType: "Microsoft 365 Governance and Information Management",
        description:
          "Operational governance embedded into provisioning, templates, classification, and onboarding for SharePoint Online, Microsoft Teams, and OneDrive.",
        path: "governance",
      }),
      itemListSchema({
        name: "ADVANTA365 Governance Modules",
        path: "governance",
        items: modules.map((m) => ({ name: m.title, description: m.description })),
      }),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-governance"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(governanceGraph) }}
      />
      <PageHero
        label="By design"
        title="Governance by design"
        lede="Governance embedded into provisioning, templates, and onboarding. Not an afterthought, not a bolt-on policy."
        cta={{ label: "Get started", href: "/contact" }}
      />

      {/* Philosophy */}
      <SectionShell tone="default">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionReveal from="left" className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-4 border-t border-rule-strong pt-3">
              <span className="figure-index text-sm">01</span>
              <span className="mono-label">Philosophy</span>
            </div>
            <h2 className="h-section text-ink">Built in, not bolted on</h2>
            <p className="body-lg mt-5">
              Most M365 programs treat governance as a policy document and adoption as a training
              plan. ADVANTA365 treats them as one operating model. Governance is embedded into the
              provisioning experience, the templates business areas use, and the onboarding journeys
              for site owners and end users.
            </p>
            <p className="body-base mt-4 text-ink-2">
              The result: governance feels practical, not bureaucratic, and it scales because it is
              where the work happens, not where it is reviewed.
            </p>
          </MotionReveal>

          <MotionReveal
            from="right"
            delay={120}
            className="ink-plate relative flex min-h-[18rem] items-end overflow-hidden p-8 md:p-10 lg:col-span-5"
          >
            <span
              aria-hidden
              className="figure-index pointer-events-none absolute -right-2 -top-6 select-none text-[12rem] leading-none opacity-[0.12] md:text-[16rem]"
              style={{ color: "var(--paper)" }}
            >
              01
            </span>
            <p className="relative z-10 font-display text-2xl font-semibold leading-snug text-[var(--paper)] md:text-3xl">
              Governance is embedded at every stage, by design.
            </p>
          </MotionReveal>
        </div>
      </SectionShell>

      {/* Modules */}
      <SectionShell tone="muted">
        <SectionHeader
          index="02"
          label="Governed modules"
          title="Five working modules"
          lede="The modules that operationalize governance across Microsoft 365."
          className="mb-10 md:mb-12"
        />
        <CardGrid
          items={moduleItems}
          variant="panel"
          cols={{ base: 1, md: 2, lg: 3 }}
          stagger={70}
          gap="md"
        />
      </SectionShell>

      <CTABand
        label="Start the conversation"
        title="Make governance practical at enterprise scale."
        lede="Talk to us about embedding governance into your Microsoft 365 program."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Explore framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
