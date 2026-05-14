import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Share2, Users, HardDrive, Zap, CheckCircle2, HelpCircle, BookOpen, Award, FileText, Mail, ChevronDown, Sparkles, Target, Rocket, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Content data
const siteConfig = {
  name: "Advanta365",
  tagline: "Microsoft 365 adoption, governance, and rollout strategy",
  description: "Advanta365 helps organizations turn SharePoint Online, Microsoft Teams, OneDrive, and Power Platform into a clear modern workplace system with practical governance and confident users.",
  email: "hello@advanta365.com",
  shortDescription: "For teams that already have Microsoft 365 in place and need the operating model, ownership, and user confidence to catch up."
};

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#engagements", label: "Engagements" },
  { href: "#journey", label: "Journey" },
  { href: "#learning", label: "Enablement" },
  { href: "#outcomes", label: "Outcomes" }
];

const focusAreas = [
  { title: "SharePoint Online", description: "Information architecture, hub strategy, publishing patterns, site owner readiness, and content quality standards.", icon: Share2 },
  { title: "Microsoft Teams", description: "Team lifecycle, channel design, collaboration norms, governance, and working agreements that reduce sprawl.", icon: Users },
  { title: "OneDrive", description: "Migration readiness, sharing guidance, ownership decisions, and practical habits for confident file management.", icon: HardDrive },
  { title: "Power Platform", description: "Citizen-maker guardrails, intake models, environment strategy, and enablement paths that keep innovation responsible.", icon: Zap }
];

const services = [
  { number: "01", title: "Microsoft 365 Rollout Strategy", description: "Scope the launch, shape delivery waves, define readiness criteria, align leaders, and connect rollout activity to business outcomes." },
  { number: "02", title: "SharePoint Online Implementation", description: "Build modern portals, hubs, templates, content models, permissions patterns, and publishing practices for real work." },
  { number: "03", title: "Governance and Information Architecture", description: "Create clear ownership, lifecycle practices, naming standards, findability patterns, and guardrails people can follow." },
  { number: "04", title: "Change Management", description: "Plan sponsor messaging, stakeholder engagement, resistance management, communications, feedback channels, and support rhythms." },
  { number: "05", title: "Learning and Training Programs", description: "Deliver role-based journeys, workshops, job aids, clinics, office hours, and onboarding that meet each audience where they are." },
  { number: "06", title: "Adoption Measurement", description: "Connect usage, sentiment, support themes, training completion, and business indicators into an adoption view leaders can use." },
  { number: "07", title: "Site Owner Enablement", description: "Prepare owners for permissions, content quality, accessibility, publishing cadence, lifecycle decisions, and governance accountability." },
  { number: "08", title: "Template and Provisioning Strategy", description: "Standardize repeatable sites, teams, request flows, and intake models while leaving room for business-led delivery." }
];

const journey = [
  { number: "01", title: "Vision", description: "Clarify outcomes, leadership narrative, user needs, and the modern workplace experience the organization wants to create." },
  { number: "02", title: "Strategy", description: "Shape the adoption model, governance posture, roadmap, success measures, platform patterns, and stakeholder rhythm." },
  { number: "03", title: "Planning", description: "Prepare delivery waves, pilots, communications, learning journeys, migration cleanup, and support readiness." },
  { number: "04", title: "Enablement", description: "Equip champions, site owners, leaders, support teams, and end users with practical role-specific resources." },
  { number: "05", title: "Rollout", description: "Launch through structured waves, feedback channels, executive updates, communications, clinics, and visible support." },
  { number: "06", title: "Sustainment", description: "Measure adoption, mature governance, reinforce learning, improve content quality, and keep the platform healthy." }
];

const engagementModels = [
  { title: "Readiness Sprint", duration: "2-4 weeks", description: "A focused diagnostic that turns scattered Microsoft 365 concerns into a prioritized rollout plan.", items: ["Stakeholder interviews", "Governance maturity review", "Adoption risk register", "90-day roadmap"] },
  { title: "Rollout Program", duration: "8-16 weeks", description: "A structured implementation path for SharePoint, Teams, OneDrive, governance, training, and communications.", items: ["Wave plan", "Learning journeys", "Communications calendar", "Executive scorecard"], featured: true },
  { title: "Sustainment Partner", duration: "Monthly cadence", description: "Ongoing adoption leadership that keeps owners enabled, governance fresh, and platform usage improving.", items: ["Office hours", "Owner coaching", "Adoption reporting", "Continuous improvement backlog"] }
];

