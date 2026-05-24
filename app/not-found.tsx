import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse the ADVANTA365 framework, modules, and adoption approach from the home page.",
  path: "404",
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-screen w-full items-center bg-background">
      <div
        aria-hidden
        className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{ maskImage: "radial-gradient(ellipse at 30% 40%, black, transparent 70%)" }}
      />
      <div className="container">
        <div className="mb-6 flex items-center gap-4 border-t border-rule-strong pt-3">
          <span className="figure-index text-sm">A365</span>
          <span className="mono-label">Sheet not found</span>
        </div>
        <p className="figure-index text-[clamp(5rem,8rem,12rem)] leading-none">404</p>
        <h1 className="h-section mt-4 text-ink">This page doesn&apos;t exist</h1>
        <p className="body-lg mt-4 max-w-[48ch]">
          The page you are looking for may have been moved or deleted. Head back to the home page to
          explore the framework, modules, and adoption approach.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button size="lg" className="gap-2">
              Go home
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
