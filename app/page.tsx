import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
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
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 py-12 md:py-20 lg:py-28 xl:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 pr-0 lg:pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-secondary border border-border text-xs md:text-sm">
                <Zap className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                <span className="font-medium text-foreground">
                  {heroContent.subtitle}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
                Make Microsoft 365{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent break-words">
                  governed, adopted, and sustainable
                </span>{" "}
                — at enterprise scale.
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg">
                {heroContent.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    {heroContent.cta1}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/framework">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-secondary"
                  >
                    {heroContent.cta2}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-[500px] lg:h-full hidden lg:block">
              <Image
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663677163857/g8wGKX5v4ST4YMyg6HYL47/hero-main-W2BZehWshgnFmxuU4eaztg.webp"
                alt="Enterprise Microsoft 365 Framework"
                width={1200}
                height={800}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-12 md:mt-16 lg:mt-20 pt-8 md:pt-12 lg:pt-16 border-t border-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-1 md:mb-2">
                  {stat.number}
                </div>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Flow Section */}
      <section className="py-12 md:py-20 lg:py-28 xl:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Delivery Flow
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {deliveryNote}
            </p>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 xl:gap-6">
            {deliveryStages.map((stage, idx) => (
              <div key={idx} className="relative">
                <div className="floating-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {stage.number}
                  </div>
                  <p className="font-semibold text-foreground text-sm md:text-base">
                    {stage.label}
                  </p>
                </div>
                {idx < deliveryStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is ADVANTA365 Section */}
      <section className="py-12 md:py-20 lg:py-28 xl:py-32 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {whatIsSection.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
                {whatIsSection.subtitle}
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {whatIsSection.description}
              </p>
              <Link href="/framework">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  {whatIsSection.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Right - Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-6">
              {whatIsSection.principles.map((principle, idx) => (
                <div
                  key={idx}
                  className="card-elevated p-6 md:p-8 space-y-3"
                >
                  <div className="flex items-start gap-2 md:gap-3">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5 md:mt-1" />
                    <h4 className="font-semibold text-sm md:text-base text-foreground">
                      {principle.title}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-12 md:py-20 lg:py-28 xl:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">
              Why organizations struggle
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              The familiar problems we hear in every M365 program. Technology adoption fails when organizations focus only on technology. These are the patterns ADVANTA365 is built to solve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {problems.map((problem, idx) => (
              <div key={idx} className="card-elevated p-6 md:p-8 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/why">
              <Button variant="outline" className="border-border hover:bg-secondary gap-2">
                See all nine — and how ADVANTA365 addresses them
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Core principles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seven beliefs that shape every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreprinciples.map((principle, idx) => (
              <div key={idx} className="card-elevated p-6 md:p-8 space-y-3">
                <h4 className="font-semibold text-foreground text-lg">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The ADVANTA modules
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              One framework. Five working modules.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From governed provisioning to enterprise classification — the modules turn methodology into daily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
            {modules.map((module, idx) => (
              <div
                key={idx}
                className="floating-card p-6 md:p-8 space-y-3 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                  {module.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/governance">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Explore modules
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What makes us different
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built specifically for large, complex, regulated organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="card-elevated p-6 md:p-8 space-y-3">
                <h4 className="font-semibold text-foreground text-lg">
                  {diff.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/why">
              <Button variant="outline" className="border-border hover:bg-background gap-2">
                Why ADVANTA365
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
              Adoption success factors
            </h2>

            <div className="space-y-4">
              {adoptionSuccessFactors.map((factor, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 md:p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground leading-relaxed">{factor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to transform your Microsoft 365 program?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start a conversation with our team about your organization&apos;s adoption, governance, and enablement needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Start a roadmap conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-border hover:bg-background">
                Request a readiness review
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
