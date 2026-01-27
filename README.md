# Tertnes Brass Website

[![Bun](https://img.shields.io/badge/Bun-000000?style=flat&logo=bun&logoColor=white)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-FF4154?style=flat&logo=react&logoColor=white)](https://tanstack.com/start)

Website for Tertnes Brass, an elite-section brass band from Bergen.

---

## About the Project

This is a modern, full-stack website built for **Tertnes Brass**, featuring server-side rendering, responsive design, and a custom dark/light theme system. The site provides information about the band, upcoming concerts, band members, and contact details.

### Key Features

- **Server-Side Rendering (SSR)** - Fast initial page loads with TanStack Start
- **File-Based Routing** - Intuitive routing structure with TanStack Router
- **Dark/Light Mode** - Automatic theme switching based on user preference
- **Responsive Design** - Optimized for all screen sizes
- **TypeScript** - Type-safe code throughout the application
- **Custom CSS** - Clean styling with CSS variables for consistent theming
- **Fast Development** - Built with Bun for speedy package management

### Tech Stack

- **TanStack Start** - Full-stack React framework with SSR
- **TanStack Router** - File-based routing
- **React** - UI library
- **TypeScript** - Type safety
- **Bun** - Package manager and runtime
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Lucide React** - Icon library
- **Custom CSS** - Styling with CSS variables

---

## Project Structure

```
website/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── EventCard.tsx    # Event display card
│   │   └── ...
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   ├── routes/              # File-based routes
│   │   ├── __root.tsx       # Root layout
│   │   ├── index.tsx        # Home page
│   │   ├── om-oss.tsx       # About page
│   │   ├── konserter.tsx    # Concerts page
│   │   └── ...
│   ├── styles.css           # Global styles and CSS variables
│   └── main.tsx             # Application entry point
├── public/
│   └── images/              # Optimized images
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

---

## Getting Started

### Prerequisites

This project uses **Bun** as the package manager. You need to have Bun installed on your system.

**Install Bun:**

- **macOS/Linux:**
  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

- **Windows:**
  ```powershell
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

For more installation options, visit [bun.sh](https://bun.sh).

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:saynain/tertnesbrass.git
   cd tertnesbrass/website
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the application for production:

```bash
bun run build
```

To preview the production build locally:

```bash
bun run preview
```

---

## Contributing

We welcome contributions to the Tertnes Brass website! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

### 1. Fork and Clone

First, fork the repository on GitHub, then clone your fork:

```bash
git clone git@github.com:YOUR-USERNAME/tertnesbrass.git
cd tertnesbrass/website
```

Add the upstream repository as a remote:

```bash
git remote add upstream git@github.com:saynain/tertnesbrass.git
```

### 2. Set Up Development Environment

Install Bun if you haven't already (see [Prerequisites](#prerequisites) above).

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

### 3. Create a Feature Branch

**Never commit directly to the `main` branch.** Always create a new branch for your changes.

Use descriptive branch names with prefixes:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New feature | `feature/add-concert-filter` |
| `fix/` | Bug fix | `fix/header-mobile-menu` |
| `docs/` | Documentation | `docs/update-readme` |
| `style/` | Styling changes | `style/improve-button-spacing` |
| `refactor/` | Code refactoring | `refactor/event-card-component` |
| `test/` | Testing | `test/add-footer-tests` |
| `perf/` | Performance improvements | `perf/optimize-images` |

**Create your branch:**

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

#### Where to Find Code

- **Components:** `src/components/` - Reusable UI components
- **Routes/Pages:** `src/routes/` - File-based routing pages
- **Styles:** `src/styles.css` - Global styles and CSS variables
- **Contexts:** `src/contexts/` - React contexts for global state

#### Code Conventions

**TypeScript:**
- Use TypeScript strict mode (enabled by default)
- Define proper types for props and function parameters
- Avoid using `any` type

**Components:**
- Use functional components with hooks
- Keep components focused and single-purpose
- Export components as named exports

**Styling:**
- Create a separate CSS file for each component (e.g., `Header.css`)
- Use CSS variables for colors and spacing (see [CSS Variables](#css-variables-reference))
- Use semantic class names (e.g., `.header-nav`, `.event-card-title`)
- Avoid inline styles

**Routing:**
- Use `createFileRoute()` for route definitions
- Use `<Link>` component from TanStack Router (not `<a>` tags)
- Keep route files in `src/routes/`

**Images:**
- Use responsive images with appropriate sizes
- Always include descriptive `alt` text for accessibility
- Optimize images before adding them to `public/images/`

#### Checklist Before Committing

- [ ] Code works in both dark and light mode
- [ ] Design is responsive on mobile, tablet, and desktop
- [ ] No TypeScript errors (`bun run build`)
- [ ] Application builds successfully
- [ ] All images have proper alt text
- [ ] CSS uses variables instead of hardcoded colors
- [ ] Navigation uses `<Link>` components

### 5. Commit Your Changes

We use **Conventional Commits** format for commit messages.

#### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**

| Type | Purpose | Example |
|------|---------|---------|
| `feat` | New feature | `feat(events): add filter for past concerts` |
| `fix` | Bug fix | `fix(header): resolve mobile menu not closing` |
| `docs` | Documentation | `docs: update contributing guidelines` |
| `style` | Code style/formatting | `style(footer): improve spacing consistency` |
| `refactor` | Code refactoring | `refactor(hero): simplify component logic` |
| `test` | Adding/updating tests | `test(footer): add unit tests` |
| `perf` | Performance improvement | `perf(images): optimize image loading` |

**Good Commit Examples:**

```
feat(events): add filter for past concerts

Added a filter component that lets users filter events by date.
This makes it easier to find specific past concerts.
```

```
fix(header): resolve mobile menu not closing on navigation

The mobile menu was staying open after clicking a link.
Added event handler to close menu on route change.
```

```
docs: update installation instructions with Bun commands
```

**Bad Commit Examples (avoid these):**

- `fix stuff` - Too vague
- `wip` - Work in progress commits should be squashed before PR
- `updates` - Doesn't describe what was updated
- `asdf` - Meaningless

**Tips:**
- Commit often in small, logical units
- Each commit should represent one complete change
- Write clear, descriptive commit messages

**Stage and commit your changes:**

```bash
git add .
git commit -m "feat(scope): your descriptive message"
```

### 6. Push to GitHub

Push your branch to your fork:

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the [original repository](https://github.com/saynain/tertnesbrass)
2. Click "Pull requests" → "New pull request"
3. Click "compare across forks"
4. Select your fork and branch
5. Fill out the PR template (see below)
6. Click "Create pull request"

#### Pull Request Template

When creating a pull request, include:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How to Test
1. Step-by-step instructions
2. To test the changes
3. Including any setup needed

## Screenshots (if relevant)
[Add screenshots for visual changes]

## Checklist
- [ ] Code builds without errors
- [ ] Tested in both dark and light mode
- [ ] Tested on mobile and desktop
- [ ] Follows code conventions
- [ ] Commit messages follow Conventional Commits format
```

**PR Best Practices:**
- Keep PRs small and focused on one feature/fix
- Link to related issues (e.g., "Fixes #123")
- Respond to review feedback promptly
- Update your PR if changes are requested

### 8. Code Review Process

After creating your PR:

1. **Automated checks run** - Ensure all checks pass
2. **Maintainer reviews** - A maintainer will review your code
3. **Feedback provided** - Address any requested changes
4. **Approval and merge** - Once approved, your PR will be merged

**Making Changes After Review:**

If changes are requested:

```bash
# Make your changes
git add .
git commit -m "fix: address review feedback"
git push origin feature/your-feature-name
```

The PR will update automatically.

**Review Etiquette:**
- Be open to feedback and suggestions
- Respond to all review comments
- Be polite and constructive in discussions
- Ask questions if you don't understand feedback

### 9. Sync with Upstream

Keep your fork up to date with the main repository:

```bash
# Fetch upstream changes
git fetch upstream

# Switch to your main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push to your fork
git push origin main
```

### 10. Report Bugs

Found a bug? Please [open an issue](https://github.com/saynain/tertnesbrass/issues) and include:

- **Description** - What is the bug?
- **Steps to reproduce** - How to trigger the bug
- **Expected behavior** - What should happen
- **Actual behavior** - What actually happens
- **Screenshots** - If applicable
- **Environment** - Browser, OS, screen size

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `bun run dev` | Start development server on port 3000 |
| `build` | `bun run build` | Build for production |
| `preview` | `bun run preview` | Preview production build locally |
| `test` | `bun run test` | Run tests with Vitest |

---

## Code Conventions and Best Practices

### TypeScript Guidelines

- **Use strict mode** - Enabled by default in `tsconfig.json`
- **Define types explicitly** - Especially for props and function parameters
- **Avoid `any` type** - Use `unknown` if type is truly unknown
- **Use interfaces for objects** - Define clear prop interfaces

**Example Component:**

```tsx
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
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
}
```

### Component Patterns

**1. Functional Components**

Use functional components with hooks:

```tsx
export function MyComponent() {
  const [state, setState] = useState<string>('');

  useEffect(() => {
    // Side effects
  }, []);

  return <div>Content</div>;
}
```

**2. Custom Hooks**

Extract reusable logic into custom hooks:

```tsx
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

### Styling Conventions

**1. CSS Files**

Create a separate CSS file for each component:

```
Header.tsx
Header.css
```

**2. CSS Variables**

Always use CSS variables for colors and spacing:

```css
/* Good */
.button {
  background-color: var(--burgundy);
  padding: var(--spacing-md);
}

/* Bad - don't hardcode colors */
.button {
  background-color: #8E4A5B;
  padding: 1.5rem;
}
```

**3. Class Naming**

Use semantic, descriptive class names:

```css
/* Good */
.header-nav { }
.event-card-title { }
.footer-contact-link { }

/* Bad */
.red-text { }
.big-box { }
.container1 { }
```

### CSS Variables Reference

#### Colors (Light/Dark Mode)

```css
/* Backgrounds */
--bg           /* Main background */
--bg-warm      /* Warm background variant */
--bg-cream     /* Cream background variant */
--card         /* Card/surface background */

/* Brand Colors */
--burgundy        /* Primary brand color */
--burgundy-soft   /* Lighter burgundy */
--burgundy-pastel /* Very light burgundy */
--gold            /* Secondary brand color */
--gold-soft       /* Lighter gold */
--gold-pastel     /* Very light gold */

/* Text */
--text        /* Primary text color */
--text-soft   /* Secondary text color */
--text-muted  /* Muted text color */

/* Effects */
--shadow      /* Box shadow color */
```

#### Spacing

```css
--spacing-xs    /* 0.5rem / 8px */
--spacing-sm    /* 1rem / 16px */
--spacing-md    /* 1.5rem / 24px */
--spacing-lg    /* 2rem / 32px */
--spacing-xl    /* 3rem / 48px */
--spacing-2xl   /* 4rem / 64px */
```

### Routing Patterns

**1. Creating Routes**

Use `createFileRoute()` in route files:

```tsx
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return <div>About content</div>;
}
```

**2. Navigation**

Use `<Link>` for internal navigation:

```tsx
import { Link } from '@tanstack/react-router';

// Good
<Link to="/about">About</Link>

// Bad - don't use <a> for internal links
<a href="/about">About</a>
```

**3. Dynamic Routes**

Use route parameters for dynamic pages:

```tsx
// src/routes/events/$eventId.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/events/$eventId')({
  component: EventDetailPage,
});

function EventDetailPage() {
  const { eventId } = Route.useParams();
  return <div>Event {eventId}</div>;
}
```

### Images

**1. Responsive Images**

Provide multiple sizes for responsive images:

```tsx
<img
  src="/images/band-large.jpg"
  srcSet="/images/band-small.jpg 480w,
          /images/band-medium.jpg 768w,
          /images/band-large.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Tertnes Brass performing at Bergen concert hall"
/>
```

**2. Alt Text**

Always provide descriptive alt text:

```tsx
// Good
<img src="/logo.png" alt="Tertnes Brass logo" />

// Bad
<img src="/logo.png" alt="logo" />
<img src="/logo.png" alt="" /> // Only use empty alt for decorative images
```

### Accessibility

- **Semantic HTML** - Use appropriate HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- **ARIA labels** - Add ARIA labels for screen readers when needed
- **Keyboard navigation** - Ensure all interactive elements are keyboard accessible
- **Color contrast** - Maintain sufficient color contrast (WCAG AA minimum)
- **Alt text** - Provide descriptive alt text for all images

### Performance

- **Lazy loading** - Use lazy loading for images and components
- **Code splitting** - TanStack Router handles this automatically
- **Optimize images** - Compress images before adding to `public/images/`
- **Minimize re-renders** - Use `useMemo` and `useCallback` when appropriate
- **CSS performance** - Avoid overly complex selectors

---

## Testing

This project uses **Vitest** for testing along with **React Testing Library**.

### Running Tests

Run all tests:

```bash
bun run test
```

### Writing Tests

**Example Component Test:**

```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EventCard } from './EventCard';

describe('EventCard', () => {
  it('renders event information correctly', () => {
    render(
      <EventCard
        title="Summer Concert"
        date="2025-06-15"
        location="Bergen Concert Hall"
      />
    );

    expect(screen.getByText('Summer Concert')).toBeInTheDocument();
    expect(screen.getByText('2025-06-15')).toBeInTheDocument();
    expect(screen.getByText('Bergen Concert Hall')).toBeInTheDocument();
  });

  it('renders image when imageUrl is provided', () => {
    render(
      <EventCard
        title="Summer Concert"
        date="2025-06-15"
        location="Bergen Concert Hall"
        imageUrl="/images/concert.jpg"
      />
    );

    const image = screen.getByAltText('Summer Concert');
    expect(image).toHaveAttribute('src', '/images/concert.jpg');
  });
});
```

### Testing Principles

- **Test user behavior, not implementation** - Focus on what users see and do
- **Keep tests simple** - Each test should verify one thing
- **Use descriptive test names** - Clearly state what is being tested
- **Avoid testing implementation details** - Test the component's public API
- **Test edge cases** - Consider empty states, loading states, and error states

---

## License and Credits

### License

**All rights reserved. © 2025 Tertnes Brass.**

This project is private and proprietary. No permission is granted to use, copy, modify, or distribute this code without explicit written permission from Tertnes Brass.

### Built With

This website is built with open-source technologies:

- [TanStack Start](https://tanstack.com/start) - Full-stack React framework
- [TanStack Router](https://tanstack.com/router) - Type-safe routing
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- [Vite](https://vitejs.dev/) - Build tool
- [Vitest](https://vitest.dev/) - Testing framework
- [Lucide React](https://lucide.dev/) - Icon library

### Contributors

Thanks to all contributors who have helped improve this website.

See the [contributors page](https://github.com/saynain/tertnesbrass/graphs/contributors) for a full list.

---

**Questions or feedback?** Open an issue on [GitHub](https://github.com/saynain/tertnesbrass/issues).

**Want to contribute?** See our [Contributing Guide](#contributing) above!

Thank you for your interest in the Tertnes Brass website! 🎺
