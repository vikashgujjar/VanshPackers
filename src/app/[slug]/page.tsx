import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { locationPages, services, processSteps, siteConfig } from "@/lib/site-data";

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = locationPages.find((l) => l.slug === slug);
  if (!location) return {};
  const title = `Packers and Movers in ${location.name}`;
  const description = `${siteConfig.name} offers professional packers and movers services in ${location.name}, ${siteConfig.city} — household shifting, office relocation, vehicle transportation and more.`;
  return {
    title,
    description,
    alternates: { canonical: `/${location.slug}` },
    openGraph: {
      title,
      description,
      url: `/${location.slug}`,
      type: "website",
      images: [{ url: location.cityImage, alt: `${location.name}, ${siteConfig.city}` }],
    },
    twitter: {
      title,
      description,
      images: [location.cityImage],
    },
  };
}

const whyChoosePoints = [
  "Experienced movers with expertise in residential and commercial relocations.",
  "Customised moving solutions tailored to your schedule and budget.",
  "Premium packing materials for fragile and valuable items.",
  "GPS-tracked transport vehicles for secure, timely delivery.",
  "Transit insurance coverage to protect your belongings.",
  "Friendly, responsive support whenever you have a question.",
];

const benefits = [
  "On-time pickup and delivery, every time.",
  "Professional packing and unpacking services.",
  "Safe transportation for fragile and bulky items.",
  "Flexible options, from a single item to a full household.",
  "Transparent pricing — no hidden costs.",
  "Friendly support ready to answer your questions.",
];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = locationPages.findIndex((l) => l.slug === slug);
  if (index === -1) notFound();

  const location = locationPages[index];
  const heroImage = location.cityImage;

  const movingTips = [
    "Plan your move 2–3 weeks in advance to avoid last-minute stress.",
    "Declutter before you pack — fewer items means a faster, more affordable move.",
    `Label boxes clearly by room to make unpacking easier at your new ${location.name} address.`,
    "Keep an essentials bag handy for chargers, documents and daily needs.",
    "Let our team know about fragile or high-value items in advance.",
    "Confirm your moving date and timeline with us ahead of the move.",
  ];

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: `Packers & Movers In ${location.name}`, path: `/${location.slug}` },
  ]);

  const serviceSchema = buildServiceSchema({
    name: `Packers and Movers in ${location.name}`,
    description: `Household shifting, office relocation and vehicle transportation services in ${location.name}, ${siteConfig.city}.`,
    path: `/${location.slug}`,
    areaServed: `${location.name}, ${siteConfig.city}`,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <PageHero
        eyebrow="Local Service"
        title={`Packers & Movers In ${location.name}`}
        subtitle={`Trusted, insured relocation support for homes and businesses across ${location.name}, ${siteConfig.city}.`}
        crumbs={[{ label: "Home", href: "/" }, { label: `Packers & Movers In ${location.name}` }]}
      />

      <section className="section-pad bg-white">
        <div className="container-max px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            {/* ───────────── Article ───────────── */}
            <article>
              <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                Trusted Packers and Movers in {location.name}, {siteConfig.city}
              </h2>
              <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate">
                Relocating in {location.name} can be challenging because of {location.challenge}.{" "}
                {siteConfig.name} specialises in comprehensive moving solutions for residential
                and commercial customers across {location.characteristic}. From packing delicate
                items to transporting bulky furniture, our trained professionals make sure your
                move stays smooth, safe and stress-free.
              </p>

              <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-24px_rgba(11,31,51,0.3)]">
                <Image
                  src={heroImage}
                  alt={`Packing and moving service in ${location.name}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-7 text-[15px] font-medium leading-relaxed text-slate">
                Our services include local household shifting, domestic relocation, office
                relocation, car and bike transportation, and warehouse storage — available across{" "}
                {location.name} and the wider {siteConfig.city} region. We use quality packing
                materials and proven techniques to safeguard everything from fragile electronics
                to heavy furniture.
              </p>

              {/* Why choose us */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">
                Why Choose {siteConfig.shortName} in {location.name}?
              </h3>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                Moving is more than just transporting items — it&apos;s about planning, trust and
                professional handling. At {siteConfig.name}, we provide:
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {whyChoosePoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                    <span className="text-[14px] font-medium leading-relaxed text-navy/85">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Services */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">
                Comprehensive Moving Services
              </h3>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                We offer a complete range of services designed to meet every moving need in{" "}
                {location.name}:
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group flex items-start gap-2.5">
                      <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                      <span className="text-[14px] font-semibold text-navy/85 transition-colors group-hover:text-orange">
                        {s.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">
                Step-by-Step Moving Process
              </h3>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                To keep every {location.name} move efficient, we follow a structured process:
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {processSteps.map((step) => (
                  <li key={step.number} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                    <span className="text-[14px] font-medium leading-relaxed text-navy/85">
                      <strong className="font-bold">{step.title}:</strong> {step.description}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tips */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">
                Tips for a Smooth Move in {location.name}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {movingTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                    <span className="text-[14px] font-medium leading-relaxed text-navy/85">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Safety */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">
                Safety and Security Measures
              </h3>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                Your belongings&apos; safety is our priority. We use reinforced boxes, bubble wrap
                and professional packing techniques on every move in {location.name}. Our vehicles
                are GPS-tracked for safe delivery, and transit insurance is available for
                high-value items.
              </p>

              {/* Benefits */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">Benefits of Choosing Us</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5">
                    <Check size={16} className="mt-0.5 shrink-0 text-orange" />
                    <span className="text-[14px] font-medium leading-relaxed text-navy/85">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Testimonials */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">Customer Testimonials</h3>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                Customers in {location.name} consistently highlight our professionalism,
                punctuality and careful handling of their belongings. We&apos;ve helped many
                households and businesses relocate across {location.name} and the wider{" "}
                {siteConfig.city} region.
              </p>

              {/* Contact */}
              <h3 className="mt-10 text-[20px] font-bold text-navy">
                Contact Us for Hassle-Free Relocation
              </h3>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                Whether it&apos;s a local household move or an interstate relocation, our team is
                ready to help you plan your move from {location.name}. Call us, request a quote,
                or reach out using the panel alongside — {siteConfig.name} is here for a smooth,
                stress-free relocation experience.
              </p>
            </article>

            {/* ───────────── Sidebar ───────────── */}
            <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-[15px] font-bold text-navy">Our Services</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="group flex items-center justify-between gap-2 text-[13.5px] font-semibold text-navy/80 transition-colors hover:text-orange"
                      >
                        {s.title}
                        <Check size={14} className="shrink-0 text-orange" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_44px_-24px_rgba(11,31,51,0.25)]">
                <h3 className="text-[15px] font-bold text-navy">Contact Info</h3>
                <ul className="mt-4 flex flex-col gap-3 text-[13.5px] font-medium text-navy/75">
                  <li className="flex items-center gap-2.5">
                    <Phone size={15} className="shrink-0 text-orange" />
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-orange">
                      {siteConfig.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Mail size={15} className="shrink-0 text-orange" />
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-orange">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MapPin size={15} className="mt-0.5 shrink-0 text-orange" />
                    <span>{siteConfig.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock size={15} className="shrink-0 text-orange" />
                    Open 7 days · 8:00 am – 9:00 pm
                  </li>
                </ul>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full gradient-orange py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
                >
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:border-orange/40 hover:text-orange"
                >
                  Get a Free Quote
                  <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
