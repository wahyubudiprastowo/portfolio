// ============================================================
// Website content system for the Wahyu Budi Prastowo portfolio.
// EVERY piece of text shown on the website lives in SiteContent.
// The public source of truth when live: public/content.json
// (replace it via the "Export" button in Edit Mode, or edit it
// directly on GitHub without any coding).
// Site language: English.
// ============================================================

export interface StatItem {
  n: string;
  small?: string;
  t: string;
  sub?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  small: string;
  hook: string;
  url: string;
  cat: string;
  tag: string;
  lang: string;
  img: string;
}

export interface WorkTab {
  id: string;
  label: string;
}

export interface ContactItem {
  id: string;
  icon: "github" | "mail" | "linkedin" | "star" | "link";
  small: string;
  main: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteContent {
  meta: { title: string; description: string };
  brand: string;
  hero: {
    hello: string;
    name: string;
    dot: string;
    role: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    tagline: string;
    photoUrl: string;
    photoCaption: string;
    photoAlt: string;
    stripLeft: string;
    stripLeftHref: string;
    stripMid: string;
    stripRight: string;
    /** Floating chips orbiting the photo (POPOLAB-style). */
    floatTags: string[];
  };
  stats: StatItem[];
  /** Giant scrolling ticker bands between sections. */
  ticker: { words: string[] };
  work: {
    num: string;
    label: string;
    titleEn: string;
    titleSub: string;
    aside: string;
    note: string;
    tabs: WorkTab[];
    toolsLabel: string;
    toolsLabelSub: string;
    tools: string[];
    addBtn: string;
  };
  projects: ProjectItem[];
  contact: {
    num: string;
    label: string;
    titleEn: string;
    titleSub: string;
    lede: string;
    cta: string;
    ctaHref: string;
    items: ContactItem[];
    keepTitle: string;
    keepBody: string;
    keepBtn: string;
    keepHref: string;
  };
  footer: { links: FooterLink[]; note: string; copy: string };
}

const GH = "https://github.com/wahyubudiprastowo";
const og = (repo: string) => `https://opengraph.githubassets.com/1/wahyubudiprastowo/${repo}`;

export const DEFAULT_CONTENT: SiteContent = {
  meta: {
    title: "Wahyu Budi Prastowo — IT Infrastructure · Cloud Security · Azure",
    description:
      "Portfolio of Wahyu Budi Prastowo — open-source projects in cloud security, DevSecOps, Azure infrastructure and educational apps. Every text on this site is editable via Edit Mode.",
  },
  brand: "WAHYU",
  hero: {
    hello: "Hello, I'm",
    name: "Wahyu Budi Prastowo",
    dot: ".",
    role: "IT Infrastructure Specialist\nCloud Security · Azure · DevSecOps",
    desc: "10+ years designing infrastructure that is secure, scalable and high-performance — from Azure and Microsoft 365 to Security Operations. Big on automation, allergic to repetitive manual work.",
    ctaPrimary: "View projects",
    ctaSecondary: "GitHub",
    ctaSecondaryHref: GH,
    tagline: "Every system,\nbuilt on security.",
    photoUrl: "https://avatars.githubusercontent.com/wahyubudiprastowo?s=640",
    photoCaption: "Wahyu B.P.",
    photoAlt: "GitHub profile photo of Wahyu Budi Prastowo",
    stripLeft: "Featured build: AgenticAiSOC",
    stripLeftHref: `${GH}/AgenticAiSOC`,
    stripMid: "Scroll down",
    stripRight: "Open source / GitHub",
    floatTags: ["Azure", "Wazuh", "Python", "Docker", "Microsoft 365", "KQL"],
  },
  stats: [
    { n: "10", small: "+", t: "Years in IT", sub: "Infrastructure & Cloud" },
    { n: "10", small: "", t: "Public repositories", sub: "Open source" },
    { n: "17", small: "", t: "Detection categories in AgenticAiSOC", sub: "Detection categories" },
  ],
  ticker: {
    words: [
      "Cloud Security",
      "DevSecOps",
      "Azure",
      "Microsoft 365",
      "Python",
      "Automation",
      "Open Source",
      "Zero Trust",
    ],
  },
  work: {
    num: "01",
    label: "Selected work",
    titleEn: "Work that ships.",
    titleSub: "Projects that actually run in production",
    aside: "10 projects · all open source",
    note: "Click a card to open its repository on GitHub — every README covers usage and architecture.",
    tabs: [
      { id: "all", label: "All" },
      { id: "security", label: "Security" },
      { id: "infra", label: "Infra & Automation" },
      { id: "apps", label: "Apps" },
      { id: "other", label: "Others" },
    ],
    toolsLabel: "Built with",
    toolsLabelSub: "Tools I use every day",
    tools: ["Azure", "Microsoft 365", "Docker", "Python", "TypeScript", "Wazuh", "React", "GitHub Actions"],
    addBtn: "Add project",
  },
  projects: [
    {
      id: "agenticaisoc",
      title: "Agentic AI SOC",
      small: "Agentic AI · 17 detection categories / Python",
      hook: "Full-stack SOC: Wazuh, Defender XDR, threat intel, the Hermes orchestrator and Qdrant memory in one pipeline.",
      url: `${GH}/AgenticAiSOC`,
      cat: "security",
      tag: "Flagship",
      lang: "Python",
      img: og("AgenticAiSOC"),
    },
    {
      id: "wazuhaiunified",
      title: "Wazuh AI Unified",
      small: "Unified SIEM + AI / Python",
      hook: "Brings AI capabilities into Wazuh-based security monitoring as a single workflow.",
      url: `${GH}/WazuhAIUnified`,
      cat: "security",
      tag: "Security",
      lang: "Python",
      img: og("WazuhAIUnified"),
    },
    {
      id: "password-reminderad",
      title: "Password Compliance Enforcer",
      small: "Active Directory · Dashboard / Python",
      hook: "Track AD password expiry dates, send reminders via Microsoft 365 and run enforcement safely.",
      url: `${GH}/Password-ReminderAD`,
      cat: "security",
      tag: "Security",
      lang: "Python",
      img: og("Password-ReminderAD"),
    },
    {
      id: "microsoft365-backup",
      title: "Microsoft 365 Backup",
      small: "Self-hosted backup / Python · Docker",
      hook: "Back up SharePoint, OneDrive, Outlook & Teams with an ops dashboard, scheduled jobs and recovery workflows.",
      url: `${GH}/Microsoft365-Backup`,
      cat: "infra",
      tag: "Data",
      lang: "Python",
      img: og("Microsoft365-Backup"),
    },
    {
      id: "rtfm-documentlabs",
      title: "RTFM Document Labs",
      small: "Document automation / Python",
      hook: "A tooling lab for processing and managing documents programmatically.",
      url: `${GH}/RTFM-DocumentLabs`,
      cat: "infra",
      tag: "Tooling",
      lang: "Python",
      img: og("RTFM-DocumentLabs"),
    },
    {
      id: "brightoria3d",
      title: "Brightoria 3D",
      small: "3D game-based learning / Web · Android",
      hook: "Game-based 3D learning for kids aged 6-12, with a self-paced track and 1-on-1 tutoring.",
      url: `${GH}/brightoria3D`,
      cat: "apps",
      tag: "EdTech",
      lang: "TypeScript",
      img: og("brightoria3D"),
    },
    {
      id: "quran-learning-adventure",
      title: "Qur'an Learning Adventure",
      small: "Interactive learning platform / TypeScript",
      hook: "A Qur'an adventure where your companion and your world grow along with your learning journey.",
      url: `${GH}/Qur-an-Learning-Adventure-Platform`,
      cat: "apps",
      tag: "EdTech",
      lang: "TypeScript",
      img: og("Qur-an-Learning-Adventure-Platform"),
    },
    {
      id: "habitcode",
      title: "Code Habit",
      small: "Terminal-style habit tracker / React · Capacitor",
      hook: "Streaks, routines, a Pomodoro focus timer, strict mode and cloud sync across devices.",
      url: `${GH}/habitcode`,
      cat: "apps",
      tag: "Mobile",
      lang: "TypeScript",
      img: og("habitcode"),
    },
    {
      id: "lms-homeschooling-uqi",
      title: "LMS Homeschooling UQI",
      small: "Android app / Java",
      hook: "An Android LMS app built for the teaching and learning needs of Homeschooling UQI.",
      url: `${GH}/LMS-Android-Apps-HomeschoolingUQI`,
      cat: "apps",
      tag: "Android",
      lang: "Java",
      img: og("LMS-Android-Apps-HomeschoolingUQI"),
    },
    {
      id: "whoami",
      title: "WhoAmI",
      small: "Profile & career docs / Java",
      hook: "A self-introduction and documentation of the journey through infrastructure & cloud security.",
      url: `${GH}/WhoAmI`,
      cat: "other",
      tag: "Pinned",
      lang: "Java",
      img: og("WhoAmI"),
    },
  ],
  contact: {
    num: "02",
    label: "Let's connect",
    titleEn: "Let's build\nsecure things.",
    titleSub: "Get in touch",
    lede: "Open for open-source collaboration, cloud & security infrastructure consulting, or just a technical chat. Fastest way: GitHub.",
    cta: "Visit GitHub",
    ctaHref: GH,
    items: [
      {
        id: "gh",
        icon: "github",
        small: "GitHub",
        main: "@wahyubudiprastowo",
        href: GH,
      },
      {
        id: "flagship",
        icon: "star",
        small: "Flagship · AgenticAiSOC",
        main: "Agentic AI SOC Platform",
        href: `${GH}/AgenticAiSOC`,
      },
      {
        id: "email",
        icon: "mail",
        small: "Email · collaboration",
        main: "Fill in via Edit Mode",
        href: "#",
      },
      {
        id: "linkedin",
        icon: "linkedin",
        small: "LinkedIn · professional",
        main: "Fill in via Edit Mode",
        href: "#",
      },
    ],
    keepTitle: "Keep it\nopen.",
    keepBody:
      "Every project above is open source and free to learn from. If it helps you, give it a star, fork it or open an issue — contributions are always welcome.",
    keepBtn: "Star on GitHub",
    keepHref: GH,
  },
  footer: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
      { label: "GitHub", href: GH },
    ],
    note: "Built with Next.js & TypeScript. Every text on this site can be changed via Edit Mode, then published as content.json.",
    copy: "© 2026 Wahyu Budi Prastowo",
  },
};

// ---------- path access helpers (e.g. "projects.0.title") ----------

export function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur;
}

export function setByPath<T>(obj: T, path: string, value: unknown): T {
  const parts = path.split(".");
  const clone = Array.isArray(obj) ? ([...obj] as unknown as T) : ({ ...obj } as T);
  let cur = clone as Record<string, unknown>;
  for (let i = 0; i < parts.length - 1; i++) {
    const k = parts[i];
    const next = cur[k];
    cur[k] = Array.isArray(next) ? [...(next as unknown[])] : { ...(next as object) };
    cur = cur[k] as Record<string, unknown>;
  }
  cur[parts[parts.length - 1]] = value;
  return clone;
}
