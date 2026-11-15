# Sparsh Gupta — Portfolio

Personal portfolio and systems engineering showcase for Sparsh Gupta (Instrumentation Engineer & Product Designer).

Live site: [https://portfolio1-7xf.pages.dev](https://portfolio1-7xf.pages.dev)

---

## Tech Stack & Architecture

- **Build Tool:** [Vite 8](https://vitejs.dev/) with Multi-Page App (MPA) rollup configuration.
- **Frontend:** Vanilla HTML5, modern semantic CSS3 (custom properties, fluid responsive layouts, Google Labs minimalist design), and modern ES6+ JavaScript.
- **Deployment & Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/) with static asset caching rules (`_headers`) and clean extensionless URL redirects (`_redirects`).
- **Typography:** Instrument Sans, Space Grotesk, Plus Jakarta Sans, and JetBrains Mono via Google Fonts.

---

## Project Structure

```text
├── public/                 # Static assets deployed directly by Vite to the root of dist/
│   ├── _headers            # Cloudflare Pages HTTP security and caching headers
│   ├── _redirects          # Cloudflare Pages URL rewrite/redirect rules
│   ├── sitemap.xml         # Production XML sitemap for search engines
│   ├── robots.txt          # Web crawler directive rules
│   ├── Sparsh_Resume.pdf   # Canonical resume PDF
│   ├── favicon.*           # Site favicons and apple-touch-icon
│   ├── og-*.png            # 1200x630 OpenGraph social share cards
│   ├── CheckIn/            # Project screenshots and assets
│   ├── RecycleNET/         # Project screenshots and assets
│   ├── SupportFit/         # Project screenshots and assets
│   ├── TravelHoster/       # Project screenshots and assets
│   ├── MyCouncilor/        # Project screenshots and assets
│   └── ...                 # Company and tool logos
├── index.html              # Homepage
├── recyclenet.html         # Case study: RecycleNet
├── supportfit.html         # Case study: SupportFit
├── travelhoster.html       # Case study: TravelHoster
├── mycouncillor.html       # Case study: MyCouncillor
├── checkin.html            # Case study: CheckIn
├── 404.html                # Not Found page
├── main.js                 # Interactive controls, carousel, lightbox, and prefetcher
├── style.css               # Main styling rules and design tokens
├── vite.config.js          # Vite config with clean URLs middleware and multi-page inputs
└── package.json            # Scripts and dependencies
```

---

## Static Assets & Deployment Rule

> **Important**: All static media, downloadable documents, PDFs, sitemaps, headers, and images live in the `public/` directory. Files in `public/` are served at the root path (`/`) without transformation or fingerprinted hashes, making them the single source of truth for deployed static assets.

---

## Getting Started

### Prerequisites

- Node.js `>=20.19.0`
- npm

### Installation

```bash
npm install
```

### Local Development

Start the local Vite dev server with clean-URL routing:

```bash
npm run dev
```

### Production Build

Compile the production bundle to `dist/`:

```bash
npm run build
```

### Local Preview

Preview the built `dist/` directory locally:

```bash
npm run preview
```
*(Note: Cloudflare Pages 404 handling is validated on deployment; `npm run preview` is a local static previewer.)*
