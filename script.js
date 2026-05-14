const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  header?.classList.toggle("nav-active", !expanded);
  document.body.classList.toggle("nav-open", !expanded);
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute("aria-expanded", "false");
    header?.classList.remove("nav-active");
    document.body.classList.remove("nav-open");
  }
});

const revealTargets = document.querySelectorAll(
  ".value-card, .service-card, .journey-step, .method-panel, .learning-feature, .learning-list span, .outcome-card, .testimonial-card, .final-cta"
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

if (journeySteps.length) {
  let index = 0;
  window.setInterval(() => {
    journeySteps[index].classList.remove("active");
    index = (index + 1) % journeySteps.length;
    journeySteps[index].classList.add("active");
  }, 2800);
}
