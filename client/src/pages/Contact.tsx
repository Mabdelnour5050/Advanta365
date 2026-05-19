import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SiteLayout from "@/components/SiteLayout";
import { useState } from "react";
import { toast } from "sonner";

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
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary via-background to-background">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to transform your Microsoft 365 program? Let's talk about your organization's adoption, governance, and enablement needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="card-elevated p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input
                    type="text"
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your Microsoft 365 program..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What We Do
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ADVANTA365 is an enterprise-grade Microsoft 365 adoption, governance, implementation, and enablement framework. We help large, complex organizations deploy, govern, scale, and sustain modern digital workplaces.
                </p>
              </div>

              <div className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Who We Work With
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Government departments</li>
                  <li>• Enterprise organizations</li>
                  <li>• Microsoft 365 program teams</li>
                  <li>• Change management teams</li>
                  <li>• Digital workplace transformation teams</li>
                </ul>
              </div>

              <div className="card-elevated p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Focus
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SharePoint Online governance</li>
                  <li>• Microsoft Teams adoption</li>
                  <li>• OneDrive enablement</li>
                  <li>• Change management</li>
                  <li>• User adoption & training</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
