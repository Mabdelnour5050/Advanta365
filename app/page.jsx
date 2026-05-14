import SiteInteractions from "./site-interactions";
import { absoluteUrl, jsonLdScript, siteConfig } from "./seo-config";

const contactEmail = siteConfig.email;

const navItems = [
  ["#services", "Services"],
  ["#engagements", "Engagements"],
  ["#journey", "Journey"],
  ["#learning", "Enablement"],
  ["#outcomes", "Outcomes"]
];

const focusAreas = [
  ["SharePoint Online", "Information architecture, hub strategy, publishing patterns, site owner readiness, and content quality standards."],
  ["Microsoft Teams", "Team lifecycle, channel design, collaboration norms, governance, and working agreements that reduce sprawl."],
  ["OneDrive", "Migration readiness, sharing guidance, ownership decisions, and practical habits for confident file management."],
  ["Power Platform", "Citizen-maker guardrails, intake models, environment strategy, and enablement paths that keep innovation responsible."]
];

const services = [
  ["01", "Microsoft 365 Rollout Strategy", "Scope the launch, shape delivery waves, define readiness criteria, align leaders, and connect rollout activity to business outcomes."],
  ["02", "SharePoint Online Implementation", "Build modern portals, hubs, templates, content models, permissions patterns, and publishing practices for real work."],
  ["03", "Governance and Information Architecture", "Create clear ownership, lifecycle practices, naming standards, findability patterns, and guardrails people can follow."],
  ["04", "Change Management", "Plan sponsor messaging, stakeholder engagement, resistance management, communications, feedback channels, and support rhythms."],
  ["05", "Learning and Training Programs", "Deliver role-based journeys, workshops, job aids, clinics, office hours, and onboarding that meet each audience where they are."],
  ["06", "Adoption Measurement", "Connect usage, sentiment, support themes, training completion, and business indicators into an adoption view leaders can use."],
  ["07", "Site Owner Enablement", "Prepare owners for permissions, content quality, accessibility, publishing cadence, lifecycle decisions, and governance accountability."],
  ["08", "Template and Provisioning Strategy", "Standardize repeatable sites, teams, request flows, and intake models while leaving room for business-led delivery."]
];

const journey = [
  ["01", "Vision", "Clarify outcomes, leadership narrative, user needs, and the modern workplace experience the organization wants to create."],
  ["02", "Strategy", "Shape the adoption model, governance posture, roadmap, success measures, platform patterns, and stakeholder rhythm."],
  ["03", "Planning", "Prepare delivery waves, pilots, communications, learning journeys, migration cleanup, and support readiness."],
  ["04", "Enablement", "Equip champions, site owners, leaders, support teams, and end users with practical role-specific resources."],
  ["05", "Rollout", "Launch through structured waves, feedback channels, executive updates, communications, clinics, and visible support."],
  ["06", "Sustainment", "Measure adoption, mature governance, reinforce learning, improve content quality, and keep the platform healthy."]
];

const engagementModels = [
  {
    title: "Readiness Sprint",
    duration: "2-4 weeks",
    copy: "A focused diagnostic that turns scattered Microsoft 365 concerns into a prioritized rollout plan.",
    items: ["Stakeholder interviews", "Governance maturity review", "Adoption risk register", "90-day roadmap"]
  },
  {
    title: "Rollout Program",
    duration: "8-16 weeks",
    copy: "A structured implementation path for SharePoint, Teams, OneDrive, governance, training, and communications.",
    items: ["Wave plan", "Learning journeys", "Communications calendar", "Executive scorecard"]
  },
  {
    title: "Sustainment Partner",
    duration: "Monthly cadence",
    copy: "Ongoing adoption leadership that keeps owners enabled, governance fresh, and platform usage improving.",
    items: ["Office hours", "Owner coaching", "Adoption reporting", "Continuous improvement backlog"]
  }
];

const diagnosticSignals = [
  ["Ownership", "Who decides, approves, publishes, audits, and retires Microsoft 365 workspaces?"],
  ["Findability", "Can employees quickly locate trusted content, experts, and current guidance?"],
  ["Behavior", "Are Teams, SharePoint, and OneDrive used with clear norms instead of personal preference?"],
  ["Measurement", "Can leaders see readiness, risk, adoption, support demand, and value in one place?"]
];

const learningItems = [
  "Job aids",
  "Workshops",
  "Site owner onboarding",
  "Role-based training",
  "Reinforcement check-ins",
  "End-user adoption support",
  "Communities of practice",
  "Champions enablement"
];

const outcomeCards = [
  ["Executive visibility", "A clear adoption scorecard links rollout progress, readiness, governance, and user confidence."],
  ["Cleaner collaboration", "Teams, channels, SharePoint sites, and OneDrive sharing all follow a practical operating model."],
  ["Stronger ownership", "Site owners and champions understand what they own, how to maintain it, and when to escalate."],
  ["Sustainable change", "Training, communications, support, and improvement loops continue after launch day."]
];

