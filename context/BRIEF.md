# 📚 Reading Dashboard – Project Plan

## 🌸 Overview
A single-page **reading analytics dashboard** that visualizes monthly reading habits with a cozy, minimal aesthetic.

Inspired by:
- StoryGraph
- Notion dashboards
- Soft, modern analytics tools

The goal is to balance **clarity, warmth, and ease of understanding**.

---

## 🎯 Experience Goals

The dashboard should feel:
- **Cozy & calm** → soft colors, gentle contrast, inviting layout  
- **Minimal & clean** → no clutter, clear hierarchy  
- **Readable & intuitive** → easy to scan at a glance  
- **Delightful** → small touches (icons, motion, mood cues)

---

## 🎨 Visual Design System

### Color Palette
Use a cohesive pastel system:

- **Primary (Pink):**
  - `#F4C6D7`
  - `#E8AFC3`

- **Secondary (Yellow):**
  - `#F6E7B2`
  - `#F9EFAF`

- **Supporting Pastels:**
  - Mint, lavender, baby blue, peach

- **Background:**
  - `#FAFAFA`
  - `#F6F1F5`
  - `#FFFDF9`

- **Cards:**
  - White or soft pastel surfaces

- **Accents:**
  - Slightly darker tones for contrast (charts, highlights)

✅ Avoid harsh or saturated colors  
✅ Ensure accessible contrast for readability  

---

### Typography

- **Headings (Serif):**
  - Playfair Display
  - DM Serif Display
  - Lora

- **Body (Sans-serif):**
  - Nunito
  - Quicksand

Guidelines:
- No all caps
- Medium font weights
- Clear hierarchy (title → section → label → value)

---

### Layout & Spacing

- Use **Vuetify grid system**:
  - `v-container`, `v-row`, `v-col`
- Maintain consistent spacing scale:
  - `8px / 16px / 24px / 32px`
- Prioritize:
  - Whitespace
  - Alignment consistency
  - Logical grouping

✅ Layout should feel **balanced, breathable, and structured**

---

### Components & Styling

**Cards**
- Rounded corners (`12–16px`)
- Soft shadows
- Generous padding

**Buttons & Inputs**
- Pill-shaped
- Soft pastel colors
- Subtle hover effects

**Icons**
- Material Design Icons (`mdi`)
- Line-style
- Always meaningful

---

### Charts (StoryGraph-inspired)

- Use **soft, muted tones**
- Prefer:
  - Gradients
  - Semi-transparent fills

Avoid:
- Bright or saturated colors

Charts must:
- Be readable at a glance
- Include labels and legends
- Align visually with layout

---

## 🧠 Data

Create a local fake yet realistic dataset:

**File:** `src/data/metrics.json`  
**Timeframe:** Jan–Dec 2025

Each month includes:
- Books (count, pages, hours)
- Conversions (started vs finished)
- To-read books
- Monthly trends (MoM change)
- Genres
- Reading mood
- Avg reading time
- Reading streaks

---

## 🔍 Data Filtering & Chart Rendering

### Month Filtering Logic

The dashboard includes a **month picker in the v-app-bar** that controls all data displayed on the page.

#### Behavior
- Default state: `"All"`
- When `"All"` is selected:
  - Summary cards show **yearly totals or averages**
  - Charts display **all 12 months**
- When a specific month is selected:
  - Cards display **only that month's data**
  - Charts either:
    - Highlight the selected month within the full dataset, OR
    - Filter down to only the selected month (depending on chart type)

---

### State Management (Vue 3)

Use a reactive state:

```ts
const selectedMonth = ref('All') // 'Jan', 'Feb', etc.

---

## 🧱 Layout Structure (Vuetify)

### 1. Top Bar (v-app-bar)
- Title + icon
- Month picker:
  - Default: **All**
  - Filters entire dashboard

---

### 2. KPI Summary Row

4 cards:
- Books Read
- Pages Read
- Completion Rate
- To-Read / Reading Hours

Each card contains:
- Icon
- Label (muted)
- Value (large + prominent)
- Trend indicator (↑ ↓)

---

### 3. Charts Row (2 columns)

- Left: **Bar chart**
  - Books/pages per month
- Right: **Line chart**
  - Reading hours or streaks

✅ Matching padding, alignment, and styling  

---

### 4. Full-Width Chart

- Area chart:
  - Books finished over time
- Include:
  - Soft gradient fill
  - Smoothed trend

---

### 5. Additional Insights (Optional)

- Genre breakdown (donut chart)
- Reading mood (icon + color card)
- Fun stats:
  - Longest streak
  - Fastest finish
  - Highlight of the month

---

## 🔄 Interactions

- Month picker filters:
  - KPI cards
  - All charts
  - All insights

**All selected:**
- Show yearly totals or averages
- Show full 12-month trends

Include:
- Trend indicators (↑ ↓)
- Highlight selected data in charts

---

## 📱 Responsiveness

- Mobile-first design
- Cards stack vertically
- Charts stack instead of side-by-side

Maintain:
- Spacing consistency
- Readable typography
- Clean alignment

---

## ✨ Delightful Touches

- Hover animations:
  - Shadow lift + color shift
- Smooth transitions (200–300ms)
- Optional enhancements:
  - Subtle background texture (dots/waves)
  - Reading-themed empty states

---

## 🧑‍🏫 Tech Stack

- Vue 3 + TypeScript  
- Vuetify 3  
- Chart.js (via vue-chartjs)  
- Local JSON data  
- Single-page app (no routing)

---

## ✅ Success Criteria

The dashboard should:

- Feel visually cohesive (no mismatched styles)
- Be scannable in <5 seconds
- Maintain consistent spacing and alignment
- Use a unified pastel design system
- Balance **beauty + usability**