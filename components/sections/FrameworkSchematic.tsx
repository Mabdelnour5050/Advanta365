import { deliveryStages } from "@/lib/content";

const ink = { stroke: "var(--ink)" };
const rule = { stroke: "var(--rule-strong)" };
const redline = { stroke: "var(--redline)" };
const monoFont = { fontFamily: "var(--font-mono)" };
const sansFont = { fontFamily: "var(--font-sans)" };

/**
 * Vertical delivery schematic: the spine carries each stage; the redline rail
 * runs the full height with a tick into every node — "governance embedded at
 * every stage, by design." Decorative-but-meaningful; described for AT.
 */
export default function FrameworkSchematic() {
  const top = 86;
  const step = 64;
  const spineX = 60;
  const railX = 92;
  const labelX = 120;
  const stages = deliveryStages;
  const bottom = top + step * (stages.length - 1);

  return (
    <figure className="draft-panel bg-paper-panel p-5 md:p-6">
      <figcaption className="mb-4 flex items-center justify-between border-b border-rule pb-3">
        <span className="mono-label">Fig. 01 — Delivery model</span>
        <span className="mono-label text-primary">Governed</span>
      </figcaption>
      <svg
        viewBox="0 0 440 480"
        width="100%"
        role="img"
        aria-label="ADVANTA365 delivery model: a six-stage spine — Vision, Strategy, Planning, Enablement, Rollout, Sustainment — with a governance rail connected to every stage."
        style={{ display: "block" }}
      >
        {/* spine */}
        <line x1={spineX} y1={top - 24} x2={spineX} y2={bottom + 24} style={ink} strokeWidth={1.5} />
        {/* governance rail (redline) — runs past both ends to read as continuous */}
        <line x1={railX} y1={top - 40} x2={railX} y2={bottom + 40} style={redline} strokeWidth={2} />

        {/* governance rail label */}
        <text
          x={railX + 10}
          y={top - 46}
          style={{ ...monoFont, fill: "var(--redline-ink)" }}
          fontSize="11"
          letterSpacing="2"
        >
          GOVERNANCE
        </text>

        {stages.map((stage, i) => {
          const y = top + i * step;
          return (
            <g key={i}>
              {/* tick linking spine node to governance rail */}
              <line x1={spineX} y1={y} x2={railX} y2={y} style={redline} strokeWidth={1.5} />
              {/* node */}
              <rect
                x={spineX - 6}
                y={y - 6}
                width={12}
                height={12}
                style={{ fill: "var(--paper-panel)", stroke: "var(--ink)" }}
                strokeWidth={1.5}
              />
              {/* connector rule to label */}
              <line x1={railX} y1={y} x2={labelX - 12} y2={y} style={rule} strokeWidth={1} />
              {/* number */}
              <text x={labelX} y={y - 6} style={{ ...monoFont, fill: "var(--redline-ink)" }} fontSize="12">
                {stage.number}
              </text>
              {/* stage name */}
              <text
                x={labelX}
                y={y + 12}
                style={{ ...sansFont, fill: "var(--ink)" }}
                fontSize="19"
                fontWeight="600"
              >
                {stage.label}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
