# Reading Dashboard

A cozy, minimal analytics dashboard for visualizing monthly reading habits.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
- `src/components/` – React components
- `src/styles/` – CSS and design system
- `src/data/` – Mock data for development

## Design
- Pastel color palette: pink, yellow, mint, lavender, baby blue, peach
- Inspired by StoryGraph, Notion, and modern analytics tools

## Dashboard Requirements & Features

- **User Profile**: Avatar, name, membership info, favorite genre, and currently reading book are displayed.
- **Reading Metrics**: Key stats (e.g., reading streak) with relevant icons and accessible color contrast.
- **Month Picker**: Custom select with chevron, keyboard navigation, and accessible labeling.
- **Recently Read List**: Horizontal layout with book cover, title, author, and star rating. Each row is interactive with a hover effect.
- **Modern UI**: Yellow/pink gradient background, rounded cards, and visually distinct sections.
- **Accessibility**: WCAG 2.1 AA compliance, semantic HTML, ARIA labels, alt text, focus indicators, and keyboard navigation.

### Accessibility & UI Requirements
- WCAG 2.1 AA color contrast for all text and icons
- Keyboard navigation for all interactive elements
- ARIA labels and roles where appropriate
- Semantic HTML (headings, lists, regions)
- Alt text for all images
- Visible focus indicators
- Responsive layout for desktop and mobile
- Static assets (e.g., avatar) served from the public folder
- No inline styles for borders; all visual styles managed via CSS
- Consistent font sizing for metric values and book titles
- Interactive elements (month picker, book list rows) have pointer cursors and hover effects

### Customization
- Update `src/data/metrics.json` and `mockReadingData.js` for your own reading stats.
- Replace `public/headshot.jpeg` with your own avatar image.

## License

MIT License
