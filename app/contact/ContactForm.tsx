"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Fields = "name" | "email" | "company" | "message";
type Errors = Partial<Record<Fields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "h-11 rounded-sm border-input bg-paper-panel text-base aria-[invalid=true]:border-destructive";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email address.";
    else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
    if (!v.message.trim()) e.message = "Please tell us a little about your program.";
    return e;
  };

  const update = (field: Fields, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const firstInvalid = formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }
    setStatus("submitting");
    // No backend wired yet; simulate the round-trip so UI states are honest.
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    toast.success("Thank you for reaching out. We'll be in touch soon.");
    setValues({ name: "", email: "", company: "", message: "" });
  };

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-start gap-4 py-6">
        <span className="mono-label text-primary">Message sent</span>
        <h3 className="h-card text-ink">Thank you for reaching out.</h3>
        <p className="body-base max-w-prose text-ink-2">
          We&apos;ve received your message and will be in touch shortly to talk through your
          Microsoft 365 program.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
      <Field id="name" label="Full name" required error={errors.name}>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="email" label="Email address" required error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
      </Field>

      <Field id="company" label="Company" optional>
        <Input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Your organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field id="message" label="Message" required error={errors.message}>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your Microsoft 365 program..."
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={6}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-sm border-input bg-paper-panel text-base aria-[invalid=true]:border-destructive"
        />
      </Field>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full gap-2">
        {status === "submitting" ? "Sending..." : "Send message"}
        {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-ink">
          {label}
          {required && <span className="ml-1 text-primary" aria-hidden>*</span>}
        </span>
        {optional && <span className="mono-label">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className={cn("mt-2 text-sm text-destructive")}>
          {error}
        </p>
      )}
    </div>
  );
}
