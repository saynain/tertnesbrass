# AI Agent Instructions - Tertnes Brass Website

This file provides instructions for AI coding agents (Claude, GitHub Copilot, Cursor, etc.) working on this codebase.

## Quick Context

**Project:** Website for Tertnes Brass, an elite-section brass band from Bergen, Norway
**Stack:** TanStack Start + React + TypeScript + Bun + Custom CSS
**Package Manager:** Bun (NOT npm/yarn)
**Styling:** Custom CSS with variables (NO Tailwind, NO CSS-in-JS)
**Routing:** TanStack Router with file-based routing

## Critical Rules

### 1. Package Manager: ALWAYS Use Bun
```bash
# ✅ Correct
bun install
bun run dev
bun add package-name

# ❌ Wrong
npm install
yarn add
pnpm install
```

### 2. Styling: ALWAYS Use CSS Variables
```css
/* ✅ Correct */
.button {
  background-color: var(--burgundy);
  padding: var(--spacing-md);
}

/* ❌ Wrong */
.button {
  background-color: #8E4A5B;
  padding: 1.5rem;
}
```

**Available CSS Variables:**
- Colors: `--bg`, `--card`, `--burgundy`, `--gold`, `--text`, `--text-soft`, `--text-muted`
- Spacing: `--spacing-xs`, `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`, `--spacing-2xl`

### 3. Routing: ALWAYS Use `<Link>`
```tsx
// ✅ Correct
import { Link } from '@tanstack/react-router';
<Link to="/om-oss">About</Link>

// ❌ Wrong
<a href="/om-oss">About</a>
```

### 4. TypeScript: ALWAYS Define Types
```tsx
// ✅ Correct
interface ComponentProps {
  title: string;
  count: number;
}

export function Component({ title, count }: ComponentProps) {
  // ...
}

// ❌ Wrong
export function Component({ title, count }: any) {
  // ...
}
```

### 5. Theme: ALWAYS Test Both Modes
- Every UI change must work in BOTH dark and light mode
- CSS variables automatically adapt to theme
- Test by toggling theme in the app

### 6. No Inline Styles
```tsx
// ✅ Correct
<div className="event-card">...</div>
// + separate event-card.css file

// ❌ Wrong
<div style={{ padding: '20px', color: '#333' }}>...</div>
```

## Project Structure Quick Reference

```
src/
├── components/     → Reusable UI components
├── contexts/       → React contexts (ThemeContext)
├── routes/         → File-based routes (Norwegian names)
├── styles.css      → Global styles + CSS variables
└── main.tsx        → Entry point

public/
└── images/         → Optimized images
```

## Component Patterns

### Creating a New Component

1. **File structure:**
   ```
   src/components/
   ├── MyComponent.tsx
   └── MyComponent.css
   ```

2. **Component template:**
   ```tsx
   // MyComponent.tsx
   import './MyComponent.css';

   interface MyComponentProps {
     title: string;
     description?: string;
   }

   export function MyComponent({ title, description }: MyComponentProps) {
     return (
       <div className="my-component">
         <h2 className="my-component-title">{title}</h2>
         {description && <p className="my-component-description">{description}</p>}
       </div>
     );
   }
   ```

3. **CSS template:**
   ```css
   /* MyComponent.css */
   .my-component {
     background-color: var(--card);
     padding: var(--spacing-lg);
     border-radius: 8px;
   }

   .my-component-title {
     color: var(--burgundy);
     margin-bottom: var(--spacing-sm);
   }

   .my-component-description {
     color: var(--text-soft);
   }
   ```

### Creating a New Route

1. **Create file in `src/routes/`:**
   ```tsx
   // src/routes/ny-side.tsx
   import { createFileRoute } from '@tanstack/react-router';

   export const Route = createFileRoute('/ny-side')({
     component: NySidePage,
   });

   function NySidePage() {
     return (
       <div>
         <h1>Ny Side</h1>
       </div>
     );
   }
   ```

2. **Add navigation link in `Header.tsx`:**
   ```tsx
   <Link to="/ny-side" className="header-link">
     Ny Side
   </Link>
   ```

