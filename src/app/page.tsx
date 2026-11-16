"use client";

import { Toaster } from "sonner";
import { SiteProvider, useSite } from "@/components/site/site-context";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { WorkSection } from "@/components/site/work-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import { EditToolbar } from "@/components/site/edit-toolbar";

function PageBody() {
  const { editing } = useSite();

  return (
    <div className="site-root min-h-screen flex flex-col">
      <div className="grain" aria-hidden="true" />
      <div className="guides" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>

      <SiteHeader />

      <main className="page" id="page">
        <Hero />
        <WorkSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <EditToolbar />

      {/* Saat Mode Edit aktif, cegah navigasi link tak sengaja */}
      {editing && <style>{`.site-root a{pointer-events:auto}`}</style>}

      <Toaster
        position="bottom-center"
        theme="dark"
        richColors
        offset={64}
        toastOptions={{
          style: {
            background: "#111114",
            border: "1px solid rgba(255,255,255,.12)",
            color: "#f4f4f5",
          },
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <SiteProvider>
      <PageBody />
    </SiteProvider>
  );
}
