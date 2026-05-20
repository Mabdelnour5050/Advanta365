import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CardGrid, { type GridItem } from "@/components/sections/CardGrid";
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

const moduleAccents = [
  "bg-gradient-to-br from-[#06B6D4] to-[#0D7377]",
  "bg-gradient-to-br from-[#14B8A6] to-[#0A5F6F]",
  "bg-gradient-to-br from-[#0D7377] to-[#084E5E]",
  "bg-gradient-to-br from-[#0A5F6F] to-[#06B6D4]",
  "bg-gradient-to-br from-[#14B8A6] to-[#06B6D4]",
];

export default function Framework() {
  const stageItems: GridItem[] = deliveryStages.map((stage) => ({
    title: stage.label,
    number: stage.number,
  }));

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
        serviceType:
          "Microsoft 365 Implementation, Adoption and Governance Framework",
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
        eyebrow="The framework"
        title="The ADVANTA365 framework"
        lede="A comprehensive operating model that combines governance, adoption, and sustainment into one repeatable process."
        cta={{ label: "Explore implementation", href: "/contact" }}
        numberStrip={7}
      />

      {/* Delivery stages */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          eyebrow="Seven stages"
          title="Seven-stage delivery model"
          lede="Each stage is repeatable, role-aware, and embeds governance and adoption from day one."
          align="center"
          className="mb-12 md:mb-16 wide:mb-20"
        />
        <div className="relative">
          <span
            aria-hidden
            className="hidden wide:block absolute top-[2.5rem] left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          <CardGrid
            items={stageItems}
            variant="numbered"
            cols={{ base: 1, md: 2, lg: 3, wide: 4 }}
            stagger={60}
            gap="md"
          />
        </div>
      </SectionShell>

      {/* Modules — alternating rows at lg+ */}
      <SectionShell tone="muted">
        <SectionHeader
          eyebrow="The five modules"
          title="Five core modules"
          lede="The working machinery of ADVANTA365 — five connected modules that turn methodology into daily operations."
          align="center"
          className="mb-12 md:mb-16 wide:mb-20"
        />
        <div className="space-y-5 md:space-y-6 lg:space-y-8">
          {modules.map((module, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <MotionReveal
                key={idx}
                from={reversed ? "right" : "left"}
                delay={idx * 60}
                className="card-feature p-6 md:p-8 wide:p-10"
              >
                <div
                  className={
                    "grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-10 items-center " +
                    (reversed ? "lg:[&>*:first-child]:order-2" : "")
                  }
                >
                  <div className="lg:col-span-3 flex items-center gap-4">
                    <div
                      className={
                        "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm text-white font-bold shadow-sm " +
                        moduleAccents[idx]
                      }
                    >
                      {idx + 1}
                    </div>
                    <span className="eyebrow">Module 0{idx + 1}</span>
                  </div>
                  <div className="lg:col-span-9 space-y-2">
                    <h3 className="h-card text-foreground">{module.title}</h3>
                    <p className="body-base text-muted-foreground max-w-prose">
                      {module.description}
                    </p>
                  </div>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </SectionShell>

      <CTABand
        eyebrow="Get started"
        title="Ready to implement ADVANTA365?"
        lede="Talk to us about how the seven stages and five modules apply to your environment."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See the framework", href: "/governance" }}
        tone="accent"
      />
    </SiteLayout>
  );
}
