import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { defaultOgImage } from "@/lib/seo";

const title = "Blog";
const description =
  "Practical moving tips, packing guides and advice on hiring packers and movers from the Vansh Packers and Movers team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog", type: "website", images: [defaultOgImage] },
  twitter: { title, description, images: [defaultOgImage.url] },
};

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="Our Blog"
        title="What You Need to Know About Moving"
        subtitle="Practical tips and guides to help you plan a smooth, stress-free relocation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <Blog showHeading={false} />
      <CTA />
    </>
  );
}
