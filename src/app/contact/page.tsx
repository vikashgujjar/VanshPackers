import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";
import { defaultOgImage } from "@/lib/seo";
import { faqs } from "@/lib/site-data";

const title = "Contact Us";
const description =
  "Get in touch with Vansh Packers and Movers for a free moving quote. Call +91 6361847700 or fill out our quote form for household shifting, office relocation and vehicle transportation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", type: "website", images: [defaultOgImage] },
  twitter: { title, description, images: [defaultOgImage.url] },
};

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* Matches the real FAQ content rendered by <FAQ /> below */}
      <JsonLd data={buildFaqSchema(faqs)} />
      <PageHero
        eyebrow="Get In Touch"
        title="Free From The Stress of Moving?"
        subtitle="Tell us about your move and our team will help you plan a smooth relocation."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Contact showHeading={false} />
      <FAQ />
    </>
  );
}
