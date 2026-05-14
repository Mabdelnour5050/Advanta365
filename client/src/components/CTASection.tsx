import { Link } from "wouter";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function CTASection() {
  return (
    <section className="section-sm">
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--ink-100)] bg-gradient-to-br from-[var(--ink-950)] via-[#0F2451] to-[var(--brand-700)] p-10 md:p-14">
          <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--teal-500)] opacity-25 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-[var(--brand-500)] opacity-30 blur-3xl" />
          <div className="relative grid items-end gap-10 md:grid-cols-2">
            <div>
              <div className="eyebrow mb-4 text-[var(--brand-400)]">Let's talk</div>
              <h2 className="text-white">
                Make Microsoft 365 work the way your organization actually works.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70">
                A roadmap conversation is the fastest way to see whether ADVANTA365 is the
                right fit for your rollout, governance, or adoption goals.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link href="/contact" className="btn btn-lg bg-white text-[var(--ink-950)] hover:bg-white/95">
                <CalendarCheck className="h-4 w-4" />
                {siteConfig.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="btn btn-lg border border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10"
              >
                {siteConfig.ctaSecondary} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
