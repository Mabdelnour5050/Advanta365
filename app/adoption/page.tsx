import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import MotionReveal from "@/components/MotionReveal";
import { adoptionSuccessFactors, trainingPrinciples } from "@/lib/content";
import {
  buildMetadata,
  itemListSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import CTABand from "@/components/sections/CTABand";

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
        label="Adoption & enablement"
        title="Adoption that actually sticks"
        lede="Structured, role-based adoption that drives real behavioral change and sustained engagement, long after launch day."
        cta={{ label: "Start your adoption journey", href: "/contact" }}
      />

      {/* Training principles */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          index="01"
          label="How we train"
          title="Training principles"
          lede="Six principles that shape every learning experience we design."
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {trainingPrinciples.map((principle, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 60}
              className="flex items-start gap-4 border-t-2 border-ink bg-background py-6 pr-5"
            >
              <span className="figure-index text-lg">{String(idx + 1).padStart(2, "0")}</span>
              <span className="h-card text-ink">{principle}</span>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      {/* Success factors */}
      <SectionShell tone="muted">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionReveal from="left" className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-4 border-t border-rule-strong pt-3">
              <span className="figure-index text-sm">02</span>
              <span className="mono-label">Success factors</span>
            </div>
            <h2 className="h-section text-ink">When adoption works</h2>
            <p className="body-lg mt-5">
              The conditions we see in every program that makes Microsoft 365 stick.
            </p>
          </MotionReveal>

          <div className="border-t-2 border-ink lg:col-span-8">
            {adoptionSuccessFactors.map((factor, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 50}
                className="flex items-baseline gap-5 border-b border-rule py-5 transition-colors hover:bg-background"
              >
                <span className="figure-index tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                <p className="body-base text-ink">{factor}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTABand
        label="Get in touch"
        title="Build adoption that scales with you."
        lede="Let's talk about your organization's adoption and enablement needs."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Learn the framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
