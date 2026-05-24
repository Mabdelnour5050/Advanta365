import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CardGrid, { type GridItem } from "@/components/sections/CardGrid";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/MotionReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { differentiators, problems } from "@/lib/content";
import {
  buildMetadata,
  faqSchema,
  itemListSchema,
  jsonLd,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Why ADVANTA365 — Built for Enterprise Complexity",
  description:
    "Nine M365 problems we solve and eight reasons ADVANTA365 fits large, complex, regulated organizations. Governance and adoption together — not as separate workstreams.",
  path: "why",
  keywords: [
    "why Microsoft 365 fails",
    "Microsoft 365 sprawl",
    "SharePoint chaos",
    "M365 adoption failure",
    "regulated organizations",
    "enterprise complexity",
    "Microsoft 365 ownership",
  ],
});

export default function Why() {
  const problemItems: GridItem[] = problems.map((p, idx) => ({
    title: p.title,
    description: p.description,
    number: String(idx + 1).padStart(2, "0"),
  }));

  const [featuredDiff, ...restDiffs] = differentiators;
  const restDiffItems: GridItem[] = restDiffs.map((d) => ({
    title: d.title,
    description: d.description,
  }));

  const whyGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "why",
        name: "Why ADVANTA365",
        description:
          "Built specifically for large, complex, regulated organizations — combining governance and adoption into one operating model.",
        breadcrumb: [
          { name: "Home", path: "" },
          { name: "Why ADVANTA365", path: "why" },
        ],
      }),
      itemListSchema({
        name: "Problems ADVANTA365 Solves",
        path: "why",
        items: problems.map((p) => ({ name: p.title, description: p.description })),
      }),
      itemListSchema({
        name: "ADVANTA365 Differentiators",
        path: "why",
        items: differentiators.map((d) => ({ name: d.title, description: d.description })),
      }),
      faqSchema(
        problems.map((p) => ({
          question: `How does ADVANTA365 address ${p.title.toLowerCase()}?`,
          answer: `${p.description} ADVANTA365 addresses this through governance-by-design, role-based enablement, and sustained reinforcement embedded into provisioning and onboarding.`,
        })),
      ),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-why"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(whyGraph) }}
      />
      <PageHero
        label="Why ADVANTA365"
        title="Built for enterprise complexity"
        lede="Designed specifically for large, complex, regulated organizations. A framework that combines governance and adoption, and keeps them working after launch."
        cta={{ label: "Start a conversation", href: "/contact" }}
      />

      {/* Problems */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          index="01"
          label="The problem"
          title="Nine problems we solve"
          lede="The familiar patterns we see in every M365 program. ADVANTA365 is built to address them together, not piece by piece."
          className="mb-10 md:mb-12"
        />
        <CardGrid items={problemItems} variant="ledger" stagger={45} />
      </SectionShell>

      {/* Differentiators */}
      <SectionShell tone="muted">
        <SectionHeader
          index="02"
          label="What's different"
          title="What makes ADVANTA365 different"
          lede="Most solutions tackle one piece. We bring governance, adoption, and sustainment into one operating model."
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <MotionReveal
            from="up"
            className="ink-plate flex flex-col justify-between gap-8 p-8 md:p-10 lg:col-span-5"
          >
            <div>
              <div className="mb-5 flex items-center gap-3 border-t border-[color-mix(in_oklab,white_24%,transparent)] pt-3">
                <span aria-hidden className="h-2 w-2 bg-primary" />
                <span className="mono-label text-[color-mix(in_oklab,white_70%,transparent)]">
                  Signature differentiator
                </span>
              </div>
              <h3 className="h-section text-[var(--paper)]">{featuredDiff.title}</h3>
              <p className="body-lg mt-4 text-[color-mix(in_oklab,white_82%,transparent)]">
                {featuredDiff.description}
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="outline"
                className="gap-2 border-[color-mix(in_oklab,white_45%,transparent)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-ink"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </MotionReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {restDiffItems.map((d, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 60}
                className="draft-panel-hover bg-background p-6"
              >
                <h4 className="h-card text-ink">{d.title}</h4>
                <p className="body-base mt-2 text-ink-2">{d.description}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      <CTABand
        label="Get started"
        title="Ready for an M365 program that actually works?"
        lede="Talk to our team about your organization's adoption and governance challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Explore the framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
