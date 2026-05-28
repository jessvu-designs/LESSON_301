# 🎨 Reading Dashboard – Style Guide

A cozy, minimal, StoryGraph-inspired aesthetic. Soft, warm, calm — every choice should reinforce **clarity, warmth, and ease**.

---

## 1. Design Principles

- **Cozy & calm** — pastel surfaces, gentle contrast, generous whitespace
- **Minimal & clean** — no clutter; one idea per section
- **Readable & intuitive** — scannable hierarchy, plain language
- **Delightful** — small touches: italics, soft gradients, rounded edges

Avoid: hard shadows, saturated colors, all caps body text, dense tables.

---

## 2. Color Tokens

All colors live as CSS custom properties in [src/styles/global.css](../src/styles/global.css). Always reference tokens — never hardcode hex values in components.

### Surfaces & Background
| Token | Value | Use |
|---|---|---|
| `--bg-app` | `#FFFDF9` | Page background (warm off-white) |
| `--bg-surface` | `#FFFFFF` | Cards, panels |
| `--bg-soft` | `#FBF4EA` | Secondary surfaces |
| `--bg-blush` | `#F8D7E3` | Hero gradient, highlights |
| `--bg-blush-soft` | `#FBE6EE` | Subtle pink wash |
| `--bg-butter` | `#FFF4CC` | Hero gradient, warm accent |
| `--bg-butter-soft` | `#FFF9E0` | Subtle yellow wash |

### Text
| Token | Value | Use |
|---|---|---|
| `--text-primary` | `#3E332D` | Headings, values |
| `--text-secondary` | `#5A4A4A` | Body copy, descriptions |
| `--text-muted` | `#8A7A72` | Captions, units, hints |

### Accents
| Token | Value | Use |
|---|---|---|
| `--accent-primary` | `#7B5A45` | Eyebrows, key labels |
| `--accent-secondary` | `#D08B5B` | Chart strokes, highlights |
| `--accent-blush` | `#E8B7C8` | Focus rings, soft callouts |

### Borders
| Token | Value | Use |
|---|---|---|
| `--border-muted` | `#ECE2D3` | Strong dividers |
| `--border-soft` | `#F1E5D6` | Card outlines, subtle separators |

### Chart Palette
Use muted, semi-transparent fills. Suggested order: blush → butter → mint → lavender → peach. Avoid pure primary colors.

---

## 3. Typography

### Font Families
- **Headings:** `'Cormorant Garamond', 'Merriweather', Georgia, serif` → `var(--font-heading)`
- **Body / UI:** `'Source Sans 3', 'Helvetica Neue', Arial, sans-serif` → `var(--font-body)`

### Scale
| Element | Size | Weight | Notes |
|---|---|---|---|
| `h1` | `2.1rem` | 700 | Serif, line-height 1.15 |
| `h2` / section title | `1.6–1.85rem` | 700 | Serif |
| `h3` / panel title | `1.15–1.2rem` | 700 | Serif |
| Hero narrative | `clamp(1.6rem, 3.2vw, 2.35rem)` | 600 | Serif, max-width ~38ch |
| Stat value | `2.1rem` | 700 | Serif, tabular numerals |
| Body | `1rem` | 400 | Sans, line-height 1.55 |
| Eyebrow | `0.78rem` | 600 | Sans, uppercase, `letter-spacing: 0.14em`, accent color |
| Hint / caption | `0.85–0.92rem` | 400–500 | Sans, italic for hints |

### Rules
- **No all caps** except short eyebrow labels.
- Use **italic** sparingly for subtitles and chart hints.
- Numerical values use `font-variant-numeric: tabular-nums` to keep alignment clean.

---

## 4. Spacing

Use a consistent rhythm: **`4 / 8 / 12 / 16 / 24 / 32 / 52px`** (≈ `0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3.25rem`).

- Section gap (page): `3.25rem`
- Card padding: `1.6–2rem`
- Inline gap (chips, inline items): `0.6–0.85rem`
- Stack gap (titles → body): `0.25–0.6rem`

Page max-width: **`1080px`**, horizontal padding `2rem` desktop / `1.1rem` mobile.

