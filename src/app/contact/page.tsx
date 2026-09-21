import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vansh Packers and Movers for a free moving quote. Call +91 6361847700 or fill out our quote form for household shifting, office relocation and vehicle transportation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
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
