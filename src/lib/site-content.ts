// ============================================================
// Sistem konten website portfolio Wahyu Budi Prastowo.
// SEMUA teks yang tampil di website hidup di objek SiteContent.
// File publik yang jadi sumber utama saat live: public/content.json
// (bisa diganti dari tombol "Ekspor" di Mode Edit, atau diedit
// langsung di GitHub tanpa koding).
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
  };
  stats: StatItem[];
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
      "Portfolio Wahyu Budi Prastowo: projek open source di bidang cloud security, DevSecOps, infrastruktur Azure, dan aplikasi edukasi.",
  },
  brand: "WAHYU",
  hero: {
    hello: "Hello, I'm",
    name: "Wahyu Budi Prastowo",
    dot: ".",
    role: "IT Infrastructure Specialist\nCloud Security · Azure · DevSecOps",
    desc: "Lebih dari 10 tahun merancang infrastruktur yang aman, scalable, dan high-performance — dari Azure dan Microsoft 365 sampai Security Operations. Suka otomasi, minim kerja manual berulang.",
    ctaPrimary: "Lihat Projek",
    ctaSecondary: "GitHub",
    ctaSecondaryHref: GH,
    tagline: "Setiap sistem,\ndibangun di atas keamanan.",
    photoUrl: "https://avatars.githubusercontent.com/wahyubudiprastowo?s=640",
    photoCaption: "Wahyu B.P.",
    photoAlt: "Foto profil Wahyu Budi Prastowo dari GitHub",
    stripLeft: "Projek unggulan: AgenticAiSOC",
    stripLeftHref: `${GH}/AgenticAiSOC`,
    stripMid: "Scroll ke bawah",
    stripRight: "Open source / GitHub",
  },
  stats: [
    { n: "10", small: "+", t: "Tahun pengalaman IT", sub: "Infrastructure & Cloud" },
    { n: "10", small: "", t: "Repositori publik", sub: "Open source" },
    { n: "17", small: "", t: "Kategori deteksi di AgenticAiSOC", sub: "Detection categories" },
  ],
  work: {
    num: "01",
    label: "Selected work",
    titleEn: "Work that ships.",
    titleSub: "Projek yang jalan",
    aside: "10 projek · semua open source",
    note: "Klik kartu untuk membuka repositorinya di GitHub — README tiap projek berisi cara pakai dan arsitekturnya.",
    tabs: [
      { id: "all", label: "Semua" },
      { id: "security", label: "Keamanan" },
      { id: "infra", label: "Infra & Otomasi" },
      { id: "apps", label: "Aplikasi" },
      { id: "other", label: "Lainnya" },
    ],
    toolsLabel: "Built with",
    toolsLabelSub: "Tools yang saya pakai",
    tools: ["Azure", "Microsoft 365", "Docker", "Python", "TypeScript", "Wazuh", "React", "GitHub Actions"],
    addBtn: "Tambah projek",
  },
  projects: [
    {
      id: "agenticaisoc",
      title: "Agentic AI SOC",
      small: "Agentic AI · 17 kategori deteksi / Python",
      hook: "SOC full-stack: Wazuh, Defender XDR, threat intel, orkestrator Hermes, dan memori Qdrant dalam satu alur.",
      url: `${GH}/AgenticAiSOC`,
      cat: "security",
      tag: "Flagship",
      lang: "Python",
      img: og("AgenticAiSOC"),
    },
    {
      id: "wazuhaiunified",
      title: "Wazuh AI Unified",
      small: "SIEM + AI terpadu / Python",
      hook: "Memadukan kemampuan AI ke dalam monitoring keamanan berbasis Wazuh dalam satu alur kerja.",
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
      hook: "Pantau tanggal kedaluwarsa password AD, kirim reminder via Microsoft 365, jalankan enforcement dengan aman.",
      url: `${GH}/Password-ReminderAD`,
      cat: "security",
      tag: "Security",
      lang: "Python",
      img: og("Password-ReminderAD"),
    },
    {
      id: "microsoft365-backup",
      title: "Microsoft 365 Backup",
      small: "Backup self-hosted / Python · Docker",
      hook: "Backup SharePoint, OneDrive, Outlook & Teams: dashboard operasional, job terjadwal, dan recovery workflow.",
      url: `${GH}/Microsoft365-Backup`,
      cat: "infra",
      tag: "Data",
      lang: "Python",
      img: og("Microsoft365-Backup"),
    },
    {
      id: "rtfm-documentlabs",
      title: "RTFM Document Labs",
      small: "Otomasi dokumen / Python",
      hook: "Laboratorium tooling untuk memproses dan mengelola dokumen secara terprogram.",
      url: `${GH}/RTFM-DocumentLabs`,
      cat: "infra",
      tag: "Tooling",
      lang: "Python",
      img: og("RTFM-DocumentLabs"),
    },
    {
      id: "brightoria3d",
      title: "Brightoria 3D",
      small: "Game-based learning 3D / Web · Android",
      hook: "Belajar berbasis game 3D untuk anak 6-12 tahun, dengan jalur mandiri dan tutor 1-on-1.",
      url: `${GH}/brightoria3D`,
      cat: "apps",
      tag: "EdTech",
      lang: "TypeScript",
      img: og("brightoria3D"),
    },
    {
      id: "quran-learning-adventure",
      title: "Qur'an Learning Adventure",
      small: "Platform belajar interaktif / TypeScript",
      hook: "Petualangan Qur'an di mana companion dan duniamu tumbuh bersama perjalanan belajarmu.",
      url: `${GH}/Qur-an-Learning-Adventure-Platform`,
      cat: "apps",
      tag: "EdTech",
      lang: "TypeScript",
      img: og("Qur-an-Learning-Adventure-Platform"),
    },
    {
      id: "habitcode",
      title: "Code Habit",
      small: "Habit tracker bergaya terminal / React · Capacitor",
      hook: "Streak, routine, Pomodoro focus timer, strict mode, dan sinkronisasi cloud antar perangkat.",
      url: `${GH}/habitcode`,
      cat: "apps",
      tag: "Mobile",
      lang: "TypeScript",
      img: og("habitcode"),
    },
    {
      id: "lms-homeschooling-uqi",
      title: "LMS Homeschooling UQI",
      small: "Aplikasi Android / Java",
      hook: "Aplikasi LMS Android untuk kebutuhan belajar mengajar Homeschooling UQI.",
      url: `${GH}/LMS-Android-Apps-HomeschoolingUQI`,
      cat: "apps",
      tag: "Android",
      lang: "Java",
      img: og("LMS-Android-Apps-HomeschoolingUQI"),
    },
    {
      id: "whoami",
      title: "WhoAmI",
      small: "Profil & dokumentasi karier / Java",
      hook: "Perkenalan diri dan dokumentasi perjalanan karier di dunia infrastruktur & cloud security.",
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
    titleSub: "Terhubung denganku",
    lede: "Terbuka untuk kolaborasi projek open source, konsultasi infrastruktur & keamanan cloud, atau sekadar diskusi teknis. Cara tercepat: lewat GitHub.",
    cta: "Kunjungi GitHub",
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
        small: "Email · kolaborasi",
        main: "Isi lewat Mode Edit",
        href: "#",
      },
      {
        id: "linkedin",
        icon: "linkedin",
        small: "LinkedIn · profesional",
        main: "Isi lewat Mode Edit",
        href: "#",
      },
    ],
    keepTitle: "Keep it\nopen.",
    keepBody:
      "Semua projek di atas open source dan gratis untuk dipelajari. Kalau bermanfaat, beri star, fork, atau buka issue — kontribusi selalu diterima.",
    keepBtn: "Beri star di GitHub",
    keepHref: GH,
  },
  footer: {
    links: [
      { label: "Karya", href: "#work" },
      { label: "Kontak", href: "#contact" },
      { label: "GitHub", href: GH },
    ],
    note: "Dibangun dengan Next.js & TypeScript. Semua konten bisa diubah lewat Mode Edit lalu dipublikasikan sebagai content.json.",
    copy: "© 2026 Wahyu Budi Prastowo",
  },
};

// ---------- helper akses path (mis. "projects.0.title") ----------

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
