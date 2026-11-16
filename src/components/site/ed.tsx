"use client";

import { getByPath } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { useSite } from "./site-context";

interface EdProps {
  /** Path data konten, mis. "hero.name" atau "projects.0.title" */
  p: string;
  className?: string;
  /** Render sebagai elemen lain, mis. "h1", "p" */
  tag?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  ariaLabel?: string;
  id?: string;
}

/**
 * Teks yang otomatis bisa diedit saat Mode Edit aktif.
 * Saat non-edit, render teks biasa.
 */
export function Ed({ p, className, tag = "span", style, ariaLabel, id }: EdProps) {
  const { content, editing, setPath } = useSite();
  const val = String(getByPath(content, p) ?? "");
  const T = tag as "span";

  if (!editing) {
    return (
      <T className={className} style={style} aria-label={ariaLabel} id={id}>
        {val}
      </T>
    );
  }
  return (
    <T
      className={cn(className, "ed-on")}
      style={style}
      id={id}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      data-p={p}
      aria-label={ariaLabel ?? `Edit text: ${p}`}
      onBlur={(e: React.FocusEvent<HTMLElement>) =>
        setPath(p, e.currentTarget.innerText.replace(/\u00a0/g, " "))
      }
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Escape") (e.target as HTMLElement).blur();
      }}
    >
      {val}
    </T>
  );
}
