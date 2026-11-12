// Single source of truth for the site name and copy reused across pages. The site URL lives in astro.config.mjs.

export const SITE_NAME = 'SayStreet';
export const SITE_TITLE = 'Accessible online shopping | SayStreet';
export const SITE_DESCRIPTION =
	'Accessible online shopping for blind and low-vision people. Find, buy, track and return in one conversation.';
export const THEME_COLOR = '#0a1124';

// Search indexing is on. To close the site to search engines, set this to false (every page then gets
// <meta name="robots" content="noindex"> and robots.txt disallows everything) and add an X-Robots-Tag: noindex
// line to the /* block in public/_headers.
export const INDEXING = true;

export const DEMO_URL = 'https://demo.saystreet.app';
export const DEVPOST_URL = 'https://devpost.com/software/saystreet';
export const HACKATHON_URL = 'https://paypalaihackathon.devpost.com/';
export const GITHUB_URL = 'https://github.com/saystreet/demo';
export const LICENSE_URL = 'https://github.com/saystreet/demo/blob/main/LICENSE';
export const CONTACT: { label: string; href: string } | null = null;
