# SayStreet website

The landing page for [SayStreet](https://saystreet.app): accessible online shopping for blind and low-vision people. Find, buy, track and return in one conversation. Built for the [PayPal AI Hackathon](https://paypalaihackathon.devpost.com/).

The demo itself is a separate project at [demo.saystreet.app](https://demo.saystreet.app). This repository is only the landing page.

## What is on the page

- **Hero** with the pitch and a link to the demo
- **Problem**: why checkout breaks for screen reader users
- **Example conversation**: what a purchase looks like
- **How it works**: the agent, the checks, and the partners we use (PayPal, Channel3, Render, OpenAI)

## Stack

Astro, TypeScript and Tailwind CSS 4. The page ships no client-side JavaScript. Fonts are self-hosted through Fontsource and icons are inlined from Phosphor.

## Run it

Requires Node 26 and pnpm.

```bash
pnpm install
pnpm dev
```

| Command | What it does |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build to `dist` |
| `pnpm preview` | Serve the build locally |
| `pnpm check` | Type-check only |

## Deploy

Hosted on Cloudflare Pages. Build command `pnpm build`, output directory `dist`.

- Response headers are in `public/_headers`.
- The content security policy is set in `astro.config.mjs`.
- Search indexing is on: see `INDEXING` in `src/data/site.ts`. The `*.pages.dev` alias is kept out of search by a host rule in `public/_headers`.

## Accessibility

Semantic landmarks, one `h1`, a skip link, labelled links (external ones announce that they open in a new tab), decorative graphics hidden from assistive technology, border contrast of at least 3:1, outlined buttons in forced colors mode, and reduced motion respected. Checked with axe-core.

## Project layout

```
src/components   page sections and small pieces
src/data/site.ts name, description and links in one place
src/layouts      the base HTML layout
src/styles       design tokens and global styles
public           files served as they are, including public/brand
brand            the full logo kit
```

## License

[MIT](LICENSE)
