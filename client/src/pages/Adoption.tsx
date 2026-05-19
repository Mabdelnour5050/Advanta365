import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import { adoptionSuccessFactors, trainingPrinciples } from "@/lib/content";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Adoption() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Adoption & Enablement
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Structured, role-based adoption that drives real behavioral change and sustained engagement.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Start your adoption journey
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Training Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrinciples.map((principle, idx) => (
              <div key={idx} className="card-elevated p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="font-semibold text-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Success Factors
          </h2>
          <div className="space-y-4 max-w-3xl">
            {adoptionSuccessFactors.map((factor, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 rounded-lg border border-border hover:border-primary/50 hover:bg-background transition-all">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
