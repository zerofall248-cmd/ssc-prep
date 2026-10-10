# SSC Prep

A mobile-first, professional exam-preparation portal concept for Indian government-exam aspirants. Built with Next.js App Router, React, TypeScript and Tailwind CSS v4.

## Current milestone: public homepage

The first milestone includes:

- Responsive homepage with a distinct academic/SaaS visual style.
- Exam discovery cards for SSC CGL, CHSL, MTS, GD, CPO, JE, Stenographer and Selection Post.
- Live exam search with an empty state.
- Mobile navigation and dismissible announcement.
- Practice-set previews and subject-wise preparation areas.
- PYQ approach, study-resource previews, how-it-works steps and FAQ.
- Accessible focus states and reduced-motion support.
- Local mock content only; no backend credentials required.
- GitHub Actions checks for linting, TypeScript and production build.

## Run locally

Requirements: Node.js 22 recommended.

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

Quality checks:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## Development roadmap

The homepage is the starting milestone. Student accounts, database persistence, the question bank, the CBT mock-test engine, saved attempts, admin tooling and premium access are not implemented yet. Add them in small, tested phases.

## Accuracy and affiliation

SSC Prep is an independent project and is not affiliated with the Staff Selection Commission. Sample practice cards and question illustrations are illustrative only. Do not present mock content as verified official papers, notifications, vacancies or exam dates.


## Deploy with GitHub Pages (no Vercel)

A GitHub Actions workflow is included at `.github/workflows/pages.yml`. It builds the app as a static export and deploys the generated `out/` folder to GitHub Pages.

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions** and save.
3. Open the **Actions** tab and select **Deploy SSC Prep to GitHub Pages**.
4. Wait for the workflow to complete successfully.
5. Visit: https://zerofall248-cmd.github.io/ssc-prep/

The workflow builds with `GITHUB_PAGES=true` so Next.js assets use the repository's `/ssc-prep` base path. The normal local development command does not use that prefix.

GitHub Pages serves static files only. Server-side routes, server actions requiring a running Next.js server, authenticated backend logic, and other server-only features cannot run directly on Pages. Keep this hosting choice for the current static homepage; reassess hosting when adding the real CBT backend and student accounts.
