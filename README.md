# Tony Wang: Portfolio

A Netflix-style personal portfolio. Pick a "Who's watching?" profile and a genre (Hollywood, K-Dramas, C-Dramas or Anime), then browse projects, skills, education and recommendations as if they were shows.

**Live site:** https://portfolio-website-xi-pied.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4 plus per-page CSS
- `next/image` for optimized images, `next/font` for Geist
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Where things live

| What | File |
| --- | --- |
| Projects | `src/app/profile/projects/projects_constants.ts` |
| Skills | `src/app/profile/skills/skill_constants.ts` |
| Home rows and banner videos | `src/app/profile/home/slides_constants.ts` |
| Movie / TV / music picks | `src/app/profile/{movies,tvshows,music}/*_constants.ts` |
| Site URL (SEO, sitemap) | `src/app/site.ts` |

Images and videos live in `public/`.
