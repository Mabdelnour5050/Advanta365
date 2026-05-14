import { ReactNode } from "react";
import { Item, Stagger } from "@/components/Motion";

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
      <Stagger className="container-prose relative pt-20 pb-16 md:pt-28 md:pb-24" amount={0.2}>
        {eyebrow && (
          <Item>
            <div className="eyebrow mb-5">{eyebrow}</div>
          </Item>
        )}
        <Item>
          <h1 className="max-w-4xl text-balance">{title}</h1>
        </Item>
        {description && (
          <Item>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-500)] md:text-xl">
              {description}
            </p>
          </Item>
        )}
        {children && (
          <Item>
            <div className="mt-10">{children}</div>
          </Item>
        )}
      </Stagger>
    </section>
  );
}
