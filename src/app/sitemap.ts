import type { MetadataRoute } from "next";
import { siteConfig, services, blogPosts, locationPages } from "@/lib/site-data";

// Required for `output: "export"` — this route has no dynamic input, so it's
// always safe to prerender as a static file.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationPages.map((location) => ({
    url: `${siteConfig.url}/${location.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...locationRoutes];
}
