import type { APIRoute } from 'astro';
import { INDEXING } from '../data/site';

// Follows INDEXING in src/data/site.ts: everything is disallowed until launch.
export const GET: APIRoute = () =>
	new Response(`User-agent: *\n${INDEXING ? 'Allow: /' : 'Disallow: /'}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
