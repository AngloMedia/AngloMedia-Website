# AngloMedia Website

Website for AngloMedia: public relations, communications, content, editing and
training for organisations reaching Morocco's English-speaking markets.

Built with [Next.js](https://nextjs.org) and Tailwind CSS, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Where to edit things

- **Contact details, tagline, services list:** `src/lib/site.ts`
- **Colours (red, white and blue):** `src/app/globals.css`
- **Pages:** `src/app/` (`page.tsx` is Home; `about/`, `services/`, `training/`, `contact/`)
- **Header and footer:** `src/components/`

## Deploy

Import this GitHub repository into Vercel. Every push then deploys automatically.
