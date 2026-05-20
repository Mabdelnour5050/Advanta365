import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";

interface StatItem {
  number: string;
  label: string;
}

interface StatStripProps {
  items: StatItem[];
  tone?: "default" | "hero";
  className?: string;
}

export default function StatStrip({ items, tone = "default", className }: StatStripProps) {
  const isHero = tone === "hero";
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6 lg:gap-10",
        items.length === 3 ? "grid-cols-3" : items.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3",
        className,
      )}
    >
      {items.map((stat, idx) => (
        <MotionReveal
          key={idx}
          from="up"
          delay={idx * 80}
          className={cn(
            "flex flex-col items-start gap-1 md:gap-2 px-4 py-5 md:px-6 md:py-7",
            isHero
              ? "border-l-2 border-primary/30"
              : "card-stat px-6 py-7 md:px-8 md:py-9",
          )}
        >
          <span
            className={cn(
              "font-bold tracking-tight leading-none text-primary",
              "text-[clamp(2rem,1.2rem+2.8vw,3.5rem)]",
            )}
          >
            {stat.number}
          </span>
          <span className="body-base text-muted-foreground">{stat.label}</span>
        </MotionReveal>
      ))}
    </div>
  );
}
