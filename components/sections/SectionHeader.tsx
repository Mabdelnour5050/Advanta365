import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  size?: "display" | "section";
  cta?: { label: string; href: string; variant?: "primary" | "outline" };
  className?: string;
  /** Cap the lede width for readability. Default ~62ch. */
  maxLede?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "center",
  size = "section",
  cta,
  className,
  maxLede = "62ch",
}: SectionHeaderProps) {
  const isCentered = align === "center";
  return (
    <MotionReveal
      from={isCentered ? "up" : "left"}
      className={cn(
        "flex flex-col gap-4 md:gap-5",
        isCentered ? "items-center text-center mx-auto" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className={cn(size === "display" ? "h-display" : "h-section", "text-foreground")}>
        {title}
      </h2>
      {lede ? (
        <p
          className={cn("body-lg text-muted-foreground", isCentered ? "" : "")}
          style={{ maxWidth: maxLede }}
        >
          {lede}
        </p>
      ) : null}
      {cta ? (
        <div className={cn("pt-2", isCentered ? "" : "")}>
          <Link href={cta.href}>
            <Button
              size="lg"
              variant={cta.variant === "outline" ? "outline" : "default"}
              className={cn(
                "gap-2",
                cta.variant === "outline"
                  ? "border-border hover:bg-secondary"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground",
              )}
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      ) : null}
    </MotionReveal>
  );
}
