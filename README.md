# Michael Akpasubi — Portfolio

A modern, multi-page developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Inspired by the clean, card-based aesthetic of [mamad.dev](https://mamad.dev/en).

## ✨ Features

- **Multi-page routing** — Home, About, Projects, Experience, and Contact pages via React Router
- **Light/Dark mode** — Theme toggle with system preference detection and localStorage persistence
- **Command Palette** — Spotlight-style search (⌘K / Ctrl+K) for quick navigation and actions
- **Responsive design** — Mobile-first layout with floating pill navigation
- **Smooth animations** — Page transitions and scroll-triggered animations powered by Framer Motion
- **Glass card UI** — Soft borders, subtle shadows, and gradient backgrounds
- **SEO optimized** — Proper meta tags, semantic HTML, and descriptive titles
- **CV download** — Direct link to downloadable PDF resume

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, TypeScript |
| **Styling** | Tailwind CSS 4, CSS Variables |
| **Animation** | Framer Motion |
| **Routing** | React Router DOM |
| **Icons** | Lucide React |
| **Build Tool** | Vite 8 |
| **Utilities** | clsx, tailwind-merge |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navbar.tsx          # Floating pill navigation
│   └── ui/
│       ├── BackButton.tsx      # ← Back navigation
│       ├── CommandPalette.tsx   # ⌘K search modal
│       ├── ExperienceCard.tsx   # Timeline experience card
│       ├── ProjectCard.tsx      # Project grid card
│       ├── StatCard.tsx         # Stats display card
│       └── ThemeToggle.tsx      # Light/dark/system toggle
├── context/
│   └── ThemeContext.tsx         # Theme provider with persistence
├── pages/
│   ├── Home.tsx                # Hero, stats, featured projects, tech stack
│   ├── About.tsx               # Bio, quick snapshot, skills, awards
│   ├── Projects.tsx            # Project grid
│   ├── Experience.tsx          # Timeline with resume download
│   └── Contact.tsx             # Contact info, socials, availability
├── lib/
│   └── utils.ts                # cn() utility for className merging
├── App.tsx                     # Router setup + theme provider
├── main.tsx                    # Entry point
└── index.css                   # Theme variables, card styles, animations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Theme System

The portfolio uses CSS custom properties for theming, defined in `src/index.css`:

- **Light mode** (default): Soft lavender gradient background with white glass cards
- **Dark mode**: Deep dark background with subtle translucent cards
- **System mode**: Follows OS-level preference

Theme preference is persisted in `localStorage` and can be toggled via:
- The sun/moon icon in the navigation bar
- The Command Palette (⌘K → "Toggle theme")
