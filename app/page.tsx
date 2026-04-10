import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Download,
  FileText,
  Github,
  Globe,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Server,
  Smartphone,
} from "lucide-react";

const stats = [
  { value: "6.5+", label: "Years building production software" },
  { value: "4", label: "Companies across product and consulting teams" },
  { value: "Web + Mobile", label: "Cross-platform delivery across the stack" },
];

const strengths = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Responsive, polished interfaces with React.js, TypeScript, Redux Toolkit, TailwindCSS, and design-to-code precision.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description:
      "Scalable APIs and microservices with Node.js, PostgreSQL, MongoDB, Redis, authentication flows, and distributed architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile Delivery",
    description:
      "Cross-platform mobile apps with React Native, native tooling, realtime features, and performance-focused debugging.",
  },
  {
    icon: Cloud,
    title: "Cloud & Product Ops",
    description:
      "AWS-powered workflows with S3, SQS, Lambda, Git-driven delivery, QA collaboration, and release ownership.",
  },
];

const experiences = [
  {
    role: "Senior React Native Developer",
    company: "Appstation Pvt. Ltd.",
    location: "Trivandrum, Kerala",
    period: "Sep 2023 - Present",
    summary:
      "Promoted for strong delivery across multiple projects, contributing to large-scale public transportation and sports booking products.",
    highlights: [
      "Worked on Qatar Rail using the Kony Platform to support smart card management and recharge flows for metro and tram users.",
      "Revamped BSporty from the ground up with pixel-perfect React Native UI based on Figma designs.",
      "Integrated Firebase Firestore chat and resolved critical production issues, helping reduce crash rate by roughly 30%.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Wingman Partners LLP",
    location: "Noida, Uttar Pradesh",
    period: "Jul 2022 - Aug 2023",
    summary:
      "Delivered across a distributed network management platform and an in-house corporate food ordering product in a microservices environment.",
    highlights: [
      "Built APIs with Node.js and PostgreSQL and handled file workflows with S3 signed URLs, SQS, and Lambda.",
      "Engineered admin panels and mobile applications with React.js and React Native, including complete API integrations.",
      "Led a small development team, drove code reviews, and coordinated with QA and PM stakeholders.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Certo Exim",
    location: "Kochi, Kerala",
    period: "Mar 2021 - May 2022",
    summary:
      "Built a social platform for film and entertainment professionals with a focus on scalable backend services and fast search experiences.",
    highlights: [
      "Implemented authentication systems with JWT, sessions, and refresh tokens using Node.js and MongoDB.",
      "Built user management, friend request workflows, and mutual-friends logic through REST APIs.",
      "Created client and admin dashboards using React.js and Redux.",
    ],
  },
  {
    role: "Systems Engineer / Backend Developer",
    company: "Fawzlabs Pvt. Ltd.",
    location: "Kochi, Kerala",
    period: "Apr 2019 - Jan 2021",
    summary:
      "Started by shaping backend services for education ERP products and a GPS logistics tracking platform.",
    highlights: [
      "Designed schema and REST APIs for attendance, grades, fee collection, and staff workflows.",
      "Integrated Redis caching and import/export pipelines for Excel and CSV-based data operations.",
      "Built location-tracking APIs and live map features for fleet monitoring.",
    ],
  },
];

const featuredWork = [
  {
    name: "Qatar Rail",
    type: "Public Transport App",
    impact:
      "Helped maintain and enhance smart card recharge and commuter workflows for a high-visibility transit app.",
  },
  {
    name: "BSporty",
    type: "Sports Facility Booking",
    impact:
      "Rebuilt the mobile experience with smoother booking journeys, realtime chat, and performance improvements.",
  },
  {
    name: "Qufree",
    type: "Corporate Food Ordering",
    impact:
      "Built APIs, admin tools, and mobile experiences for a product designed to streamline lunch ordering at scale.",
  },
  {
    name: "Entertainment Network Platform",
    type: "Community Product",
    impact:
      "Developed authentication, search, and dashboard experiences for a niche professional social network.",
  },
];

const sideProjects = [
  {
    name: "SideCast",
    stack: "Electron.js, Node.js, ADB, scrcpy, React.js",
    description:
      "A desktop app for real-time Android screen mirroring with live device detection and high-performance rendering.",
  },
  {
    name: "RESTly",
    stack: "Electron.js, React, Node.js, Redux Toolkit, Axios",
    description:
      "A REST API testing desktop client inspired by Postman, with endpoint execution, response inspection, and request history.",
  },
  {
    name: "create-mexn-app",
    stack: "Node.js, commander.js, degit, GitHub Actions",
    description:
      "An open-source CLI for scaffolding MERN-style projects with CommonJS, ESM, and TypeScript variants, published to npm.",
  },
];

const skillGroups = [
  {
    title: "Core Stack",
    items: ["React.js", "Node.js", "React Native", "TypeScript", "JavaScript"],
  },
  {
    title: "UI & Product",
    items: ["TailwindCSS", "Redux Toolkit", "shadcn/ui", "Figma-to-code", "Responsive design"],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "REST APIs"],
  },
  {
    title: "Delivery",
    items: ["GitHub", "Bitbucket", "Jira", "Confluence", "Agile collaboration"],
  },
];

const writingLinks = [
  "Implementation of RBAC with Node.js",
  "Some useful Linux commands",
];

const contactLinks = [
  {
    label: "Email",
    value: "donyvarkey@gmail.com",
    href: "mailto:donyvarkey@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 81138 38079",
    href: "tel:+918113838079",
    icon: Phone,
  },
  {
    label: "Website",
    value: "donymvarkey.com",
    href: "https://donymvarkey.com/",
    icon: Globe,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/donymvarkey",
    href: "https://www.linkedin.com/in/donymvarkey/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/donymvarkey",
    href: "https://github.com/donymvarkey",
    icon: Github,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-grid" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <header className="fade-up flex items-center justify-between gap-4 border-b border-white/15 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              Dony M Varkey
            </p>
            <p className="mt-2 text-sm text-[var(--soft)]">
              Full Stack Developer • React.js • Node.js • React Native
            </p>
          </div>
          <a
            href="/dony-m-varkey-resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-[var(--accent)] hover:bg-white/15"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="fade-up space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-2)]">
              <Layers3 className="h-4 w-4" />
              Available for impactful product work
            </div>

            <div className="max-w-4xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
                Software developer with 6 years 8 months of experience
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
                Building fast, polished digital products across web and mobile.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--soft)] sm:text-lg">
                I design and ship user-centric applications with React.js,
                Node.js, and React Native, pairing clean frontend execution with
                production-ready APIs, cloud workflows, and collaborative
                delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--highlight)] px-6 py-3 text-sm font-semibold text-[var(--ink-strong)] transition hover:translate-y-[-1px] hover:bg-[var(--highlight-strong)]"
              >
                Explore Experience
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/dony-m-varkey-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:bg-white/12"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-[1.75rem] p-5">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--soft)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up lg:justify-self-end">
            <div className="spotlight-card relative overflow-hidden rounded-[2rem] border border-white/15 p-7 shadow-[0_30px_120px_rgba(7,12,27,0.45)]">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--highlight)]/80 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                    Based in
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-lg font-medium text-white">
                    <MapPin className="h-5 w-5 text-[var(--accent-2)]" />
                    Alappuzha, Kerala, India
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
                  Open to opportunities
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "Node.js", "React Native", "TypeScript", "AWS"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-[1.25rem] border border-white/12 bg-white/6 px-4 py-3 transition hover:border-[var(--accent)]/50 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-white/10 p-2 text-[var(--accent-2)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                            {link.label}
                          </p>
                          <p className="mt-1 text-sm text-white">{link.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-[var(--soft)] transition group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-10 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-4">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;

            return (
              <article
                key={strength.title}
                className="fade-up glass-panel rounded-[1.75rem] p-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[var(--accent)]/12 p-3 text-[var(--accent-2)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  {strength.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--soft)]">
                  {strength.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="experience"
        className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12"
      >
        <div className="mb-12 max-w-3xl fade-up">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">
            A track record across product engineering, backend systems, and
            mobile delivery.
          </h2>
          <p className="section-copy">
            I have worked across transportation, ERP, logistics, and consumer
            products, balancing end-user polish with dependable architecture.
          </p>
        </div>

        <div className="relative space-y-6 before:absolute before:bottom-6 before:left-4 before:top-6 before:w-px before:bg-white/10 md:before:left-[8.45rem]">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="fade-up grid gap-5 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-[8rem_1fr]"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              <div className="relative pl-10 md:pl-0">
                <div className="absolute left-1 top-2 h-6 w-6 rounded-full border border-[var(--highlight)]/60 bg-[var(--canvas)] shadow-[0_0_0_6px_rgba(14,22,43,0.88)] md:left-auto md:right-[-1.18rem]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  {experience.period}
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-2)]">
                  {experience.company}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {experience.location}
                </p>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--soft)]">
                  {experience.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {experience.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex rounded-full border border-white/10 bg-black/10 px-4 py-2 text-sm leading-6 text-[var(--soft)]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-12">
        <div className="fade-up rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 backdrop-blur-xl">
          <p className="section-kicker">Selected Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
            Work that blends reliability, performance, and product clarity.
          </h2>
          <div className="mt-8 grid gap-4">
            {featuredWork.map((project) => (
              <article
                key={project.name}
                className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                  </div>
                  <Globe className="h-5 w-5 text-[var(--accent-2)]" />
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--soft)]">
                  {project.impact}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="fade-up rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="section-kicker">Personal Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
            Builder energy beyond client work.
          </h2>
          <div className="mt-8 space-y-4">
            {sideProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-[1.5rem] border border-white/10 bg-black/10 p-5"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--accent-2)]">
                  {project.stack}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--soft)]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div className="fade-up">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">
            Technical depth with a product-minded delivery style.
          </h2>
          <p className="section-copy">
            My work sits at the intersection of frontend craftsmanship, API
            design, and real-world release ownership.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="fade-up rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                {group.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/10 px-4 py-2 text-sm text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 pb-24 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12">
        <div className="fade-up rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
          <p className="section-kicker">Resume</p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
                View or download the full resume directly from the site.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--soft)]">
                The embedded preview makes it easy to scan the details, while
                the download action gives recruiters and hiring managers quick
                access to the full PDF.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/dony-m-varkey-resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:border-[var(--accent)] hover:bg-white/14"
              >
                <FileText className="h-4 w-4" />
                Open Resume
              </a>
              <a
                href="/dony-m-varkey-resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full bg-[var(--highlight)] px-5 py-3 text-sm font-semibold text-[var(--ink-strong)] transition hover:bg-[var(--highlight-strong)]"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)]">
            <iframe
              title="Dony M Varkey resume"
              src="/dony-m-varkey-resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
              className="h-[32rem] w-full bg-white"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="fade-up rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,183,77,0.16),rgba(20,32,61,0.2))] p-7 backdrop-blur-xl">
            <p className="section-kicker">Writing & Credentials</p>
            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Education
                </p>
                <p className="mt-2 text-lg font-medium text-white">
                  B.Tech in Information Technology
                </p>
                <p className="mt-1 text-sm leading-7 text-[var(--soft)]">
                  Amal Jyothi College of Engineering, APJ Abdul Kalam
                  Technological University, Kerala
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Certifications
                </p>
                <div className="mt-3 space-y-3 text-sm leading-7 text-[var(--soft)]">
                  <p>Certified Test Engineer, Tech Masters, Trivandrum</p>
                  <p>Red Hat Certified System Administrator (RHCSA)</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                  Technical Writing
                </p>
                <div className="mt-3 space-y-3">
                  {writingLinks.map((item) => (
                    <p key={item} className="text-sm leading-7 text-[var(--soft)]">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <p className="section-kicker">Let&apos;s Connect</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              Need someone who can move between UI polish, APIs, and product delivery?
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--soft)]">
              I enjoy building software that feels smooth for users and stable
              for teams shipping it in production.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:donyvarkey@gmail.com"
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/10 px-5 py-4 transition hover:border-[var(--accent)]/50 hover:bg-black/20"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[var(--accent-2)]" />
                  <span className="text-sm text-white">donyvarkey@gmail.com</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--soft)] transition group-hover:text-white" />
              </a>
              <a
                href="https://github.com/donymvarkey"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/10 px-5 py-4 transition hover:border-[var(--accent)]/50 hover:bg-black/20"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-[var(--accent-2)]" />
                  <span className="text-sm text-white">github.com/donymvarkey</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--soft)] transition group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/donymvarkey/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-black/10 px-5 py-4 transition hover:border-[var(--accent)]/50 hover:bg-black/20"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-[var(--accent-2)]" />
                  <span className="text-sm text-white">
                    linkedin.com/in/donymvarkey
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[var(--soft)] transition group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
