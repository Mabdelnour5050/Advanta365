import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type SectionTone = "default" | "muted" | "accent" | "dark";
export type SectionDensity = "tight" | "normal" | "loose";
export type SectionDecoration = "none" | "grid" | "rule";

interface SectionShellProps {
  children: ReactNode;
  tone?: SectionTone;
  density?: SectionDensity;
  decoration?: SectionDecoration;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** When true, render children without the inner .container wrapper. */
  bleed?: boolean;
}

const toneClass: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-secondary text-foreground",
  accent: "bg-background text-foreground",
  dark: "bg-ink text-[var(--paper)]",
};

const densityClass: Record<SectionDensity, string> = {
  tight: "section-y-tight",
  normal: "section-y",
  loose: "section-y-loose",
};

export default function SectionShell({
  children,
  tone = "default",
  density = "normal",
  decoration = "none",
  id,
  className,
  containerClassName,
  bleed = false,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate", toneClass[tone], densityClass[density], className)}
    >
      {decoration === "grid" && (
        <div
          aria-hidden
          className="grid-paper pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{ maskImage: "linear-gradient(to bottom, black, transparent 85%)" }}
        />
      )}
      {decoration === "rule" && (
        <span aria-hidden className="rule-h-strong absolute inset-x-0 top-0" />
      )}
      {bleed ? (
        <div className={cn("relative", containerClassName)}>{children}</div>
      ) : (
        <div className={cn("container relative", containerClassName)}>{children}</div>
      )}
    </section>
  );
}
