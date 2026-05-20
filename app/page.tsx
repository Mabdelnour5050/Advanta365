import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import MotionReveal from "@/components/MotionReveal";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CardGrid, { type GridItem } from "@/components/sections/CardGrid";
import CTABand from "@/components/sections/CTABand";
import StatStrip from "@/components/sections/StatStrip";
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

const moduleAccents = [
  "bg-gradient-to-br from-[#06B6D4] to-[#0D7377]",
  "bg-gradient-to-br from-[#14B8A6] to-[#0A5F6F]",
  "bg-gradient-to-br from-[#0D7377] to-[#084E5E]",
  "bg-gradient-to-br from-[#0A5F6F] to-[#06B6D4]",
  "bg-gradient-to-br from-[#14B8A6] to-[#06B6D4]",
];

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

  const moduleItems: GridItem[] = modules.map((m, idx) => ({
    title: m.title,
    description: m.description,
    number: idx + 1,
    accent: moduleAccents[idx],
  }));

  // First differentiator becomes the featured callout; rest become outlined cards
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
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background pt-24 md:pt-28 wide:pt-32">
        {/* Decorative blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute top-10 right-[-6rem] w-[36rem] h-[36rem] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute bottom-[-8rem] left-[-6rem] w-[36rem] h-[36rem] rounded-full bg-primary/15 blur-3xl" />
        </div>
        {/* Subtle dot grid */}
        <div
          aria-hidden
          className="decoration-grid absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(ellipse at 60% 30%, black 40%, transparent 75%)",
          }}
        />

        <div className="container relative z-10 pb-12 md:pb-16 wide:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 wide:gap-20 items-center min-h-[clamp(26rem,62vh,40rem)]">
            {/* Left content */}
            <MotionReveal from="up" className="space-y-6 md:space-y-7">
              <span className="inline-flex items-center gap-2 rounded-sm bg-secondary/80 border border-border px-3 py-1.5 text-xs md:text-sm font-medium text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden />
                {heroContent.subtitle}
              </span>

              <h1 className="h-display text-foreground">
                Make Microsoft 365{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  governed, adopted, and sustainable
                </span>{" "}
                — at enterprise scale.
              </h1>

              <p className="body-lg text-muted-foreground max-w-[55ch]">
                {heroContent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    {heroContent.cta1}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/framework">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border bg-background/60 backdrop-blur-sm hover:bg-secondary"
                  >
                    {heroContent.cta2}
                  </Button>
                </Link>
              </div>
            </MotionReveal>

            {/* Right visual — now shows from md+ */}
            <MotionReveal
              from="right"
              delay={120}
              className="relative aspect-[5/4] md:aspect-[6/5] lg:aspect-auto lg:h-[clamp(22rem,52vh,34rem)] wide:h-[clamp(26rem,55vh,40rem)] rounded-sm overflow-hidden"
            >
              <Image
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/hero-main-W2BZehWshgnFmxuU4eaztg.webp"
                alt="Enterprise Microsoft 365 framework dashboard"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 760px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-border/70 rounded-sm" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ───────────── Stat strip (between hero and delivery flow) ───────────── */}
      <section className="bg-background">
        <div className="container">
          <span aria-hidden className="bleed-divider block" />
          <div className="py-6 md:py-8 wide:py-10">
            <StatStrip items={stats} tone="hero" />
          </div>
          <span aria-hidden className="bleed-divider block" />
        </div>
      </section>

      {/* ───────────── Delivery flow ───────────── */}
      <SectionShell tone="default" decoration="none">
        <SectionHeader
          eyebrow="Delivery model"
          title="Delivery flow"
          lede={deliveryNote}
          align="center"
          size="section"
          className="mb-8 md:mb-10 wide:mb-12"
        />

        {/* Timeline: horizontal at lg+, two-column at md, single column on mobile */}
        <div className="relative">
          {/* Continuous gradient connector — only at lg+ */}
          <span
            aria-hidden
            className="hidden lg:block absolute top-[2.25rem] left-12 right-12 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-3 wide:gap-5">
            {deliveryStages.map((stage, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 70}
                className="card-elevated p-5 md:p-6 text-center bg-card"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-sm bg-gradient-to-br from-primary to-accent text-white text-base font-bold shadow-sm">
                  {stage.number}
                </div>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  {stage.label}
                </p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── What is ADVANTA365 ───────────── */}
      <SectionShell tone="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 wide:gap-24 items-start">
          <MotionReveal from="left" className="space-y-5 md:space-y-6">
            <span className="eyebrow">The framework</span>
            <h2 className="h-section text-foreground">{whatIsSection.title}</h2>
            <h3 className="h-card text-primary">{whatIsSection.subtitle}</h3>
            <p className="body-lg text-muted-foreground">{whatIsSection.description}</p>
            <div className="pt-2">
              <Link href="/framework">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  {whatIsSection.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {whatIsSection.principles.map((principle, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 80}
                className="card-feature p-5 md:p-6 space-y-2"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <h4 className="h-card text-foreground">{principle.title}</h4>
                </div>
                <p className="body-base text-muted-foreground pl-8">{principle.description}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── Why orgs struggle (problems) ───────────── */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          eyebrow="The problem"
          title="Why organizations struggle"
          lede="The familiar problems we hear in every M365 program. Technology adoption fails when organizations focus only on technology — these are the patterns ADVANTA365 is built to solve."
          align="center"
          className="mb-8 md:mb-10 wide:mb-12"
        />
        <CardGrid
          items={problemItems}
          variant="numbered"
          cols={{ base: 1, md: 2, lg: 3 }}
          gap="md"
          stagger={70}
        />
        <MotionReveal from="up" className="text-center mt-10 md:mt-14">
          <Link href="/why">
            <Button variant="outline" className="border-border bg-background hover:bg-secondary gap-2">
              See all nine — and how ADVANTA365 addresses them
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </MotionReveal>
      </SectionShell>

      {/* ───────────── Core principles ───────────── */}
      <SectionShell tone="muted">
        <SectionHeader
          eyebrow="What we believe"
          title="Core principles"
          lede="Seven beliefs that shape every engagement."
          align="center"
          className="mb-8 md:mb-10 wide:mb-12"
        />
        <CardGrid
          items={principleItems}
          variant="principle"
          cols={{ base: 1, md: 2, lg: 3, wide: 4 }}
          gap="md"
          stagger={50}
        />
      </SectionShell>

      {/* ───────────── Modules ───────────── */}
      <SectionShell tone="default">
        <SectionHeader
          eyebrow="The modules"
          title="One framework. Five working modules."
          lede="From governed provisioning to enterprise classification — the modules turn methodology into daily operations."
          align="center"
          className="mb-8 md:mb-10 wide:mb-12"
        />
        <CardGrid
          items={moduleItems}
          variant="module"
          cols={{ base: 1, md: 2, lg: 3, wide: 5 }}
          gap="md"
          stagger={70}
        />
        <MotionReveal from="up" className="text-center mt-10 md:mt-14">
          <Link href="/governance">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Explore modules
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </MotionReveal>
      </SectionShell>

      {/* ───────────── Differentiators (asymmetric: featured + grid) ───────────── */}
      <SectionShell tone="accent">
        <SectionHeader
          eyebrow="What makes us different"
          title="Built for enterprise complexity"
          lede="Designed specifically for large, complex, regulated organizations."
          align="center"
          className="mb-8 md:mb-10 wide:mb-12"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8">
          {/* Featured callout card */}
          <MotionReveal
            from="up"
            className="card-callout p-7 md:p-9 wide:p-10 lg:col-span-5 flex flex-col justify-between min-h-[14rem] md:min-h-[18rem] lg:min-h-full"
          >
            <div className="relative z-10 space-y-4">
              <span className="eyebrow [&]:text-primary-foreground/80">Signature differentiator</span>
              <h3 className="h-section text-primary-foreground">{featuredDiff.title}</h3>
              <p className="body-lg text-primary-foreground/90 max-w-prose">
                {featuredDiff.description}
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <Link href="/why">
                <Button
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
                >
                  Why ADVANTA365
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </MotionReveal>

          {/* Remaining diffs as outlined grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {restDiffItems.map((d, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 60}
                className="card-outlined p-5 md:p-6 space-y-2"
              >
                <h4 className="h-card text-foreground">{d.title}</h4>
                <p className="body-base text-muted-foreground">{d.description}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── Adoption success factors ───────────── */}
      <SectionShell tone="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <MotionReveal from="left" className="lg:col-span-4 space-y-4">
            <span className="eyebrow">When adoption works</span>
            <h2 className="h-section text-foreground">Adoption success factors</h2>
            <p className="body-lg text-muted-foreground">
              The conditions we see in every program that makes Microsoft 365 stick.
            </p>
          </MotionReveal>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {adoptionSuccessFactors.map((factor, idx) => (
              <MotionReveal
                key={idx}
                from="up"
                delay={idx * 50}
                className={
                  "flex items-start gap-4 rounded-sm border border-border/60 bg-card p-4 md:p-5 hover:border-primary/40 transition-colors"
                }
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary text-xs font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="body-base text-foreground">{factor}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ───────────── Final CTA ───────────── */}
      <CTABand
        eyebrow="Get started"
        title="Ready to transform your Microsoft 365 program?"
        lede="Start a conversation with our team about your organization's adoption, governance, and enablement needs."
        primary={{ label: "Start a roadmap conversation", href: "/contact" }}
        secondary={{ label: "Request a readiness review", href: "/contact" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
