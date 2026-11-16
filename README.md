# WAHYU — Personal Portfolio (POPOLAB-style)

A single-page personal portfolio for **Wahyu Budi Prastowo** (IT Infrastructure · Cloud Security · Azure), inspired by the interaction design of [popolab-tw.github.io](https://popolab-tw.github.io/). Built with **Next.js 16 + TypeScript + Tailwind CSS 4**, deploys as a **static export to GitHub Pages**.

**Live site language:** English. Everything you see is content-driven and editable.

## Signature effects

| Effect | What it does |
| --- | --- |
| **Swarm cursors** | 10 named AI cursors (Claude Opus, Claude Fable, Wahyu, ChatGPT, Gemini, Grok, DeepSeek, Copilot, Perplexity, Llama) fly in on load, orbit the mouse like design-tool collaborators, and when it rests they "work": reading text lines with a colored highlight sweep, clicking buttons (visual selection box + ripple), and inspecting images/titles with live `W × H` measurement boxes. |
| **Custom cursor** | Red dot + eased trailing ring; grows on links, becomes an "OPEN" bubble over project cards. |
| **GTA VI portrait** | Hero polaroid uses a GTA-style illustration with a small overlapping "Main characters" sticker. |
| **Marquee tickers** | Giant tilted red band + ghost outline band, infinite scroll, soft edge fade. |
| **Heading sweep** | Big section headings slide in behind a clip mask. |
| **Micro-motion** | Scramble nav, magnetic buttons, card spotlight, parallax mega title, count-up stats, floating tech chips, 3D tilt polaroid, scroll progress, pulsing play halo, rotating dashed ring CTA. |

All motion respects the **Motion On/Off** toggle (persisted in the browser) and `prefers-reduced-motion`.

## Editable by design

1. Click **Edit Mode** in the bottom toolbar — every text on the page becomes editable in place.
2. Changes autosave to `localStorage` per browser.
3. **Export** downloads a `content.json`; replace `public/content.json` in the repo to publish for everyone.
4. **Import / Reset** round-trips and restores defaults.
5. Project cards can be added, removed and re-labeled from the gear icon on each card (Edit Mode).

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Deploy to GitHub Pages

The workflow `.github/workflows/deploy-pages.yml` builds and publishes automatically on every push to `main`.

Manual static export:

```bash
PAGES_BUILD=1 PAGES_BASE_PATH=/<repo-name> npx next build   # output in ./out
```

Full step-by-step upload instructions (in Indonesian): [`PANDUAN-UPLOAD.md`](./PANDUAN-UPLOAD.md).

## Content model

- `src/lib/site-content.ts` — TypeScript types + default content (source of truth in code)
- `public/content.json` — published content, loaded at runtime, editable via Edit Mode → Export
- `src/components/site/swarm.tsx` — the swarm cursor engine (self-written port of the POPOLAB resident cursors)
- `src/components/site/` — header, hero, work grid, contact, footer, edit toolbar, effects

## Credits

Interaction language inspired by [POPOLAB](https://popolab-tw.github.io/) (cursor swarm concept rewritten from scratch). Hero artwork in the style of the GTA VI loading screens.
