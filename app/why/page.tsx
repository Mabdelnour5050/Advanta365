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

export const metadata = { title: "Why ADVANTA365" };

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

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Why ADVANTA365"
        title="Built for enterprise complexity"
        lede="Designed specifically for large, complex, regulated organizations. A framework that combines governance and adoption — and keeps them working after launch."
        cta={{ label: "Start a conversation", href: "/contact" }}
      />

      {/* Problems */}
      <SectionShell tone="default" decoration="grid">
        <SectionHeader
          eyebrow="The problem"
          title="Problems we solve"
          lede="The familiar patterns we see in every M365 program. ADVANTA365 is built to address them — together, not piece by piece."
          align="center"
          className="mb-12 md:mb-16 wide:mb-20"
        />
        <CardGrid
          items={problemItems}
          variant="numbered"
          cols={{ base: 1, md: 2, lg: 3 }}
          stagger={50}
          gap="md"
        />
      </SectionShell>

      {/* Differentiators — featured + grid */}
      <SectionShell tone="accent">
        <SectionHeader
          eyebrow="What's different"
          title="What makes ADVANTA365 different"
          lede="Most solutions tackle one piece. We bring governance, adoption, and sustainment into one operating model."
          align="center"
          className="mb-12 md:mb-16 wide:mb-20"
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-8">
          <MotionReveal
            from="up"
            className="card-callout p-7 md:p-9 wide:p-10 lg:col-span-5 flex flex-col justify-between min-h-[16rem] lg:min-h-full"
          >
            <div className="relative z-10 space-y-4">
              <span className="eyebrow [&]:text-primary-foreground/80">Signature differentiator</span>
              <h3 className="h-section text-primary-foreground">{featuredDiff.title}</h3>
              <p className="body-lg text-primary-foreground/90 max-w-prose">
                {featuredDiff.description}
              </p>
            </div>
            <div className="relative z-10 pt-6">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
                >
                  Talk to us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </MotionReveal>
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

      <CTABand
        eyebrow="Get started"
        title="Ready for an M365 program that actually works?"
        lede="Talk to our team about your organization's adoption and governance challenges."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "Explore the framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
