import { Boxes, CheckCircle2, Compass, GraduationCap, Network, ShieldCheck, Workflow } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { modules } from "@/lib/content";

const moduleIcons = [Workflow, Boxes, Compass, Network, GraduationCap];

const governanceTouchpoints = [
  "Templates",
  "Provisioning",
  "Metadata",
  "Naming standards",
  "Permissions models",
  "Site requests",
  "Workspace requests",
  "Approval flows",
];

const selfServiceCapabilities = [
  "Request sites",
  "Request Teams",
  "Request repositories",
  "Select approved templates",
  "Apply metadata",
  "Configure workspaces",
];

const selfServiceGuardrails = [
  "Standardized guardrails",
  "Approved governance",
  "Embedded controls",
  "Managed lifecycle rules",
];

export default function Governance() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Governance"
        title={<>Governance by design — <span className="text-gradient">visible, practical, embedded</span>.</>}
        description="In ADVANTA365, governance is not a policy document — it lives inside provisioning, templates, and onboarding. People follow it because it is the path of least resistance."
      />

      {/* GOVERNANCE BY DESIGN */}
      <section className="section">
        <div className="container-prose">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Governance by design"
                title="Embedded in every touchpoint."
                description="Governance becomes the default experience — not an additional checklist. The result is consistency people can actually live with."
              />
              <div className="mt-7 surface p-6">
                <ShieldCheck className="h-5 w-5 text-[var(--brand-600)]" />
                <p className="mt-3 text-sm font-medium leading-relaxed text-[var(--ink-700)]">
                  Governance must be visible, practical, consistent, understandable,
                  and embedded into the user experience.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {governanceTouchpoints.map((t) => (
                  <div key={t} className="surface-elevated p-5 text-center">
                    <div className="mx-auto grid h-9 w-9 place-items-center rounded-lg bg-[var(--brand-50)] text-[var(--brand-700)]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div className="mt-3 text-[15px] font-medium text-[var(--ink-900)]">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELF-SERVICE WITH CONTROL */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Self-service with control"
            title="Empower users — without losing the platform."
            description="Self-service that's safe because the guardrails are real. Users get speed and autonomy; the enterprise keeps consistency, ownership, and lifecycle integrity."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="surface-elevated p-7">
              <div className="eyebrow">What users can do</div>
              <ul className="mt-5 space-y-2.5">
                {selfServiceCapabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[15px] text-[var(--ink-700)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--brand-600)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-elevated p-7">
              <div className="eyebrow">Within</div>
              <ul className="mt-5 space-y-2.5">
                {selfServiceGuardrails.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[15px] text-[var(--ink-700)]">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-[var(--brand-600)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="ADVANTA modules"
            title="Five modules turn methodology into operations."
            description="Each module is a working capability — not a slide. Together they form the operating system for a governed, scalable digital workplace."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {modules.map((m, i) => {
              const Icon = moduleIcons[i] ?? Boxes;
              return (
                <div key={m.name} className="surface-elevated p-7">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand-50)] to-[var(--teal-100)] text-[var(--brand-700)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3>{m.name}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-500)]">
                        {m.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {m.points.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-[var(--ink-100)] bg-[var(--canvas)] px-3 py-1 text-xs font-medium text-[var(--ink-700)]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
