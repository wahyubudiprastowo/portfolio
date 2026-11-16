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
      toast.success("Konten berhasil diimpor.");
    } else {
      toast.error("File tidak valid. Harus berupa content.json dari situs ini.");
    }
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className={cn("editbar", editing && "is-editing")} role="toolbar" aria-label="Toolbar edit konten">
      <button
        type="button"
        className={cn("eb-btn eb-main", editing && "is-on")}
        onClick={() => {
          setEditing(!editing);
          if (!editing) toast.info("Mode Edit aktif — klik teks mana pun untuk mengubahnya.");
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        </svg>
        {editing ? "Selesai" : "Mode Edit"}
      </button>

      {editing && (
        <>
          <button type="button" className="eb-btn" onClick={exportJson} title="Unduh content.json untuk dipublikasikan ke GitHub">
            Ekspor
          </button>
          <button
            type="button"
            className="eb-btn"
            onClick={() => fileRef.current?.click()}
            disabled={importing}
            title="Muat ulang konten dari file content.json"
          >
            Impor
          </button>
          <button
            type="button"
            className="eb-btn eb-danger"
            onClick={() => {
              if (!isModified) {
                toast.info("Belum ada perubahan yang disimpan.");
                return;
              }
              if (window.confirm("Buang semua perubahan di browser ini dan kembali ke konten asli?")) {
                resetContent();
                toast.success("Konten direset ke bawaan.");
              }
            }}
          >
            Reset
          </button>
          <span className="eb-status" aria-live="polite">
            {saveStatus === "saving" ? "Menyimpan..." : saveStatus === "saved" ? "Tersimpan di browser" : "Siap"}
          </span>
        </>
      )}

      {!editing && isModified && (
        <span className="eb-status">Ada perubahan tersimpan di browser ini</span>
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
