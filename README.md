# The Reading Journal

A single-page reading dashboard built as a **personal, narrative reading journal** rather than a traditional analytics tool. It looks back across a year of reading and tells the story in soft language — pages sat with, hours given, genres returned to, lines that stayed with you.

If you're picking this project up later (or for the first time), this README is meant to give you enough context to understand **what it is, why it looks the way it does, and where to change things** without having to reverse-engineer the codebase.

---

## What this app is

A static, client-side React app that reads from a local mock dataset and renders one long, scrollable "journal page" for a single reader. There is no backend, no auth, no routing — everything lives in `src/`.

The experience is organized as four narrative sections rather than a grid of KPIs:

1. **A reading journal by _\<name\>_** — the reader's profile, current book, and reading streak.
2. **Your reading year so far** — a hero sentence that summarizes the year in plain language, generated from the data.
3. **This Month at a Glance** — four soft stats (books, pages, hours, pace) that respect the selected month filter.
4. **Your Reading Rhythm** — a dual-axis bar chart (pages on the left, books on the right) showing how reading moved through the year.
5. **What You're Drawn To** — a doughnut chart of genres with a ranked top-5 list, paired with **Moments & Highlights** (a featured quote + the most recently closed books).

The **month picker** in the sticky top bar drives everything. When `All` is selected, the page shows yearly totals and the full 12-month chart. When a specific month is selected, stats narrow to that month and the chart mutes non-matching months instead of removing them, so the rhythm of the year stays visible.

---

## Why it looks the way it does

The design brief lives in [context/BRIEF.md](context/BRIEF.md). The short version:

- **Cozy, calm, narrative.** Microcopy is intentionally human ("Hours You Gave Yourself", "Books You Traveled Through") instead of dashboard-y ("Total Hours", "Book Count").
- **Soft palette.** Blush `#F8D7E3`, warm butter `#FFF4CC`, cream `#FFFDF9` background, muted browns for text, gold-brown `#D08B5B` for accents. Defined as CSS custom properties in [src/styles/global.css](src/styles/global.css).
- **Type pairing.** `Cormorant Garamond` (serif) for headings, `Source Sans 3` (sans) for body. Loaded from Google Fonts in [index.html](index.html).
- **Generous whitespace and rounded surfaces.** Cards use `--radius-lg` / `--radius-xl` (20–28px) and `--shadow-soft` / `--shadow-lift`. The page is centered in a 1080px column with ~3.25rem gaps between sections.
- **Charts use the same palette as the page.** Blush for pages, gold-brown for books, muted versions when a month is filtered out. No bright/saturated colors.

> ⚠️ Note: The original brief in `context/BRIEF.md` was written for **Vue 3 + Vuetify**. The app has since been refactored to **React** while keeping the same visual goals. Treat the brief as the source of truth for *aesthetic intent*, and this README as the source of truth for *the current implementation*.

---

## Tech stack

- **React 18** + **Vite 4** — no TypeScript, no routing.
- **Chart.js 4** via **react-chartjs-2 5** — bar chart (rhythm) and doughnut chart (genres).
- **Plain CSS** — one file per component-ish concern in `src/styles/`, plus CSS custom properties in `global.css`.
- **Local JSON / JS** — all data lives in `src/data/`.

---

## Getting started

```sh
npm install
npm run dev      # vite dev server at http://localhost:5173
npm run build    # production build to dist/
npm run preview  # preview the production build
```

No environment variables, no `.env` files. Everything is static.

---

## Project structure

