// Single source of truth for the site name and copy reused across pages. The site URL lives in astro.config.mjs.

export const SITE_NAME = 'SayStreet';
export const SITE_DESCRIPTION =
	'An accessible entry point to online shopping for blind and low-vision people. Find, buy, track and return in one conversation.';
export const THEME_COLOR = '#0a1124';

// Search indexing is off until launch: every page gets <meta name="robots" content="noindex"> and robots.txt
// disallows everything. To open the site, set this to true and drop the X-Robots-Tag line in public/_headers.
export const INDEXING = false;

export const DEMO_URL = 'https://demo.saystreet.app';
export const DEVPOST_URL = 'https://paypalaihackathon.devpost.com/';
export const GITHUB_URL = 'https://github.com/saystreet/website';
export const LICENSE_URL = 'https://github.com/saystreet/website/blob/main/LICENSE';
export const CONTACT: { label: string; href: string } | null = null;