---

## 5. Radius, Shadow, Border

| Token | Value | Use |
|---|---|---|
| `--radius-lg` | `20px` | Panels, stat strip, cards |
| `--radius-xl` | `28px` | Hero |
| Pill | `999px` | Chips, buttons |
| Inner callouts | `12–14px` | Genre callout, inline notes |

| Token | Value | Use |
|---|---|---|
| `--shadow-soft` | layered, low-opacity | Default cards |
| `--shadow-lift` | slightly stronger | Hover / elevated states |

Borders are always **soft** (`var(--border-soft)`) — avoid 1px solid neutrals.

---

## 6. Components

### Hero
- `border-radius: var(--radius-xl)`
- Background: `linear-gradient(135deg, var(--bg-blush) 0%, var(--bg-butter) 100%)`
- Serif narrative, eyebrow label, optional chips for meta info
- Subtle radial highlight via `::after`

### Panel / Card
- `background: var(--bg-surface)`
- `border: 1px solid var(--border-soft)`
- `border-radius: var(--radius-lg)`
- `box-shadow: var(--shadow-soft)`
- Padding `1.8rem 2rem`
- Title → italic hint → content

### Stat Strip
- 4-column grid on desktop, stacks on mobile
- Each item: small label + large serif value + muted unit
- Dividers: `border-left: 1px solid var(--border-soft)` (none on first item)

### Chips
- Pill (`border-radius: 999px`)
- Translucent background `rgba(255, 253, 249, 0.75)`
- Border `1px solid rgba(123, 90, 69, 0.12)`
- Small, inline, use `<strong>` with `--accent-primary` for emphasis

### Buttons / Inputs
- Pill shaped, soft pastel fills
- Subtle hover (slight darken or `--shadow-lift`)
- Focus ring: `outline: 3px solid var(--accent-blush)` with `2px` offset

### Icons
- Material Design Icons (`mdi`), line-style
- Always paired with meaningful text — never decorative alone

---

## 7. Charts

- Use **muted tones** drawn from the palette tokens.
- Prefer **gradient or semi-transparent fills** (`rgba(...) 0.4–0.7`).
- Include axis labels and legends; align fonts with body text.
- Chart container: `.chart-frame { height: 320px; width: 100%; }`
- When a month is selected, **highlight** that data point rather than hide siblings — context first.
- Avoid gridlines heavier than `var(--border-soft)`.

---

## 8. Layout

- **Grid:** single 1080px column with stacked sections; two-column `.split-grid` (`1.1fr 1fr`) for chart pairings.
- **Breakpoints:**
  - `≤ 900px` → collapse to single column, reduce gaps to `2.4rem`
  - `≤ 600px` → tighten paddings, stack stat strip items
- Maintain alignment — left edges of titles, panels, and stat strip should match.

---

## 9. Motion

- Subtle, always under **300ms**.
- Use `transition: width 0.4s ease` for bar fills, `ease-out` for hovers.
- No bounce or spring; nothing that pulls focus from content.
- Respect `prefers-reduced-motion`.

---

## 10. Accessibility

- Maintain WCAG AA contrast: body text on `--bg-app` ≥ 4.5:1 (current tokens pass).
- Always provide a **visible focus ring** (`--accent-blush`, 3px, 2px offset).
- Use semantic headings (`h1` → `h2` → `h3`); never skip levels.
- Use `.sr-only` for icon-only controls' labels.
- Charts must have a textual summary or accessible caption.

---

## 11. Voice & Microcopy

- Warm, second-person, never robotic.
- Short sentences. Italics for gentle hints (“your cozy reading month”).
- Numbers first, units after (e.g., `412 pages`, `7 hrs`).
- Avoid jargon (“MoM Δ” → “vs. last month”).

---

## 12. Do / Don't

✅ Do
- Reference CSS tokens for every color, radius, shadow.
- Keep one primary action per section.
- Let whitespace do the work.

🚫 Don't
- Introduce new fonts or saturated brand colors.
- Use hard `#000` text or pure white shadows.
- Add decorative elements that don't aid comprehension.