```
LESSON_301/
├── context/
│   └── BRIEF.md              # Original design brief (Vue/Vuetify wording, React in practice)
├── index.html                # Mounts #root, loads Google Fonts
├── public/                   # Static assets (avatar, book covers)
├── src/
│   ├── main.jsx              # React entry point
│   ├── components/
│   │   ├── App.jsx           # Top-level layout + section composition
│   │   ├── Toolbar.jsx       # Sticky top bar (title + month picker)
│   │   ├── MonthPicker.jsx   # Custom-styled <select>
│   │   ├── ReaderProfile.jsx # Avatar + name + currently-reading pill chips
│   │   ├── HeroSection.jsx   # Narrative sentence + chips (from buildNarrative)
│   │   ├── MonthlySummary.jsx# 4 inline stats (respects selectedMonth)
│   │   ├── ReadingChart.jsx  # Dual-axis bar chart (pages + books)
│   │   ├── GenresPieChart.jsx# Doughnut + ranked top-5 with bars
│   │   └── RecentlyReadList.jsx # Featured quote + recently closed books
│   ├── data/
│   │   ├── metrics.json      # Per-month data: books, pages, hours, genres, mood, etc.
│   │   └── mockReadingData.js# Recently read books list (covers, titles, ratings)
│   ├── styles/
│   │   ├── global.css        # Palette tokens, body styles, focus rings, headings
│   │   ├── dashboard.css     # Page shell, hero, stat-strip, panels, split-grid, charts
│   │   ├── readerProfile.css # Profile row + pill chips
│   │   ├── recentlyReadList.css # Moments card + highlight quote
│   │   ├── monthlySummary.css   # (legacy) summary styles
│   │   ├── monthPicker.css      # Pill-shaped select + chevron
│   │   └── metrics-list.css     # Back-compat shim (stats now in dashboard.css)
│   └── utils/
│       └── dataUtils.js      # getFilteredData, getYearlyTotals, getTopGenre,
│                             # getPeakMonth, buildNarrative
└── vite.config.js
```

---

## How the data flows

1. `App.jsx` imports `metrics.json` and `mockReadingData.js`.
2. It holds `selectedMonth` state (defaults to `'All'`) and passes it to every section.
3. Each section calls a helper from [src/utils/dataUtils.js](src/utils/dataUtils.js):
   - `getFilteredData(data, month)` — returns either the full year or a single month.
   - `getYearlyTotals(data)` — aggregates across all months.
   - `getTopGenre(data)` / `getPeakMonth(data)` — narrative facts.
   - `buildNarrative(data, month)` — produces the hero `{eyebrow, sentence, chips}` and adapts tone based on volume (≥5 books = "full, immersive"; ≥3 = "steady, well-paced"; else "slower, more reflective").
4. The chart components highlight the selected month rather than removing other months, so the year's shape is preserved.

---

## Where to change things

| You want to… | Edit this |
| --- | --- |
| Swap the reader's name, avatar, or "currently reading" | [src/components/ReaderProfile.jsx](src/components/ReaderProfile.jsx) + [public/](public/) |
| Update monthly stats (books, pages, hours, genres, mood) | [src/data/metrics.json](src/data/metrics.json) |
| Change the "Recently Closed" books | [src/data/mockReadingData.js](src/data/mockReadingData.js) |
| Tweak the featured quote | [src/components/RecentlyReadList.jsx](src/components/RecentlyReadList.jsx) |
| Rewrite the hero sentence logic / tone thresholds | [src/utils/dataUtils.js](src/utils/dataUtils.js) (`buildNarrative`) |
| Adjust palette, radius, or shadow tokens | [src/styles/global.css](src/styles/global.css) (`:root`) |
| Change page width, section gaps, or grid breakpoints | [src/styles/dashboard.css](src/styles/dashboard.css) |
| Re-label the four "This Month at a Glance" stats | [src/components/MonthlySummary.jsx](src/components/MonthlySummary.jsx) |
| Add/remove a chart axis or recolor bars | [src/components/ReadingChart.jsx](src/components/ReadingChart.jsx) |
| Reorder the narrative sections | [src/components/App.jsx](src/components/App.jsx) |

---

## Accessibility notes

- Semantic structure: `<header>`, `<main>`, `<section aria-labelledby="...">`, `<h1>`/`<h2>`/`<h3>` in hierarchy.
- Month picker uses a real `<select>` with an associated label.
- All images (avatar, book covers) have descriptive alt text.
- Focus indicators are visible (`:focus-visible` only, so mouse clicks don't get rings).
- Color contrast targets WCAG 2.1 AA — text uses `--text-primary` / `--text-secondary` against cream/blush surfaces.
- Layout is responsive: split grid + stat strip collapse to 2-col at 900px; the toolbar tagline hides at 720px; profile header stacks at 600px.

---

## Known caveats / things future-you might wonder about

- **The brief mentions Vuetify.** The app is React. See note above.
- **The featured quote is hard-coded** in `RecentlyReadList.jsx`. A natural next step is moving it into `metrics.json` per month.
- **`mood` exists in `metrics.json`** but isn't surfaced in the UI yet — candidate for a mood ribbon under the rhythm chart.
- **`metrics-list.css` is mostly empty** — the styles moved into `dashboard.css`. The file is kept as a back-compat shim and can be deleted once no imports reference it.
- **No tests.** This is a design-led prototype.

---

## License

MIT
