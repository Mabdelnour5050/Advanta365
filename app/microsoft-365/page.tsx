import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import CTABand from "@/components/sections/CTABand";
import MotionReveal from "@/components/MotionReveal";
import { microsoft365Focus } from "@/lib/content";
import { buildMetadata, itemListSchema, jsonLd, webPageSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Microsoft 365 Focus — SharePoint, Teams, OneDrive",
  description:
    "Built specifically for SharePoint Online, Microsoft Teams, and OneDrive — not retrofitted from a generic collaboration framework. Three pillars of the modern digital workplace, governed and adopted together.",
  path: "microsoft-365",
  keywords: [
    "SharePoint Online",
    "Microsoft Teams",
    "OneDrive for Business",
    "modern intranet",
    "digital workplace",
    "M365 collaboration",
    "metadata-driven SharePoint",
  ],
});

export default function Microsoft365() {
  const m365Graph = {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema({
        path: "microsoft-365",
        name: "Microsoft 365 Focus",
        description:
          "Built for SharePoint Online, Microsoft Teams, and OneDrive — three pillars of the modern digital workplace.",
        breadcrumb: [
          { name: "Home", path: "" },
          { name: "Microsoft 365", path: "microsoft-365" },
        ],
      }),
      itemListSchema({
        name: "Microsoft 365 Pillars",
        path: "microsoft-365",
        items: microsoft365Focus.map((p) => ({ name: p.name, description: p.role })),
      }),
    ],
  };

  return (
    <SiteLayout>
      <Script
        id="ld-m365"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(m365Graph) }}
      />
      <PageHero
        label="Platform focus"
        title="Built for Microsoft 365"
        lede="Specifically designed for SharePoint Online, Microsoft Teams, OneDrive, and the broader Microsoft 365 ecosystem. Not retrofitted from a generic collaboration framework."
        cta={{ label: "Explore our approach", href: "/contact" }}
      />

      <SectionShell tone="default">
        <SectionHeader
          index="01"
          label="The platforms"
          title="Three pillars of the modern digital workplace"
          lede="Each platform has a distinct role. ADVANTA365 makes them work together."
          className="mb-10 md:mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {microsoft365Focus.map((platform, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 90}
              className="flex h-full flex-col border-t-2 border-ink bg-paper-panel p-6 md:p-7"
            >
              <span className="mono-label mb-4">Pillar 0{idx + 1}</span>
              <h3 className="h-card text-ink">{platform.name}</h3>
              <p className="body-base mt-2 text-ink-2">{platform.role}</p>
              <ul className="mt-6 space-y-2.5 border-t border-rule pt-5">
                {platform.themes.map((theme, themeIdx) => (
                  <li key={themeIdx} className="body-base flex items-start gap-3 text-ink">
                    <span aria-hidden className="mt-[0.7em] h-px w-3 flex-shrink-0 bg-primary" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      <CTABand
        label="Get in touch"
        title="Bring governance and adoption to your Microsoft 365 program."
        lede="We help large organizations make SharePoint, Teams, and OneDrive work together at enterprise scale."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "See the framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
