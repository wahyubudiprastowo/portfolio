"use client";

/**
 * Giant infinite scrolling ticker band (POPOLAB signature).
 * variant "red"  = solid red band, dark Anton text, slight tilt.
 * variant "ghost"= outlined transparent text on black.
 * Purely decorative: aria-hidden, duplicated chunks drive the loop.
 */
export function Marquee({
  words,
  variant = "red",
  reverse = false,
}: {
  words: string[];
  variant?: "red" | "ghost";
  reverse?: boolean;
}) {
  if (!words?.length) return null;
  const chunk = (hidden: boolean) => (
    <span className="marquee-chunk" aria-hidden={hidden || undefined}>
      {words.map((w, i) => (
        <span className="marquee-word" key={`${w}-${i}`}>
          {w}
          <i className="sx" aria-hidden="true">
            ✦
          </i>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`marquee marquee--${variant}`} aria-hidden="true">
      <div className={`marquee-track${reverse ? " is-rev" : ""}`}>
        {chunk(false)}
        {chunk(true)}
      </div>
    </div>
  );
}
