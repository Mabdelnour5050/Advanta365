import { cn } from "@/lib/utils";
import MotionReveal from "@/components/MotionReveal";
import type { ReactNode } from "react";

export type CardVariant = "panel" | "ledger";

export interface GridItem {
  title: ReactNode;
  description?: ReactNode;
  number?: string | number;
  icon?: ReactNode;
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
  stagger?: number;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const baseCols = { 1: "grid-cols-1", 2: "grid-cols-2" } as const;
const smCols = { 1: "sm:grid-cols-1", 2: "sm:grid-cols-2" } as const;
const mdCols = {
  1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4",
} as const;
const lgCols = {
  1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5",
} as const;
const wideCols = {
  1: "wide:grid-cols-1", 2: "wide:grid-cols-2", 3: "wide:grid-cols-3", 4: "wide:grid-cols-4", 5: "wide:grid-cols-5",
} as const;

const gapClass = {
  sm: "gap-px",
  md: "gap-5 md:gap-6",
  lg: "gap-6 md:gap-8 wide:gap-10",
} as const;

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((b, i) => (
        <li key={i} className="body-base flex gap-2.5 text-ink-2">
          <span aria-hidden className="mt-[0.7em] h-px w-3 flex-shrink-0 bg-primary" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function PanelCard({ item }: { item: GridItem }) {
  return (
    <div className="draft-panel-hover flex h-full flex-col p-6 md:p-7">
      {item.number != null && (
        <span className="figure-index mb-4 block text-2xl md:text-3xl">{item.number}</span>
      )}
      {item.icon && !item.number && (
        <span className="mb-4 inline-flex h-6 w-6 items-center justify-center text-primary">{item.icon}</span>
      )}
      <h3 className="h-card text-ink">{item.title}</h3>
      {item.description && <p className="body-base mt-3 text-ink-2">{item.description}</p>}
      {item.bullets?.length ? <Bullets items={item.bullets} /> : null}
    </div>
  );
}

function LedgerRow({ item }: { item: GridItem }) {
  return (
    <div className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-rule py-5 transition-colors hover:bg-secondary md:grid-cols-[3.5rem_1fr] md:gap-6 md:py-6">
      <span className="figure-index pt-0.5 text-lg md:text-xl">{item.number ?? ""}</span>
      <div>
        <h3 className="h-card text-ink">{item.title}</h3>
        {item.description && <p className="body-base mt-2 max-w-[68ch] text-ink-2">{item.description}</p>}
        {item.bullets?.length ? <Bullets items={item.bullets} /> : null}
      </div>
    </div>
  );
}

export default function CardGrid({
  items,
  variant = "panel",
  cols = { base: 1, md: 2, lg: 3 },
  stagger = 60,
  gap = "md",
  className,
}: CardGridProps) {
  if (variant === "ledger") {
    return (
      <div className={cn("border-t border-rule-strong", className)}>
        {items.map((item, idx) => (
          <MotionReveal key={idx} from="up" delay={stagger ? idx * stagger : 0}>
            <LedgerRow item={item} />
          </MotionReveal>
        ))}
      </div>
    );
  }

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
        <MotionReveal key={idx} from="up" delay={stagger ? idx * stagger : 0} className="h-full">
          <PanelCard item={item} />
        </MotionReveal>
      ))}
    </div>
  );
}
