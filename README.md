# Andrew Wilkes Portfolio

A personal developer portfolio for Andrew Wilkes. The site showcases selected
software projects, professional experience, technical skills, and contact links.
Portfolio content is stored in TypeScript data files under `src/data` so project,
experience, and skills entries are easy to edit without touching page layout.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Deployment

This project is ready for Vercel. Push the repository to GitHub, import it in
Vercel, and use the default Next.js framework settings. Vercel will install
dependencies with `npm install` and build the site with `npm run build`.
