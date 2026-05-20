import Link from "next/link";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "WOW Program" };

export default function WOW() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              WOW Program
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Structured onboarding workshops that drive adoption and engagement across your organization.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
