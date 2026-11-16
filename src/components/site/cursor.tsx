"use client";

import { useEffect, useRef, useState } from "react";
import { useSite } from "./site-context";

type Variant = "idle" | "link" | "view";

/**
 * POPOLAB-style custom cursor:
 *  - red dot that tracks the pointer 1:1
 *  - trailing ring with lerp easing
 *  - ring grows over links/buttons, turns into a filled "OPEN" bubble
 *    over elements carrying [data-cursor="view"]
 * Disabled on touch devices, in Edit Mode, when Motion is off, and when
 * the user prefers reduced motion. Native cursor stays for those cases.
 */
export function CustomCursor() {
  const { motion, editing, mounted } = useSite();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<Variant>("idle");
  const [label, setLabel] = useState("OPEN");
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  const enabled = mounted && motion && !editing;

  useEffect(() => {
    const html = document.documentElement;
    if (!enabled) {
      html.classList.remove("has-cursor");
      return;
    }
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      html.classList.remove("has-cursor");
      return;
    }

    html.classList.add("has-cursor");

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = 0;
    let live = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!live) {
        live = true;
        rx = mx;
        ry = my;
        setVisible(true);
      }
      const el = e.target as Element | null;
      const hit = el?.closest?.(
        '[data-cursor], a, button, [role="button"], input, select, textarea, label, summary',
      );
      let v: Variant = "idle";
      if (hit) {
        const dc = hit.getAttribute("data-cursor");
        if (dc === "view" || dc === "open") {
          v = "view";
          const l = hit.getAttribute("data-cursor-label");
          if (l) setLabel(l.toUpperCase());
        } else {
          v = "link";
        }
      }
      setVariant(v);
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => {
      if (live) setVisible(true);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      html.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringCls =
    "cursor-ring" +
    (variant === "link" ? " is-link" : "") +
    (variant === "view" ? " is-view" : "") +
    (down ? " is-down" : "") +
    (visible ? "" : " is-hidden");

  const dotCls =
    "cursor-dot" + (down ? " is-down" : "") + (visible ? "" : " is-hidden");

  return (
    <>
      <div ref={ringRef} className={ringCls} aria-hidden="true">
        <span className="cursor-label">{label}</span>
      </div>
      <div ref={dotRef} className={dotCls} aria-hidden="true" />
    </>
  );
}
