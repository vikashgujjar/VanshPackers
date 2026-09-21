import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import LocationHighlight from "@/components/LocationHighlight";
import LocalCoverage from "@/components/LocalCoverage";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import TypographicBreak from "@/components/TypographicBreak";
import SEOContent from "@/components/SEOContent";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import RelatedSearches from "@/components/RelatedSearches";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <LocationHighlight />
      <LocalCoverage />
      <WhyChooseUs />
      <Process />
      <TypographicBreak />
      <SEOContent />
      <PricingTable />
      <FAQ />
      <Testimonials />
      <Contact />
      <Blog />
      <RelatedSearches />
      <CTA />
    </>
  );
}