const diagnosticSignals = [
  { title: "Ownership", question: "Who decides, approves, publishes, audits, and retires Microsoft 365 workspaces?" },
  { title: "Findability", question: "Can employees quickly locate trusted content, experts, and current guidance?" },
  { title: "Behavior", question: "Are Teams, SharePoint, and OneDrive used with clear norms instead of personal preference?" },
  { title: "Measurement", question: "Can leaders see readiness, risk, adoption, support demand, and value in one place?" }
];

const learningItems = ["Job aids", "Workshops", "Site owner onboarding", "Role-based training", "Reinforcement check-ins", "End-user adoption support", "Communities of practice", "Champions enablement"];

const outcomeCards = [
  { title: "Executive visibility", description: "A clear adoption scorecard links rollout progress, readiness, governance, and user confidence.", icon: TrendingUp },
  { title: "Cleaner collaboration", description: "Teams, channels, SharePoint sites, and OneDrive sharing all follow a practical operating model.", icon: Users },
  { title: "Stronger ownership", description: "Site owners and champions understand what they own, how to maintain it, and when to escalate.", icon: Target },
  { title: "Sustainable change", description: "Training, communications, support, and improvement loops continue after launch day.", icon: Rocket }
];

const deliverables = [
  { title: "Adoption blueprint", description: "Vision, audiences, workstreams, roadmap, measures, governance principles, and delivery rhythm." },
  { title: "Governance playbook", description: "Decision rights, lifecycle rules, naming patterns, ownership model, and operating cadence." },
  { title: "Learning system", description: "Role-based curricula, job aids, owner enablement, champion activation, and reinforcement plan." },
  { title: "Rollout command center", description: "Wave tracker, risk register, communications calendar, support themes, and executive reporting." }
];

const faqs = [
  { question: "Can Advanta365 help if Microsoft 365 is already deployed?", answer: "Yes. The work often starts after licenses and tools are already live, when adoption, governance, and employee confidence need structure." },
  { question: "Is this only for SharePoint?", answer: "No. SharePoint is often central, but the approach covers Teams, OneDrive, Power Platform, governance, learning, and operating model design." },
  { question: "What does a first engagement usually produce?", answer: "A readiness view, prioritized risk list, stakeholder map, governance recommendations, and a practical roadmap for rollout or improvement." },
  { question: "Do you support internal teams rather than replacing them?", answer: "Yes. Advanta365 is designed to strengthen business leads, IT, communications, change, champions, and site owners so the organization can sustain the platform." }
];

const conversationTopics = ["Current Microsoft 365 pain points", "Adoption and governance gaps", "A practical next-step roadmap"];
const heroProofPoints = ["90-day launch planning", "Governance by design", "Role-based enablement"];

// Header Component
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container flex items-center justify-between h-20">
        <motion.a href="#" className="flex items-center gap-3 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-primary to-cyan flex items-center justify-center text-white font-bold text-lg shadow-lg">A</div>
          <span className="font-bold text-xl hidden sm:inline text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{siteConfig.name}</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a key={item.href} href={item.href} className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group" whileHover={{ scale: 1.05 }}>
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-primary to-cyan group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <motion.a href="#contact" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get Started
          </motion.a>
        </div>

        <motion.button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" whileTap={{ scale: 0.95 }}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }} className="md:hidden overflow-hidden border-t border-border bg-white/95 backdrop-blur-md">
        <nav className="container py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:bg-blue-light hover:text-foreground transition-all" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-primary to-cyan hover:shadow-lg transition-all mt-2">
            Get Started
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}

