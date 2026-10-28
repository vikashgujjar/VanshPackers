import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

// Required for `output: "export"` — this route has no dynamic input, so it's
// always safe to prerender as a static file.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
