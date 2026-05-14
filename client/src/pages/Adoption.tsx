import { BookOpen, CheckCircle2, Megaphone, MessagesSquare, Sparkles, Users2 } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import {
  adoptionSuccessFactors,
  communicationsChannels,
  communityOfPracticeTopics,
  learningPortalContents,
  trainingPrinciples,
} from "@/lib/content";

export default function Adoption() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Adoption & Change"
        title={<>ADVANTA Engage — the <span className="text-gradient">people-side engine</span> behind every rollout.</>}
        description="Change management, communications, learning, and community — built on Prosci and ADKAR principles, grounded in operational reality, designed to keep people moving."
      />

      {/* PILLARS */}
      <section className="section">
        <div className="container-prose">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users2, t: "Change management", d: "Human-centered, structured, executive-supported, business-led." },
              { icon: Megaphone, t: "Communications", d: "Awareness, messaging, executive voice, and engagement rhythms." },
              { icon: BookOpen, t: "Learning", d: "Role-based journeys, job aids, playbooks, and short-form training." },
              { icon: MessagesSquare, t: "Community", d: "Peer support, AMAs, office hours, champions, and CoPs." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="surface-elevated p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-700)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mt-4">{t}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USER ADOPTION PHILOSOPHY */}
      <section className="section bg-white">
        <div className="container-prose">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="User adoption philosophy"
                title="Adoption succeeds when people choose the new way."
                description="The framework treats adoption as a behavioural outcome. People adopt when the experience is clear, the value is obvious, and the support is real."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="space-y-3">
                {adoptionSuccessFactors.map((f) => (
                  <li key={f} className="surface flex items-start gap-3 p-5">
                    <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-600)]" />
                    <span className="text-[15px] leading-relaxed text-[var(--ink-700)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING + COMMUNICATIONS */}
      <section className="section">
        <div className="container-prose">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-elevated p-8">
              <div className="eyebrow">Training philosophy</div>
              <h3 className="mt-3">Role-based. Practical. Reinforced.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                Training is designed around real tasks — not feature tours — and reinforced
                through job aids, clinics, and ongoing support.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {trainingPrinciples.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
            <div className="surface-elevated p-8">
              <div className="eyebrow">Communications strategy</div>
              <h3 className="mt-3">Clear voice. Multiple channels. Consistent cadence.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                Communications emphasize business value, simplicity, productivity, modern
                work, and user empowerment — through executive messages, intranet news,
                videos, AMAs, and more.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {communicationsChannels.map((c) => (
                  <span key={c} className="rounded-full border border-[var(--ink-100)] bg-[var(--canvas)] px-3 py-1.5 text-xs font-medium text-[var(--ink-700)]">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEARNING PORTAL + COP */}
      <section className="section bg-white">
        <div className="container-prose">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-elevated p-8">
              <div className="eyebrow">The Learning Portal</div>
              <h3 className="mt-3">A central, evolving enablement hub.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                The Learning Portal is where role-based learning, job aids, FAQs, and
                governance guidance live — continuously updated as the platform evolves.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {learningPortalContents.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[var(--ink-700)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-600)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-elevated p-8">
              <div className="eyebrow">Community of Practice</div>
              <h3 className="mt-3">Peer-led sustainment, on real topics.</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                The Community of Practice reinforces learning, supports Site Owners,
                evolves governance, and shares lessons learned — turning rollout into
                continuous improvement.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {communityOfPracticeTopics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-[var(--ink-700)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-600)]" />
                    {t}
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
