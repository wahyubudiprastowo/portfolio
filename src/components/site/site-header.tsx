"use client";

import { cn } from "@/lib/utils";
import { useSite } from "./site-context";

export function SiteHeader() {
  const { content, editing, setEditing, motion, toggleMotion, mounted } = useSite();

  return (
    <header className="site-header">
      <div className="bar">
        <a
          className="logo"
          href="#top"
          onClick={(e) => {
            if (editing) e.preventDefault();
          }}
          aria-label={`${content.brand} beranda`}
        >
          <span className="font-display">{content.brand}</span>
          <span className="dot" aria-hidden="true" />
        </a>

        <nav className="nav" aria-label="Menu utama">
          <a href="#work" onClick={(e) => editing && e.preventDefault()}>Karya</a>
          <a href="#contact" onClick={(e) => editing && e.preventDefault()}>Kontak</a>
        </nav>

        <div className="hd-right">
          <button
            type="button"
            className={cn("motion-toggle", !motion && "is-off")}
            onClick={toggleMotion}
            title="Nyalakan/matikan animasi"
            aria-pressed={motion}
          >
            <span className="ic" aria-hidden="true">
              {motion ? "\u25B6" : "\u25A0"}
            </span>
            <span className="tx">Motion</span>
            <span className="st">{motion ? "On" : "Off"}</span>
          </button>

          <button
            type="button"
            className={cn("edit-toggle", editing && "is-on")}
            onClick={() => setEditing(!editing)}
            aria-pressed={editing}
            title="Edit semua teks website langsung dari browser"
            disabled={!mounted}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
            <span className="tx">{editing ? "Keluar" : "Mode Edit"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
