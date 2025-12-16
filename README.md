# Match Center UI (React + Vite)

A responsive match-center experience built with React, TypeScript, and Vite.  
It recreates two main views:

- **Match View** – a header-driven layout that spotlights a finished match, live tabs, and an events timeline (goals, corners, cards, etc.).
- **Fixtures View** – a date-aware schedule showing live/finished/upcoming matches, filters, and contextual league data.

All data is mocked locally, so it is easy to plug in your own APIs later without touching the layout primitives.

## Features

- Modern UI stack with React 19, TypeScript, Vite, and Tailwind CSS v4.
- Custom header with responsive navigation, dropdown comboboxes, and a mobile menu (`Header`, `Combobox`, `IconComboBox`, `MobileNav`).
- Infinite-scrolling date selector (`DateSelector`) powered by utility helpers in `src/lib`.
- Reusable match-event atoms (`GoalEvent`, `CornerEvent`, etc.) for building rich match timelines.
- League fixture cards with stateful styling (Finished / Live / Upcoming) and Lucide icons for interactions.

## Tech Stack

- React 19 + TypeScript
- Vite 7 (dev server & build)
- Tailwind CSS 4 (with custom theme tokens defined in `src/index.css`)
- Lucide React (icons)
- Radix UI primitives (`@radix-ui/react-*`) for popovers, dialogs, avatars
- Utility helpers: `clsx`, `tailwind-merge`, `cmdk` for combobox behavior

## Getting Started

### 1. Install dependencies

```bash
pnpm install   # or npm install / yarn install
```

> The repo ships with a `package-lock.json`, so `npm install` will mirror the lockfile exactly.

### 2. Run the dev server

```bash
npm run dev
```

Visit the printed URL (usually `http://localhost:5173`) to explore the Match or Fixtures view.

### 3. Build for production

```bash
npm run build
```

The production bundle is written to `dist/` and can be previewed locally with `npm run preview`.

### 4. Lint the project

```bash
npm run lint
```

This repository uses ESLint 9 with the TypeScript + React rules configured by Vite’s default setup.

## Project Structure

```
src/
├── App.tsx                 # Entry view (currently renders MatchView)
├── components/             # Header, DateSelector, MatchEvent atoms, shared UI primitives
│   └── ui/                 # Button, Combobox, Popover, Mobile nav, etc.
├── pages/
│   ├── Fixtures.tsx        # Schedule/list view with filters & date selector
│   └── MatchView.tsx       # Single-match summary with events timeline
├── lib/
│   ├── types.ts            # Shared TypeScript types (DayItem, etc.)
│   └── utils.ts            # Helpers such as cn(), addDays(), formatDay()
├── index.css               # Tailwind v4 config, custom fonts, CSS variables
└── main.tsx                # React root rendering with StrictMode
```

## Key Components

- `Header` – combines branding, navigation, league/season selection comboboxes, and avatar controls.
- `DateSelector` – infinite-h scrolling list with an inline calendar shortcut, built from utility hooks and the shared `Button` component.
- `MatchEvent` atoms – `GoalEvent`, `CornerEvent`, `SubstitutionEvent`, `CardEvent`, `InjuryEvent`, `PenaltyEvent` for easily composing match timelines or feeds.
- `Fixtures` page – demonstrates how to structure match cards, filters, and responsive layouts using the shared design tokens.

## Customizing the UI

- Replace the placeholder data in `src/pages/Fixtures.tsx` and `src/pages/MatchView.tsx` with real API responses. Because the components are stateless/presentational, you only need to feed different props.
- Extend the `DateSelector` component to emit callbacks when a day is selected to fetch new fixtures.
- Tailwind theme tokens (`--color-*`, fonts, breakpoints) live inside `src/index.css`. Adjust them to match your brand.

## Available Scripts

| Script        | Description                               |
|---------------|-------------------------------------------|
| `npm run dev` | Start the Vite dev server (HMR).          |
| `npm run build` | Type-check and build optimized assets. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint with the project config.      |

Feel free to adapt this UI shell into a live football data product, odds tracker, or analytics dashboard by wiring the components to your preferred backend/API. PRs and suggestions are welcome! 
