"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useSite } from "./site-context";

const CHARS = "!<>-_\\/[]{}=+*^?#";

/** Scramble-in hover effect for nav links (resolves back to the real text). */
function Scramble({ text, active }: { text: string; active: boolean }) {
  const [out, setOut] = useState(text);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = () => {
    if (ivRef.current) {
      clearInterval(ivRef.current);
      ivRef.current = null;
    }
  };

  const start = () => {
    if (!active) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    stop();
    let i = 0;
    let tick = 0;
    ivRef.current = setInterval(() => {
      tick += 1;
      if (tick % 2 === 0) i += 1;
      const tail = text
        .slice(i)
        .split("")
        .map((ch) => (ch === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]))
        .join("");
      setOut(text.slice(0, i) + tail);
      if (i >= text.length) {
        stop();
        setOut(text);
      }
    }, 26);
  };

  useEffect(() => stop, []);
  // Reset instantly when the target text changes (adjust-during-render).
  const [prevText, setPrevText] = useState(text);
  if (prevText !== text) {
    setPrevText(text);
    setOut(text);
  }

  return (
    <span className="scr" onMouseEnter={start} onMouseLeave={() => { stop(); setOut(text); }}>
      {out}
    </span>
  );
}

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
          aria-label={`${content.brand} homepage`}
        >
          <span className="font-display">{content.brand}</span>
          <span className="dot" aria-hidden="true" />
        </a>

        <nav className="nav" aria-label="Main menu">
          <a href="#work" onClick={(e) => editing && e.preventDefault()}>
            <Scramble text="Work" active={motion && !editing} />
          </a>
          <a href="#contact" onClick={(e) => editing && e.preventDefault()}>
            <Scramble text="Contact" active={motion && !editing} />
          </a>
          <a
            href="https://github.com/wahyubudiprastowo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => editing && e.preventDefault()}
          >
            <Scramble text="GitHub ↗" active={motion && !editing} />
          </a>
        </nav>

        <div className="hd-right">
          <button
            type="button"
            className={cn("motion-toggle", !motion && "is-off")}
            onClick={toggleMotion}
            title="Turn animations on / off"
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
            title="Edit every text on the website right from the browser"
            disabled={!mounted}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
            <span className="tx">{editing ? "Exit" : "Edit Mode"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
