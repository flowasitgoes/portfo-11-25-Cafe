# Creative Tech Engineer Portfolio

A modern portfolio website showcasing creative technology work at the intersection of engineering, design, visual arts, and AI.

## Features

- **3D Interactive Scene**: Three.js powered particle system and animated geometry
- **Generative Art**: p5.js integration for interactive visual experiences
- **Modern Design**: Dark theme with neon accents and smooth animations
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Performance Optimized**: Code splitting and lazy loading

## Tech Stack

- React 18 + TypeScript
- Vite
- Three.js + React Three Fiber
- p5.js
- Tailwind CSS v4
- Framer Motion
- Vercel (deployment)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero/          # Hero section with 3D scene
│   ├── Navigation/    # Navigation bar
│   ├── Works/         # Work showcase components
│   ├── Scene3D/       # Three.js 3D scene
│   ├── GenerativeArt/ # p5.js components
│   └── Footer/        # Footer component
├── pages/
│   └── Home.tsx       # Main page
├── data/
│   └── works.ts       # Work data (update links here)
└── hooks/             # Custom React hooks
```

## Customization

### Adding Works Automatically

Use the automated script to fetch website information and generate screenshots:

```bash
npm run sync-portfolio
```

This will:
- Fetch metadata from your websites
- Generate screenshots automatically
- Auto-categorize works
- Update `src/data/works.ts`

See [SCRIPTS_GUIDE.md](./SCRIPTS_GUIDE.md) for detailed instructions.

### Adding Works Manually

Edit `src/data/works.ts` to add or modify work entries. Update the `link` field with your actual project URLs.

### Styling

The project uses Tailwind CSS v4. Customize colors and styles in `src/index.css` using the `@theme` directive.

## Deployment

The project is configured for Vercel deployment. Simply connect your repository to Vercel and deploy.

## License

MIT
# portfo-11-24-refine-long-term
