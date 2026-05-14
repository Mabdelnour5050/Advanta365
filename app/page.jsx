"use client";

import { useEffect } from "react";

const services = [
  ["01", "Microsoft 365 Rollout Strategy", "Define scope, audiences, waves, readiness criteria, executive alignment, and adoption outcomes before launch pressure builds."],
  ["02", "SharePoint Online Implementation", "Build modern portals, hubs, site patterns, content models, and publishing practices that support real business workflows."],
  ["03", "Governance and Information Architecture", "Create clear ownership models, lifecycle practices, findability standards, naming conventions, and scalable guardrails."],
  ["04", "Change Management", "Shape sponsor messaging, stakeholder engagement, communications, readiness assessments, resistance planning, and feedback loops."],
  ["05", "Learning and Training Programs", "Deliver role-based learning journeys, workshops, job aids, office hours, and onboarding paths that meet people where they are."],
  ["06", "Adoption Measurement", "Connect usage, sentiment, support patterns, and business outcomes into an adoption scorecard leaders can actually use."],
  ["07", "Site Owner Enablement", "Prepare owners with governance, publishing, permissions, accessibility, content quality, and lifecycle responsibilities."],
  ["08", "Template and Provisioning Strategies", "Standardize repeatable site and team patterns while preserving enough flexibility for business-led delivery."]
];

const journey = [
  ["01", "Vision", "Clarify outcomes, leadership narrative, user needs, and the modern workplace experience you want to create."],
  ["02", "Strategy", "Shape the adoption model, governance posture, delivery roadmap, measures of success, and stakeholder rhythm."],
  ["03", "Planning", "Prepare waves, communications, learning journeys, pilots, migration cleanup, and support readiness."],
  ["04", "Enablement", "Equip champions, site owners, business leads, and end users with role-specific resources and practical guidance."],
  ["05", "Rollout", "Launch with confidence through structured waves, feedback channels, communications, clinics, and visible support."],
  ["06", "Sustainment", "Measure adoption, mature governance, reinforce learning, and continuously improve the Microsoft 365 experience."]
];

const learningItems = [
  "Job aids",
  "Workshops",
  "Site Owner onboarding",
  "Role-based training",
  "Reinforcement check-ins",
  "End-user adoption support",
  "Communities of Practice",
  "Champions enablement"
];

function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      <span>Advanta365</span>
    </span>
  );
}

