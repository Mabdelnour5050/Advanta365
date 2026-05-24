import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/MotionReveal";
import { deliveryStages, modules } from "@/lib/content";
import {
  buildMetadata,
  itemListSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ADVANTA365 Framework — Seven Stages, Five Modules",
  description:
    "A comprehensive operating model: seven-stage delivery (Vision → Strategy → Planning → Enablement → Rollout → Sustainment) and five working modules (Requests, Blueprint, Classify, Engage) for enterprise Microsoft 365 adoption and governance.",
  path: "framework",
  keywords: [
    "Microsoft 365 framework",
    "seven-stage delivery",
    "M365 implementation methodology",
    "structured rollout",
    "Microsoft 365 operating model",
    "ADVANTA modules",
  ],
});

export default function Framework() {
  const frameworkGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "framework",
        name: "ADVANTA365 Framework",
        description:
          "Seven-stage delivery model and five working modules — the operating model behind ADVANTA365.",
        breadcrumb: [
          { name: "Home", path: "" },
          { name: "Framework", path: "framework" },
        ],
      }),
      serviceSchema({
        name: "ADVANTA365 Framework",
        serviceType: "Microsoft 365 Implementation, Adoption and Governance Framework",
        description:
          "Repeatable seven-stage delivery model paired with five operational modules covering provisioning, blueprint catalog, classification, and engagement.",
        path: "framework",
      }),
      itemListSchema({
        name: "ADVANTA365 Delivery Stages",
        path: "framework",
        items: deliveryStages.map((s) => ({ name: s.label })),
      }),
      itemListSchema({
        name: "ADVANTA365 Modules",
        path: "framework",
        items: modules.map((m) => ({ name: m.title, description: m.description })),
      }),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-framework"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(frameworkGraph) }}
      />
      <PageHero
        label="The framework"
        title="The ADVANTA365 framework"
        lede="A comprehensive operating model that combines governance, adoption, and sustainment into one repeatable process."
        cta={{ label: "Explore implementation", href: "/contact" }}
        numberStrip={7}
      />

      {/* Delivery stages */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          index="01"
          label="Delivery model"
          title="A seven-stage delivery model"
          lede="Each stage is repeatable, role-aware, and embeds governance and adoption from day one."
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {deliveryStages.map((stage, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 60}
              className="flex items-start gap-5 border-t-2 border-ink bg-background py-6 pr-5"
            >
              <span className="figure-index text-2xl md:text-3xl">{stage.number}</span>
              <span className="h-card pt-1 text-ink">{stage.label}</span>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      {/* Modules */}
      <SectionShell tone="muted">
        <SectionHeader
          index="02"
          label="The five modules"
          title="Five core modules"
          lede="The working machinery of ADVANTA365, five connected modules that turn methodology into daily operations."
          className="mb-10 md:mb-12"
        />
        <div className="border-t-2 border-ink">
          {modules.map((module, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 60}
              className="grid grid-cols-1 gap-4 border-b border-rule bg-background py-7 transition-colors hover:bg-[color-mix(in_oklab,var(--paper-panel)_70%,var(--paper))] md:grid-cols-[8rem_1fr] md:gap-10 md:px-6"
            >
              <span className="figure-index text-base">M0{idx + 1}</span>
              <div className="max-w-[72ch]">
                <h3 className="h-card text-ink">{module.title}</h3>
                <p className="body-base mt-2 text-ink-2">{module.description}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      <CTABand
        label="Get started"
        title="Ready to implement ADVANTA365?"
        lede="Talk to us about how the seven stages and five modules apply to your environment."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See governance", href: "/governance" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
