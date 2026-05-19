import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import { deliveryStages, modules } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Framework() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The ADVANTA365 Framework
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive operating model that combines governance, adoption, and sustainment into one repeatable process.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Explore implementation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Delivery Stages */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Seven-Stage Delivery Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryStages.map((stage, idx) => (
              <div key={idx} className="floating-card p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mb-4">
                  {stage.number}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {stage.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Deep Dive */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Five Core Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, idx) => (
              <div key={idx} className="card-elevated p-8 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {module.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to implement ADVANTA365?
          </h2>
          <Link href="/contact">
            <a>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