## Code Style Conventions

### TypeScript
- Use strict mode (already enabled)
- No `any` types - use `unknown` if truly unknown
- Functional components only
- Named exports preferred

### CSS
- BEM-like naming: `.component-name`, `.component-name-element`
- Mobile-first responsive design
- Use CSS variables for ALL colors and spacing
- Keep selectors simple and flat

### Git Commits
Follow Conventional Commits:
```
feat(scope): add new feature
fix(scope): fix bug description
docs: update documentation
style(scope): improve styling
refactor(scope): refactor component
test(scope): add tests
perf(scope): improve performance
```

## Common Pitfalls to Avoid

### ❌ Don't Do This
```tsx
// Hardcoded colors
<div style={{ color: '#8E4A5B' }}>

// Using <a> for internal links
<a href="/about">About</a>

// Using any type
function Component({ data }: any)

// Installing with npm
npm install package-name

// Inline styles
<div style={{ padding: 20 }}>

// Missing alt text
<img src="/image.jpg" />

// Default exports for components
export default MyComponent;
```

### ✅ Do This Instead
```tsx
// Use CSS variables
<div className="text-burgundy">

// Use Link component
<Link to="/about">About</Link>

// Define proper types
interface ComponentProps { data: DataType }

// Install with Bun
bun add package-name

// External CSS
<div className="padded">

// Descriptive alt text
<img src="/image.jpg" alt="Band performing at concert hall" />

// Named exports
export function MyComponent() { }
```

## Testing

**Run tests:**
```bash
bun run test
```

**Test structure:**
```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

## When Making Changes

### Checklist Before Committing
- [ ] Code works in dark AND light mode
- [ ] Responsive on mobile, tablet, desktop
- [ ] No TypeScript errors
- [ ] Build succeeds (`bun run build`)
- [ ] Tests pass (`bun run test`)
- [ ] Images have descriptive alt text
- [ ] Using CSS variables (not hardcoded values)
- [ ] Using `<Link>` (not `<a>`) for navigation
- [ ] Commit message follows Conventional Commits

### How to Test
```bash
bun run dev          # Test in browser at localhost:3000
bun run build        # Ensure build succeeds
bun run test         # Run test suite
```

## File Modification Guide

| Need to... | Edit this file |
|------------|---------------|
| Change navigation | `src/components/Header.tsx` |
| Change footer | `src/components/Footer.tsx` |
| Add new route | Create file in `src/routes/` |
| Modify theme logic | `src/contexts/ThemeContext.tsx` |
| Add CSS variables | `src/styles.css` (lines 1-42) |
| Change global styles | `src/styles.css` |
| Add component | Create in `src/components/` |

## Language Guidelines

- **UI Text:** Norwegian (for Norwegian users)
- **Code/Comments:** English
- **Git Commits:** English
- **Documentation:** English

## Accessibility Requirements

- Use semantic HTML elements
- Add ARIA labels where appropriate
- Ensure keyboard navigation works
- Maintain WCAG AA color contrast
- Always include descriptive alt text on images
- Test with screen readers when possible

## Performance Guidelines

- Optimize images before adding to `/public/images/`
- Use lazy loading for images when appropriate
- Keep components small and focused
- Avoid unnecessary re-renders
- TanStack Router handles code splitting automatically

## Getting Help

- **Full documentation:** See `README.md`
- **Code examples:** Look at existing components in `src/components/`
- **Routing examples:** Check `src/routes/` directory
- **Styling reference:** See `src/styles.css` for all CSS variables

## Summary: Most Important Rules

1. **Use Bun** (not npm/yarn)
2. **Use CSS variables** (not hardcoded values)
3. **Use `<Link>`** (not `<a>` tags)
4. **Define TypeScript types** (no `any`)
5. **Test in both themes** (dark and light)
6. **Separate CSS files** (no inline styles)
7. **Descriptive alt text** (on all images)
8. **Conventional Commits** (for git messages)

Follow these rules and you'll create code that fits seamlessly with the existing codebase!
