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

Web Analytics is integrated with `@vercel/analytics`. Enable Web Analytics from
the Vercel project dashboard so visits and page views appear in Vercel.
Speed Insights is integrated with `@vercel/speed-insights`. Enable Speed
Insights from the Vercel project dashboard to monitor Core Web Vitals and
real-user performance metrics.

After the first deploy, set this Vercel environment variable to the live site
URL so Open Graph and social preview metadata use the public domain:

```bash
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.com
```

Local development does not require this variable; the app falls back to
`http://localhost:3000`.
