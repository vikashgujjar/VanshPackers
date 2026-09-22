// Centralized JSON-LD builders. Every page reuses these instead of hand-rolling
// schema objects, so the structured data stays consistent, valid and free of
// duplicated/conflicting entities across the site.
//
// Nothing here invents data — every field is sourced from `siteConfig` /
// `site-data.ts` or passed in by the calling page from content already
// visible on that page.

import { siteConfig } from "./site-data";

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

/**
 * Sitewide Organization + WebSite graph, rendered once in the root layout.
 * Other schemas reference the organization by @id instead of repeating it.
 */
export function buildRootSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MovingCompany",
        "@id": ORGANIZATION_ID,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        image: `${siteConfig.url}/logo.png`,
        telephone: `+91${siteConfig.phone}`,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "#42/1, Muneshwara Layout, Haralukunte",
          addressLocality: siteConfig.city,
          postalCode: "560068",
          addressCountry: "IN",
        },
        areaServed: `${siteConfig.city}, India`,
        priceRange: "₹₹",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+91${siteConfig.phone}`,
          email: siteConfig.email,
          contactType: "customer service",
          areaServed: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "en-IN",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}

/**
 * BreadcrumbList matching the visible breadcrumb trail rendered by
 * PageHero / ServiceSplitHero on a given page. `items` should mirror
 * exactly what's shown on screen — pass the same labels, in the same order.
 */
export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/**
 * FAQPage schema. Only call this with the exact question/answer pairs that
 * are visibly rendered on the same page (e.g. the `faqs` array behind the
 * <FAQ /> component) — never a subset or reworded copy.
 */
export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Service schema for a service or location landing page. */
export function buildServiceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${siteConfig.url}${path}`,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: areaServed ?? `${siteConfig.city}, India`,
  };
}

/** Article schema for a blog post — no fabricated publish dates or authors. */
export function buildArticleSchema({
  headline,
  description,
  image,
  path,
}: {
  headline: string;
  description: string;
  image: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image,
    url: `${siteConfig.url}${path}`,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: `${siteConfig.url}${path}`,
  };
}
