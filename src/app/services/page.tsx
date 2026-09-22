import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicePromise from "@/components/ServicePromise";
import ServicesShowcase from "@/components/ServicesShowcase";
import AddOnServices from "@/components/AddOnServices";
import LocationHighlight from "@/components/LocationHighlight";
import InstantEstimate from "@/components/InstantEstimate";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";
import { defaultOgImage } from "@/lib/seo";
import { faqs } from "@/lib/site-data";

const title = "Our Services";
const description =
  "Explore Vansh Packers and Movers' full range of services — household shifting, domestic and corporate relocation, international transportation, vehicle transport and warehouse storage.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", type: "website", images: [defaultOgImage] },
  twitter: { title, description, images: [defaultOgImage.url] },
};

export default function ServicesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* Matches the real FAQ content rendered by <FAQ /> below */}
      <JsonLd data={buildFaqSchema(faqs)} />
      <PageHero
        eyebrow="Our Services"
        title="Complete Packers and Movers Services"
        subtitle="Reliable relocation and transportation solutions for households, businesses and vehicles."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicePromise />
      <ServicesShowcase />
      <AddOnServices />
      <LocationHighlight />
      <InstantEstimate />
      <PricingTable />
      <FAQ />
      <CTA />
    </>
  );
}
