# Claude Code Context - Tertnes Brass Website

This file provides context for Claude Code and other AI coding assistants working on the Tertnes Brass website.

## Project Overview

**Tertnes Brass** is an elite-section brass band from Bergen, Norway. This is their official website, built with modern web technologies and featuring a custom dark/light theme system.

**Key Technologies:**
- **TanStack Start** - Full-stack React framework with SSR
- **TanStack Router** - File-based routing system
- **React** - Functional components with hooks
- **TypeScript** - Strict mode enabled
- **Bun** - Package manager (NOT npm/yarn)
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Custom CSS** - No Tailwind, no CSS-in-JS

## Project Structure

```
website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Main navigation
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── EventCard.tsx    # Event display
│   │   └── ...
│   ├── contexts/
│   │   └── ThemeContext.tsx # Dark/light mode management
│   ├── routes/              # File-based routes (Norwegian names)
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page
│   │   ├── om-oss.tsx       # About page
│   │   ├── konserter.tsx    # Concerts page
│   │   ├── medlemmer.tsx    # Members page
│   │   └── ...
│   ├── styles.css           # Global styles and CSS variables
│   └── main.tsx             # App entry point
└── public/
    └── images/              # Optimized images
```

## Critical Conventions

### Package Manager
**ALWAYS use Bun, never npm or yarn:**
```bash
bun install          # NOT npm install
bun run dev          # NOT npm run dev
bun run build        # NOT npm run build
```

### TypeScript
- **Strict mode enabled** - No `any` types
- **Functional components only** - No class components
- **Named exports** - Avoid default exports for components
- **Explicit prop types** - Always define interfaces for props

### Styling
- **No inline styles** - Create separate CSS files per component
- **Use CSS variables** - NEVER hardcode colors or spacing
- **No Tailwind** - This project uses custom CSS
- **No CSS-in-JS** - No styled-components, emotion, etc.

**CSS Variables (from `src/styles.css`):**
```css
/* Colors */
--bg, --bg-warm, --bg-cream, --card
--burgundy, --burgundy-soft, --burgundy-pastel
--gold, --gold-soft, --gold-pastel
--text, --text-soft, --text-muted
--shadow

/* Spacing */
--spacing-xs (0.5rem), --spacing-sm (1rem), --spacing-md (1.5rem)
--spacing-lg (2rem), --spacing-xl (3rem), --spacing-2xl (4rem)
```

**Good:**
```css
.button {
  background-color: var(--burgundy);
  padding: var(--spacing-md);
  color: var(--text);
}
```

**Bad:**
```css
.button {
  background-color: #8E4A5B;  /* ❌ Don't hardcode */
  padding: 1.5rem;            /* ❌ Use spacing variables */
}
```

### Routing
- **File-based routing** - Routes are files in `src/routes/`
- **Use `createFileRoute()`** - Required for all route files
- **Use `<Link>` not `<a>`** - Always use TanStack Router's Link component
- **Norwegian route names** - Routes use Norwegian (e.g., `/om-oss`, `/konserter`)

**Good:**
```tsx
import { Link } from '@tanstack/react-router';
<Link to="/om-oss">Om oss</Link>
```

**Bad:**
```tsx
<a href="/om-oss">Om oss</a>  {/* ❌ Breaks SPA navigation */}
```

### Components
- **One component per file** - Keep files focused
- **Separate CSS file** - `Component.tsx` → `Component.css`
- **Semantic class names** - Use BEM-like naming (`.component-name`)
- **Props interface** - Always define prop types

**Example Component Structure:**
```tsx
// EventCard.tsx
interface EventCardProps {
  title: string;
  date: string;
  location: string;
  imageUrl?: string;
}

export function EventCard({ title, date, location, imageUrl }: EventCardProps) {
  return (
    <div className="event-card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3 className="event-card-title">{title}</h3>
      <p className="event-card-date">{date}</p>
      <p className="event-card-location">{location}</p>
    </div>
  );
}
```

