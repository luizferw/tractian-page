## Tractian Page

Localized landing page for the **“Who We Serve / Reliability Engineer”** segment of Tractian, built with **Next.js App Router** and content in **PT/EN/ES**.

**Production URL:**
[https://tractian-page.vercel.app/en/who-we-serve/reliability-engineer](https://tractian-page.vercel.app/en/who-we-serve/reliability-engineer)

---

## Stack

* Next.js 16 (App Router) + React 19
* `next-intl` for i18n
* Tailwind CSS 4 (PostCSS) + UI utilities (Headless UI, Swiper)
* Phone formatting with `libphonenumber-js` and `react-international-phone`

---

## Current routes

All routes render the `ReliabilityEngineer` component:

* `/who-we-serve/reliability-engineer` (en)
* `/who-we-serve/ingeniero-de-confiabilidad` (es)
* `/solucoes-para-gerentes-de-manutencao` (pt, default locale)

---

## Project structure

* `src/app` — App Router, layouts, and pages per locale
* `src/components` — landing page sections, navigation, footer, UI, and dialogs
* `src/i18n` — `next-intl` routing config, request config, and navigation
* `src/messages` — language messages (`en.json`, `pt.json`, `es.json`)
* `src/styles` — tokens, typography, and global styles
* `public` — static assets (images and badges)

---

## How to run

```bash
pnpm install
pnpm dev
```

Also works with `npm` or `yarn`:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## Scripts

* `pnpm dev` — development server
* `pnpm build` — production build
* `pnpm start` — production server
* `pnpm lint` — ESLint linting

---

## i18n

* Supported locales: `en`, `pt`, `es` (default: `pt`)
* Messages in `src/messages`
* Routing config in `src/i18n/routing.ts`
* Provider and locale setup in `src/app/[locale]/layout.tsx`