const deliverables = [
  ["Adoption blueprint", "Vision, audiences, workstreams, roadmap, measures, governance principles, and delivery rhythm."],
  ["Governance playbook", "Decision rights, lifecycle rules, naming patterns, ownership model, and operating cadence."],
  ["Learning system", "Role-based curricula, job aids, owner enablement, champion activation, and reinforcement plan."],
  ["Rollout command center", "Wave tracker, risk register, communications calendar, support themes, and executive reporting."]
];

const faqs = [
  ["Can Advanta365 help if Microsoft 365 is already deployed?", "Yes. The work often starts after licenses and tools are already live, when adoption, governance, and employee confidence need structure."],
  ["Is this only for SharePoint?", "No. SharePoint is often central, but the approach covers Teams, OneDrive, Power Platform, governance, learning, and operating model design."],
  ["What does a first engagement usually produce?", "A readiness view, prioritized risk list, stakeholder map, governance recommendations, and a practical roadmap for rollout or improvement."],
  ["Do you support internal teams rather than replacing them?", "Yes. Advanta365 is designed to strengthen business leads, IT, communications, change, champions, and site owners so the organization can sustain the platform."]
];

const conversationTopics = [
  "Current Microsoft 365 pain points",
  "Adoption and governance gaps",
  "A practical next-step roadmap"
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    description: siteConfig.description,
    slogan: siteConfig.shortDescription,
    logo: absoluteUrl("/icon.svg")
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": absoluteUrl("/#organization")
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#professional-service"),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    serviceType: siteConfig.services,
    provider: {
      "@id": absoluteUrl("/#organization")
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Microsoft 365 adoption and governance services",
      itemListElement: services.map(([, title, copy]) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: title,
          description: copy,
          provider: {
            "@id": absoluteUrl("/#organization")
          }
        }
      }))
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl("/#faq"),
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  }
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

