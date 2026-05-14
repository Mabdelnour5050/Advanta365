import { useState } from "react";
import { ArrowRight, CalendarCheck, CheckCircle2, Mail, MessageSquare } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/content";

const reasons = [
  "Microsoft 365 readiness review",
  "SharePoint Online rollout planning",
  "Microsoft Teams governance",
  "Adoption & change management",
  "Site Owner enablement / WOW program",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start a <span className="text-gradient">roadmap conversation</span>.</>}
        description="Tell us a little about your environment and what you're trying to solve. A short readiness call usually surfaces the right next step."
      />

      <section className="section">
        <div className="container-prose">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="surface-elevated p-7 md:p-10">
                {submitted ? (
                  <div className="text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[var(--emerald-100)] text-[var(--emerald-600)]">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5">Thank you — message received.</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-500)]">
                      We'll be in touch within one business day to schedule your roadmap conversation.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" required>
                        <input
                          required
                          className="w-full rounded-xl border border-[var(--ink-100)] bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-100)]"
                          placeholder="Jane Doe"
                        />
                      </Field>
                      <Field label="Work email" required>
                        <input
                          required
                          type="email"
                          className="w-full rounded-xl border border-[var(--ink-100)] bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-100)]"
                          placeholder="jane@organization.gov"
                        />
                      </Field>
                    </div>
                    <Field label="Organization">
                      <input
                        className="w-full rounded-xl border border-[var(--ink-100)] bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-100)]"
                        placeholder="Department, agency, or company"
                      />
                    </Field>
                    <Field label="What would you like to talk about?" required>
                      <select
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-[var(--ink-100)] bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-100)]"
                      >
                        <option value="" disabled>Select a topic…</option>
                        {reasons.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Tell us about your situation">
                      <textarea
                        rows={5}
                        className="w-full resize-none rounded-xl border border-[var(--ink-100)] bg-white px-4 py-3 text-[15px] outline-none focus:border-[var(--brand-500)] focus:ring-2 focus:ring-[var(--brand-100)]"
                        placeholder="Where are you in your Microsoft 365 journey? What's working, what isn't?"
                      />
                    </Field>
                    <button type="submit" className="btn btn-primary btn-lg w-full sm:w-auto">
                      {siteConfig.ctaPrimary} <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="text-xs text-[var(--ink-400)]">
                      We respond within one business day. Your details are used only to reply to your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* SIDE */}
            <div className="space-y-4 lg:col-span-5">
              <SideCard
                icon={CalendarCheck}
                title="Readiness review"
                description="A short, structured conversation that turns scattered Microsoft 365 concerns into a clear next step."
              />
              <SideCard
                icon={MessageSquare}
                title="No obligation"
                description="Roadmap conversations are exploratory. If we're not the right fit, we'll say so — and point you somewhere useful."
              />
              <SideCard
                icon={Mail}
                title="Prefer email?"
                description={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--ink-900)]">
        {label}
        {required && <span className="ml-0.5 text-[var(--brand-600)]">*</span>}
      </span>
      {children}
    </label>
  );
}

function SideCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
}) {
  const inner = (
    <div className="surface-elevated p-6">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--brand-50)] text-[var(--brand-700)]">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-500)]">{description}</p>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-transform hover:-translate-y-0.5">
      {inner}
    </a>
  ) : (
    inner
  );
}
