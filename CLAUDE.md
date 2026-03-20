# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for 12uno (Marcos Sendra) — digital systems specialist offering web solutions, technical support, infrastructure setup, and design services.

**Tech Stack:** React 19 + Vite 6 + JSX

## Development Commands

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

## Architecture

```
├── content/
│   └── copy.md          # All website content & copy
├── src/
│   ├── main.jsx         # React entry point (createRoot)
│   ├── App.jsx          # Main App component (word cycling, smooth scroll)
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── HeroBento.jsx
│   │   └── Footer.jsx
│   ├── 12uno-logo.svg   # Main logo asset
│   └── imgs/            # Image assets
├── index.html           # Entry HTML (mounts #app)
├── style.css            # All styles (dark theme, amber accent)
└── vite.config.js       # Vite config with React plugin
```

**Important:** Entry point is `/src/main.jsx` (not root `main.js` — that's old vanilla JS, can be deleted).

## Design System

- **Theme:** Technical Dark — refined, trustworthy, engineering-inspired
- **Colors:** `#0d0d0d` bg, `#d97706` amber accent, `#e8e8e8` text
- **Typography:** IBM Plex Mono (display/technical), Manrope (body)
- **Key Features:** Animated WORKS text cycling, grid pattern overlay, scroll animations

## React Patterns

- Functional components with hooks (useState, useEffect)
- Props for shared state (e.g., `currentWord`, `isFading` passed to Header)
- Component structure: App → Header, HeroBento, Footer

## Deployment (Sevalla + GitHub)

**GitHub Repo:** https://github.com/marcosjsendra/12uno
**Live Site:** https://12uno.com/
**Platform:** Sevalla (auto-deploys from GitHub commits)

### Deployment Strategy

The GitHub repo structure differs from the local Vite build. To deploy:

1. **Build locally:** `npm run build` → generates `dist/`
2. **Copy `dist/` contents to GitHub repo root** — Sevalla expects files at root level, not in a subfolder
3. **Commit & push** → Sevalla auto-deploys

### Files to Keep in GitHub Repo
- `error.html` — Required by Sevalla for error pages
- `index.html` — Replaced with new build output
- `style.css` — Replaced with new build output (bundled as `assets/*.css`)
- Any assets needed for error page

### Files to Delete from GitHub Repo
- `development.html` — No longer needed
- `script.js` — Replaced by bundled JS
- `normalize.css` — Handled by build
- `src/12uno-logo-div.svg` — Old logo, unused

### Deploy Command (Manual)
```bash
npm run build
# Copy dist/* to your GitHub repo directory
cd /path/to/github/repo
git add .
git commit -m "Deploy: [message]"
git push
```

### Note: Sevalla Build Settings
If Sevalla supports specifying a build output directory, configure it to use `dist/` to avoid manual copying. Otherwise, the manual copy approach above is required.
