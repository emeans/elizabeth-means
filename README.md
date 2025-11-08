# Elizabeth Means - Personal Portfolio

A modern personal website and UX portfolio built with [Astro](https://astro.build), featuring case studies, resume, and contact form.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast static site generation with Astro
- 📝 Portfolio case studies page
- 📄 Resume page
- 📧 Netlify contact form integration
- 🎯 SEO optimized

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

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

This will generate a static site in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── public/          # Static assets (favicons, images, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/    # Page layouts
│   └── pages/      # Route pages (file-based routing)
└── astro.config.mjs # Astro configuration
```

## Deployment

This site is configured for deployment on Netlify. The `netlify.toml` file contains the build settings.

### Netlify Deployment

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. The site will build and deploy automatically on each push

## Customization

- Update content in the page files (`src/pages/`)
- Modify styles in component `<style>` blocks
- Add case studies to `src/pages/portfolio.astro`
- Update resume content in `src/pages/resume.astro`
- Configure contact form in `src/pages/contact.astro`

## Technologies

- [Astro](https://astro.build) - Web framework
- TypeScript - Type safety
- CSS - Styling

## License

Private project - All rights reserved
