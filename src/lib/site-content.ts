// ============================================================
// Website content system for the Wahyu Budi Prastowo portfolio.
// Every piece of text shown on the website lives in SiteContent.
// The public source of truth when live: public/content.json
// (replace it via the "Export" button in Edit Mode, or edit it
// directly on GitHub without any coding).
// Site language: English. Content source: CV highlights.
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

export interface NumRow {
  i: string;
  rt: string;
  rtSub: string;
  rv: string;
  rvSmall?: string;
}

export interface JourneyItem {
  when: string;
  now?: boolean;
  what: string;
  whatSub: string;
  body: string;
  href?: string;
}

export interface WinItem {
  wi: string;
  wt: string;
  wtSub: string;
  href?: string;
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
  numbers: {
    num: string;
    label: string;
    titleEn: string;
    titleSub: string;
    bigN: string;
    bigSmall: string;
    bigCap: string;
    bigSub: string;
    rows: NumRow[];
    footNote: string;
  };
  craft: {
    num: string;
    label: string;
    titleEn: string;
    titleSub: string;
    lede: string;
    doLabel: string;
    doTitle: string;
    doChips: string[];
    aiLabel: string;
    aiTitle: string;
    aiChips: string[];
    stepsLabel: string;
    stepsTitle: string;
    steps: { b: string; s: string }[];
    quote: string;
    quoteSig: string;
    quoteWho: string;
  };
  journey: {
    num: string;
    label: string;
    titleEn: string;
    titleSub: string;
    items: JourneyItem[];
    winsTitle: string;
    wins: WinItem[];
    winsNote: string;
  };
  contact: {
    num: string;
    label: string;
    titleEn: string;
    titleSub: string;
    lede: string;
    cta: string;
    ctaHref: string;
    items: ContactItem[];
    tiltTopLeft: string;
    tiltTopRight: string;
    tiltTitle: string;
    tiltImg: string;
    tiltImgAlt: string;
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
    title: "Wahyu Budi Prastowo — Cloud Infrastructure Architect",
    description:
      "14+ years designing, migrating and securing enterprise infrastructure across Azure, AWS, GCP and hybrid clouds — now having fun putting AI to work on security, games, social media tooling and automation.",
  },
  brand: "WAHYU",
  hero: {
    hello: "Hello, I'm",
    name: "Wahyu Budi Prastowo",
    dot: ".",
    role: "Cloud Infrastructure Architect\nMigration · Security · Automation · AI",
    desc: "14+ years designing, modernizing and securing enterprise infrastructure across Azure, AWS, GCP and hybrid environments. Currently having fun with everything AI — Agentic security operations, making games, social media tooling and automation that kills manual work.",
    ctaPrimary: "See the work",
    ctaSecondary: "GitHub",
    ctaSecondaryHref: GH,
    tagline: "Every system,\nstarts with a plan.",
    photoUrl: "gta-hero.webp",
    photoCaption: "Wahyu & Ria — main characters",
    photoAlt: "GTA VI style illustration of Wahyu and Ria at sunset — Wahyu in an adidas jacket and mask, Ria in a niqab",
    stripLeft: "Featured build: AgenticAiSOC",
    stripLeftHref: `${GH}/AgenticAiSOC`,
    stripMid: "Scroll down",
    stripRight: "Open to relocation · GCC & EU",
  },
  stats: [
    { n: "14", small: "+", t: "Years in infrastructure & cloud", sub: "Experience" },
    { n: "2.9", small: "B", t: "IDR efficiency gains delivered", sub: "Architecture & platforms" },
    { n: "99.99", small: "%", t: "Uptime across 200+ servers", sub: "Production fleet" },
  ],
  ticker: {
    words: [
      "Cloud Security",
      "Automation",
      "Azure",
      "Agentic AI",
      "Terraform",
      "Kubernetes",
      "Zero Trust",
      "Game Making",
      "Wazuh",
      "Microsoft 365",
    ],
  },
  work: {
    num: "01",
    label: "Selected work",
    titleEn: "Work that speaks.",
    titleSub: "Real systems, running in production",
    aside: "10 projects · all open source",
    note: "Click a card to open the repository on GitHub — every README covers usage and architecture.",
    tabs: [
      { id: "all", label: "All" },
      { id: "security", label: "Security" },
      { id: "infra", label: "Infra & Automation" },
      { id: "apps", label: "Apps & Games" },
      { id: "other", label: "Others" },
    ],
    toolsLabel: "Built with",
    toolsLabelSub: "Tools I use every day",
    tools: ["Azure", "Terraform", "Kubernetes", "Python", "PowerShell", "Wazuh", "Docker", "Microsoft 365"],
    addBtn: "Add project",
  },
  projects: [
    {
      id: "agenticaisoc",
      title: "Agentic AI SOC",
      small: "Agentic AI · Security Operations",
      hook: "17 detection categories, Wazuh + Defender XDR + 6 threat-intel providers, Hermes skills and Qdrant memory — repo audit: 103 PASS / 0 FAIL.",
      url: `${GH}/AgenticAiSOC`,
      cat: "security",
      tag: "Flagship",
      lang: "Python",
      img: og("AgenticAiSOC"),
    },
    {
      id: "password-reminderad",
      title: "AD Password Governance",
      small: "Active Directory · Ops dashboard",
      hook: "Password-expiry monitoring, Microsoft 365 / Graph notifications and controlled helpdesk enforcement with full audit history.",
      url: `${GH}/Password-ReminderAD`,
      cat: "security",
      tag: "Security",
      lang: "Python",
      img: og("Password-ReminderAD"),
    },
    {
      id: "wazuhaiunified",
      title: "Wazuh AI Unified",
      small: "Unified SIEM + AI workflow",
      hook: "Brings AI reasoning into Wazuh-based security monitoring as a single, production-ready workflow.",
      url: `${GH}/WazuhAIUnified`,
      cat: "security",
      tag: "Security",
      lang: "Python",
      img: og("WazuhAIUnified"),
    },
    {
      id: "microsoft365-backup",
      title: "Microsoft 365 Backup",
      small: "Self-hosted · Multi-tenant",
      hook: "SharePoint, OneDrive, Outlook & Teams backup platform that breaks free from high-cost enterprise subscriptions.",
      url: `${GH}/Microsoft365-Backup`,
      cat: "infra",
      tag: "Data",
      lang: "Python",
      img: og("Microsoft365-Backup"),
    },
    {
      id: "rtfm-documentlabs",
      title: "RTFM Document Labs",
      small: "Document automation lab",
      hook: "Tooling lab for processing and managing documents programmatically — boring paperwork, automated away.",
      url: `${GH}/RTFM-DocumentLabs`,
      cat: "infra",
      tag: "Tooling",
      lang: "Python",
      img: og("RTFM-DocumentLabs"),
    },
    {
      id: "brightoria3d",
      title: "Brightoria 3D",
      small: "3D game-based learning",
      hook: "A 3D learning game world for kids aged 6–12 — self-paced tracks plus 1-on-1 tutoring. Yes, I make games too.",
      url: `${GH}/brightoria3D`,
      cat: "apps",
      tag: "EdTech",
      lang: "TypeScript",
      img: og("brightoria3D"),
    },
    {
      id: "quran-learning-adventure",
      title: "Qur'an Learning Adventure",
      small: "Interactive learning platform",
      hook: "A learning adventure where your companion and your world grow along with every lesson you finish.",
      url: `${GH}/Qur-an-Learning-Adventure-Platform`,
      cat: "apps",
      tag: "EdTech",
      lang: "TypeScript",
      img: og("Qur-an-Learning-Adventure-Platform"),
    },
    {
      id: "habitcode",
      title: "Code Habit",
      small: "Terminal-style habit tracker",
      hook: "Streaks, routines, a Pomodoro focus timer, strict mode and cloud sync — shipped as a mobile app.",
      url: `${GH}/habitcode`,
      cat: "apps",
      tag: "Mobile",
      lang: "TypeScript",
      img: og("habitcode"),
    },
    {
      id: "lms-homeschooling-uqi",
      title: "LMS Homeschooling UQI",
      small: "Android learning app",
      hook: "An Android LMS built around the real teaching and learning needs of Homeschooling UQI.",
      url: `${GH}/LMS-Android-Apps-HomeschoolingUQI`,
      cat: "apps",
      tag: "Android",
      lang: "Java",
      img: og("LMS-Android-Apps-HomeschoolingUQI"),
    },
    {
      id: "whoami",
      title: "WhoAmI",
      small: "Profile & career docs",
      hook: "The self-introduction repo — certificates, career docs and the story behind this portfolio.",
      url: `${GH}/WhoAmI`,
      cat: "other",
      tag: "Pinned",
      lang: "Python",
      img: og("WhoAmI"),
    },
  ],
  numbers: {
    num: "02",
    label: "The numbers",
    titleEn: "Impact,\nmeasured.",
    titleSub: "Numbers from real operations",
    bigN: "14",
    bigSmall: "+",
    bigCap: "Years architecting infrastructure",
    bigSub: "From broadcast and telecom server fleets to hybrid cloud at Telkom Indonesia's managed-services arm.",
    rows: [
      {
        i: "01",
        rt: "Cumulative efficiency gains",
        rtSub: "Architecture optimization plus internally built M365 backup and AD governance platforms",
        rv: "2.9",
        rvSmall: "B IDR",
      },
      {
        i: "02",
        rt: "Monitoring cost cut",
        rtSub: "SolarWinds architecture, licensing and coverage optimization (~IDR 700M saved)",
        rv: "50",
        rvSmall: "%",
      },
      {
        i: "03",
        rt: "Users migrated to Microsoft 365",
        rtSub: "SharePoint, Exchange Online, OneDrive & Teams — zero-downtime cutover via AvePoint",
        rv: "500",
      },
      {
        i: "04",
        rt: "VMs under disaster recovery",
        rtSub: "Veeam, Acronis and Azure Site Recovery, validated against RPO / RTO targets",
        rv: "700",
        rvSmall: "+",
      },
      {
        i: "05",
        rt: "Security incidents reduced",
        rtSub: "Suricata IDS/IPS and production hardening across the game-server fleet",
        rv: "60",
        rvSmall: "%",
      },
    ],
    footNote: "Figures from delivered projects between 2011 and 2026 — the short version of the CV.",
  },
  craft: {
    num: "03",
    label: "Behind the craft",
    titleEn: "More than\nprompts.",
    titleSub: "How I work with AI — and without it",
    lede: "I'm Wahyu. I spent 14 years keeping enterprise infrastructure alive — now I'm genuinely enjoying everything AI: security operations that reason, making games, social media tooling, and automating anything manual. The CV is the formal version; this is what I actually like doing.",
    doLabel: "What I do",
    doTitle: "Architecture and delivery, on me",
    doChips: [
      "Cloud architecture",
      "Migration & modernization",
      "Hybrid cloud",
      "Security engineering",
      "Disaster recovery",
      "Identity & access",
    ],
    aiLabel: "Currently into",
    aiTitle: "Everything AI, on the side",
    aiChips: ["Agentic AI SOC", "Game making", "Social media tools", "Automation", "DevOps pipelines", "AI-assisted ops"],
    stepsLabel: "From request to runbook",
    stepsTitle: "How I approach a build",
    steps: [
      {
        b: "Map before moving",
        s: "Assessment, dependency mapping and a migration sequence that survives contact with production.",
      },
      {
        b: "Automate the repeat",
        s: "Terraform, Ansible, PowerShell — if it happens twice, it becomes code.",
      },
      {
        b: "Secure by design",
        s: "Zero Trust, least privilege, EDR/XDR — security is architecture, not an add-on.",
      },
      {
        b: "Validate against the clock",
        s: "RPO/RTO drills and cutover rehearsals before anyone depends on the system.",
      },
      {
        b: "Hand over properly",
        s: "Documentation, runbooks and knowledge transfer — no hero dependency.",
      },
    ],
    quote: "Manual work\nis a bug.",
    quoteSig: "Automate it.",
    quoteWho: "Wahyu Budi Prastowo / Cloud Infrastructure Architect",
  },
  journey: {
    num: "04",
    label: "The journey",
    titleEn: "Keep\nbuilding.",
    titleSub: "Fourteen years, still shipping",
    items: [
      {
        when: "2023 — Now",
        now: true,
        what: "Senior Cloud Infrastructure & Security Architect",
        whatSub: "Digiserve by Telkom Indonesia",
        body: "Migration and modernization programs, Azure Stack Hub (HPE → Lenovo), Microsoft 365 for ~500 users, disaster recovery for 700+ VMs and hybrid identity security — with ~IDR 2.9B in cumulative efficiency gains.",
        href: `${GH}/AgenticAiSOC`,
      },
      {
        when: "2017 — 2023",
        what: "Senior System Administrator & Cloud Engineer",
        whatSub: "PT Megaxus Infotech",
        body: "200+ servers held at 99.99% uptime, fault-tolerant AWS infrastructure for mobile games serving millions of concurrent users, and a P2V migration that cut the hardware footprint by 40%.",
      },
      {
        when: "2013 — 2017",
        what: "Network System Engineer",
        whatSub: "PT Megaxus Infotech",
        body: "Multi-branch BGP / OSPF network across 50+ Cisco and MikroTik devices, downtime down 45%, plus secure low-latency VPN links between Indonesia, Korea and China.",
      },
      {
        when: "2011 — 2013",
        what: "System Administrator",
        whatSub: "PT Linktone & Okezone (MNC Group)",
        body: "200+ Linux / Windows servers across three enterprise entities and broadcast-grade live streaming with FFmpeg, Wowza and Darwin — including core streaming for Metro TV's digital expansion.",
      },
      {
        when: "2007 — 2011",
        what: "B.Sc. Information Systems",
        whatSub: "Budi Luhur University, Jakarta",
        body: "Where it all started — networks, servers and a taste for breaking things until they make sense.",
      },
    ],
    winsTitle: "Certs &\ntraining.",
    wins: [
      {
        wi: "01",
        wt: "Google Cybersecurity Certificate",
        wtSub: "Google · Jan 2025",
        href: `${GH}/WhoAmI`,
      },
      {
        wi: "02",
        wt: "IT Automation with Python Professional",
        wtSub: "Google · Apr 2025",
        href: `${GH}/WhoAmI`,
      },
      {
        wi: "03",
        wt: "Cloud Architecture: Design, Implement & Manage",
        wtSub: "Google · Jan 2025",
        href: `${GH}/WhoAmI`,
      },
      {
        wi: "04",
        wt: "Terraform & DevOps workflows on Google Cloud",
        wtSub: "Google Cloud · 2025–2026",
        href: `${GH}/WhoAmI`,
      },
    ],
    winsNote: "Plus Linux Foundation tracks (GitOps, Cilium, OWASP Top 10, Serverless), Acronis Cloud Tech (DR, M365, MDR/XDR) and Microsoft Purview / Sentinel workshops.",
  },
  contact: {
    num: "05",
    label: "Let's talk",
    titleEn: "Let's build\nsomething.",
    titleSub: "Open to relocation · GCC & EU",
    lede: "Cloud & security architecture, a migration program, or an AI idea that needs an infrastructure brain — happy to talk. Recruiter-friendly facts: 14+ years in, open to relocation across GCC & the European Union with employer-sponsored authorization.",
    cta: "Say hi on LinkedIn",
    ctaHref: "https://www.linkedin.com/in/wahyubudiprastowo",
    items: [
      {
        id: "gh",
        icon: "github",
        small: "GitHub · open source",
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
        small: "Email · collaboration & offers",
        main: "wahyubudiprastowo@gmail.com",
        href: "mailto:wahyubudiprastowo@gmail.com",
      },
      {
        id: "linkedin",
        icon: "linkedin",
        small: "LinkedIn · professional",
        main: "wahyubudiprastowo",
        href: "https://www.linkedin.com/in/wahyubudiprastowo",
      },
    ],
    tiltTopLeft: "GTA VI edition / me & Ria",
    tiltTopRight: "Status / open to work",
    tiltTitle: "Player 1\nready.",
    tiltImg: "gta-portrait.webp",
    tiltImgAlt: "GTA VI style illustration of Wahyu and Ria",
    keepTitle: "Keep it\nopen.",
    keepBody:
      "Every project above is open source and free to learn from. If something helps you, give it a star, fork it or open an issue — contributions are always welcome.",
    keepBtn: "Star on GitHub",
    keepHref: GH,
  },
  footer: {
    links: [
      { label: "Work", href: "#work" },
      { label: "Numbers", href: "#numbers" },
      { label: "Craft", href: "#craft" },
      { label: "Journey", href: "#journey" },
      { label: "Contact", href: "#contact" },
      { label: "GitHub", href: GH },
    ],
    note: "Built with Next.js & TypeScript. Every text on this site can be edited via Edit Mode, then published as content.json.",
    copy: "© 2026 Wahyu Budi Prastowo · Jakarta, Indonesia",
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
