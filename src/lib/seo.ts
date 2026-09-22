// Shared metadata constants. Next.js does NOT deep-merge nested `openGraph`/
// `twitter` objects between layout and page — a page that defines its own
// `openGraph` fully replaces the parent's, including `images`. Pages without
// a more specific photo of their own must re-include this default explicitly
// rather than relying on inheritance.
export const defaultOgImage = {
  url: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1920&auto=format&fit=crop",
  width: 1920,
  height: 1080,
  alt: "Vansh Packers and Movers — professional relocation services",
};
