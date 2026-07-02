# Eat Glow Fit

Eat Glow Fit is a responsive one-page React site for Arthi's nutrition, fitness, and wellness coaching brand. It presents the coaching story, 12-week program options, client testimonials, and clear paths to book a clarity call or start a WhatsApp conversation.

## Features

- Fixed responsive navigation with smooth scrolling and a mobile menu
- Hero section with brand logo, positioning copy, and primary calls to action
- About section with coach photo, story link, and coaching focus areas
- Program cards for 1:1 and group 12-week coaching offers
- Client testimonials with outcome-focused summaries
- Contact section linking to Calendly, WhatsApp, and social channels
- Custom inline SVG icon components and local image assets
- Responsive styling for desktop, tablet, and mobile layouts

## Tech Stack

- React 19
- Vite 8
- Global CSS through `src/index.css` and `src/App.css`
- ESLint 10

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Developer Onboarding

If you are joining the project as a developer, start with [docs/DEVELOPER_GUIDE.md](docs/DEVELOPER_GUIDE.md). It explains the app structure, styling approach, assets, common edit points, and a suggested first task.

## Project Structure

```text
docs/
  DEVELOPER_GUIDE.md
public/
  favicon.svg
  logo.png
src/
  assets/
    arthi.jpg
    hero.png
    logo.png
  components/
    About.jsx
    Contact.jsx
    Footer.jsx
    Hero.jsx
    Icons.jsx
    Navbar.jsx
    Services.jsx
    Testimonials.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

`src/App.jsx` wires together the active page sections. `src/components/Blog.jsx` is present in the codebase but is not currently rendered by the app.

## Content And Links

The site uses local brand and coach imagery from `public/` and `src/assets/`. External calls to action point to Calendly, WhatsApp, YouTube, Instagram, Facebook, and LinkedIn.
