import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type SectionTone = "default" | "muted" | "accent" | "dark";
export type SectionDensity = "tight" | "normal" | "loose";
export type SectionDecoration = "none" | "blobs" | "grid" | "rule";

interface SectionShellProps {
  children: ReactNode;
  tone?: SectionTone;
  density?: SectionDensity;
  decoration?: SectionDecoration;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** When true, render children without the inner .container wrapper (use for full-bleed visuals). */
  bleed?: boolean;
}

const toneClass: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-secondary/50 text-foreground",
  accent: "bg-gradient-to-br from-primary/5 via-background to-accent/5 text-foreground",
  dark: "bg-primary text-primary-foreground",
};

const densityClass: Record<SectionDensity, string> = {
  tight: "section-y-tight",
  normal: "section-y",
  loose: "section-y-loose",
};

function Decoration({ kind, tone }: { kind: SectionDecoration; tone: SectionTone }) {
  if (kind === "none") return null;
  if (kind === "rule") {
    return (
      <span
        aria-hidden
        className="bleed-divider absolute inset-x-0 top-0"
      />
    );
  }
  if (kind === "grid") {
    return (
      <div
        aria-hidden
        className={cn(
          "decoration-grid absolute inset-0 pointer-events-none",
          tone === "dark" ? "opacity-[0.08]" : "opacity-[0.4]",
        )}
        style={{ maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)" }}
      />
    );
  }
  // blobs
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-16 -right-12 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}

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
      className={cn("relative overflow-hidden", toneClass[tone], densityClass[density], className)}
    >
      <Decoration kind={decoration} tone={tone} />
      {bleed ? (
        <div className={cn("relative z-10", containerClassName)}>{children}</div>
      ) : (
        <div className={cn("container relative z-10", containerClassName)}>{children}</div>
      )}
    </section>
  );
}
