import Script from "next/script";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import MotionReveal from "@/components/MotionReveal";
import ContactForm from "./ContactForm";
import {
  buildMetadata,
  contactPageSchema,
  jsonLd,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact — Talk to ADVANTA365",
  description:
    "Talk to our team about your Microsoft 365 adoption, governance, and enablement program. We work with large, complex, and regulated organizations worldwide.",
  path: "contact",
  keywords: [
    "contact ADVANTA365",
    "Microsoft 365 consultation",
    "M365 readiness review",
    "enterprise Microsoft 365 consulting",
  ],
});

const contactGraph = {
  "@context": "https://schema.org",
  "@graph": [
    webPageSchema({
      path: "contact",
      name: "Contact ADVANTA365",
      description:
        "Get in touch with our team about your Microsoft 365 adoption, governance, and enablement program.",
      breadcrumb: [
        { name: "Home", path: "" },
        { name: "Contact", path: "contact" },
      ],
    }),
    contactPageSchema(),
  ],
};

export default function Contact() {
  return (
    <SiteLayout>
      <Script
        id="ld-contact"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: jsonLd(contactGraph) }}
      />
      <PageHero
        eyebrow="Talk to us"
        title="Get in touch"
        lede="Ready to transform your Microsoft 365 program? Let's talk about your organization's adoption, governance, and enablement needs."
      />

      <section className="bg-background section-y">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <MotionReveal from="up" className="lg:col-span-7">
              <div className="card-elevated p-6 md:p-8 wide:p-10">
                <ContactForm />
              </div>
            </MotionReveal>

            {/* Info — outlined cards so they defer to the form */}
            <div className="lg:col-span-5 space-y-5 md:space-y-6">
              <MotionReveal from="up" delay={80} className="card-outlined p-6 md:p-7 space-y-3">
                <span className="eyebrow">What we do</span>
                <h3 className="h-card text-foreground">Enterprise M365 framework</h3>
                <p className="body-base text-muted-foreground">
                  ADVANTA365 is an enterprise-grade Microsoft 365 adoption, governance, implementation, and
                  enablement framework. We help large, complex organizations deploy, govern, scale, and
                  sustain modern digital workplaces.
                </p>
              </MotionReveal>

              <MotionReveal from="up" delay={140} className="card-outlined p-6 md:p-7 space-y-3">
                <span className="eyebrow">Who we work with</span>
                <h3 className="h-card text-foreground">Large, regulated organizations</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span>Government departments</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span>Enterprise organizations</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span>Microsoft 365 program teams</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span>Change management teams</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" aria-hidden />
                    <span>Digital workplace transformation teams</span>
                  </li>
                </ul>
              </MotionReveal>

              <MotionReveal from="up" delay={200} className="card-outlined p-6 md:p-7 space-y-3">
                <span className="eyebrow">Our focus</span>
                <h3 className="h-card text-foreground">Where we deliver</h3>
                <ul className="space-y-2 body-base text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>SharePoint Online governance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>Microsoft Teams adoption</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>OneDrive enablement</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>Change management</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>User adoption &amp; training</span>
                  </li>
                </ul>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
