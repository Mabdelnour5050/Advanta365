// Single source of truth for ADVANTA365 site content.

export const siteConfig = {
  name: "ADVANTA365",
  tagline: "Enterprise Microsoft 365 adoption, governance, and rollout — built for the real world.",
  shortDescription:
    "A structured framework that turns Microsoft 365 into a governed, scalable, and sustainable digital workplace.",
  description:
    "ADVANTA365 is an enterprise-grade Microsoft 365 adoption, governance, implementation, and enablement framework. It helps large, complex organizations deploy, govern, scale, and sustain modern digital workplaces built on SharePoint Online, Microsoft Teams, OneDrive, and the broader Microsoft 365 ecosystem.",
  email: "hello@advanta365.com",
  ctaPrimary: "Start a roadmap conversation",
  ctaSecondary: "Request a readiness review",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/framework", label: "Framework" },
  { href: "/wow", label: "WOW Program" },
  { href: "/governance", label: "Governance" },
  { href: "/adoption", label: "Adoption" },
  { href: "/microsoft-365", label: "Microsoft 365" },
  { href: "/why", label: "Why ADVANTA365" },
  { href: "/contact", label: "Contact" },
];

export const valuePropositions = [
  "Transform Microsoft 365 from a collection of tools into a governed, scalable, and sustainable digital workplace.",
  "Enterprise Microsoft 365 adoption and governance built for real-world organizations.",
  "Modern workplace transformation driven by governance, enablement, and structured adoption.",
];

export const philosophyBeliefs = [
  "Adoption is business-driven, not IT-driven alone.",
  "Governance must be visible, practical, and understandable.",
  "Learning must continue beyond initial rollout.",
  "People require guided onboarding tailored to their role.",
  "End users need clarity and simplicity.",
  "Site Owners need deeper operational understanding.",
  "Information Management and governance roles require dedicated enablement.",
  "Executive sponsorship must translate into real accountability.",
];

export const corePrinciples = [
  { title: "Business-Driven Ownership", description: "Business areas own their content and operational adoption — not central IT alone." },
  { title: "Centrally Enabled Delivery", description: "A central team provides governance, tools, enablement, and support that scale." },
  { title: "Governance by Design", description: "Governance is embedded directly into provisioning and onboarding experiences." },
  { title: "Role-Based Enablement", description: "Site Owners, IM leads, end users, and executives each get tailored onboarding." },
  { title: "Structured Adoption", description: "Users progress through guided onboarding journeys rather than one-off training." },
  { title: "Reinforcement Over Time", description: "Adoption is reinforced through workshops, check-ins, CoPs, and learning portals." },
  { title: "Sustainability by Design", description: "The platform and operating model continue evolving beyond initial rollout." },
];

export const sevenStages = [
  { number: "01", title: "Make the Case", description: "Build organizational awareness, urgency, sponsorship, and executive alignment for the modern workplace." },
  { number: "02", title: "Plan Your Approach", description: "Define governance, rollout sequencing, onboarding structure, communications, and support models." },
  { number: "03", title: "Design the Platform", description: "Build templates, metadata structures, provisioning models, governance controls, and information architecture." },
  { number: "04", title: "Prepare Your People", description: "Identify Site Owners, champions, IM roles, governance leads, and onboarding cohorts." },
  { number: "05", title: "Communicate and Engage", description: "Launch awareness campaigns, onboarding messaging, executive communications, and engagement activities." },
  { number: "06", title: "Execute the Rollout", description: "Deliver structured onboarding workshops, provisioning, migrations, adoption support, and rollout waves." },
  { number: "07", title: "Sustain and Improve", description: "Operate Communities of Practice, evolve templates, enhance learning, reinforce governance, monitor maturity." },
];

export const deliveryFlow = ["Vision", "Strategy", "Planning", "Enablement", "Rollout", "Sustainment"];

export const rolloutLifecycle = [
  { phase: "Pilot", description: "Validate governance, onboarding, learning assets, templates, and support models with a carefully selected pilot group." },
  { phase: "Wave Onboarding", description: "Structured rollout in waves — each including Site Owners, IM representatives, governance roles, learning, and reinforcement." },
  { phase: "Cutover", description: "Guided migration, user onboarding, communications, and adoption reinforcement as each wave goes live." },
  { phase: "Community of Practice", description: "Site Owners and governance leads join an ongoing peer community that reinforces learning and shares lessons." },
  { phase: "Continuous Improvement", description: "Templates, learning content, and governance evolve based on real adoption data and feedback." },
];

