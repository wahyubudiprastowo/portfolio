"use client";

import { useSite } from "./site-context";
import { Ed } from "./ed";
import { SiteClock } from "./site-clock";

export function SiteFooter() {
  const { content, editing, setEditing, motion } = useSite();

  return (
    <footer className="site-footer">
      <div className="ft">
        <p className="ft-mega font-display" aria-hidden="true">
          {content.brand}
        </p>
        <div>
          <div className="ft-links">
            {content.footer.links.map((l, i) => (
              <a
                key={`${l.label}-${i}`}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (editing || l.href === "#") e.preventDefault();
                }}
              >
                {l.label}
              </a>
            ))}
            <button type="button" onClick={() => setEditing(true)}>
              Edit Mode
            </button>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: motion ? "smooth" : "auto" })
              }
            >
              Back to top &uarr;
            </button>
          </div>
          <p className="ft-copy" style={{ marginTop: 12 }}>
            <Ed p="footer.note" />
          </p>
        </div>
        <div className="ft-meta">
          <SiteClock />
          <p className="ft-copy">
            <Ed p="footer.copy" />
          </p>
        </div>
      </div>
    </footer>
  );
}
