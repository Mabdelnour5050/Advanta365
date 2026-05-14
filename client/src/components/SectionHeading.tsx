import { ReactNode } from "react";
import { Item, Stagger } from "@/components/Motion";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  const isCenter = align === "center";
  return (
    <Stagger className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} amount={0.4}>
      {eyebrow && (
        <Item>
          <div className="eyebrow mb-4">{eyebrow}</div>
        </Item>
      )}
      <Item>
        <h2 className="text-balance">{title}</h2>
      </Item>
      {description && (
        <Item>
          <p className="mt-5 text-lg leading-relaxed text-[var(--ink-500)]">
            {description}
          </p>
        </Item>
      )}
    </Stagger>
  );
}