export const fasterFramework = [
  { letter: "F", title: "Foundational", description: "Build the required foundations — sponsorship, governance, platform, and people." },
  { letter: "A", title: "Alignment", description: "Align leadership, governance, stakeholders, and business priorities." },
  { letter: "S", title: "Safeguards", description: "Embed governance and controls into provisioning and daily work." },
  { letter: "T", title: "Training", description: "Enable users through structured, role-based learning journeys." },
  { letter: "E", title: "Evolution", description: "Continuously improve templates, learning, and operating practices." },
  { letter: "R", title: "Replication", description: "Scale consistently and repeatably across the enterprise." },
];

export const wowSessions = [
  { number: "WOW 1", title: "Kick-Off", items: ["Introduction to Microsoft 365", "Roles and responsibilities", "Governance overview", "Day-in-the-life scenarios"] },
  { number: "WOW 2", title: "SharePoint Online Walkthrough", items: ["Navigation", "Libraries", "Metadata", "Search", "Views and filters"] },
  { number: "WOW 3", title: "Content Planning — Vision", items: ["Site planning", "Information architecture", "Template planning", "Metadata planning"] },
  { number: "WOW 4", title: "Content Planning — Build", items: ["Provisioning", "Building sites", "Applying metadata", "Navigation design"] },
  { number: "WOW 5", title: "Permissions Management", items: ["Groups", "Members", "Visitors", "Permission inheritance", "Security planning"] },
  { number: "WOW 6", title: "Cutover and Adoption", items: ["Readiness", "Migration planning", "User onboarding", "Communications", "Adoption reinforcement"] },
];

export const reinforcementChannels = [
  "Check-ins",
  "Coaching sessions",
  "Communities of Practice",
  "Learning Portal",
  "FAQs and job aids",
  "Office Hours",
  "Ask Me Anything (AMA) sessions",
  "Peer support",
  "Champions networks",
];

export const communityOfPracticeTopics = [
  "Permissions management",
  "Metadata",
  "Custom views",
  "Site structure",
  "Navigation",
  "Page design",
  "Governance",
  "Search optimization",
  "Information architecture",
];

export const learningPortalContents = [
  "Role-based learning journeys",
  "Job aids",
  "FAQs",
  "Playbooks",
  "Training materials",
  "Videos",
  "Announcements",
  "Governance guidance",
  "Recorded sessions",
  "Quick reference guides",
];

export const modules = [
  { name: "ADVANTA Requests — Workspaces", description: "Governed workspace provisioning. Business users request Teams, sites, and collaboration spaces through approved templates with embedded controls.", points: ["Self-service intake", "Embedded governance", "Approved templates", "Managed lifecycle"] },
  { name: "ADVANTA Requests — Repositories", description: "Provisioning of libraries, metadata, repositories, and information structures aligned to enterprise IM standards.", points: ["Repository intake", "Metadata defaults", "Library standards", "Information architecture alignment"] },
  { name: "ADVANTA Blueprint", description: "Template and governance catalog management. A controlled inventory of approved templates and patterns used across the enterprise.", points: ["Template catalog", "Pattern library", "Governance metadata", "Version control"] },
  { name: "ADVANTA Classify", description: "Metadata, taxonomy, content types, and classification management — making information findable, governed, and consistent.", points: ["Enterprise taxonomy", "Content types", "Classification rules", "Findability standards"] },
  { name: "ADVANTA Engage", description: "The people-side engine — change management, adoption, learning, communications, and sustainment that make the platform real.", points: ["Change management", "Learning journeys", "Communications", "Community of Practice"] },
];

