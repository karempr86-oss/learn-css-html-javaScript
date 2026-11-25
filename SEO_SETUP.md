# CSS Master SEO setup

## Implemented

- Unique page titles and Arabic descriptions for the main routes.
- Canonical, Open Graph, and Twitter Card metadata.
- JSON-LD organization, website, course, breadcrumb, and visible FAQ data.
- Dynamic route metadata in `seo.js`.
- `sitemap.xml`, `robots.txt`, and `404.html`.
- Breadcrumb and internal course links.
- Lazy loading and async decoding for user profile and community images.
- Cache-control and security headers for Firebase Hosting.
- Private routes use `noindex,nofollow,noarchive`.

## Manual Google setup

1. Add the deployed domain to Google Search Console.
2. Submit `https://hack1-cb0f2.web.app/sitemap.xml`.
3. Google Analytics 4 is already enabled in Firebase through measurement ID `G-1J66V2EPET`.
4. If a custom domain is used, update the canonical domain and every absolute URL in:
   - `index.html`
   - `seo.js`
   - `robots.txt`
   - `sitemap.xml`
5. Search Console verification requires a user-owned HTML or DNS verification value and is not stored in this project.

## Remaining limitation

The current application uses hash-based routes. Google can read JavaScript-rendered content, but hash URLs do not create separate server-side documents. For maximum indexing, the next SEO phase should use clean paths such as `/html-curriculum` and server rewrites to `index.html` for public routes.
