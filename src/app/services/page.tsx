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

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Vansh Packers and Movers' full range of services — household shifting, domestic and corporate relocation, international transportation, vehicle transport and warehouse storage.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
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
