import { AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Item, Stagger } from "@/components/Motion";
import { businessProblems, differentiators, targetAudience } from "@/lib/content";

export default function Why() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Why ADVANTA365"
        title={<>The problems we keep solving — and what makes <span className="text-gradient">our approach different</span>.</>}
        description="Most Microsoft 365 programs fail in predictable ways. ADVANTA365 is the operating model designed to address each one — and keep addressing them after launch."
      />

      {/* PROBLEMS */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="The patterns we hear"
            title="Nine common problems in enterprise Microsoft 365."
            description="Each of these is a symptom of the same root cause: treating M365 as a technology deployment rather than an organizational transformation."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
            {businessProblems.map((p, i) => (
              <Item key={p.title} className="surface-elevated p-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink-400)]">
                  <AlertTriangle className="h-4 w-4 text-[var(--amber-600)]" />
                  Problem {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-3 text-[var(--ink-950)]">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">{p.description}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="What makes us different"
            title="Eight things ADVANTA365 does differently."
            description="The choices behind the framework — and why they matter at enterprise scale."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 2xl:grid-cols-4" amount={0.1}>
            {differentiators.map((d) => (
              <Item key={d.title} className="surface-elevated p-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[var(--brand-600)]" />
                  <h4 className="text-[var(--ink-950)]">{d.title}</h4>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                  {d.description}
                </p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section">
        <div className="container-prose">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Who it's for"
                title="Designed for the organizations where M365 is hardest."
                description="ADVANTA365 is built for large, complex, regulated environments — where governance, change, and adoption all need to scale at once."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
                {targetAudience.map((a) => (
                  <li key={a} className="surface flex items-center gap-3 p-4">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--brand-600)]" />
                    <span className="text-[15px] font-medium text-[var(--ink-900)]">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
