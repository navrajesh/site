# Rajesh — portfolio

Personal site for Rajesh N Krishnan. One Next.js page, TypeScript, and Tailwind CSS. No database or environment variables.

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run check
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel

1. Import this GitHub repository.
2. Use the Next.js framework preset.
3. Leave environment variables empty.
4. Deploy.

The Resume link serves `docs/resume/resume.pdf`.

## Edit content

Personal details, project copy, status labels, and links live in `content/site.ts`.

A project action renders only when its `links` entry is an `https` URL. Leave `links` empty to hide the action.

Screenshots are optional. Add a file under `public/projects/` and set that project’s `image.src` to the public path, for example `/projects/gold.webp`. `null` keeps the labeled placeholder. Frames already include browser chrome, so a capture of the product UI fits best.
