# Portfolio

My personal portfolio website showing my work across instrumentation, control systems, and product design.

Live site: [https://portfolio1-7xf.pages.dev](https://portfolio1-7xf.pages.dev)

## Stack

- **Vite 8** (multi-page setup)
- HTML, CSS, JavaScript (no framework)
- Hosted on **Cloudflare Pages**

## Project Structure

- `public/` - Static files (images, screenshots, resume PDF, favicons, `_headers`, `_redirects`, `sitemap.xml`). Served directly at the root.
- `index.html` - Homepage
- `*.html` - Case studies (`recyclenet`, `supportfit`, `travelhoster`, `mycouncillor`, `checkin`)
- `main.js` - Client-side scripts (navigation, image carousel, lightbox, contact form)
- `style.css` - Stylesheet and layout

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview
```
