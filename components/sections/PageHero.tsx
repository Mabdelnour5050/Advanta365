import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  cta?: { label: string; href: string };
  /** Right-side visual content (decorative numbers, image, etc.). */
  visual?: ReactNode;
  /** When provided, render decorative side strip with this count of numbered ticks. */
  numberStrip?: number;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  lede,
  cta,
  visual,
  numberStrip,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-secondary via-background to-background pt-24 md:pt-28 wide:pt-32",
        className,
      )}
    >
      {/* Subtle decorative blobs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-24 right-[-8rem] w-[30rem] h-[30rem] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 left-[-8rem] w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-3xl" />
      </div>
      {/* Dot grid */}
      <div
        aria-hidden
        className="decoration-grid absolute inset-0 opacity-[0.22] pointer-events-none"
        style={{ maskImage: "radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)" }}
      />

      <div className="container relative z-10 section-y">
        <div
          className={cn(
            "grid gap-10 md:gap-12 lg:gap-16 wide:gap-20 items-center",
            visual || numberStrip ? "grid-cols-1 lg:grid-cols-12" : "grid-cols-1",
          )}
        >
          <MotionReveal
            from="up"
            className={cn(
              "space-y-5 md:space-y-6",
              visual || numberStrip ? "lg:col-span-7" : "max-w-[64ch]",
            )}
          >
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h1 className="h-display text-foreground">{title}</h1>
            {lede ? <p className="body-lg text-muted-foreground max-w-[58ch]">{lede}</p> : null}
            {cta ? (
              <div className="pt-2">
                <Link href={cta.href}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    {cta.label}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ) : null}
          </MotionReveal>

          {visual ? (
            <MotionReveal from="right" delay={120} className="lg:col-span-5">
              {visual}
            </MotionReveal>
          ) : numberStrip ? (
            <MotionReveal
              from="right"
              delay={120}
              className="hidden lg:flex lg:col-span-5 flex-col gap-3 wide:gap-4"
            >
              {Array.from({ length: numberStrip }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-3 rounded-sm border border-border/60 bg-card/60 backdrop-blur-sm"
                  style={{ marginLeft: `${i * 0.75}rem` }}
                >
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                </div>
              ))}
            </MotionReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
