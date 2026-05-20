import Link from "next/link";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import { modules } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Governance" };

export default function Governance() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Governance by Design
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Governance embedded into provisioning, templates, and onboarding — not as an afterthought.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Get started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Our Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {modules.map((module, idx) => (
              <div key={idx} className="floating-card p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-foreground">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
