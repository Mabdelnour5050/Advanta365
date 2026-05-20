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

const moduleAccents = [
  "bg-gradient-to-br from-[#06B6D4] to-[#0D7377]",
  "bg-gradient-to-br from-[#14B8A6] to-[#0A5F6F]",
  "bg-gradient-to-br from-[#0D7377] to-[#084E5E]",
  "bg-gradient-to-br from-[#0A5F6F] to-[#06B6D4]",
  "bg-gradient-to-br from-[#14B8A6] to-[#06B6D4]",
];

export default function Governance() {
  const moduleItems: GridItem[] = modules.map((m, idx) => ({
    title: m.title,
    description: m.description,
    number: idx + 1,
    accent: moduleAccents[idx],
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
        eyebrow="By design"
        title="Governance by design"
        lede="Governance embedded into provisioning, templates, and onboarding — not as an afterthought, not as a bolt-on policy."
        cta={{ label: "Get started", href: "/contact" }}
      />

      {/* Philosophy — asymmetric two-column with oversized 01 */}
      <SectionShell tone="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          <MotionReveal from="left" className="lg:col-span-7 space-y-5 md:space-y-6">
            <span className="eyebrow">Philosophy</span>
            <h2 className="h-section text-foreground">Built in, not bolted on</h2>
            <p className="body-lg text-muted-foreground">
              Most M365 programs treat governance as a policy document and adoption as a training plan. ADVANTA365
              treats them as one operating model. Governance is embedded into the provisioning experience, the
              templates business areas use, and the onboarding journeys for site owners and end users.
            </p>
            <p className="body-base text-muted-foreground">
              The result: governance feels practical, not bureaucratic — and it scales because it&apos;s where the
              work happens, not where it&apos;s reviewed.
            </p>
          </MotionReveal>
          <MotionReveal
            from="right"
            delay={120}
            className="lg:col-span-5 relative card-callout p-8 md:p-10 wide:p-12 min-h-[16rem] flex items-center"
          >
            <div className="relative z-10 space-y-3">
              <span className="font-mono text-primary-foreground/60 text-sm tracking-wider">01</span>
              <p className="h-section text-primary-foreground">
                Governance is embedded at every stage — by design.
              </p>
            </div>
            <span
              aria-hidden
              className="absolute right-4 bottom-2 text-[10rem] md:text-[14rem] wide:text-[18rem] leading-none font-bold text-primary-foreground/10 select-none"
            >
              01
            </span>
          </MotionReveal>
        </div>
      </SectionShell>

      {/* Modules */}
      <SectionShell tone="muted">
        <SectionHeader
          eyebrow="Governed modules"
          title="Our modules"
          lede="Five working modules that operationalize governance across Microsoft 365."
          align="center"
          className="mb-12 md:mb-16 wide:mb-20"
        />
        <CardGrid
          items={moduleItems}
          variant="module"
          cols={{ base: 1, md: 2, lg: 5 }}
          stagger={70}
          gap="md"
        />
      </SectionShell>

      <CTABand
        eyebrow="Start the conversation"
        title="Make governance practical at enterprise scale."
        lede="Talk to us about embedding governance into your Microsoft 365 program."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Explore framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
