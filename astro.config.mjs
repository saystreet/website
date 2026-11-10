// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// The only place the site URL is set: canonical and og:url read it.
	site: 'https://saystreet.app',
	trailingSlash: 'never',
	// Small stylesheets: inline them so they don't block the first paint with an extra request.
	build: { format: 'file', inlineStylesheets: 'always' },
	vite: { plugins: [tailwindcss()] },
	security: {
		// CSP as a <meta> tag on every page, with hashes of every inline script and style Astro renders.
		// Directives a <meta> CSP can't carry (frame-ancestors) are sent as a header in public/_headers.
		csp: {
			directives: [
				"default-src 'self'",
				// Cloudflare Web Analytics beacon (injected by Pages)
				"connect-src 'self' https://cloudflareinsights.com",
				"img-src 'self' data:",
				"font-src 'self'",
				"object-src 'none'",
				"base-uri 'none'",
				"form-action 'none'",
			],
			scriptDirective: {
				// Own scripts are bundled and hashed by Astro; the one external script is the Web Analytics beacon Pages injects
				resources: ["'self'", 'https://static.cloudflareinsights.com'],
			},
		},
	},
});
