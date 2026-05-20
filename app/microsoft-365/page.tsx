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

const platformAccents = [
  "from-[#06B6D4] to-[#0D7377]",
  "from-[#14B8A6] to-[#0A5F6F]",
  "from-[#0D7377] to-[#084E5E]",
];

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
        eyebrow="Platform focus"
        title="Built for Microsoft 365"
        lede="Specifically designed for SharePoint Online, Microsoft Teams, OneDrive, and the broader Microsoft 365 ecosystem — not retrofitted from a generic collaboration framework."
        cta={{ label: "Explore our approach", href: "/contact" }}
      />

      {/* Platforms */}
      <SectionShell tone="default">
        <SectionHeader
          eyebrow="The platforms"
          title="Three pillars of the modern digital workplace"
          lede="Each platform has a distinct role. ADVANTA365 makes them work together."
          align="center"
          className="mb-8 md:mb-10 wide:mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 wide:gap-10">
          {microsoft365Focus.map((platform, idx) => (
            <MotionReveal
              key={idx}
              from="up"
              delay={idx * 90}
              className="card-module flex flex-col h-full"
            >
              <div className={`h-1.5 bg-gradient-to-r ${platformAccents[idx]}`} aria-hidden />
              <div className="p-6 md:p-7 wide:p-8 flex flex-col gap-5 flex-1">
                <div className="space-y-2">
                  <span className="eyebrow">Pillar 0{idx + 1}</span>
                  <h3 className="h-card text-primary">{platform.name}</h3>
                  <p className="body-base text-muted-foreground">{platform.role}</p>
                </div>
                <ul className="space-y-2.5 mt-2">
                  {platform.themes.map((theme, themeIdx) => (
                    <li key={themeIdx} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                      />
                      <p className="body-base text-foreground">{theme}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>

      <CTABand
        eyebrow="Get in touch"
        title="Bring governance and adoption to your Microsoft 365 program."
        lede="We help large organizations make SharePoint, Teams, and OneDrive work together — at enterprise scale."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "See the framework", href: "/framework" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
