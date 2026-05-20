import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

interface CTABandProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "accent" | "dark";
  className?: string;
}

export default function CTABand({
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  tone = "dark",
  className,
}: CTABandProps) {
  const isDark = tone === "dark";
  return (
    <section
      className={cn(
        "relative overflow-hidden section-y",
        isDark
          ? "bg-primary text-primary-foreground"
          : "bg-gradient-to-br from-primary/10 via-background to-accent/10 text-foreground border-y border-border",
        className,
      )}
    >
      {isDark ? (
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 w-[36rem] h-[36rem] rounded-full bg-white/5 blur-3xl" />
        </div>
      ) : null}

      <div className="container relative z-10">
        <MotionReveal
          from="up"
          className="flex flex-col items-start gap-5 md:gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="max-w-3xl space-y-3 md:space-y-4">
            {eyebrow ? (
              <span
                className={cn(
                  "eyebrow",
                  isDark ? "[&]:text-primary-foreground/70" : "[&]:text-primary",
                )}
              >
                {eyebrow}
              </span>
            ) : null}
            <h2 className={cn("h-section", isDark ? "text-primary-foreground" : "text-foreground")}>
              {title}
            </h2>
            {lede ? (
              <p
                className={cn(
                  "body-lg",
                  isDark ? "text-primary-foreground/85" : "text-muted-foreground",
                )}
              >
                {lede}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:flex-shrink-0">
            <Link href={primary.href}>
              <Button
                size="lg"
                className={cn(
                  "gap-2",
                  isDark
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground",
                )}
              >
                {primary.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            {secondary ? (
              <Link href={secondary.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    isDark
                      ? "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                      : "border-border hover:bg-secondary",
                  )}
                >
                  {secondary.label}
                </Button>
              </Link>
            ) : null}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
