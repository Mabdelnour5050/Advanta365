import { Link } from "wouter";
import { ArrowLeft, Compass } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-brand" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container-prose relative grid min-h-[70vh] place-items-center py-24 text-center">
          <div className="max-w-xl">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--brand-50)] text-[var(--brand-700)]">
              <Compass className="h-7 w-7" />
            </div>
            <div className="eyebrow mt-6">404</div>
            <h1 className="mt-4 text-4xl sm:text-5xl">Page not found.</h1>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-500)]">
              The page you're looking for may have moved, been renamed, or simply
              doesn't exist. Let's get you back on track.
            </p>
            <Link href="/" className="btn btn-primary btn-lg mt-8 inline-flex">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
