import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";

function useScrollToTopOnRouteChange() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
}

function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--brand-600)] to-[var(--brand-700)] text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.6)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
        <span className="font-display text-[15px] font-bold leading-none">A</span>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-[var(--teal-500)] ring-2 ring-[var(--canvas)] transition-transform duration-300 group-hover:scale-125" />
      </span>
      <span className="flex items-baseline gap-0.5 font-display text-[17px] font-bold tracking-tight text-[var(--ink-950)]">
        ADVANTA<span className="text-[var(--brand-600)] transition-colors group-hover:text-[var(--teal-600)]">365</span>
      </span>
    </Link>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setProgress(ratio);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
      <div
        className="h-full origin-left bg-gradient-to-r from-[var(--brand-600)] via-[var(--teal-500)] to-[var(--brand-600)] transition-[transform] duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--ink-100)] bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70"
          : "bg-transparent",
      )}
    >
      <div className="container-prose flex h-16 items-center justify-between gap-6 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.slice(1, -1).map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-[var(--brand-700)]"
                    : "text-[var(--ink-500)] hover:text-[var(--ink-900)]",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand-600)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/contact" className="btn btn-primary">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--ink-100)] bg-white text-[var(--ink-700)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[var(--ink-100)] bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-prose flex flex-col gap-1 py-4">
              {nav.map((item, i) => {
                const active = location === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.03, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-[15px] font-medium",
                        active
                          ? "bg-[var(--brand-50)] text-[var(--brand-700)]"
                          : "text-[var(--ink-700)] hover:bg-[var(--ink-50)]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link href="/contact" className="btn btn-primary mt-2 w-full">
                {siteConfig.ctaPrimary}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollProgress />
    </header>
  );
}

function Footer() {
  const groupedNav = [
    {
      heading: "Framework",
      items: nav.filter((n) =>
        ["/framework", "/wow", "/governance"].includes(n.href),
      ),
    },
    {
      heading: "People",
      items: nav.filter((n) =>
        ["/adoption", "/microsoft-365", "/why"].includes(n.href),
      ),
    },
    {
      heading: "Engage",
      items: nav.filter((n) => ["/", "/contact"].includes(n.href)),
    },
  ];

  return (
    <footer className="mt-24 border-t border-[var(--ink-100)] bg-white">
      <div className="container-prose py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[var(--ink-500)]">
              {siteConfig.shortDescription}
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              {siteConfig.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            {groupedNav.map((g) => (
              <div key={g.heading}>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-400)]">
                  {g.heading}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-[var(--ink-700)] transition-colors hover:text-[var(--brand-700)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--ink-100)] pt-6 text-xs text-[var(--ink-400)] sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--emerald-600)]" />
            <span>Enterprise Microsoft 365 framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  useScrollToTopOnRouteChange();
  const [location] = useLocation();
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col bg-[var(--canvas)]">
      <Header />
      <main className="flex-1">
        {reduce ? (
          <div>{children}</div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
      <Footer />
    </div>
  );
}
