import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CardGrid, { type GridItem } from "@/components/sections/CardGrid";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/MotionReveal";
import { adoptionSuccessFactors, trainingPrinciples } from "@/lib/content";
import { CheckCircle2 } from "lucide-react";
import {
  buildMetadata,
  itemListSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Microsoft 365 Adoption & Enablement",
  description:
    "Structured, role-based adoption that drives real behavioural change and sustained engagement with Microsoft 365 — long after launch day. Built on Prosci / ADKAR, communities of practice, and learning ecosystems.",
  path: "adoption",
  keywords: [
    "Microsoft 365 adoption",
    "M365 enablement",
    "user adoption",
    "Prosci ADKAR",
    "change management",
    "role-based training",
    "communities of practice",
    "site owner enablement",
  ],
});

export default function Adoption() {
  const principleItems: GridItem[] = trainingPrinciples.map((p) => ({
    title: p,
    icon: <CheckCircle2 className="w-5 h-5" />,
  }));

  const adoptionGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "adoption",
        name: "Microsoft 365 Adoption & Enablement",
        description:
          "Structured, role-based adoption methodology for enterprise Microsoft 365 programs.",
        breadcrumb: [
          { name: "Home", path: "" },
          { name: "Adoption", path: "adoption" },
        ],
      }),
      serviceSchema({
        name: "Microsoft 365 Adoption & Enablement",
        serviceType: "Microsoft 365 Adoption, Change Management and Enablement",
        description:
          "Role-based, scenario-driven enablement journeys reinforced over time through workshops, learning portals, and communities of practice.",
        path: "adoption",
      }),
      itemListSchema({
        name: "Training Principles",
        path: "adoption",
        items: trainingPrinciples.map((t) => ({ name: t })),
      }),
      itemListSchema({
        name: "Adoption Success Factors",
        path: "adoption",
        items: adoptionSuccessFactors.map((f) => ({ name: f })),
      }),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-adoption"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(adoptionGraph) }}
      />
      <PageHero
        eyebrow="Adoption & enablement"
        title="Adoption that actually sticks"
        lede="Structured, role-based adoption that drives real behavioral change and sustained engagement — long after launch day."
        cta={{ label: "Start your adoption journey", href: "/contact" }}
      />

      {/* Training principles */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          eyebrow="How we train"
          title="Training principles"
          lede="Six principles that shape every learning experience we design."
          align="center"
          className="mb-8 md:mb-10 wide:mb-12"
        />
        <CardGrid
          items={principleItems}
          variant="outlined"
          cols={{ base: 1, md: 2, lg: 3 }}
          stagger={60}
          gap="md"
        />
      </SectionShell>

      {/* Success factors — alternating row backgrounds */}
      <SectionShell tone="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <MotionReveal from="left" className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
            <span className="eyebrow">Success factors</span>
            <h2 className="h-section text-foreground">When adoption works</h2>
            <p className="body-lg text-muted-foreground">
              The conditions we see in every program that makes Microsoft 365 stick.
            </p>
          </MotionReveal>
          <div className="lg:col-span-8 space-y-3 md:space-y-4">
            {adoptionSuccessFactors.map((factor, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 60}
                className={
                  "flex items-start gap-4 rounded-sm border border-border/60 p-5 md:p-6 transition-colors " +
                  (idx % 2 === 0 ? "bg-card" : "bg-background/60")
                }
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary text-sm font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="body-base text-foreground pt-0.5">{factor}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTABand
        eyebrow="Get in touch"
        title="Build adoption that scales with you."
        lede="Let's talk about your organization's adoption and enablement needs."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Learn the framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
