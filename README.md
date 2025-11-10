# Elizabeth Means - Personal Portfolio

A modern one-page personal website and resume built with [Next.js](https://nextjs.org), featuring basic info, resume, and contact form.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast static site generation with Next.js
- 📄 Single-page layout with resume and contact form
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

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This will generate a static site in the `out` folder (configured for static export).

## Project Structure

```
/
├── app/            # Next.js app directory
│   ├── layout.tsx  # Root layout
│   ├── page.tsx    # Main page (one-page site)
│   ├── globals.css # Global styles
│   └── page.module.css # Page styles
├── public/         # Static assets (favicons, images, etc.)
└── next.config.js  # Next.js configuration
```

## Deployment

This site is configured for deployment on Netlify. The `netlify.toml` file contains the build settings.

### Netlify Deployment

1. Push your code to a Git repository
2. Connect the repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. The site will build and deploy automatically on each push

**Note:** The site is configured for static export, so it generates a fully static site that can be hosted on any static hosting service.

## Customization

- Update content in `app/page.tsx`
- Modify styles in `app/page.module.css` or `app/globals.css`
- Update resume content in the resume section of `app/page.tsx`
- Configure contact form in the contact section

## Technologies

- [Next.js](https://nextjs.org) - React framework with static export
- React - UI library
- TypeScript - Type safety
- CSS Modules - Component-scoped styles

## License

Private project - All rights reserved