function CtaIcon() {
  return <span className="btn-icon" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      {structuredData.map((item) => (
        <script
          key={item["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(item) }}
        />
      ))}
      <SiteInteractions />
      <a className="skip-link" href="#main">Skip to content</a>

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
        <nav id="site-nav" className="site-nav" aria-label="Primary navigation" data-nav>
          {navItems.map(([href, label]) => (
            <a href={href} key={href}>{label}</a>
          ))}
          <a className="mobile-nav-cta" href="#contact">Plan your rollout</a>
        </nav>
        <a className="header-cta" href="#contact">Plan your rollout</a>
      </header>

      <main id="main">
        <section id="top" className="hero section-dark" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">Microsoft 365 adoption, governance, and rollout strategy</p>
            <h1 id="hero-title">Make Microsoft 365 easier to trust, govern, and adopt.</h1>
            <p className="hero-copy">
              Advanta365 helps organizations turn SharePoint Online, Microsoft Teams, OneDrive, and Power Platform into a clear modern workplace system with practical governance and confident users.
            </p>
            <div className="hero-actions" aria-label="Primary calls to action">
              <a className="btn btn-primary" href="#contact">Start the roadmap <CtaIcon /></a>
              <a className="btn btn-secondary" href="#diagnostic">Check readiness <CtaIcon /></a>
            </div>
            <div className="hero-proof" aria-label="Advanta365 focus areas">
              <span>90-day launch planning</span>
              <span>Governance by design</span>
              <span>Role-based enablement</span>
            </div>
            <p className="hero-note">For teams that already have Microsoft 365 in place and need the operating model, ownership, and user confidence to catch up.</p>
          </div>

          <div className="hero-visual" role="img" aria-label="Microsoft 365 adoption command center preview">
            <div className="visual-shell">
              <div className="visual-topbar">
                <span />
                <span />
                <span />
                <strong>Adoption command center</strong>
              </div>
              <div className="readiness-panel">
                <div>
                  <span className="panel-label">Rollout readiness</span>
                  <strong>Wave 2 on track</strong>
                </div>
                <div className="readiness-ring" aria-hidden="true"><span>82</span></div>
              </div>
              <div className="workspace-grid" aria-hidden="true">
                <div className="workspace-card active">
                  <span>SharePoint</span>
                  <strong>Hub redesign</strong>
                  <i />
                </div>
                <div className="workspace-card">
                  <span>Teams</span>
                  <strong>Lifecycle model</strong>
                  <i />
                </div>
                <div className="workspace-card">
                  <span>OneDrive</span>
                  <strong>Sharing guidance</strong>
                  <i />
                </div>
                <div className="workspace-card">
                  <span>Learning</span>
                  <strong>Owner path</strong>
                  <i />
                </div>
              </div>
              <div className="signal-board" aria-hidden="true">
                <span style={{ "--value": "72%" }}>Governance maturity</span>
                <span style={{ "--value": "61%" }}>Champion coverage</span>
                <span style={{ "--value": "88%" }}>Content readiness</span>
              </div>
            </div>
          </div>
        </section>

        <section className="value-section section-light" aria-labelledby="value-title">
          <div className="section-heading">
            <p className="eyebrow">Modern workplace transformation</p>
            <h2 id="value-title">Simplicity inside enterprise complexity.</h2>
            <p>Advanta365 gives Microsoft 365 programs the structure, communication, learning, and governance needed to feel coherent instead of chaotic.</p>
          </div>
          <div className="value-grid">
            {focusAreas.map(([title, copy]) => (
              <article className="value-card" key={title}>
                <span className="card-icon">{title.split(" ")[0].slice(0, 2)}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="capability-strip" aria-label="Advanta365 capabilities">
            {["User adoption", "Change management", "Training and enablement", "Rollout strategy", "Champions networks", "Communities of practice", "Learning portals"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="diagnostic" className="diagnostic-section section-muted" aria-labelledby="diagnostic-title">
          <div className="diagnostic-copy">
            <p className="eyebrow">Readiness diagnostic</p>
            <h2 id="diagnostic-title">Find the gaps before launch pressure exposes them.</h2>
            <p>Microsoft 365 adoption succeeds when leaders can see where ownership, behavior, information design, and measurement are strong enough to carry the change.</p>
          </div>
          <div className="diagnostic-grid">
            {diagnosticSignals.map(([title, copy]) => (
              <article className="diagnostic-card" key={title}>
                <span />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="engagements" className="engagement-section section-light" aria-labelledby="engagement-title">
          <div className="section-heading align-left">
            <p className="eyebrow">Engagement models</p>
            <h2 id="engagement-title">Start with the level of structure your rollout needs.</h2>
          </div>
          <div className="engagement-grid">
            {engagementModels.map((model) => (
              <article className="engagement-card" key={model.title} aria-label={`${model.title} engagement model`}>
                <div className="engagement-card-head">
                  <h3>{model.title}</h3>
                  <span>{model.duration}</span>
                </div>
                <p>{model.copy}</p>
                <ul>
                  {model.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
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
            <p className="eyebrow">The Advanta365 journey</p>
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
            {outcomeCards.map(([title, copy]) => (
              <article className="outcome-card" key={title}>
                <strong>{title}</strong>
                <span>{copy}</span>
              </article>
            ))}
          </div>
          <div className="outcome-tags" aria-label="Additional outcomes">
            {["Better search and findability", "Sustainable platform usage", "Reduced support burden", "Improved collaboration clarity"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="deliverables-section section-dark" aria-labelledby="deliverables-title">
          <div className="section-heading">
            <p className="eyebrow">Executive-ready deliverables</p>
            <h2 id="deliverables-title">Concrete assets your teams can keep using.</h2>
          </div>
          <div className="deliverable-grid">
            {deliverables.map(([title, copy]) => (
              <article className="deliverable-card" key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="credibility-row" aria-label="Credibility indicators">
            {["Enterprise rollout planning", "Government-ready governance", "Accessibility-conscious enablement", "Executive reporting cadence"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="faq-section section-light" aria-labelledby="faq-title">
          <div className="section-heading align-left">
            <p className="eyebrow">Common questions</p>
            <h2 id="faq-title">Practical answers before the first workshop.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map(([question, answer]) => (
              <article className="faq-item" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="final-cta section-light" aria-labelledby="cta-title">
          <div>
            <p className="eyebrow">Modernize with confidence</p>
            <h2 id="cta-title">Build a Microsoft 365 experience your people will actually adopt.</h2>
            <p>Bring structure, readiness, and lasting adoption to your SharePoint Online, Microsoft Teams, OneDrive, Power Platform, and governance initiatives.</p>
          </div>
          <div className="contact-panel">
            <span>Best first step</span>
            <strong>Book a roadmap conversation</strong>
            <p>Share what is live, what feels messy, and what your leaders need to see next.</p>
            <ul aria-label="Roadmap conversation topics">
              {conversationTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <a className="btn btn-primary" href={`mailto:${contactEmail}?subject=Advanta365%20roadmap%20conversation`}>
              Email Advanta365 <CtaIcon />
            </a>
          </div>
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
          <a href="#diagnostic">Readiness diagnostic</a>
          <a href="#framework">Methodology</a>
          <a href="#outcomes">Outcomes</a>
        </div>
        <div>
          <h2>Contact</h2>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href="#diagnostic">Readiness review</a>
          <a href="#faq-title">FAQ</a>
          <a href="#contact">Roadmap conversation</a>
        </div>
      </footer>
    </>
  );
}
