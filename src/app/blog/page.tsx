import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical moving tips, packing guides and advice on hiring packers and movers from the Vansh Packers and Movers team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
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
