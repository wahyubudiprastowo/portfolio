"use client";

/* POPOLAB-style "craft" section: what I do vs. what AI gets to do,
   a numbered process and a red quote card. */

import { useSite } from "./site-context";
import { Ed } from "./ed";
import { Rv } from "./rv";

export function CraftSection() {
  const { content, editing } = useSite();
  const c = content.craft;

  return (
    <section className="section" id="craft" aria-labelledby="craft-title">
      <div className="craft-top">
        <Rv>
          <p className="label">
            {c.num} / <Ed p="craft.label" />
          </p>
          <Ed p="craft.titleEn" tag="h2" className="h-en font-display" id="craft-title" />
          <span className="h-zh">
            <Ed p="craft.titleSub" />
            <i className="r" aria-hidden="true">.</i>
          </span>
        </Rv>
        <Rv as="p" className="lede" delay={100}>
          <Ed p="craft.lede" />
        </Rv>
      </div>

      <div className="craft">
        <Rv>
          <p className="label">
            <b>
              <Ed p="craft.doLabel" />
            </b>
          </p>
          <p className="col-title">
            <Ed p="craft.doTitle" />
          </p>
          <div className="chips">
            {c.doChips.map((_, i) => (
              <span className="chip" key={`do-${i}`}>
                <Ed p={`craft.doChips.${i}`} />
              </span>
            ))}
          </div>
          <p className="col-title" style={{ marginTop: 28 }}>
            <Ed p="craft.aiTitle" />
          </p>
          <div className="chips">
            {c.aiChips.map((_, i) => (
              <span className="chip en" key={`ai-${i}`}>
                <Ed p={`craft.aiChips.${i}`} />
              </span>
            ))}
          </div>
        </Rv>

        <Rv delay={120}>
          <p className="label">
            <Ed p="craft.stepsLabel" />
          </p>
          <p className="col-title">
            <Ed p="craft.stepsTitle" />
          </p>
          <ol className="steps">
            {c.steps.map((_, i) => (
              <li className="step" key={`step-${i}`}>
                <span className="sn font-display">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <b>
                    <Ed p={`craft.steps.${i}.b`} />
                  </b>
                  <span>
                    <Ed p={`craft.steps.${i}.s`} />
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Rv>

        <Rv className="quote-card" delay={200}>
          <span className="qm font-display" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote>
            <Ed p="craft.quote" />
          </blockquote>
          <div>
            <span className="sig font-hand">
              <Ed p="craft.quoteSig" />
            </span>
            <p className="who">
              <Ed p="craft.quoteWho" />
            </p>
          </div>
        </Rv>
      </div>
      {editing ? null : null}
    </section>
  );
}
