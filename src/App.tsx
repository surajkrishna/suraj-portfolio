import React, { type JSX } from "react";

type NavItem = {
  href: string;
  label: string;
};

type Project = {
  name: string;
  url?: string;
  title: string;
  stack: string;
  bullets: string[];
};

type Company = {
  company: string;
  role: string;
  domain?: string;
  period?: string;
  projects: Project[];
};

type Skills = {
  frontend: string[];
  backend: string[];
  cms: string[];
  tooling: string[];
  practices: string[];
};

type Highlight = {
  title: string;
  summary: string;
  impact: string;
};

const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#highlights", label: "Highlights" },
  { href: "#contact", label: "Contact" },
];

const experience: Company[] = [
  {
    company: "Coforge",
    role: "Technical Lead",
    domain: "Aviation & Travel",
    period: "2022 – Present",
    projects: [
      {
        name: "dnata",
        url: "https://www.dnata.com/en/",
        title: "Global Network & Corporate Website",
        stack:
          "React, Next.js, Redux, Context API, TypeScript, Tailwind, Node.js, Tridion, Docker, Storybook, Micro Frontend",
        bullets: [
          "Led development of the Global Network map experience enabling users to discover dnata services and locations worldwide.",
          "Designed reusable, CMS-driven React components integrated with Tridion, enabling content authors to manage experiences without developer intervention.",
          "Mentored junior developers, led code reviews, and participated in story grooming and sprint ceremonies.",
          "Collaborated with platform teams on performance, accessibility and end-to-end deployment using Docker-based CI/CD pipelines.",
        ],
      },
      {
        name: "Emirates Group Careers",
        url: "https://www.emiratesgroupcareers.com/",
        title: "Search & Apply Experience",
        stack: "React, JavaScript, HTML, CSS, jQuery, Umbraco",
        bullets: [
          "Enhanced Search & Apply pages with dynamic data from Umbraco, improving UX and search relevance.",
          "Implemented landing page search, redirection logic, and consistent behaviour across careers sub-pages.",
        ],
      },
      {
        name: "DDCR",
        url: "https://www.ddcr.org/",
        title: "Aviation & Conservation Website",
        stack: "React, Redux, ASP.NET, Umbraco",
        bullets: [
          "Built reusable components including advanced Flora & Fauna search and secure contact forms.",
          "Worked closely with stakeholders on performance, security, and content workflows.",
        ],
      },
    ],
  },
  {
    company: "Publicis Sapient",
    role: "Senior Associate Experience Technology",
    domain: "E‑commerce, Hospitality & Aviation",
    period: "2018 – 2022",
    projects: [
      {
        name: "Bed Bath & Beyond",
        url: "https://www.bedbathandbeyond.com",
        title: "E‑commerce Platform Modernisation",
        stack: "React, Redux, REST API, Webpack, Node.js",
        bullets: [
          "Migrated a large legacy jQuery codebase to a modern React + Redux architecture.",
          "Built core shopping, product listing and checkout experiences from scratch with reusable components.",
        ],
      },
      {
        name: "Marriott",
        url: "https://www.marriott.com/en-gb/default.mi",
        title: "Hospitality Micro Frontend Experience",
        stack: "React, Redux, Express, Koa, Styled Components, Storybook, Micro Frontend",
        bullets: [
          "Developed UI components for micro frontend-based hospitality flows.",
          "Documented components in Storybook and collaborated with distributed teams across time zones.",
        ],
      },
      {
        name: "Heathrow Airport",
        url: "https://www.heathrow.com/",
        title: "AEM-driven React Components",
        stack: "React, Redux, TypeScript, Tailwind, Jenkins, AEM",
        bullets: [
          "Built React components integrated with AEM for high-traffic aviation experiences.",
          "Contributed to accessibility, performance, and CI/CD improvements.",
        ],
      },
      {
        name: "Waters",
        url: "https://www.waters.com/nextgen/in/en.html",
        title: "E‑commerce & Headless Architecture",
        stack: "React, Redux, TypeScript, Tailwind, Node.js, AEM APIs",
        bullets: [
          "Owned flows from registration to checkout and confirmation for a global e‑commerce platform.",
          "Implemented headless components consuming AEM content APIs and mentored junior developers.",
        ],
      },
    ],
  },
  {
    company: "HCL Technologies",
    role: "Lead Engineer",
    domain: "Telecom",
    period: "2016 – 2018",
    projects: [
      {
        name: "AT&T UFRD (Upper Funnel Redesign)",
        url: "https://www.att.com/plans/wireless/",
        title: "Upper Funnel Experience",
        stack: "AEM, HTML, CSS, JavaScript",
        bullets: [
          "Redesigned homepage, navigation, search, and initial landing pages for AT&T wireless.",
          "Focused on performance, responsiveness, and conversion-driven UX for upper funnel stages.",
        ],
      },
    ],
  },
  {
    company: "Saigun Technologies",
    role: "Snr Web Designer",
    domain: "SaaS – HRMS",
    period: "2013 – 2016",
    projects: [
      {
        name: "Empxtrack HRMS & Corporate Site",
        url: "https://empxtrack.com/",
        title: "Marketing Site & Product UI",
        stack: "WordPress, HTML, CSS, JavaScript, Java (backend integration)",
        bullets: [
          "Maintained and redesigned the corporate website with SEO best practices.",
          "Translated HRMS product wireframes into pixel-perfect HTML and integrated with a Java backend.",
        ],
      },
    ],
  },
];

