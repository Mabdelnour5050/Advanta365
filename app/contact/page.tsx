"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/sections/PageHero";
import MotionReveal from "@/components/MotionReveal";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for reaching out! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <SiteLayout>
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
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your Microsoft 365 program..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    Send message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
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