export default function Home() {
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const navToggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");

    const setHeaderState = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    const toggleNavigation = () => {
      const expanded = navToggle?.getAttribute("aria-expanded") === "true";
      navToggle?.setAttribute("aria-expanded", String(!expanded));
      header?.classList.toggle("nav-active", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    };

    const closeNavigation = (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navToggle?.setAttribute("aria-expanded", "false");
        header?.classList.remove("nav-active");
        document.body.classList.remove("nav-open");
      }
    };

    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
    navToggle?.addEventListener("click", toggleNavigation);
    nav?.addEventListener("click", closeNavigation);

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
    let index = 0;
    const journeyTimer = window.setInterval(() => {
      if (!journeySteps.length) return;
      journeySteps[index].classList.remove("active");
      index = (index + 1) % journeySteps.length;
      journeySteps[index].classList.add("active");
    }, 2800);

    return () => {
      window.removeEventListener("scroll", setHeaderState);
      navToggle?.removeEventListener("click", toggleNavigation);
      nav?.removeEventListener("click", closeNavigation);
      revealObserver.disconnect();
      window.clearInterval(journeyTimer);
      document.body.classList.remove("nav-open");
    };
  }, []);

  return (
    <>
      <header className="site-header" data-header>
        <a className="brand-link" href="#top" aria-label="Advanta365 home">
          <Brand />
        </a>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>
        <nav id="site-nav" className="site-nav" data-nav>
          <a href="#services">Services</a>
          <a href="#journey">Journey</a>
          <a href="#framework">Framework</a>
          <a href="#learning">Enablement</a>
          <a href="#outcomes">Outcomes</a>
        </nav>
        <a className="header-cta" href="#contact">Plan your rollout</a>
      </header>

      <main id="top">
        <section className="hero section-dark" aria-labelledby="hero-title">
          <div className="hero-visual" aria-hidden="true">
            <div className="signal signal-a" />
            <div className="signal signal-b" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="platform-map">
              <div className="map-node node-primary">365</div>
              <div className="map-node node-teams">Teams</div>
              <div className="map-node node-sharepoint">SharePoint</div>
              <div className="map-node node-onedrive">OneDrive</div>
              <div className="map-node node-governance">Governance</div>
              <div className="map-node node-learning">Learning</div>
              <svg viewBox="0 0 760 460" preserveAspectRatio="none">
                <path d="M382 228 C258 120 178 121 113 86" />
                <path d="M382 228 C548 102 617 118 679 82" />
                <path d="M382 228 C197 246 170 323 107 360" />
                <path d="M382 228 C556 270 606 319 681 370" />
                <path d="M382 228 C393 334 392 377 384 420" />
              </svg>
            </div>
          </div>
          <div className="hero-content">
            <p className="eyebrow">Microsoft 365 adoption, governance, and rollout strategy</p>
            <h1 id="hero-title">Structured Microsoft 365 adoption that actually sticks.</h1>
            <p className="hero-copy">Advanta365 turns SharePoint Online, Microsoft Teams, OneDrive, and the broader Microsoft 365 ecosystem into a clear, governed, human-centered workplace experience.</p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="btn btn-primary" href="#contact">Start the conversation</a>
              <a className="btn btn-secondary" href="#journey">Explore the journey</a>
            </div>
            <div className="hero-proof" aria-label="Advanta365 focus areas">
              <span>Governance by design</span>
              <span>Wave-based rollout</span>
              <span>Role-based enablement</span>
            </div>
          </div>
        </section>

        <section className="value-section section-light" aria-labelledby="value-title">
          <div className="section-heading">
            <p className="eyebrow">Modern workplace transformation</p>
            <h2 id="value-title">Simplicity inside enterprise complexity.</h2>
            <p>Advanta365 gives organizations the structure, communication, learning, and governance needed to make Microsoft 365 feel coherent instead of chaotic.</p>
          </div>
          <div className="value-grid">
            <article className="value-card">
              <span className="card-icon">SP</span>
              <h3>SharePoint Online</h3>
              <p>Design intranets, hubs, templates, site owner journeys, and information architecture that make knowledge easier to publish and find.</p>
            </article>
            <article className="value-card">
              <span className="card-icon">T</span>
              <h3>Microsoft Teams</h3>
              <p>Establish collaboration models, lifecycle guidance, channel standards, and practical ways of working that reduce unmanaged sprawl.</p>
            </article>
            <article className="value-card">
              <span className="card-icon">OD</span>
              <h3>OneDrive</h3>
              <p>Guide file ownership, migration readiness, sharing behavior, and user confidence through approachable onboarding and reinforcement.</p>
            </article>
            <article className="value-card">
              <span className="card-icon">G</span>
              <h3>Governance</h3>
              <p>Translate policy into usable guardrails, decision rights, provisioning practices, and sustainable operating rhythms.</p>
            </article>
          </div>
          <div className="capability-strip" aria-label="Advanta365 capabilities">
            {["User Adoption", "Change Management", "Training and Enablement", "Rollout Strategy", "Champions Networks", "Communities of Practice", "Learning Portals"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="services" className="services-section section-muted" aria-labelledby="services-title">
          <div className="section-heading align-left">
            <p className="eyebrow">Capabilities</p>
            <h2 id="services-title">Everything needed to move from deployment to adoption.</h2>
          </div>
          <div className="service-grid">
            {services.map(([number, title, copy]) => (
              <article className="service-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="journey-section section-dark" aria-labelledby="journey-title">
          <div className="section-heading">
            <p className="eyebrow">The Advanta365 Journey</p>
            <h2 id="journey-title">A clear path from vision to sustained adoption.</h2>
          </div>
          <div className="journey-track" aria-label="Microsoft 365 adoption lifecycle">
            {journey.map(([number, title, copy], stepIndex) => (
              <article className={`journey-step${stepIndex === 0 ? " active" : ""}`} key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="framework" className="framework-section section-light" aria-labelledby="framework-title">
          <div className="framework-copy">
            <p className="eyebrow">Signature methodology</p>
            <h2 id="framework-title">Governed adoption, reinforced over time.</h2>
            <p>The Advanta365 framework connects business intent, platform design, people readiness, and operational governance into one disciplined rollout system.</p>
            <ul className="check-list">
              <li>Pilot to wave onboarding to sustainment</li>
              <li>Self-service supported by visible governance</li>
              <li>Learning reinforced through communities and check-ins</li>
              <li>Business-driven adoption measures and feedback loops</li>
            </ul>
          </div>
          <div className="method-panel" aria-label="Advanta365 methodology diagram">
            <div className="method-core">
              <span>Advanta365</span>
              <strong>Adoption Operating Model</strong>
            </div>
            <div className="method-ring ring-a">Business outcomes</div>
            <div className="method-ring ring-b">Governance model</div>
            <div className="method-ring ring-c">Platform patterns</div>
            <div className="method-ring ring-d">Learning journey</div>
            <div className="method-flow">
              <span>Pilot</span>
              <span>Wave onboarding</span>
              <span>Sustainment</span>
            </div>
          </div>
        </section>

        <section id="learning" className="learning-section section-muted" aria-labelledby="learning-title">
          <div className="section-heading">
            <p className="eyebrow">Learning and enablement</p>
            <h2 id="learning-title">Support that makes change feel achievable.</h2>
            <p>Advanta365 translates new ways of working into practical guidance, timely support, and confidence-building learning experiences.</p>
          </div>
          <div className="learning-layout">
            <article className="learning-feature">
              <h3>Role-based learning portals</h3>
              <p>Curated journeys for end users, site owners, champions, leaders, and support teams keep guidance simple and contextual.</p>
            </article>
            <div className="learning-list">
              {learningItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="outcomes" className="outcomes-section section-light" aria-labelledby="outcomes-title">
          <div className="section-heading align-left">
            <p className="eyebrow">Success outcomes</p>
            <h2 id="outcomes-title">Designed for measurable, sustainable progress.</h2>
          </div>
          <div className="outcome-grid">
            <article className="outcome-card">
              <strong>42%</strong>
              <span>faster onboarding readiness</span>
            </article>
            <article className="outcome-card">
              <strong>3x</strong>
              <span>clearer governance adoption</span>
            </article>
            <article className="outcome-card">
              <strong>28%</strong>
              <span>lower unmanaged collaboration risk</span>
            </article>
            <article className="outcome-card">
              <strong>86%</strong>
              <span>reported user confidence after enablement</span>
            </article>
          </div>
          <div className="outcome-tags" aria-label="Additional outcomes">
            {["Better search and findability", "Sustainable platform usage", "Reduced support burden", "Improved collaboration clarity"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="trust-section section-dark" aria-labelledby="trust-title">
          <div className="section-heading">
            <p className="eyebrow">Trusted by transformation leaders</p>
            <h2 id="trust-title">Enterprise credibility without the noise.</h2>
          </div>
          <div className="testimonial-grid">
            <article className="testimonial-card">
              <p>"Advanta365 gave our rollout a structure people could understand. Governance finally felt usable, and adoption became a shared responsibility."</p>
              <footer>
                <strong>Director of Digital Workplace</strong>
                <span>National public sector organization</span>
              </footer>
            </article>
            <article className="testimonial-card">
              <p>"Their enablement model connected leaders, site owners, and frontline users in a way that made Microsoft 365 feel less fragmented."</p>
              <footer>
                <strong>VP, Enterprise Technology</strong>
                <span>Financial services group</span>
              </footer>
            </article>
            <article className="testimonial-card">
              <p>"The wave-based approach gave us momentum without overwhelming teams. It was disciplined, practical, and very human."</p>
              <footer>
                <strong>Change Management Lead</strong>
                <span>Healthcare network</span>
              </footer>
            </article>
          </div>
          <div className="credibility-row" aria-label="Credibility indicators">
            {["Enterprise rollout planning", "Government-ready governance", "Accessibility-conscious enablement", "Executive reporting cadence"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="final-cta section-light" aria-labelledby="cta-title">
          <div>
            <p className="eyebrow">Modernize with confidence</p>
            <h2 id="cta-title">Build a Microsoft 365 experience your people will actually adopt.</h2>
            <p>Bring structure, readiness, and lasting adoption to your SharePoint Online, Microsoft Teams, OneDrive, and governance initiatives.</p>
          </div>
          <a className="btn btn-primary" href="mailto:hello@advanta365.example">Plan your Advanta365 roadmap</a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand-link" href="#top" aria-label="Advanta365 home">
            <Brand />
          </a>
          <p>Structured Microsoft 365 adoption, governance, rollout, and enablement for modern enterprises.</p>
        </div>
        <div>
          <h2>Services</h2>
          <a href="#services">Rollout strategy</a>
          <a href="#services">Governance</a>
          <a href="#learning">Training programs</a>
        </div>
        <div>
          <h2>Solutions</h2>
          <a href="#value-title">SharePoint Online</a>
          <a href="#value-title">Microsoft Teams</a>
          <a href="#value-title">OneDrive</a>
        </div>
        <div>
          <h2>Resources</h2>
          <a href="#journey">Adoption journey</a>
          <a href="#framework">Methodology</a>
          <a href="#outcomes">Outcomes</a>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="mailto:hello@advanta365.example">hello@advanta365.example</a>
          <a href="#">LinkedIn</a>
          <a href="#">Newsletter</a>
          <a href="#">Privacy</a>
        </div>
      </footer>
    </>
  );
}
