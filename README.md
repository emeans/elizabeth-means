# Elizabeth Means - Product • Design • Engineering

A personal site built with [Next.js](https://nextjs.org), featuring a home page, about, work (case studies), lab (frameworks and design system), and contact.

## Features

- Modern, responsive design with light/dark theme
- Mobile-first layout with hamburger navigation
- Static export for fast hosting (e.g. Netlify)
- Design system with reusable components and Storybook
- Design tokens generated from Figma (`npm run build-tokens`)
- Contact form integration
- SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Other scripts

- **`npm run build`** — Production build (static export to `out/`)
- **`npm run preview`** — Serve the built site from `out/` (e.g. `npx serve out`)
- **`npm run storybook`** — Run Storybook on port 6006
- **`npm run build-storybook`** — Build Storybook for deployment
- **`npm run build-tokens`** — Regenerate `app/tokens.css` from Figma token JSON (see `app/tokens/README.md`)

### Build for production

```bash
npm run build
```

This generates a static site in the `out` folder (Next.js `output: 'export'`).

## Project structure

```
/
├── app/
│   ├── (pages)/              # Route segments (about, work, lab, etc.)
│   │   ├── about/
│   │   ├── work/
│   │   └── lab/
│   ├── components/
│   │   └── design-system/    # Reusable UI components (Button, Card, etc.)
│   ├── features/             # Feature-specific modules
│   │   ├── about/            # About page content
│   │   ├── home/              # Hero and home content
│   │   ├── lab/               # Lab entries and frameworks
│   │   ├── shared/            # AppLayout, Footer, Contact, ContactForm
│   │   └── work/              # Work case studies (e.g. WIC)
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── globals.css           # Global styles (imports tokens.css)
│   └── tokens.css            # Generated from Figma (do not edit)
├── app/tokens/               # Figma token export + build script
│   ├── build-tokens.js
│   ├── Core.tokens.json
│   ├── Light Mode.tokens.json
│   └── Dark Mode.tokens.json
├── public/                   # Static assets (favicons, PDFs, images)
├── next.config.js            # Next.js config (static export, images)
├── tsconfig.json
└── netlify.toml              # Netlify build/deploy config
```

## Deployment

The site is configured for static export and can be deployed to Netlify (or any static host).

1. Push to your Git repository
2. Connect the repo to Netlify
3. Netlify uses `netlify.toml` for build settings; build runs `npm run build` and publishes `out/`.

## Customization

- **Hero:** `app/features/home/Hero/`
- **About:** `app/features/about/About/`
- **Footer:** `app/features/shared/Footer/`
- **Contact / form:** `app/features/shared/Contact/`, `app/features/shared/ContactForm/`
- **Navigation / layout:** `app/features/shared/AppLayout/`
- **Design system components:** `app/components/design-system/`
- **Global styles and tokens:** `app/globals.css`; design values in Figma → `app/tokens/` → `npm run build-tokens`

Resume is offered as a PDF download link (e.g. in About); place the file in `public/` and link to it.

## Tech stack

- [Next.js](https://nextjs.org) — React framework with static export
- React 18, TypeScript
- CSS Modules + design tokens (`app/tokens.css`, `app/globals.css`)
- Storybook — component development and a11y checks

## License

Private project — All rights reserved.
