"use client";

/* POPOLAB-style "The numbers" section: one giant stat + ranked rows. */

import { useSite } from "./site-context";
import { Ed } from "./ed";
import { Rv } from "./rv";

/** Decorative hand-drawn arrow (popolab-style), pointing up-right. */
function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 70 140"
      aria-hidden="true"
      className={flip ? "flip" : undefined}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M30 132 C 24 108, 22 84, 26 62 C 29 44, 36 28, 46 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M30 34 L 46 10 L 54 34 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NumbersSection() {
  const { content, editing } = useSite();
  const c = content.numbers;

  return (
    <section className="section" id="numbers" aria-labelledby="num-title">
      <div className="numbers">
        <Rv>
          <p className="label">
            {c.num} / <Ed p="numbers.label" />
          </p>
          <Ed p="numbers.titleEn" tag="h2" className="h-en font-display" id="num-title" />
          <span className="h-zh">
            <Ed p="numbers.titleSub" />
            <i className="r" aria-hidden="true">.</i>
          </span>
          <div className="big-stat">
            <Arrow />
            <span className="n font-display">
              {c.bigN}
              {c.bigSmall ? <small>{c.bigSmall}</small> : null}
            </span>
            <Arrow flip />
          </div>
          <p className="big-cap">
            <Ed p="numbers.bigCap" />
          </p>
          <p className="small big-sub">
            <Ed p="numbers.bigSub" />
          </p>
        </Rv>

        <Rv delay={120}>
          <div className="rows">
            {c.rows.map((r, i) => (
              <div className="row" key={`row-${i}`}>
                <span className="i">{r.i}</span>
                <span className="rt">
                  <Ed p={`numbers.rows.${i}.rt`} />
                  <small>
                    <Ed p={`numbers.rows.${i}.rtSub`} />
                  </small>
                </span>
                <span className="rv font-display">
                  {r.rv}
                  {r.rvSmall ? <small>{r.rvSmall}</small> : null}
                </span>
              </div>
            ))}
          </div>
          <p className="foot-note">
            <Ed p="numbers.footNote" />
          </p>
        </Rv>
      </div>
      {editing ? null : null}
    </section>
  );
}
