import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

interface CTABandProps {
  label?: string;
  title: ReactNode;
  lede?: ReactNode;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "accent" | "dark";
  className?: string;
}

export default function CTABand({
  label,
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
        "section-y",
        isDark ? "bg-ink text-[var(--paper)]" : "border-y border-rule-strong bg-secondary text-foreground",
        className,
      )}
    >
      <div className="container">
        <MotionReveal
          from="up"
          className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
        >
          <div className="max-w-2xl">
            {label && (
              <div
                className={cn(
                  "mb-5 flex items-center gap-4 border-t pt-3",
                  isDark ? "border-[color-mix(in_oklab,white_24%,transparent)]" : "border-rule-strong",
                )}
              >
                <span aria-hidden className="h-2 w-2 bg-primary" />
                <span
                  className={cn("mono-label", isDark && "text-[color-mix(in_oklab,white_70%,transparent)]")}
                >
                  {label}
                </span>
              </div>
            )}
            <h2 className={cn("h-section", isDark ? "text-[var(--paper)]" : "text-ink")}>{title}</h2>
            {lede && (
              <p
                className={cn(
                  "body-lg mt-5",
                  isDark ? "text-[color-mix(in_oklab,white_82%,transparent)]" : "",
                )}
              >
                {lede}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-shrink-0">
            <Link href={primary.href}>
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                {primary.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            {secondary && (
              <Link href={secondary.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "w-full sm:w-auto",
                    isDark &&
                      "border-[color-mix(in_oklab,white_45%,transparent)] text-[var(--paper)] hover:bg-[var(--paper)] hover:text-ink",
                  )}
                >
                  {secondary.label}
                </Button>
              </Link>
            )}
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
