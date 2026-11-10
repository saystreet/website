// Single source of truth for the site name and copy reused across pages. The site URL lives in astro.config.mjs.

export const SITE_NAME = 'SayStreet';
export const SITE_DESCRIPTION = 'SayStreet';
export const THEME_COLOR = '#ffffff';

// Search indexing is off until launch: every page gets <meta name="robots" content="noindex"> and robots.txt
// disallows everything. To open the site, set this to true and drop the X-Robots-Tag line in public/_headers.
export const INDEXING = false;
