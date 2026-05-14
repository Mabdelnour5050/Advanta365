import { CheckCircle2, FileText, FolderOpen, Users } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { focusAreasShort, microsoft365Focus } from "@/lib/content";

const productIcons = [FileText, Users, FolderOpen];

export default function Microsoft365() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Microsoft 365"
        title={<>Deep focus on <span className="text-gradient">SharePoint, Teams, and OneDrive</span> — and how they work together.</>}
        description="ADVANTA365 is built specifically around the modern Microsoft 365 stack. We position each platform with a clear role, with governance and adoption practices designed for how they actually interact."
      />

      {/* PLATFORMS */}
      <section className="section">
        <div className="container-prose space-y-6">
          {microsoft365Focus.map((p, i) => {
            const Icon = productIcons[i] ?? FileText;
            return (
              <div key={p.name} className="surface-elevated overflow-hidden">
                <div className="grid gap-8 p-7 md:grid-cols-12 md:p-10">
                  <div className="md:col-span-5">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand-50)] to-[var(--teal-100)] text-[var(--brand-700)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-3xl md:text-4xl">{p.name}</h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-500)]">
                      {p.role}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <div className="eyebrow">Key themes</div>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {p.themes.map((t) => (
                        <li key={t} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--brand-600)]" />
                          <span className="text-[15px] text-[var(--ink-700)]">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="section bg-white">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Focus areas"
            title="Everything we work on, in one view."
            description="The disciplines and capabilities ADVANTA365 engagements touch on a regular basis — across content, collaboration, governance, and people."
            align="center"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {focusAreasShort.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--ink-100)] bg-white px-4 py-2 text-sm font-medium text-[var(--ink-700)] shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}
