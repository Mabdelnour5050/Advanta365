import { CheckCircle2, MessageSquare, Repeat2, Users } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Item, Stagger } from "@/components/Motion";
import { reinforcementChannels, wowSessions } from "@/lib/content";

export default function WOW() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="WOW Program"
        title={<>The <span className="text-gradient">Wave Onboarding Workshops</span> — structured onboarding for every wave.</>}
        description="Six core workshops, role-specific reinforcement, and a guided path from kick-off to confident go-live. WOW is how ADVANTA365 turns rollout plans into onboarded teams."
      />

      {/* OVERVIEW */}
      <section className="section">
        <div className="container-prose grid gap-10 lg:grid-cols-3">
          {[
            { icon: Users, t: "Designed for Site Owners", d: "Each wave brings Site Owners, IM leads, and governance roles together in a guided learning path." },
            { icon: Repeat2, t: "Six sessions per wave", d: "From kick-off to cutover — a complete onboarding journey, not isolated training." },
            { icon: MessageSquare, t: "Reinforcement built-in", d: "Check-ins, coaching, office hours, and a Community of Practice keep learning alive." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="surface-elevated p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-700)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5">{t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIX WOW SESSIONS */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="The six WOW sessions"
            title="A guided onboarding arc — repeatable for every wave."
            description="Each session has a specific purpose, audience, and outcome. Together they prepare Site Owners and governance roles to operate the platform with confidence."
          />
          <Stagger className="mt-14 grid gap-5 md:grid-cols-2" amount={0.1}>
            {wowSessions.map((w, i) => (
              <Item key={w.number} className="surface-elevated p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <div className="eyebrow">{w.number}</div>
                  <span className="font-display text-4xl font-bold text-[var(--ink-100)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2">{w.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {w.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[15px] text-[var(--ink-700)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-600)]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* REINFORCEMENT */}
      <section className="section">
        <div className="container-prose">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Reinforcement model"
                title="Learning that lasts past the workshop."
                description="Training that doesn't stick is training that's wasted. WOW is reinforced through ongoing channels that keep Site Owners and governance roles supported, connected, and improving."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-3">
                {reinforcementChannels.map((c) => (
                  <div key={c} className="surface flex items-center gap-3 p-4">
                    <span className="h-2 w-2 rounded-full bg-[var(--brand-600)]" />
                    <span className="text-[15px] font-medium text-[var(--ink-900)]">{c}</span>
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
