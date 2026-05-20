import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import CTABand from "@/components/sections/CTABand";

export const metadata = { title: "WOW Program" };

export default function WOW() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The WOW program"
        title="Structured onboarding workshops"
        lede="A series of focused, scenario-driven workshops that drive adoption and engagement across your organization — from site owners and IM leads to end users and executives."
        cta={{ label: "Learn more", href: "/contact" }}
        numberStrip={6}
      />

      <CTABand
        eyebrow="Get started"
        title="Make your Microsoft 365 launch land."
        lede="Talk to us about running the WOW program in your organization."
        primary={{ label: "Talk to us", href: "/contact" }}
        secondary={{ label: "Adoption approach", href: "/adoption" }}
        tone="dark"
      />
    </SiteLayout>
  );
}
