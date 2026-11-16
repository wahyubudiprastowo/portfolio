"use client";

import { useRef } from "react";
import { useSite } from "./site-context";

/**
 * Magnetic wrapper: the child is gently pulled toward the pointer while it
 * hovers nearby, then springs back on leave. Skipped on touch devices,
 * in Edit Mode, when Motion is off or reduced motion is preferred.
 */
export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { motion, editing, mounted } = useSite();

  const active = mounted && motion && !editing;

  const onMove = (e: React.MouseEvent) => {
    if (!active || !ref.current) return;
    if (
      typeof window !== "undefined" &&
      (!window.matchMedia("(pointer: fine)").matches ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    ) {
      return;
    }
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      className={`magnetic${className ? ` ${className}` : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </span>
  );
}