// Main Home Component
export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section - Enhanced */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663658671796/Bx37Sphrgbg8vYBpMkwZt5/hero-background-modern-jXP7ma4jVqctPSzFzWL2NG.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 -z-10" />
          <div className="absolute inset-0 backdrop-blur-sm -z-10" />

          <motion.div className="container max-w-5xl z-10 relative" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-white font-semibold text-sm border border-white/20 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>{siteConfig.tagline}</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="text-6xl md:text-8xl font-bold text-center text-white mb-8 leading-tight drop-shadow-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Make Microsoft 365 <span className="bg-gradient-to-r from-cyan via-blue-primary to-orange bg-clip-text text-transparent drop-shadow-lg">easier to trust, govern, and adopt.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }} className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              {siteConfig.description}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-primary to-cyan hover:shadow-2xl transition-all duration-300 group text-lg shadow-lg" whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0, 82, 204, 0.4)' }} whileTap={{ scale: 0.95 }}>
                Start the roadmap
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>
              <motion.a href="#diagnostic" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 text-lg" whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }} whileTap={{ scale: 0.95 }}>
                Check readiness
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }} className="flex flex-wrap justify-center gap-3 mb-12">
              {heroProofPoints.map((point, index) => (
                <motion.div key={index} className="px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm font-semibold text-white shadow-lg" whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.25)' }}>
                  ✓ {point}
                </motion.div>
              ))}
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }} className="text-center text-base text-white/80 max-w-2xl mx-auto drop-shadow-md">
              {siteConfig.shortDescription}
            </motion.p>
          </motion.div>

          <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 12, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-center justify-center">
              <div className="w-1 h-2 bg-white/40 rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Focus Areas - Bento Grid Style */}
        <section className="section-padding bg-gradient-to-b from-white via-white to-blue-light/20">
          <div className="container">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Focus Areas</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Comprehensive expertise across the Microsoft 365 platform</p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div key={index} className="card-glass p-8 group cursor-pointer" whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <motion.div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-light to-cyan-light flex items-center justify-center group-hover:shadow-lg transition-all" whileHover={{ rotate: 10 }}>
                          <Icon className="w-8 h-8 text-blue-primary" />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{area.title}</h3>
                        <p className="text-sm text-foreground/60 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Services - Enhanced Grid */}
        <section id="services" className="section-padding bg-white">
          <div className="container">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Eight core services to guide your Microsoft 365 journey</p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.05 }} viewport={{ once: true }}>
              {services.map((service, index) => (
                <motion.div key={index} className="card-premium group relative overflow-hidden" whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-light to-cyan-light rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300 opacity-50" />
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-blue-primary/15 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{service.number}</div>
                    <h3 className="font-semibold text-lg text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Engagements - Featured Card Highlight */}
        <section id="engagements" className="section-padding bg-gradient-to-b from-white to-indigo-light/30">
          <div className="container">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Engagement Models</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Choose the engagement model that fits your organization</p>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
              {engagementModels.map((model, index) => (
                <motion.div key={index} className={`card-premium transition-all duration-300 relative overflow-hidden ${model.featured ? 'md:scale-105 md:shadow-2xl border-2 border-blue-primary' : ''}`} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                  {model.featured && (
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-blue-primary to-cyan text-white text-xs font-bold rounded-bl-xl shadow-lg">
                      ⭐ Popular
                    </div>
                  )}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-xl text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{model.title}</h3>
                    </div>
                    <div className="inline-block px-4 py-2 rounded-full bg-blue-light text-blue-primary text-xs font-bold mb-6 border border-blue-primary/20">{model.duration}</div>
                    <p className="text-sm text-foreground/60 mb-6 leading-relaxed">{model.description}</p>
                    <div className="space-y-3 mb-6">
                      {model.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                    <motion.button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-primary to-cyan hover:shadow-lg transition-all duration-200 w-full text-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Journey - Interactive Timeline */}
        <section id="journey" className="section-padding bg-white">
          <div className="container">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>The Adoption Journey</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Six phases to successful Microsoft 365 adoption</p>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue via-cyan to-orange -translate-x-1/2" />
              <div className="space-y-12">
                {journey.map((phase, index) => (
                  <motion.div key={index} className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <motion.div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-primary to-cyan border-4 border-white shadow-lg glow" whileHover={{ scale: 1.3 }} />
                    </div>
                    <motion.div className="flex-1 card-glass p-8 group" whileHover={{ y: -4 }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 md:hidden">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-primary to-cyan flex items-center justify-center text-white font-bold">{phase.number}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{phase.title}</h3>
                          <p className="text-sm text-foreground/60 leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diagnostic - Enhanced */}
        <section id="diagnostic" className="section-padding bg-gradient-to-b from-white to-orange-light/20">
          <div className="container">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Readiness Signals</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Four key indicators of Microsoft 365 adoption readiness</p>
            </motion.div>

            <motion.div className="grid md:grid-cols-2 gap-6 mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
              {diagnosticSignals.map((signal, index) => (
                <motion.div key={index} className="card-glass p-8 group" whileHover={{ y: -4 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <motion.div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-light to-orange-light flex items-center justify-center group-hover:shadow-lg transition-all" whileHover={{ rotate: -10 }}>
                        <HelpCircle className="w-7 h-7 text-orange" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{signal.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{signal.question}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="p-8 rounded-2xl bg-gradient-to-r from-blue-light via-cyan-light to-blue-light border-2 border-blue-primary/30 backdrop-blur-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Ready for a Readiness Assessment?</h3>
                <p className="text-foreground/70 mb-6">Let's evaluate your organization's Microsoft 365 readiness and create a tailored roadmap.</p>
                <motion.a href="#contact" className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Schedule Your Assessment
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning - Grid Showcase */}
        <section id="learning" className="section-padding bg-white">
          <div className="container">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Learning & Enablement</h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Comprehensive learning programs to drive adoption</p>
            </motion.div>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.05 }} viewport={{ once: true }}>
              {learningItems.map((item, index) => (
                <motion.div key={index} className="card-glass p-6 text-center group cursor-pointer" whileHover={{ y: -4, scale: 1.05 }} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
                  <div className="flex flex-col items-center gap-3">
                    <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-light to-cyan-light flex items-center justify-center group-hover:shadow-lg transition-all" whileHover={{ rotate: 10 }}>
                      <BookOpen className="w-6 h-6 text-blue-primary" />
                    </motion.div>
                    <p className="text-sm font-medium text-foreground">{item}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Outcomes - Icon Cards */}
        <section id="outcomes" className="section-padding bg-gradient-to-b from-white to-indigo-light/20">
          <div className="container">
            <motion.div className="mb-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Expected Outcomes</h2>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto">What you'll achieve with Advanta365</p>
              </motion.div>

              <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
                {outcomeCards.map((outcome, index) => {
                  const Icon = outcome.icon;
                  return (
                    <motion.div key={index} className="card-premium group" whileHover={{ y: -6 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                      <div className="flex gap-3 mb-4">
                        <motion.div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-light to-cyan-light flex items-center justify-center" whileHover={{ rotate: 10 }}>
                          <Icon className="w-6 h-6 text-blue-primary" />
                        </motion.div>
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{outcome.title}</h3>
                      <p className="text-sm text-foreground/60 leading-relaxed">{outcome.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Key Deliverables</h2>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Tangible assets to guide your adoption</p>
              </motion.div>

              <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
                {deliverables.map((deliverable, index) => (
                  <motion.div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-blue-light to-cyan-light border border-blue-primary/20 shadow-sm hover:shadow-lg transition-all duration-300 group" whileHover={{ y: -6 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                    <div className="flex gap-3 mb-4">
                      <motion.div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center" whileHover={{ rotate: -10 }}>
                        <FileText className="w-6 h-6 text-blue-primary" />
                      </motion.div>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{deliverable.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{deliverable.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ - Accordion */}
        <section className="section-padding bg-white">
          <div className="container max-w-3xl">
            <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2>
              <p className="text-lg text-foreground/60">Everything you need to know about Advanta365</p>
            </motion.div>

            <motion.div className="space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.05 }} viewport={{ once: true }}>
              {faqs.map((faq, index) => (
                <motion.div key={index} className="card-glass overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                  <motion.button onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/50 transition-colors text-left" whileHover={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                    <h3 className="font-semibold text-foreground pr-4" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.question}</h3>
                    <motion.div animate={{ rotate: openFaqIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                      <ChevronDown className="w-5 h-5 text-blue-primary" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="border-t border-white/30">
                        <p className="px-6 py-4 text-sm text-foreground/70 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact - CTA Section */}
        <section id="contact" className="section-padding bg-gradient-to-b from-white via-indigo-light/20 to-blue-light/30">
          <div className="container">
            <motion.div className="max-w-4xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to transform your
                  <span className="block bg-gradient-to-r from-blue via-cyan to-orange bg-clip-text text-transparent">Microsoft 365 adoption?</span>
                </h2>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">Let's discuss how Advanta365 can help your organization succeed.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-6 mb-12">
                {conversationTopics.map((topic, index) => (
                  <motion.div key={index} className="card-glass p-6 text-center group" whileHover={{ y: -4 }}>
                    <p className="text-foreground font-medium">{topic}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a href={`mailto:${siteConfig.email}`} className="btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Mail className="w-5 h-5" />
                  Email us
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                <motion.button className="btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Schedule a call
                </motion.button>
              </motion.div>

              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-sm text-foreground/60 mt-12">
                We typically respond within 24 hours. Let's explore how we can support your Microsoft 365 journey.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer - Enhanced */}
      <footer className="bg-navy text-white py-16">
        <div className="container">
          <motion.div className="grid md:grid-cols-4 gap-8 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-primary to-cyan flex items-center justify-center font-bold text-sm shadow-lg">A</div>
                <span className="font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{siteConfig.name}</span>
              </div>
              <p className="text-sm text-white/60">Microsoft 365 adoption, governance, and rollout strategy for modern organizations.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Rollout Strategy</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Implementation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Governance</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Change Management</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/60 hover:text-white transition-colors block mb-2">
                {siteConfig.email}
              </a>
              <p className="text-xs text-white/40">Available Monday–Friday, 9 AM–5 PM EST</p>
            </div>
          </motion.div>

          <div className="border-t border-white/10 pt-8">
            <motion.div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
