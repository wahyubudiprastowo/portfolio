"use client";

/* POPOLAB-style "journey" section: expandable career timeline + wins column. */

import { useSite } from "./site-context";
import { Ed } from "./ed";
import { Rv } from "./rv";

export function JourneySection() {
  const { content, editing } = useSite();
  const c = content.journey;

  return (
    <section className="section" id="journey" aria-labelledby="journey-title">
      <Rv>
        <p className="label">
          <b>{c.num}</b> / <Ed p="journey.label" />
        </p>
        <Ed p="journey.titleEn" tag="h2" className="h-en font-display" id="journey-title" />
        <span className="h-zh">
          <Ed p="journey.titleSub" />
          <i className="r" aria-hidden="true">.</i>
        </span>
      </Rv>

      <div className="journey">
        <Rv className="tl">
          {c.items.map((_, i) => (
            <details key={`j-${i}`} open={i === 0}>
              <summary>
                <span className={`when${content.journey.items[i].now ? " now" : ""}`}>
                  <Ed p={`journey.items.${i}.when`} />
                </span>
                <span className="what">
                  <Ed p={`journey.items.${i}.what`} />
                  <small>
                    <Ed p={`journey.items.${i}.whatSub`} />
                  </small>
                </span>
                <span className="pm" aria-hidden="true" />
              </summary>
              <p className="body">
                <Ed p={`journey.items.${i}.body`} />
                {content.journey.items[i].href && !editing ? (
                  <>
                    {" "}
                    <a
                      href={content.journey.items[i].href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See the build &rarr;
                    </a>
                  </>
                ) : null}
              </p>
            </details>
          ))}
        </Rv>

        <Rv className="wins" delay={120}>
          <p className="label">
            Selected certs / <b>HR-friendly</b>
          </p>
          <h3 className="font-display">
            <Ed p="journey.winsTitle" />
          </h3>
          <ol>
            {c.wins.map((w, i) => (
              <li key={`win-${i}`}>
                <a
                  href={w.href || "#"}
                  target={w.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (editing || !w.href) e.preventDefault();
                  }}
                >
                  <span className="wi">{w.wi}</span>
                  <span className="wt">
                    <Ed p={`journey.wins.${i}.wt`} />
                    <small>
                      <Ed p={`journey.wins.${i}.wtSub`} />
                    </small>
                  </span>
                  <span className="wa" aria-hidden="true">
                    &#8599;
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <p className="foot-note">
            <Ed p="journey.winsNote" />
          </p>
        </Rv>
      </div>
    </section>
  );
}