export const businessProblems = [
  { title: "Uncontrolled Microsoft Teams Sprawl", description: "Organizations create unmanaged collaboration spaces with inconsistent governance and no clear ownership." },
  { title: "SharePoint Chaos", description: "No standardization, inconsistent structures, poor metadata, and weak search experiences." },
  { title: "Poor Adoption", description: "Users continue using email, shared drives, or legacy repositories despite new platforms being available." },
  { title: "Governance Failure", description: "Policies exist on paper but are not embedded into provisioning, onboarding, or daily user workflows." },
  { title: "Training That Does Not Stick", description: "One-time training sessions fail to produce long-term behavioural change or operational confidence." },
  { title: "Lack of Ownership", description: "Nobody understands who owns sites, content, permissions, or lifecycle decisions." },
  { title: "Inconsistent User Experience", description: "Every business group structures information differently — there is no shared digital workplace experience." },
  { title: "Poor Findability", description: "Content becomes impossible to locate due to inconsistent metadata, naming, and structure." },
  { title: "Failed Change Management", description: "Organizations deploy technology without structured onboarding, communications, or adoption reinforcement." },
];

export const differentiators = [
  { title: "Governance + Adoption Together", description: "Most solutions focus on one or the other. ADVANTA365 treats them as inseparable." },
  { title: "Business-Led Model", description: "The framework is owned by the business with central enablement — not IT-driven alone." },
  { title: "Role-Based Onboarding", description: "Site Owners, IM leads, end users, and executives each receive tailored experiences." },
  { title: "Structured Rollout Methodology", description: "A repeatable rollout engine — not isolated training sessions or one-off projects." },
  { title: "Sustainment Built-In", description: "Communities of Practice and learning ecosystems continue evolving long after rollout." },
  { title: "Enterprise Scale", description: "Designed specifically for large, complex, and regulated organizations." },
  { title: "Practical Change Management", description: "Grounded in operational reality — drawn from Prosci, ADKAR, and real enterprise experience." },
  { title: "Modern Microsoft 365 Expertise", description: "Built specifically around SharePoint Online, Microsoft Teams, OneDrive, and Microsoft 365 collaboration." },
];

export const microsoft365Focus = [
  {
    name: "SharePoint Online",
    role: "The enterprise content management platform and corporate knowledge repository.",
    themes: [
      "Metadata-driven organization",
      "Structured collaboration",
      "Governance-enabled self-service",
      "Search-first experiences",
      "Standardized templates",
      "Lifecycle management",
      "Integration with Teams and OneDrive",
    ],
  },
  {
    name: "Microsoft Teams",
    role: "The collaboration and communication layer — a hub for conversations, meetings, tasks, and files.",
    themes: [
      "Aligned to structured information management",
      "Governance that coexists with collaboration",
      "Lifecycle for teams and channels",
      "Integrated with SharePoint and OneDrive",
      "Not a replacement for governance",
    ],
  },
  {
    name: "OneDrive",
    role: "Personal work storage, draft collaboration, and individual productivity content.",
    themes: [
      "Personal and draft work",
      "Temporary working content",
      "Clear hand-off to SharePoint",
      "SharePoint remains the authoritative repository",
    ],
  },
];

export const focusAreasShort = [
  "SharePoint Online",
  "Microsoft Teams",
  "OneDrive",
  "Microsoft 365 Collaboration",
  "Modern Work",
  "Information Management",
  "Content Governance",
  "Metadata",
  "Search",
  "Permissions Management",
  "Site Ownership",
  "Digital Workplace Transformation",
  "User Adoption",
  "Change Management",
];

export const targetAudience = [
  "Government departments",
  "Enterprise organizations",
  "Microsoft 365 program teams",
  "Change management teams",
  "Information Management teams",
  "SharePoint Online implementation teams",
  "Digital workplace transformation teams",
  "CIO organizations",
  "Corporate services groups",
  "Knowledge management teams",
];

export const trainingPrinciples = [
  "Role-based",
  "Practical and scenario-driven",
  "Short-form where possible",
  "Reinforced over time",
  "Supported by job aids",
  "Built around real tasks",
];

export const communicationsChannels = [
  "Executive messages",
  "Intranet news",
  "Videos",
  "AMAs and town halls",
  "Learning portal updates",
  "Newsletters",
  "Champions networks",
  "Awareness campaigns",
];

export const adoptionSuccessFactors = [
  "Users understand WIIFM — what's in it for me",
  "Leadership visibly supports the initiative",
  "Users receive guided onboarding",
  "Learning continues over time",
  "Governance feels practical, not bureaucratic",
  "Tools simplify work rather than complicate it",
  "The experience feels modern and intuitive",
];
