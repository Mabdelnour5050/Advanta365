"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const closeNavigation = () => {
      navToggle?.setAttribute("aria-expanded", "false");
      header?.classList.remove("nav-active");
      document.body.classList.remove("nav-open");
    };

    const setHeaderState = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    const toggleNavigation = () => {
      const expanded = navToggle?.getAttribute("aria-expanded") === "true";
      navToggle?.setAttribute("aria-expanded", String(!expanded));
      header?.classList.toggle("nav-active", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    };

    const closeNavigationFromLink = (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        closeNavigation();
      }
    };

    const closeNavigationFromKeyboard = (event) => {
      if (event.key === "Escape") {
        closeNavigation();
      }
    };

    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
    window.addEventListener("keydown", closeNavigationFromKeyboard);
    navToggle?.addEventListener("click", toggleNavigation);
    nav?.addEventListener("click", closeNavigationFromLink);

    const revealTargets = document.querySelectorAll(
      ".value-card, .diagnostic-card, .engagement-card, .service-card, .journey-step, .method-panel, .learning-feature, .learning-list span, .outcome-card, .deliverable-card, .faq-item, .contact-panel"
    );

    revealTargets.forEach((target) => target.setAttribute("data-reveal", ""));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

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
      window.removeEventListener("scroll", setHeaderState);
      window.removeEventListener("keydown", closeNavigationFromKeyboard);
      navToggle?.removeEventListener("click", toggleNavigation);
      nav?.removeEventListener("click", closeNavigationFromLink);
      revealObserver.disconnect();
      if (journeyTimer) {
        window.clearInterval(journeyTimer);
      }
      document.body.classList.remove("nav-open");
    };
  }, []);

  return null;
}
