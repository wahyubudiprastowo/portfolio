"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Pengaman sekali-untuk-halaman: saat halaman dicetak/di-print (atau
// lingkungan tanpa scroll), semua elemen reveal dipaksa tampil.
let printBound = false;
function bindPrintReveal() {
  if (printBound || typeof window === "undefined") return;
  printBound = true;
  const add = () => document.documentElement.classList.add("force-reveal");
  window.addEventListener("beforeprint", add);
  window.matchMedia?.("print")?.addEventListener?.("change", (e) => {
    if (e.matches) add();
  });
}

/**
 * Wrapper animasi reveal-on-scroll (mirip .rv-up di situs referensi).
 * Elemen muncul dari bawah saat masuk viewport. Dibatalkan saat
 * preferensi reduced-motion atau toggle Motion dimatikan.
 */
export function Rv({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "section" | "li" | "p" | "h2" | "h3" | "article" | "figure" | "a";
} & Omit<React.HTMLAttributes<HTMLElement>, "as"> & {
  /** anchor-only props (dipakai saat as="a") */
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    bindPrintReveal();
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      // Browser sangat lama: tampilkan langsung pada frame berikutnya.
      const id = requestAnimationFrame(() => setSeen(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const T = Tag as "div";
  return (
    <T
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("rv", seen && "is-in", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </T>
  );
}