### Theme System
- **ThemeContext** manages dark/light mode
- **All components must work in both themes**
- **Test in both modes** before considering work complete
- **Use CSS variables** - They automatically adapt to theme changes

### Images
- **Always include alt text** - Descriptive, not generic
- **Optimize before adding** - Compress images appropriately
- **Responsive images** - Use `srcSet` when appropriate
- **Images in `/public/images/`** - Not in src folder

### Git Conventions
- **Branch naming:**
  - `feature/` - New features
  - `fix/` - Bug fixes
  - `docs/` - Documentation
  - `style/` - Styling changes
  - `refactor/` - Code refactoring
  - `test/` - Tests
  - `perf/` - Performance

- **Commit format (Conventional Commits):**
  ```
  type(scope): brief description

  Detailed explanation of what and why.
  ```

- **Commit types:**
  - `feat` - New feature
  - `fix` - Bug fix
  - `docs` - Documentation
  - `style` - Code formatting/styling
  - `refactor` - Code refactoring
  - `test` - Tests
  - `perf` - Performance

## Common Tasks

### Adding a New Route
1. Create file in `src/routes/` (e.g., `ny-side.tsx`)
2. Use `createFileRoute()` pattern
3. Add navigation link in `Header.tsx`
4. Test in both themes

### Adding a New Component
1. Create `Component.tsx` in `src/components/`
2. Create `Component.css` in same directory
3. Define props interface
4. Use CSS variables for styling
5. Test in both themes
6. Add unit tests if complex logic

### Modifying Styles
1. Check if CSS variables can be used
2. Never hardcode colors or spacing
3. Test in dark mode AND light mode
4. Ensure responsive design (mobile, tablet, desktop)

### Running the Project
```bash
bun install       # Install dependencies
bun run dev       # Start dev server (port 3000)
bun run build     # Build for production
bun run preview   # Preview production build
bun run test      # Run tests
```

## Important Notes

### Language
- **UI content:** Norwegian (the band is Norwegian)
- **Code comments:** English
- **Git commits:** English
- **Documentation:** English

### Don't Do These
- ❌ Don't use npm or yarn (use Bun)
- ❌ Don't add Tailwind or CSS frameworks
- ❌ Don't use inline styles
- ❌ Don't hardcode colors or spacing
- ❌ Don't use `<a>` tags for internal navigation
- ❌ Don't use class components
- ❌ Don't use `any` type in TypeScript
- ❌ Don't skip alt text on images
- ❌ Don't forget to test in dark mode
- ❌ Don't add dependencies without good reason

### Always Do These
- ✅ Use CSS variables for colors and spacing
- ✅ Test in both dark and light themes
- ✅ Use TypeScript strict types
- ✅ Write descriptive commit messages
- ✅ Use `<Link>` for navigation
- ✅ Add prop interfaces
- ✅ Include alt text on images
- ✅ Keep components focused and simple
- ✅ Follow the existing code style

## File Locations Reference

**Need to modify navigation?** → `src/components/Header.tsx`
**Need to modify footer?** → `src/components/Footer.tsx`
**Need to add/modify routes?** → `src/routes/`
**Need to modify theme?** → `src/contexts/ThemeContext.tsx`
**Need to modify global styles?** → `src/styles.css`
**Need to modify CSS variables?** → `src/styles.css` (lines 1-42)

## Testing

- **Framework:** Vitest + React Testing Library
- **Run tests:** `bun run test`
- **Test user behavior, not implementation**
- **Always test in both themes when applicable**

## Accessibility

- Use semantic HTML (`<nav>`, `<main>`, `<article>`, etc.)
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast (WCAG AA minimum)
- Always include descriptive alt text

## Performance

- Lazy load images when appropriate
- TanStack Router handles code splitting automatically
- Optimize images before adding
- Use `useMemo` and `useCallback` judiciously
- Keep CSS selectors simple

## Questions?

Refer to:
- **README.md** - Full documentation and contributing guide
- **package.json** - Available scripts and dependencies
- **src/styles.css** - All CSS variables and global styles
- **src/routes/__root.tsx** - App structure and layout
