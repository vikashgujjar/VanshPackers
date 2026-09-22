import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import MissionValues from "@/components/MissionValues";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { defaultOgImage } from "@/lib/seo";

const title = "About Us";
const description =
  "Learn about Vansh Packers and Movers — a professional relocation, packing and logistics company serving Bangalore with safe, transparent and reliable moving services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website", images: [defaultOgImage] },
  twitter: { title, description, images: [defaultOgImage.url] },
};

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PageHero
        eyebrow="About Vansh"
        title="Trusted for Safe, Reliable & Professional Moving Services"
        subtitle="Vansh Packers and Movers is built on a simple promise — handle every move with the same care as if it were our own."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <Stats />
      <About showHeading={false} showCta={false} />
      <OurStory />
      <MissionValues />
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
