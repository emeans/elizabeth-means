# Elizabeth Means - Product Designer & Engineer

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
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── About.tsx       # About section component
│   │   ├── Contact/        # Contact section component
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.css
│   │   ├── Footer/         # Footer component
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── Hero/           # Hero section component
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   └── Resume/         # Resume section component
│   │       ├── Resume.tsx
│   │       └── Resume.module.css
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page (one-page site)
│   ├── globals.css         # Global styles and CSS variables
│   └── page.module.css     # Page-specific styles (navigation, skip link)
├── public/                 # Static assets
│   ├── favicon files       # Various favicon formats
│   ├── portrait.png        # Hero section image
│   ├── Elizabeth-Means-Resume.pdf
│   └── ...                 # Other static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── netlify.toml            # Netlify deployment configuration
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

- **Hero Section**: Update content in `app/components/Hero/Hero.tsx` and styles in `app/components/Hero/Hero.module.css`
- **About Section**: Update content in `app/components/About.tsx`
- **Resume Section**: Update content in `app/folio/Resume/Resume.tsx` and styles in `app/folio/Resume/Resume.module.css`
- **Contact Section**: Update form configuration in `app/components/Contact/Contact.tsx` and styles in `app/components/Contact/Contact.module.css`
- **Footer**: Update content in `app/components/Footer/Footer.tsx` and styles in `app/components/Footer/Footer.module.css`
- **Navigation**: Update navigation logic in `app/page.tsx` and styles in `app/page.module.css`
- **Global Styles**: Modify global styles and CSS variables in `app/globals.css`

## Technologies

- [Next.js](https://nextjs.org) - React framework with static export
- React - UI library
- TypeScript - Type safety
- CSS Modules - Component-scoped styles

## License

Private project - All rights reserved
