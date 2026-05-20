"use client";

import { useEffect, useRef, useState, type ElementType, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "fade";

interface MotionRevealProps {
  children: React.ReactNode;
  as?: ElementType;
  from?: RevealDirection;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const revealClass: Record<RevealDirection, string> = {
  up: "reveal-in",
  left: "reveal-in-left",
  right: "reveal-in-right",
  fade: "reveal-in-fade",
};

export default function MotionReveal({
  children,
  as: Tag = "div",
  from = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  className,
  style,
  id,
}: MotionRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, reduced]);

  const motionStyle: CSSProperties = {
    ...(style ?? {}),
    ...(delay && visible && !reduced ? { animationDelay: `${delay}ms` } : {}),
  };

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      id={id}
      className={cn(reduced ? "" : "reveal", visible && !reduced && revealClass[from], className)}
      style={motionStyle}
    >
      {children}
    </Tag>
  );
}
