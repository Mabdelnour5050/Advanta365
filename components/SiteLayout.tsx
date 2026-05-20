"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

interface SiteLayoutProps {
  children: React.ReactNode;
  /**
   * When true, the header renders transparent over the page hero until the user scrolls.
   * Set to false on pages where the hero starts well below the header (e.g. contact form).
   */
  transparentHeader?: boolean;
}

export default function SiteLayout({ children, transparentHeader = true }: SiteLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!transparentHeader);

  // Scroll listener for header transparency
  useEffect(() => {
    if (!transparentHeader) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentHeader]);

  // Body scroll-lock + Esc-to-close while mobile menu open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-sm focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      {/* Header */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 border-b border-border"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container flex items-center justify-between h-16 md:h-20 wide:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl md:text-2xl text-primary hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm md:text-base font-bold shadow-sm">
              A
            </div>
            <span className="hidden sm:inline tracking-tight">ADVANTA365</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm wide:text-[15px] font-medium text-foreground/85 hover:text-primary transition-colors rounded-sm hover:bg-secondary/70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5">
                Talk to us
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>

            <button
              className="lg:hidden p-2 hover:bg-secondary/70 rounded-sm transition-colors text-foreground"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="lg:hidden fixed inset-0 z-40 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-0 z-50 bg-background border-b border-border shadow-lg pt-16 md:pt-20"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:text-primary transition-colors rounded-sm hover:bg-secondary/70"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    Talk to us
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Spacer when header is opaque (non-transparent pages) — prevents content jumping under fixed header */}
      {!transparentHeader && <div aria-hidden className="h-16 md:h-20 wide:h-24" />}

      <main id="main" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* Brand */}
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold shadow-sm">
                  A
                </div>
                <span className="font-bold text-primary tracking-tight">ADVANTA365</span>
              </Link>
              <p className="body-base text-muted-foreground max-w-md">
                Enterprise Microsoft 365 adoption, governance, and enablement framework — for large,
                complex, regulated organizations.
              </p>
            </div>

            {/* Single nav */}
            <div className="md:col-span-4">
              <h4 className="eyebrow mb-4">Explore</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="md:col-span-3">
              <h4 className="eyebrow mb-4">Get in touch</h4>
              <p className="body-base text-muted-foreground mb-4">
                Start a conversation about your Microsoft 365 program.
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5">
                  Talk to us
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border/70 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ADVANTA365. All rights reserved.
            </p>
            <div className="flex gap-5">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
