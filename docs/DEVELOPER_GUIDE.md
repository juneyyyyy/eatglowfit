# Developer Guide

Welcome to the Eat Glow Fit codebase. This is a small React and Vite marketing site, so the fastest way to become useful is to understand the page sections, styling files, assets, and external links.

## First Local Run

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.
3. Open the local URL Vite prints in the terminal.
4. Run `npm run lint` before handing off changes.
5. Run `npm run build` when a change touches app structure, imports, or assets.

## App Shape

`src/App.jsx` renders the public page in this order:

- `Navbar`
- `Hero`
- `About`
- `Services`
- `Testimonials`
- `Contact`
- `Footer`

Each section is a React component in `src/components/`. Most content is currently hard-coded inside those components, which is fine for a compact brochure site. If the content grows, the next clean step would be moving repeated data into separate constants or content files.

## Styling

- `src/index.css` holds global resets, font defaults, CSS variables, and base element styles.
- `src/App.css` holds all section and component styles.
- The site uses Google Fonts from `index.html`: Bebas Neue for headings and Inter for body copy.
- The visual identity is built around purple, gold, cream, and white variables in `src/index.css`.

When changing styles, check both desktop and mobile widths. The main responsive breakpoint is `768px`, with an additional testimonial layout change at `1024px`.

## Assets

- Public assets such as `logo.png` and `favicon.svg` live in `public/` and are referenced with root paths like `/logo.png`.
- Imported React assets live in `src/assets/`, including `arthi.jpg`.
- `src/assets/hero.png`, `src/assets/logo.png`, and the default Vite/React SVGs are present but not all are currently used.

## Links To Check

The app sends visitors to external scheduling and social channels. When updating content, verify these still point to the right destinations:

- Calendly clarity call
- WhatsApp message link
- YouTube story link
- Instagram
- Facebook
- LinkedIn personal profile
- LinkedIn business page

These links appear primarily in `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Contact.jsx`, and `Footer.jsx`.

## Common Changes

To update the program offers, edit the `programs` array in `src/components/Services.jsx`.

To update testimonials, edit the `testimonials` array in `src/components/Testimonials.jsx`.

To update contact options or social links, edit `src/components/Contact.jsx` and `src/components/Footer.jsx`.

To add a new page section, create a component in `src/components/`, import it in `src/App.jsx`, and add matching styles in `src/App.css`.

## Current Notes

- `src/components/Blog.jsx` exists but is not rendered by `src/App.jsx`.
- Icons are custom inline SVG React components in `src/components/Icons.jsx`.
- The project currently has no automated test setup beyond ESLint.
- Keep changes scoped. This site is intentionally simple, so avoid adding routing, state libraries, or UI frameworks unless there is a clear product reason.

## Suggested First Task

A good first task for a new developer is to run the site locally, check the page at desktop and mobile widths, then verify all outbound links. After that, ask them to make one small content update and run `npm run lint` plus `npm run build` before opening a pull request.
