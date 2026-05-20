import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

export type CardVariant =
  | "elevated"
  | "outlined"
  | "feature"
  | "numbered"
  | "module"
  | "principle";

export interface GridItem {
  title: ReactNode;
  description?: ReactNode;
  number?: string | number;
  icon?: ReactNode;
  /** Tailwind class string for an item-level color accent (used by module variant top stripe). */
  accent?: string;
  /** Optional list bullets shown under the description (used by feature variant). */
  bullets?: string[];
}

interface CardGridCols {
  base?: 1 | 2;
  sm?: 1 | 2;
  md?: 1 | 2 | 3 | 4;
  lg?: 1 | 2 | 3 | 4 | 5;
  wide?: 1 | 2 | 3 | 4 | 5;
}

interface CardGridProps {
  items: GridItem[];
  variant?: CardVariant;
  cols?: CardGridCols;
  /** ms between successive card reveals. 0 to disable. */
  stagger?: number;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const baseCols = {
  1: "grid-cols-1",
  2: "grid-cols-2",
} as const;
const smCols = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2" } as const;
const mdCols = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
} as const;
const lgCols = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
} as const;
const wideCols = {
  1: "wide:grid-cols-1",
  2: "wide:grid-cols-2",
  3: "wide:grid-cols-3",
  4: "wide:grid-cols-4",
  5: "wide:grid-cols-5",
} as const;

const gapClass = {
  sm: "gap-3 md:gap-4 lg:gap-5",
  md: "gap-4 md:gap-6 lg:gap-8",
  lg: "gap-6 md:gap-8 lg:gap-10 wide:gap-12",
} as const;

function CardBody({ item, variant }: { item: GridItem; variant: CardVariant }) {
  const titleEl = (
    <h3 className={cn("h-card", variant === "principle" ? "text-primary" : "text-foreground")}>
      {item.title}
    </h3>
  );
  const desc = item.description ? (
    <p className="body-base text-muted-foreground">{item.description}</p>
  ) : null;
  const bullets = item.bullets?.length ? (
    <ul className="mt-2 space-y-2 text-muted-foreground body-base">
      {item.bullets.map((b, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  ) : null;

  if (variant === "numbered") {
    return (
      <>
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
            {item.number ?? ""}
          </div>
          {titleEl}
        </div>
        {desc ? <div className="mt-3">{desc}</div> : null}
        {bullets}
      </>
    );
  }

  if (variant === "module") {
    return (
      <>
        {/* colored top stripe is applied at the card level via inline accent */}
        <div className="flex items-start gap-3">
          <div
            className={cn(
              "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm text-sm font-bold text-white shadow-sm",
              item.accent ?? "bg-gradient-to-br from-primary to-accent",
            )}
          >
            {item.number ?? item.icon ?? ""}
          </div>
          {titleEl}
        </div>
        {desc ? <div className="mt-3">{desc}</div> : null}
        {bullets}
      </>
    );
  }

  if (variant === "feature" || variant === "principle") {
    return (
      <>
        {item.icon ? <div className="text-accent">{item.icon}</div> : null}
        {titleEl}
        {desc}
        {bullets}
      </>
    );
  }

  return (
    <>
      {item.icon ? <div className="text-accent">{item.icon}</div> : null}
      {titleEl}
      {desc}
      {bullets}
    </>
  );
}

function cardClass(variant: CardVariant) {
  switch (variant) {
    case "elevated":
      return "card-elevated p-6 md:p-7 lg:p-8";
    case "outlined":
      return "card-outlined p-6 md:p-7 lg:p-8";
    case "feature":
      return "card-feature p-6 md:p-7 lg:p-8 space-y-3";
    case "numbered":
      return "card-elevated p-6 md:p-7 lg:p-8";
    case "principle":
      return "card-outlined p-6 md:p-7 lg:p-8 space-y-3";
    case "module":
      return "card-module p-6 md:p-7 lg:p-8";
    default:
      return "card-elevated p-6 md:p-7 lg:p-8";
  }
}

export default function CardGrid({
  items,
  variant = "elevated",
  cols = { base: 1, md: 2, lg: 3 },
  stagger = 60,
  gap = "md",
  className,
}: CardGridProps) {
  const classes = cn(
    "grid",
    baseCols[cols.base ?? 1],
    cols.sm ? smCols[cols.sm] : undefined,
    cols.md ? mdCols[cols.md] : "md:grid-cols-2",
    cols.lg ? lgCols[cols.lg] : "lg:grid-cols-3",
    cols.wide ? wideCols[cols.wide] : undefined,
    gapClass[gap],
    className,
  );

  return (
    <div className={classes}>
      {items.map((item, idx) => (
        <MotionReveal
          key={idx}
          from="up"
          delay={stagger ? idx * stagger : 0}
          className={cardClass(variant)}
        >
          <CardBody item={item} variant={variant} />
        </MotionReveal>
      ))}
    </div>
  );
}
