"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']:not(.mobile-nav-cta)"));
    const navSections = navLinks
      .map((link) => {
        const target = document.querySelector(link.getAttribute("href"));
        return target ? { link, target } : null;
      })
      .filter(Boolean);

    let scrollTicking = false;

    const closeNavigation = () => {
      navToggle?.setAttribute("aria-expanded", "false");
      header?.classList.remove("nav-active");
      document.body.classList.remove("nav-open");
    };

    const setHeaderState = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    const setActiveNavigation = () => {
      if (!navSections.length) return;

      const offset = 150;
      const activeSection = navSections.reduce((current, section) => {
        const distance = section.target.getBoundingClientRect().top - offset;
        if (distance <= 0) {
          return section;
        }
        return current;
      }, null);

      navLinks.forEach((link) => {
        if (activeSection && link === activeSection.link) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const handleScroll = () => {
      if (scrollTicking) return;

      scrollTicking = true;
      window.requestAnimationFrame(() => {
        setHeaderState();
        setActiveNavigation();
        scrollTicking = false;
      });
    };

    const toggleNavigation = () => {
      const expanded = navToggle?.getAttribute("aria-expanded") === "true";
      navToggle?.setAttribute("aria-expanded", String(!expanded));
      header?.classList.toggle("nav-active", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    };

    const closeNavigationFromLink = (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        closeNavigation();
      }
    };

    const closeNavigationFromOutside = (event) => {
      if (
        header?.classList.contains("nav-active") &&
        event.target instanceof Node &&
        !header.contains(event.target)
      ) {
        closeNavigation();
      }
    };

    const closeNavigationFromKeyboard = (event) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    };

    setHeaderState();
    setActiveNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", closeNavigationFromOutside);
    window.addEventListener("keydown", closeNavigationFromKeyboard);
    navToggle?.addEventListener("click", toggleNavigation);
    nav?.addEventListener("click", closeNavigationFromLink);

    const revealTargets = document.querySelectorAll(
      ".value-card, .diagnostic-card, .engagement-card, .service-card, .journey-step, .method-panel, .learning-feature, .learning-list span, .outcome-card, .deliverable-card, .faq-item, .contact-panel"
    );

    revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

    const revealObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  revealObserver.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
          )
        : null;

    revealTargets.forEach((target) => {
      if (revealObserver) {
        revealObserver.observe(target);
      } else {
        target.classList.add("is-visible");
      }
    });

    const journeySteps = document.querySelectorAll(".journey-step");
    let index = 0;
    const journeyTimer = prefersReducedMotion
      ? null
      : window.setInterval(() => {
          if (!journeySteps.length) return;
          journeySteps[index].classList.remove("active");
          index = (index + 1) % journeySteps.length;
          journeySteps[index].classList.add("active");
        }, 2800);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeNavigationFromOutside);
      window.removeEventListener("keydown", closeNavigationFromKeyboard);
      navToggle?.removeEventListener("click", toggleNavigation);
      nav?.removeEventListener("click", closeNavigationFromLink);
      revealObserver?.disconnect();
      if (journeyTimer) {
        window.clearInterval(journeyTimer);
      }
      document.body.classList.remove("nav-open");
    };
  }, []);

  return null;
}
