"use client";

import { Toaster } from "sonner";
import { SiteProvider, useSite } from "@/components/site/site-context";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { WorkSection } from "@/components/site/work-section";
import { NumbersSection } from "@/components/site/numbers-section";
import { CraftSection } from "@/components/site/craft-section";
import { JourneySection } from "@/components/site/journey-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import { EditToolbar } from "@/components/site/edit-toolbar";
import { CustomCursor } from "@/components/site/cursor";
import { Swarm } from "@/components/site/swarm";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Marquee } from "@/components/site/marquee";

function PageBody() {
  const { content, editing } = useSite();
  const words = content.ticker?.words ?? [];

  return (
    <div className="site-root min-h-screen flex flex-col">
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <div className="guides" aria-hidden="true">
        <span /><span /><span /><span /><span /><span />
      </div>

      <SiteHeader />

      <main className="page" id="page">
        <Hero />
        <Marquee variant="red" words={words} />
        <WorkSection />
        <NumbersSection />
        <CraftSection />
        <Marquee variant="ghost" reverse words={words} />
        <JourneySection />
        <ContactSection />
      </main>

      <SiteFooter />
      <EditToolbar />
      <Swarm />
      <CustomCursor />

      {/* While Edit Mode is on, keep links clickable without navigating away */}
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
