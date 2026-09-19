import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import MissionValues from "@/components/MissionValues";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Vansh Packers and Movers — a professional relocation, packing and logistics company serving Bangalore with safe, transparent and reliable moving services.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
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
