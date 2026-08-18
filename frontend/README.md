# श्री हनुमान चालीसा

A deliberately lightweight Astro website for reading Hanuman Chalisa in Hindi.

## Architecture

- **Astro static output**: no client framework, database, API, or runtime server is required.
- **Content collection**: the Chalisa is a Markdown entry at `src/content/chalisa/hanuman-chalisa.md`; Astro validates its frontmatter.
- **Reusable shell**: shared metadata lives in `Layout.astro`; navigation, hero, reading view, and footer are independent components.
- **Performance**: one compact CSS file, no client-side JavaScript, no third-party widgets, and a CSS/SVG hero illustration.

## Commands

```bash
npm install
npm run dev
```

The local development server normally opens at `http://localhost:4321`.

```bash
npm run check
npm run build
npm run preview
```

Deploy the generated `dist/` directory to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages, or an object-storage/CDN host). Before deployment, replace the placeholder `site` value in `astro.config.mjs` and the matching sitemap domain in `public/robots.txt` with the production domain, then rebuild.

## Images

The hero illustration is an inline SVG in `src/components/Hero.astro`, so it adds no image request. To use a custom photographic or painted Hanuman image instead, put an AVIF or WebP file in `src/assets/`, import it into the component, and render it with Astro's `<Image />` component. Provide a meaningful Hindi alt text; do not use the image merely as decoration if it conveys content.

## Content maintenance

To update the Chalisa, edit only `src/content/chalisa/hanuman-chalisa.md`. Keep its YAML frontmatter valid, preserve the two trailing spaces after a line when a visible line break is wanted, and run `npm run check` afterward.

To add a devotional page, create a new `.astro` file in `src/pages/`, wrap it in `Layout`, use a unique title and natural description, then add a link in `src/components/Header.astro`. For new long-form devotional texts, add a collection entry under `src/content/` and render it with Astro Content Collections as the Chalisa page does.

## SEO checklist

- Set the final production domain in Astro configuration and robots.txt.
- Each page already has a unique title, description, canonical URL, Open Graph, Twitter, and robots metadata.
- Sitemap generation is enabled through `@astrojs/sitemap`.
- Add a social sharing image and `og:image` metadata if the site has a brand image later.
- Verify pages in Google Search Console after deployment.

## Performance checklist

- No client JavaScript is shipped.
- The hero is inline SVG; use AVIF/WebP and Astro `<Image />` for future raster imagery.
- CSS is site-local and concise; avoid third-party embeds and trackers.
- Keep future font files subsetted, self-hosted, and use `font-display: swap`.
- Run Lighthouse against the deployed site after selecting the final host and domain.