const skills: Skills = {
  frontend: [
    "React.js",
    "Next.js",
    "Redux",
    "Context API",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JSX",
    "Responsive Web",
    "Styled Components",
    "Google Maps API",
    "Handlebars",
  ],
  backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB", "JSON"],
  cms: ["AEM", "Umbraco", "Tridion", "WordPress", "Adobe CQ"],
  tooling: [
    "Webpack",
    "NPM",
    "SASS",
    "Chrome DevTools",
    "Git",
    "GitLab",
    "GitHub",
    "Jenkins",
    "ESLint",
    "Docker",
    "Figma",
    "GitHub Copilot",
    "GitLab Duo",
    "CI/CD Workflows",
  ],
  practices: [
    "Accessibility & Web Performance",
    "Micro Frontend Architecture",
    "Headless CMS",
    "Agile & Scrum",
    "Security Best Practices",
    "Mentoring & Team Handling",
    "Testing (Jest)",
    "Code Reviews",
  ],
};

const highlights: Highlight[] = [
  {
    title: "dnata Website Redesign & Development (Coforge)",
    summary:
      "Contributed to the redesign and development of the dnata corporate website, building performant React + Next.js components and integrating Google Maps for Global Network experiences.",
    impact:
      "Enhanced dnata's digital brand presence, improved usability, and delivered scalable patterns for future location-based features.",
  },
  {
    title: "Emirates Group Careers Portal (Coforge)",
    summary:
      "Worked on the redevelopment of the Emirates Group Careers portal, focusing on search and apply flows and integrating content from Umbraco.",
    impact:
      "Enabled a seamless global job search and application experience, improving discoverability and candidate journey.",
  },
  {
    title: "Bed Bath & Beyond React Migration (Publicis Sapient)",
    summary:
      "Helped migrate a legacy jQuery-heavy e‑commerce site to React + Redux, building modular components for product, cart and checkout.",
    impact:
      "Unlocked faster feature delivery, better performance, and improved developer experience across teams.",
  },
  {
    title: "Waters – React + AEM Commerce Experience (Publicis Sapient)",
    summary:
      "Contributed to a redesign of Waters' e‑commerce experience using React and AEM, including registration, product filtering, and checkout flows.",
    impact:
      "Improved conversion and allowed content and engineering teams to work independently through a headless integration pattern.",
  },
];

function Tag({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-200">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <div className="mb-8 space-y-2 text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-sm text-slate-300">{subtitle}</p>
      )}
    </div>
  );
}

