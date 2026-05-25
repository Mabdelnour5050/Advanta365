import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

interface PageHeroProps {
  /** Short drafting label, e.g. "Governance". Rendered in the index rule. */
  label?: string;
  title: ReactNode;
  lede?: ReactNode;
  cta?: { label: string; href: string };
  /** Right-side visual content (schematic, register, etc.). */
  visual?: ReactNode;
  /** When provided (and no visual), renders a numbered drawing register. */
  numberStrip?: number;
  className?: string;
}

export default function PageHero({
  label,
  title,
  lede,
  cta,
  visual,
  numberStrip,
  className,
}: PageHeroProps) {
  const hasAside = Boolean(visual) || Boolean(numberStrip);
  return (
    <section className={cn("relative isolate border-b border-rule-strong bg-background", className)}>
      <div
        aria-hidden
        className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent 75%)" }}
      />
      <div className="container pb-14 pt-12 md:pb-20 md:pt-16 wide:pt-20">
        <div
          className={cn(
            "grid items-end gap-10 lg:gap-16",
            hasAside ? "lg:grid-cols-12" : "lg:grid-cols-1",
          )}
        >
          <MotionReveal from="left" className={cn(hasAside ? "lg:col-span-7" : "max-w-3xl")}>
            <div className="mb-6 flex items-center gap-4 border-t border-rule-strong pt-3">
              <span className="figure-index text-sm">A365</span>
              {label && <span className="mono-label">{label}</span>}
            </div>
            <h1 className="h-display text-ink">{title}</h1>
            {lede && <p className="body-lg mt-6 max-w-[58ch]">{lede}</p>}
            {cta && (
              <div className="mt-8">
                <Link href={cta.href}>
                  <Button size="lg" className="gap-2">
                    {cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </MotionReveal>

          {visual ? (
            <MotionReveal from="right" delay={120} className="lg:col-span-5">
              {visual}
            </MotionReveal>
          ) : numberStrip ? (
            <MotionReveal
              from="right"
              delay={120}
              className="hidden border-t border-rule-strong lg:col-span-5 lg:block"
            >
              {Array.from({ length: numberStrip }).map((_, i) => (
                <div key={i} className="flex items-center gap-5 border-b border-rule py-3.5">
                  <span className="figure-index text-base tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden className="h-px flex-1 bg-rule" />
                  <span aria-hidden className="h-1.5 w-1.5 bg-primary" />
                </div>
              ))}
            </MotionReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
