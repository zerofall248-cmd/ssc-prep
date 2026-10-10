# SSC Prep project instructions

## Product
Build SSC Prep as a professional, mobile-first preparation portal for Indian government-exam aspirants. The current milestone is a public homepage using local mock data only.

## Visual direction
- Warm off-white canvas, deep navy text, indigo actions and a restrained chartreuse accent.
- Strong typography, clear hierarchy, fine borders and subtle offset shadows.
- Distinct editorial layouts rather than a generic set of identical cards.
- Mobile-first, keyboard accessible and responsive.

## Accuracy
- Never fabricate official exam dates, vacancies, notifications, results, student counts or testimonials.
- Sample practice cards must be identified as illustrative and must not be described as verified PYQs.
- This independent project is not affiliated with the Staff Selection Commission.

## Engineering
- Next.js App Router, React, strict TypeScript and Tailwind CSS v4.
- Keep mock content separate from UI in src/data.
- Prefer semantic HTML and small typed components.
- Minimize client JavaScript; only interactive controls should need client components.
- Do not configure database, authentication or payment systems unless explicitly requested.
- Do not add dead links, fake buttons, href="#" or suppress lint/type errors.
- Never commit secrets, credentials, or .env files.

## Workflow
- Read relevant files before editing.
- Make one coherent change at a time.
- Run npm run lint and npm run build after meaningful changes.
- Report actual check results and environmental blockers.
