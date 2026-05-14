import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Compass,
  GraduationCap,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { Item, Stagger } from "@/components/Motion";
import {
  businessProblems,
  corePrinciples,
  deliveryFlow,
  differentiators,
  focusAreasShort,
  modules,
  siteConfig,
} from "@/lib/content";

const moduleIcons = [Workflow, Boxes, Compass, Network, GraduationCap];

export default function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-brand" />
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="container-prose relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
              }}
            >
              {(
                [
                  <span className="pill" key="pill">
                    <Sparkles className="h-3.5 w-3.5" />
                    Enterprise Microsoft 365 framework
                  </span>,
                  <h1 className="mt-6 text-balance" key="h1">
                    Make Microsoft 365{" "}
                    <span className="text-gradient">governed, adopted, and sustainable</span>{" "}
                    — at enterprise scale.
                  </h1>,
                  <p
                    className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--ink-500)] md:text-xl"
                    key="p"
                  >
                    {siteConfig.description}
                  </p>,
                  <div className="mt-9 flex flex-wrap items-center gap-3" key="ctas">
                    <Link href="/contact" className="btn btn-primary btn-lg">
                      {siteConfig.ctaPrimary} <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/framework" className="btn btn-secondary btn-lg">
                      Explore the framework
                    </Link>
                  </div>,
                  <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 sm:gap-6" key="stats">
                    {[
                      { k: "7", v: "Stage delivery model" },
                      { k: "6", v: "WOW onboarding workshops" },
                      { k: "5", v: "ADVANTA modules" },
                    ].map((s) => (
                      <div key={s.v}>
                        <div className="font-display text-3xl font-bold text-[var(--ink-950)] md:text-4xl">
                          {s.k}
                        </div>
                        <div className="mt-1 text-[13px] leading-snug text-[var(--ink-500)]">
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </dl>,
                ]
              ).map((node, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {node}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative lg:col-span-5"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <motion.div
                className="relative mx-auto max-w-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[var(--brand-100)] via-white to-[var(--teal-100)] blur-2xl" />
                <div className="surface-elevated relative p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-400)]">
                      Delivery flow
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[var(--brand-700)]">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-[var(--brand-600)]"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                      />
                      Live
                    </div>
                  </div>
                  <ol className="mt-5 space-y-2.5">
                    {deliveryFlow.map((step, i) => (
                      <motion.li
                        key={step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-3 rounded-xl border border-[var(--ink-100)] bg-[var(--canvas)] p-3.5"
                      >
                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--brand-600)] text-[11px] font-bold text-white">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[14px] font-medium text-[var(--ink-900)]">
                          {step}
                        </span>
                        <span className="ml-auto text-[var(--ink-300)]">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </motion.li>
                    ))}
                  </ol>
                  <div className="mt-5 rounded-xl bg-[var(--brand-50)] p-4 text-[13px] leading-relaxed text-[var(--brand-700)]">
                    <ShieldCheck className="mb-2 h-4 w-4" />
                    Governance is embedded at every stage — by design, not as an afterthought.
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="section">
        <div className="container-prose">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What is ADVANTA365"
                title="A framework — not just a deployment."
                description="ADVANTA365 combines governance, change management, structured rollouts, role-based enablement, and long-term sustainment into one repeatable operating model for the modern digital workplace."
              />
              <Link href="/framework" className="btn btn-ghost mt-6 -ml-2 inline-flex">
                See the framework <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <Stagger className="grid gap-4 sm:grid-cols-2" amount={0.2}>
                {[
                  { icon: ShieldCheck, t: "Governance by design", d: "Embedded in provisioning, templates, and onboarding." },
                  { icon: Users, t: "Business-led model", d: "Owned by the business with central enablement." },
                  { icon: GraduationCap, t: "Role-based enablement", d: "Site Owners, IM, end users, executives." },
                  { icon: LineChart, t: "Sustainment built-in", d: "Communities of Practice and learning continue." },
                ].map(({ icon: Icon, t, d }) => (
                  <Item key={t} className="surface-elevated p-6">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-700)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4">{t}</h4>
                    <p className="mt-2 text-sm text-[var(--ink-500)]">{d}</p>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Why organizations struggle"
            title="The familiar problems we hear in every M365 program."
            description="Technology adoption fails when organizations focus only on technology. These are the patterns ADVANTA365 is built to solve."
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" amount={0.15}>
            {businessProblems.slice(0, 6).map((p, i) => (
              <Item key={p.title} className="surface p-6 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--ink-400)]">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--ink-50)] text-[11px] text-[var(--ink-700)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  Problem
                </div>
                <h4 className="mt-3 text-[var(--ink-950)]">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">
                  {p.description}
                </p>
              </Item>
            ))}
          </Stagger>
          <div className="mt-8 text-center">
            <Link href="/why" className="btn btn-ghost">
              See all nine — and how ADVANTA365 addresses them
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Core principles"
            title="Seven beliefs that shape every engagement."
            align="center"
          />
          <Stagger className="mx-auto mt-14 grid max-w-6xl gap-3 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
            {corePrinciples.map((p) => (
              <Item key={p.title} className="surface-elevated p-6">
                <CheckCircle2 className="h-5 w-5 text-[var(--brand-600)]" />
                <h4 className="mt-3">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">
                  {p.description}
                </p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* MODULES */}
      <section className="section bg-white">
        <div className="container-prose">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The ADVANTA modules"
              title="One framework. Five working modules."
              description="From governed provisioning to enterprise classification — the modules turn methodology into daily operations."
            />
            <Link href="/governance" className="btn btn-ghost">
              Explore modules <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" amount={0.1}>
            {modules.map((m, i) => {
              const Icon = moduleIcons[i] ?? Boxes;
              return (
                <Item key={m.name} className="surface-elevated p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand-50)] to-[var(--teal-100)] text-[var(--brand-700)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-[var(--ink-950)]">{m.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">
                    {m.description}
                  </p>
                </Item>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section">
        <div className="container-prose">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What makes us different"
                title="Built specifically for large, complex, regulated organizations."
                description="Most adoption programs pick a side: governance or training. ADVANTA365 is the operating model that combines them — and keeps them working after launch."
              />
              <Link href="/why" className="btn btn-secondary mt-7">
                Why ADVANTA365 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:col-span-7">
              <Stagger as="ul" className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3" amount={0.15}>
                {differentiators.slice(0, 6).map((d) => (
                  <Item as="li" key={d.title} className="surface p-5">
                    <div className="font-semibold text-[var(--ink-950)]">{d.title}</div>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-500)]">
                      {d.description}
                    </p>
                  </Item>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS CLOUD */}
      <section className="section-sm">
        <div className="container-prose">
          <div className="surface p-8 md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-400)]">
              Microsoft 365 focus areas
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {focusAreasShort.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.02, duration: 0.35 }}
                  className="rounded-full border border-[var(--ink-100)] bg-[var(--canvas)] px-3.5 py-1.5 text-sm text-[var(--ink-700)] transition-colors hover:border-[var(--brand-400)] hover:bg-[var(--brand-50)] hover:text-[var(--brand-700)]"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
