# CLAUDE.md

Guidance for working in this repository.

## What this is

Personal portfolio / CV website for Than Chayawik. Static, content-driven, single-page
site built with **Next.js 15 (App Router) + React 19 + Tailwind CSS v4** and TypeScript.

## Project layout

- `app/` — App Router entry. `layout.tsx` (metadata + `<html>`), `page.tsx` (assembles the
  sections), `globals.css` (Tailwind import + theme tokens).
- `components/` — one component per CV section: `Nav`, `Hero`, `Section` (shared wrapper),
  `Experience`, `Skills`, `Education`, `Contact`. All are server components.
- `data/cv.ts` — **single source of truth for all CV content** (profile, experience, skills,
  education, languages). Edit content here, not in components.
- `cv.tex` — LaTeX source of the printable résumé. Keep it in sync with `data/cv.ts` when
  facts change.

## Conventions

- **Content vs. presentation:** components render from `data/cv.ts`. To change wording, dates,
  or skills, edit `data/cv.ts`; to change layout/styling, edit the component.
- **Styling:** Tailwind v4 utility classes only. Theme tokens (`bg`, `surface`, `border`,
  `muted`, `fg`, `accent`, fonts) are defined in the `@theme` block of `app/globals.css` and
  used as `text-fg`, `bg-surface`, `border-border`, etc. Add new design tokens there.
- **No attribution chrome:** do not add credit, copyright, "Built with…", "Designed by…", or
  any overclaiming text to the rendered site. Keep displayed facts strictly truthful.

## Commands

- `pnpm dev` — local dev server (http://localhost:3000).
- `pnpm build` / `pnpm start` — production build and serve.
- `pnpm lint` — Next.js ESLint.

> Note: this repo uses pnpm with a supply-chain policy. `pnpm build` runs a dependency check
> that can fail on unapproved native build scripts (e.g. `sharp`). If that blocks a build,
> run the Next CLI directly with `node_modules/.bin/next build`.
