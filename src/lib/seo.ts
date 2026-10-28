// Shared metadata constants. Next.js does NOT deep-merge nested `openGraph`/
// `twitter` objects between layout and page — a page that defines its own
// `openGraph` fully replaces the parent's, including `images`. Pages without
// a more specific photo of their own must re-include this default explicitly
// rather than relying on inheritance.
import { siteConfig } from "./site-data";

export const defaultOgImage = {
  url: `${siteConfig.url}/mainBanner.webp`,
  width: 1500,
  height: 1000,
  alt: "Vansh Packers and Movers — professional relocation services",
};
