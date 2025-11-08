# Karol Biscardi - Sworn Translator Website

A modern, friendly landing page for sworn translator Karol Biscardi, built with Astro, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern design with pastel color palette
- 📱 Fully responsive
- ⚡ Fast and optimized with Astro
- 🎯 All required sections: Hero, Services, Quote Form, Testimonials, Footer

## Tech Stack

- **Astro** - Modern web framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm installed globally (`npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser to `http://localhost:4321`

### Build for Production

```bash
pnpm build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Customization

- **Colors**: Edit the pastel color palette in `tailwind.config.mjs`
- **Content**: Update text and sections in `src/pages/index.astro`
- **Styling**: Modify Tailwind classes or add custom CSS

## License

MIT

