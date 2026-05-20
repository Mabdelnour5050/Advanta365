import Link from "next/link";
import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/SiteLayout";
import { microsoft365Focus } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Microsoft 365" };

export default function Microsoft365() {
  return (
    <SiteLayout>
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Microsoft 365 Focus
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Built specifically for SharePoint Online, Microsoft Teams, OneDrive, and the broader Microsoft 365 ecosystem.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Explore our approach
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microsoft365Focus.map((platform, idx) => (
              <div key={idx} className="card-elevated p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {platform.role}
                  </p>
                </div>
                <div className="space-y-3">
                  {platform.themes.map((theme, themeIdx) => (
                    <div key={themeIdx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{theme}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
