import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Compass } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Item, Stagger } from "@/components/Motion";
import {
  corePrinciples,
  deliveryFlow,
  fasterFramework,
  philosophyBeliefs,
  rolloutLifecycle,
  sevenStages,
} from "@/lib/content";

export default function Framework() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Framework"
        title={<>A structured operating model for <span className="text-gradient">enterprise Microsoft 365</span>.</>}
        description="Vision to sustainment, in seven stages — supported by the FASTER framework, a wave-based rollout model, and seven core principles that hold everything together."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/wow" className="btn btn-primary">
            See the WOW program <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/governance" className="btn btn-secondary">
            Governance by design
          </Link>
        </div>
      </PageHero>

      {/* DELIVERY FLOW */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="High-level delivery flow"
            title="Six phases. One continuous arc."
            description="The ADVANTA365 lifecycle moves from organizational clarity to lasting capability — each phase building on the previous one."
          />
          <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6" amount={0.1}>
            {deliveryFlow.map((step, i) => (
              <Item key={step} className="surface-elevated p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-400)]">
                  Phase {i + 1}
                </div>
                <div className="mt-2 font-display text-xl font-bold text-[var(--ink-950)]">
                  {step}
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SEVEN STAGES */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Detailed implementation"
            title="The seven stages of an ADVANTA365 rollout."
            description="A practical, repeatable sequence designed for organizations that need real outcomes — not a slide deck."
          />
          <Stagger as="ol" className="mt-14 grid gap-5 md:grid-cols-2" amount={0.1}>
            {sevenStages.map((s, i) => (
              <Item as="li" key={s.number} className="surface-elevated relative p-7">
                <div className="absolute right-6 top-6 font-display text-5xl font-bold text-[var(--ink-100)]">
                  {s.number}
                </div>
                <div className="eyebrow">Stage {i + 1}</div>
                <h3 className="mt-3">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                  {s.description}
                </p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ROLLOUT LIFECYCLE */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="The rollout model"
            title="From pilot to continuous improvement."
            description="Organizations onboard in waves — validated by pilots, sustained through Communities of Practice, and continuously refined."
          />
          <div className="relative mt-14">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--brand-200)] via-[var(--ink-100)] to-transparent md:block" />
            <div className="space-y-5">
              {rolloutLifecycle.map((p, i) => (
                <div key={p.phase} className="relative pl-0 md:pl-14">
                  <span className="absolute left-0 top-3 hidden h-10 w-10 place-items-center rounded-xl bg-[var(--brand-600)] text-sm font-bold text-white md:grid">
                    {i + 1}
                  </span>
                  <div className="surface-elevated p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--brand-50)] text-xs font-bold text-[var(--brand-700)] md:hidden">
                        {i + 1}
                      </span>
                      <h3 className="text-[var(--ink-950)]">{p.phase}</h3>
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FASTER */}
      <section className="section bg-white">
        <div className="container-prose">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="The FASTER framework"
                title="Six principles that scale a rollout."
                description="FASTER is the methodology backbone — six commitments that turn isolated projects into a repeatable enterprise capability."
              />
              <div className="mt-8 surface p-5">
                <Compass className="h-5 w-5 text-[var(--brand-600)]" />
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-500)]">
                  Each FASTER principle maps to specific deliverables in the seven-stage
                  rollout — turning belief into operating practice.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="grid gap-3 sm:grid-cols-2" amount={0.15}>
                {fasterFramework.map((f) => (
                  <Item key={f.letter} className="surface-elevated p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-4xl font-extrabold text-gradient">
                        {f.letter}
                      </span>
                      <h4 className="text-[var(--ink-950)]">{f.title}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--ink-500)]">
                      {f.description}
                    </p>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES + PHILOSOPHY */}
      <section className="section">
        <div className="container-prose">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Philosophy"
                title="What we believe about adoption."
                description="Technology adoption fails when organizations focus only on technology. ADVANTA365 starts from a different set of beliefs."
              />
              <ul className="mt-8 space-y-3">
                {philosophyBeliefs.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-600)]" />
                    <span className="text-[15px] leading-relaxed text-[var(--ink-700)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Core principles"
                title="Seven commitments that shape every engagement."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {corePrinciples.map((p) => (
                  <div key={p.title} className="surface p-5">
                    <h4>{p.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
