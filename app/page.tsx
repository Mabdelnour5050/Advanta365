import Link from "next/link";
import Script from "next/script";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import MotionReveal from "@/components/MotionReveal";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CardGrid, { type GridItem } from "@/components/sections/CardGrid";
import CTABand from "@/components/sections/CTABand";
import StatStrip from "@/components/sections/StatStrip";
import FrameworkSchematic from "@/components/sections/FrameworkSchematic";
import {
  adoptionSuccessFactors,
  coreprinciples,
  deliveryNote,
  deliveryStages,
  differentiators,
  heroContent,
  modules,
  problems,
  stats,
  whatIsSection,
} from "@/lib/content";
import {
  buildMetadata,
  itemListSchema,
  jsonLd,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ADVANTA365 — Enterprise Microsoft 365 Adoption, Governance & Rollout",
  description:
    "The enterprise Microsoft 365 framework that combines governance, adoption, change management, and structured rollouts into one repeatable operating model — built for large, complex, regulated organizations.",
  path: "",
  keywords: [
    "M365 framework",
    "governance by design",
    "structured rollout",
    "role-based enablement",
    "site owner training",
    "SharePoint adoption framework",
  ],
});

export default function Home() {
  const problemItems: GridItem[] = problems.slice(0, 6).map((p, idx) => ({
    title: p.title,
    description: p.description,
    number: String(idx + 1).padStart(2, "0"),
  }));

  const principleItems: GridItem[] = coreprinciples.map((p) => ({
    title: p.title,
    description: p.description,
  }));

  const [featuredDiff, ...restDiffs] = differentiators;
  const restDiffItems: GridItem[] = restDiffs.map((d) => ({
    title: d.title,
    description: d.description,
  }));

  const homeGraph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "",
        name: "ADVANTA365 — Enterprise Microsoft 365 Adoption, Governance & Rollout",
        description:
          "Enterprise Microsoft 365 framework combining governance, adoption, change management, and structured rollouts into one repeatable operating model.",
      }),
      serviceSchema({
        name: "ADVANTA365 Framework",
        serviceType:
          "Microsoft 365 Adoption, Governance, Implementation and Enablement Framework",
        description:
          "A comprehensive operating model that combines governance, adoption, change management, and structured rollouts for SharePoint Online, Microsoft Teams, OneDrive, and the broader Microsoft 365 ecosystem.",
        path: "/",
      }),
      itemListSchema({
        name: "ADVANTA Modules",
        path: "/",
        items: modules.map((m) => ({ name: m.title, description: m.description })),
      }),
      itemListSchema({
        name: "ADVANTA365 Delivery Stages",
        path: "/",
        items: deliveryStages.map((s) => ({ name: s.label })),
      }),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-home"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeGraph) }}
      />

      {/* ───────────── Hero ───────────── */}
      <section className="relative isolate border-b border-rule-strong bg-background">
        <div
          aria-hidden
          className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-50"
          style={{ maskImage: "linear-gradient(to bottom, black, transparent 80%)" }}
        />
        <div className="container grid items-center gap-12 pb-16 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-16 wide:pt-20">
          <MotionReveal from="left" className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4 border-t border-rule-strong pt-3">
              <span className="figure-index text-sm">A365</span>
              <span className="mono-label">{heroContent.subtitle}</span>
            </div>
            <h1 className="h-display text-ink">
              Make Microsoft 365{" "}
              <span className="text-primary">governed, adopted, and sustainable</span> at enterprise
              scale.
            </h1>
            <p className="body-lg mt-6 max-w-[58ch]">{heroContent.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
                  {heroContent.cta1}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/framework">
                <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto">
                  {heroContent.cta2}
                </Button>
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal from="right" delay={140} className="lg:col-span-5">
            <FrameworkSchematic />
          </MotionReveal>
        </div>
      </section>

      {/* ───────────── Stat strip ───────────── */}
      <section className="border-b border-rule-strong bg-background">
        <div className="container py-8 md:py-10">
          <StatStrip items={stats} />
        </div>
      </section>

      {/* ───────────── Delivery flow ───────────── */}
      <SectionShell tone="default">
        <SectionHeader
          index="01"
          label="Delivery model"
          title="A seven-stage delivery flow"
          lede={deliveryNote}
          maxLede="52ch"
          className="mb-10 md:mb-14"
        />
        <div className="relative border-t border-rule-strong pt-8">
          <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6">
            {deliveryStages.map((stage, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 70}
                className="flex flex-col gap-3 border-t-2 border-ink bg-background py-5 pr-4"
              >
                <span className="figure-index text-2xl">{stage.number}</span>
                <span className="h-card text-ink">{stage.label}</span>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── What is ADVANTA365 ───────────── */}
      <SectionShell tone="muted">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionReveal from="left" className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-4 border-t border-rule-strong pt-3">
              <span className="figure-index text-sm">02</span>
              <span className="mono-label">The framework</span>
            </div>
            <h2 className="h-section text-ink">{whatIsSection.title}</h2>
            <p className="mt-4 font-display text-xl text-primary md:text-2xl">{whatIsSection.subtitle}</p>
            <p className="body-lg mt-5">{whatIsSection.description}</p>
            <div className="mt-7">
              <Link href="/framework">
                <Button className="gap-2">
                  {whatIsSection.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {whatIsSection.principles.map((principle, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 80}
                className="draft-panel-hover flex flex-col bg-background p-6"
              >
                <span className="figure-index mb-3 text-lg">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="h-card text-ink">{principle.title}</h3>
                <p className="body-base mt-2 text-ink-2">{principle.description}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── Why organizations struggle ───────────── */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          index="03"
          label="The problem"
          title="Why organizations struggle"
          lede="The familiar problems we hear in every Microsoft 365 program. Adoption fails when organizations focus only on technology. These are the patterns ADVANTA365 is built to solve."
          className="mb-10 md:mb-12"
        />
        <CardGrid items={problemItems} variant="ledger" stagger={60} />
        <MotionReveal from="up" className="mt-10">
          <Link href="/why" className="link inline-flex items-center gap-2 font-medium text-ink">
            See all nine, and how ADVANTA365 addresses them
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </Link>
        </MotionReveal>
      </SectionShell>

      {/* ───────────── Core principles ───────────── */}
      <SectionShell tone="muted">
        <SectionHeader
          index="04"
          label="What we believe"
          title="Seven principles"
          lede="The beliefs that shape every engagement."
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 wide:grid-cols-4">
          {principleItems.map((item, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 50}
              className="flex flex-col border-t-2 border-ink bg-background p-6"
            >
              <span className="figure-index mb-3 text-sm">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="h-card text-ink">{item.title}</h3>
              <p className="body-base mt-2 text-ink-2">{item.description}</p>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      {/* ───────────── Modules ───────────── */}
      <SectionShell tone="default">
        <SectionHeader
          index="05"
          label="The modules"
          title="One framework. Five working modules."
          lede="From governed provisioning to enterprise classification, the modules turn methodology into daily operations."
          className="mb-10 md:mb-12"
        />
        <div className="border-t-2 border-ink">
          {modules.map((module, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 60}
              className="grid grid-cols-1 gap-4 border-b border-rule py-7 transition-colors hover:bg-secondary md:grid-cols-[8rem_1fr] md:gap-10"
            >
              <span className="figure-index text-base">M0{idx + 1}</span>
              <div className="max-w-[70ch]">
                <h3 className="h-card text-ink">{module.title}</h3>
                <p className="body-base mt-2 text-ink-2">{module.description}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
        <MotionReveal from="up" className="mt-10">
          <Link href="/governance">
            <Button className="gap-2">
              Explore modules
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </MotionReveal>
      </SectionShell>

      {/* ───────────── Differentiators ───────────── */}
      <SectionShell tone="muted">
        <SectionHeader
          index="06"
          label="What makes us different"
          title="Built for enterprise complexity"
          lede="Designed specifically for large, complex, regulated organizations."
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
            <Link href="/why">
              <Button
                variant="outline"
                className="gap-2 border-[color-mix(in_oklab,white_45%,transparent)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-ink"
              >
                Why ADVANTA365
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

      {/* ───────────── Adoption success factors ───────────── */}
      <SectionShell tone="default">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionReveal from="left" className="lg:col-span-4">
            <div className="mb-5 flex items-center gap-4 border-t border-rule-strong pt-3">
              <span className="figure-index text-sm">07</span>
              <span className="mono-label">When adoption works</span>
            </div>
            <h2 className="h-section text-ink">Adoption success factors</h2>
            <p className="body-lg mt-5">
              The conditions we see in every program that makes Microsoft 365 stick.
            </p>
          </MotionReveal>

          <div className="border-t border-rule-strong lg:col-span-8">
            {adoptionSuccessFactors.map((factor, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 50}
                className="flex items-baseline gap-5 border-b border-rule py-4"
              >
                <span className="figure-index tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
                <p className="body-base text-ink">{factor}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── Final CTA ───────────── */}
      <CTABand
        label="Get started"
        title="Ready to transform your Microsoft 365 program?"
        lede="Start a conversation with our team about your organization's adoption, governance, and enablement needs."
        primary={{ label: "Start a roadmap conversation", href: "/contact" }}
        secondary={{ label: "Request a readiness review", href: "/contact" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
