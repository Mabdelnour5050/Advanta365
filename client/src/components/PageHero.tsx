import { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--ink-100)] bg-white">
      <div className="absolute inset-0 bg-radial-brand" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="container-prose relative pt-20 pb-16 md:pt-28 md:pb-24">
        {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
        <h1 className="max-w-4xl text-balance">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-500)] md:text-xl">
            {description}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
