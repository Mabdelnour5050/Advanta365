import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Sheet index, e.g. "02" — rendered in the structural rule above the title. */
  index?: string;
  /** Short drafting label sitting beside the index. Used sparingly. */
  label?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  size?: "display" | "section";
  cta?: { label: string; href: string; variant?: "default" | "outline" };
  className?: string;
  maxLede?: string;
  /** Tone-aware text when placed on an ink/dark surface. */
  onDark?: boolean;
}

export default function SectionHeader({
  index,
  label,
  title,
  lede,
  align = "left",
  size = "section",
  cta,
  className,
  maxLede = "60ch",
  onDark = false,
}: SectionHeaderProps) {
  const isCentered = align === "center";
  return (
    <MotionReveal
      from={isCentered ? "up" : "left"}
      className={cn(
        "flex flex-col",
        isCentered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {(index || label) && (
        <div
          className={cn(
            "mb-5 flex w-full items-center gap-4 border-t pt-3",
            onDark ? "border-[color-mix(in_oklab,white_22%,transparent)]" : "border-rule-strong",
            isCentered ? "justify-center" : "justify-start",
          )}
        >
          {index && (
            <span className="figure-index text-sm" style={onDark ? { color: "var(--paper)" } : undefined}>
              {index}
            </span>
          )}
          {label && (
            <span className={cn("mono-label", onDark && "text-[color-mix(in_oklab,white_70%,transparent)]")}>
              {label}
            </span>
          )}
        </div>
      )}

      <h2
        className={cn(
          size === "display" ? "h-display" : "h-section",
          onDark ? "text-[var(--paper)]" : "text-ink",
        )}
      >
        {title}
      </h2>

      {lede && (
        <p
          className={cn("body-lg mt-5", onDark ? "text-[color-mix(in_oklab,white_82%,transparent)]" : "")}
          style={{ maxWidth: maxLede }}
        >
          {lede}
        </p>
      )}

      {cta && (
        <div className="mt-7">
          <Link href={cta.href}>
            <Button size="lg" variant={cta.variant === "outline" ? "outline" : "default"} className="gap-2">
              {cta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </MotionReveal>
  );
}
