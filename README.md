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
