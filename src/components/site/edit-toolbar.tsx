"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { useSite } from "./site-context";
import { cn } from "@/lib/utils";

export function EditToolbar() {
  const {
    editing,
    setEditing,
    exportJson,
    importJson,
    resetContent,
    saveStatus,
    isModified,
    mounted,
  } = useSite();
  const fileRef = useRef<HTMLInputElement>(null);
  const [importing, setImporting] = useState(false);

  if (!mounted) return null;

  const doImport = async (f: File | undefined) => {
    if (!f) return;
    setImporting(true);
    const ok = await importJson(f);
    setImporting(false);
    if (ok) {
      toast.success("Content imported successfully.");
    } else {
      toast.error("Invalid file. It must be a content.json exported from this site.");
    }
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className={cn("editbar", editing && "is-editing")} role="toolbar" aria-label="Content editing toolbar">
      <button
        type="button"
        className={cn("eb-btn eb-main", editing && "is-on")}
        onClick={() => {
          setEditing(!editing);
          if (!editing) toast.info("Edit Mode is on — click any text to change it.");
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        </svg>
        {editing ? "Done" : "Edit Mode"}
      </button>

      {editing && (
        <>
          <button type="button" className="eb-btn" onClick={exportJson} title="Download content.json to publish it to GitHub">
            Export
          </button>
          <button
            type="button"
            className="eb-btn"
            onClick={() => fileRef.current?.click()}
            disabled={importing}
            title="Reload content from a content.json file"
          >
            Import
          </button>
          <button
            type="button"
            className="eb-btn eb-danger"
            onClick={() => {
              if (!isModified) {
                toast.info("No changes are stored yet.");
                return;
              }
              if (window.confirm("Discard all changes stored in this browser and restore the original content?")) {
                resetContent();
                toast.success("Content reset to defaults.");
              }
            }}
          >
            Reset
          </button>
          <span className="eb-status" aria-live="polite">
            {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved in this browser" : "Ready"}
          </span>
        </>
      )}

      {!editing && isModified && (
        <span className="eb-status">Changes are stored in this browser</span>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="sr-only"
        onChange={(e) => doImport(e.target.files?.[0])}
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}
