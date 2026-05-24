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

export default function StatStrip({ items, className }: StatStripProps) {
  return (
    <div
      className={cn(
        "grid divide-y divide-rule sm:divide-x sm:divide-y-0",
        items.length === 3 ? "sm:grid-cols-3" : items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
        className,
      )}
    >
      {items.map((stat, idx) => (
        <MotionReveal
          key={idx}
          from="up"
          delay={idx * 80}
          className="flex items-baseline gap-4 py-5 sm:flex-col sm:items-start sm:gap-3 sm:px-6 sm:py-2 sm:first:pl-0"
        >
          <span className="figure-index text-[clamp(2.25rem,1.4rem+2.6vw,3.25rem)] leading-none">
            {stat.number}
          </span>
          <span className="body-base max-w-[22ch] text-ink-2">{stat.label}</span>
        </MotionReveal>
      ))}
    </div>
  );
}
