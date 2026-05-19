import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import { differentiators, problems } from "@/lib/content";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Why() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Why ADVANTA365
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Built specifically for large, complex, regulated organizations. A framework that combines governance and adoption — and keeps them working after launch.
            </p>
            <Link href="/contact">
              <a>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Start a conversation
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
            Problems We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="card-elevated p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {problem.title}
                  </h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="card-elevated p-6 space-y-3">
                <h3 className="font-semibold text-foreground text-lg">
                  {diff.title}
                </h3>
                <p className="text-muted-foreground">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
