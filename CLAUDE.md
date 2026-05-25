# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (uses SWC, not tsc)
npm run start    # serve the production build
npm run lint     # ESLint with next/core-web-vitals + next/typescript
```

Type-checking is handled by Next.js via SWC. Running `npx tsc --noEmit` directly may fail on this machine due to missing TypeScript lib files in node_modules — use `npm run build` to validate types instead.

## Architecture

```
app/
  layout.tsx        — root layout: Geist + Geist Mono + Instrument Serif via next/font/google,
                      <html data-theme="light" suppressHydrationWarning>
  page.tsx          — composes all sections inside <TweaksProvider>
  globals.css       — all CSS (custom properties, dark theme, component styles, tweaks panel CSS)

components/
  icons.tsx         — all SVG icons as named exports (Arrow, Check, Moon, Sun, Bank, …)
  nav.tsx           — 'use client': scroll shadow, dark/light toggle via useTweaks
  hero.tsx          — 'use client': reads t.headline from TweaksContext; renders HeroVisual
  hero-visual.tsx   — static: the three-layer pipeline diagram
  problem.tsx       — static: pain-grid cards with bar charts
  solution.tsx      — static: two-column layout with API card
  features.tsx      — static: 3-col feat-grid
  how.tsx           — static: 4-step layout; uses Row component
  row.tsx           — static: mono row helper used in How steps
  industries.tsx    — static: 4-col industries grid
  industries-section.tsx — 'use client': reads t.showIndustries, conditionally renders Industries
  faq.tsx           — 'use client': accordion with useState
  cta.tsx           — static: CTA banner
  footer.tsx        — static: four-column footer
  reveal-observer.tsx    — 'use client': renders null, runs useRevealObserver on mount

  tweaks/
    tweaks-context.tsx   — 'use client': TweaksProvider + useTweaks hook + TWEAK_DEFAULTS
    tweaks-panel.tsx     — 'use client': TweaksPanel shell (draggable, host postMessage protocol)
                           + TweakSection, TweakRow, TweakToggle, TweakRadio, TweakSelect, TweakText
    tweaks-wrapper.tsx   — 'use client': wires TweaksPanel controls to TweaksContext

hooks/
  use-reveal-observer.ts — IntersectionObserver hook that adds .in to .reveal elements on scroll
```

## Key patterns

**Theme management** — `TweaksProvider` calls `document.documentElement.setAttribute('data-theme', theme)` on each change. `<html>` has `suppressHydrationWarning` so the default `data-theme="light"` doesn't mismatach if the client switches to dark.

**Font variables** — `next/font/google` injects CSS variables `--font-geist`, `--font-geist-mono`, `--font-instrument-serif` applied to `<html className>`. All CSS font stacks reference these variables, not raw font names.

**Reveal animations** — Elements with className `reveal` start invisible (`opacity:0, translateY(14px)`). `RevealObserver` (a null-rendering client component) registers an `IntersectionObserver` that adds `.in` on scroll. `data-delay="1"…"6"` applies stagger via CSS transition-delay.

**Tweaks / edit-mode protocol** — `TWEAK_DEFAULTS` in `tweaks-context.tsx` is delimited by `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/`. A host tool can rewrite the JSON between those markers on disk. Every `setTweak` call posts `{ type: "__edit_mode_set_keys", edits }` to `window.parent`. The `TweaksPanel` listens for `__activate_edit_mode` / `__deactivate_edit_mode` messages to show/hide itself.

**Server vs client components** — Static sections (`Problem`, `Solution`, `Features`, `How`, `Industries`, `CTA`, `Footer`) have no `'use client'` directive; they're rendered in the client tree (inside `TweaksProvider`) but contain no client JS. Interactive ones (`Nav`, `Hero`, `FAQ`, `TweaksWrapper`, `RevealObserver`) are explicitly marked `'use client'`.