export default function PortfolioPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-500/20 via-slate-950 to-slate-950 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/40">
              <span className="text-sm font-bold tracking-tight text-sky-300">
                SK
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-50">Suraj Krishna</p>
              <p className="text-xs text-slate-400">
                Technical Lead
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-sky-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="#contact"
              className="rounded-full border border-sky-500/60 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-100 shadow-sm transition hover:bg-sky-500/20"
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
        {/* Hero */}
        <section className="grid gap-10 border-b border-slate-800/60 pb-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2.4fr)] md:items-center">
          <div className="space-y-6">
            <Tag>React · Next.js · TypeScript · Aviation & E‑commerce</Tag>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.6rem]">
              Technical Lead crafting scalable, performant web experiences.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
              With over 10 years of experience, I design and build React and
              Next.js applications for global brands in
              <span className="font-medium text-sky-300">
                {" "}
                aviation, e‑commerce, telecom, and SaaS
              </span>
              . From legacy migrations to micro frontends and headless
              architectures, I focus on clean UI, performance, accessibility, and
              developer experience.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400"
              >
                View experience timeline
              </a>
              <a
                href="#highlights"
                className="rounded-full border border-slate-600 px-5 py-2 text-xs font-semibold text-slate-100 transition hover:border-sky-500/70 hover:text-sky-200"
              >
                Explore project highlights
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-[0.7rem] text-slate-400">
              <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>10+ years in web application development</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>React · Next.js · Micro Frontends</span>
              </div>
            </div>
          </div>

          {/* Hero Sidebar Card */}
          <aside className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-lg shadow-slate-900/70 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Snapshot
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-[0.7rem]">
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-2 py-3">
                <p className="text-lg font-semibold text-sky-300">4</p>
                <p className="mt-1 text-[0.68rem] text-slate-400">Domains</p>
                <p className="text-[0.6rem] text-slate-500">
                  Aviation, E‑commerce, SaaS, Telecom
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-2 py-3">
                <p className="text-lg font-semibold text-sky-300">Enterprise</p>
                <p className="mt-1 text-[0.68rem] text-slate-400">Scale</p>
                <p className="text-[0.6rem] text-slate-500">
                  Global brands & high-traffic sites
                </p>
              </div>
              <div className="rounded-xl border border-slate-700/80 bg-slate-900/70 px-2 py-3">
                <p className="text-lg font-semibold text-sky-300">Mentor</p>
                <p className="mt-1 text-[0.68rem] text-slate-400">Role</p>
                <p className="text-[0.6rem] text-slate-500">
                  Training juniors, code reviews
                </p>
              </div>
            </div>

            <div className="space-y-3 border-t border-slate-800/80 pt-3 text-[0.72rem]">
              <p className="font-medium text-slate-200">Current focus</p>
              <ul className="space-y-1 text-slate-400">
                <li>• Front-End architecture for React & Next.js</li>
                <li>• Performance & Core Web Vitals for enterprise sites</li>
                <li>• AI-assisted development and code review workflows</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* About */}
        <section id="about" className="border-b border-slate-800/60 pb-12 pt-10">
          <SectionTitle
            eyebrow="About"
            title="From Web Designer to Technical Lead"
            subtitle="A journey from crafting static marketing pages to leading React and Next.js builds for global enterprises."
          />
          <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-slate-300">
            <p>
              I started my career as a <span className="font-medium">Web Designer</span>,
              maintaining and redesigning SaaS marketing sites and translating
              wireframes into pixel-perfect HTML. Over the last 10+ years, I have
              moved deeper into JavaScript, component-based UI, and large-scale
              front-end engineering, taking on more ownership and leadership
              responsibilities.
            </p>
            <p>
              Today I build <span className="font-medium">React and Next.js</span>
              {" "}
              experiences used by global brands across aviation, e‑commerce,
              hospitality, and telecom. I enjoy taking ambiguous requirements,
              shaping them into clear UI flows, and collaborating with designers,
              product owners, and backend engineers to deliver reliable,
              maintainable solutions that are fast, accessible, and scalable.
            </p>
            <p>
              I regularly mentor junior developers, participate in story grooming,
              and help teams adopt better patterns for <span className="font-medium">performance, accessibility, and DX</span>.
              I also enjoy teaching and am currently producing a YouTube series on
              JavaScript fundamentals.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-slate-800/60 pb-12 pt-10">
          <SectionTitle
            eyebrow="Experience"
            title="Enterprise Front-End Experience"
            subtitle="Work history clearly separated by company, domain, and responsibilities."
          />

          <div className="space-y-8">
            {experience.map((company) => (
              <article
                key={company.company}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/70"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-50">
                      {company.company}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {company.role} · {company.domain}
                    </p>
                  </div>
                  <p className="text-[0.7rem] text-slate-400">{company.period}</p>
                </div>

                <div className="mt-4 space-y-4">
                  {company.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 text-sm"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[0.9rem] font-semibold text-sky-300 hover:underline"
                            >
                              {project.name}
                            </a>
                            <span className="text-[0.7rem] text-slate-500">
                              {project.title}
                            </span>
                          </div>
                          <p className="mt-1 text-[0.7rem] text-slate-400">
                            {project.stack}
                          </p>
                        </div>
                      </div>
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-[0.75rem] text-slate-300">
                        {project.bullets.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-slate-800/60 pb-12 pt-10">
          <SectionTitle
            eyebrow="Skills"
            title="Tech stack & ways of working"
            subtitle="Tools and practices that match and extend the skills listed on my resume."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard title="Front-End" items={skills.frontend} />
            <SkillCard title="Backend & Integration" items={skills.backend} />
            <SkillCard title="CMS & Platforms" items={skills.cms} />
            <SkillCard title="Tooling" items={skills.tooling} />
            <SkillCard title="Practices" items={skills.practices} />
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Current Focus
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-[0.78rem]">
                <li>Front-End architecture for React & Next.js</li>
                <li>AI-assisted development and code review workflows</li>
                <li>Performance, accessibility, and Core Web Vitals at scale</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section id="highlights" className="border-b border-slate-800/60 pb-12 pt-10">
          <SectionTitle
            eyebrow="Highlights"
            title="Selected impact stories"
            subtitle="A few examples of how my work has impacted products and teams at Coforge and Publicis Sapient."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 text-sm shadow-md shadow-slate-950/60"
              >
                <h3 className="text-[0.95rem] font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.78rem] text-slate-300">
                  {item.summary}
                </p>
                <p className="mt-3 text-[0.75rem] text-slate-400">
                  <span className="font-semibold text-slate-200">Impact:</span>{" "}
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-10">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something together"
            subtitle="Open to front-end specialist and architect roles focused on React, Next.js, and modern web platforms."
          />

          <div className="mx-auto max-w-md rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-200">
            <p>
              You can reach me for opportunities, collaborations, or mentoring
              discussions at:
            </p>
            <div className="mt-3 space-y-1 text-[0.85rem]">
              <p>
                <span className="text-slate-400">Email:</span>{" "}
                <span className="font-medium text-sky-300">
                  suraj.k.25@gmail.com
                </span>
              </p>
              <p>
                <span className="text-slate-400">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/suraj-krishna-32a71222"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-sky-300 hover:underline"
                >
                  linkedin.com/in/suraj-krishna-32a71222
                </a>
              </p>
              <p>
                <span className="text-slate-400">GitHub / Portfolio:</span>{" "}
                <a
                  href="#"
                  className="font-medium text-sky-300 hover:underline"
                >
                  github.com/your-handle
                </a>
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-[0.7rem] text-slate-500">
            Designed & built with React and Tailwind CSS · © {new Date().getFullYear()} Suraj
            Krishna
          </p>
        </section>
      </main>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }): JSX.Element {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 text-sm">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800/80 px-3 py-1 text-[0.7rem] text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
