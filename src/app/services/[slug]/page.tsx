import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import ServiceSplitHero from "@/components/ServiceSplitHero";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import ServiceFaqAccordion from "@/components/ServiceFaqAccordion";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import {
  services,
  serviceIcons,
  serviceFaqs,
  whyChooseUs,
  areasServed,
  siteConfig,
} from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = services[index];
  const Icon = serviceIcons[index % serviceIcons.length];
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const faqs = serviceFaqs[service.slug] ?? [];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "MovingCompany",
      name: siteConfig.name,
      telephone: `+91${siteConfig.phone}`,
      url: siteConfig.url,
    },
    areaServed: siteConfig.city,
    url: `${siteConfig.url}/services/${service.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="flex flex-col lg:flex-row lg:items-start">
        <ServiceSplitHero service={service} icon={Icon} index={index} total={services.length} />

        {/* ───────────── Scrolling content column ───────────── */}
        <div className="min-w-0 flex-1">
          {/* What's included */}
          <section className="border-b border-slate-100 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                What&apos;s included
              </span>
              <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                Everything covered in this service
              </h2>
              <div className="mt-8 flex flex-col">
                {service.features.map((feature, i) => (
                  <div
                    key={feature}
                    className="flex items-baseline gap-5 border-t border-slate-100 py-5 first:border-t-0"
                  >
                    <span className="font-mono text-[13px] font-bold text-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15.5px] font-semibold leading-snug text-navy">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* About this service */}
          <section className="border-b border-slate-100 bg-slate-50 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                About this service
              </span>
              <div className="mt-6 flex flex-col gap-4">
                {service.longDescription.map((paragraph, i) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className={`max-w-2xl text-[15px] font-medium leading-relaxed text-slate ${
                      i === 0
                        ? "first-letter:float-left first-letter:mr-1 first-letter:text-[3.4rem] first-letter:font-extrabold first-letter:leading-[0.75] first-letter:text-orange"
                        : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Why choose Vansh for this service */}
          <section className="border-b border-slate-100 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                Why Vansh
              </span>
              <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                Why choose Vansh for {service.title.toLowerCase()}
              </h2>
              <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {whyChooseUs.map((reason) => (
                  <div key={reason} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-semibold text-navy/90">{reason}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          {/* Request a quote */}
          <section className="border-b border-slate-100 bg-[#FFF3E9] px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                Request a quote
              </span>
              <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                Get pricing for {service.title.toLowerCase()}
              </h2>
              <p className="mt-3 text-[14.5px] font-medium leading-relaxed text-slate">
                Fill in a few details below and a move planner will call you back with a
                transparent estimate.
              </p>
            </Reveal>
            <Reveal delay={100} className="mt-9">
              <ServiceQuoteForm service={service} />
            </Reveal>
          </section>

          {/* FAQ for this service */}
          {faqs.length > 0 && (
            <section className="border-b border-slate-100 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
              <Reveal>
                <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                  FAQ
                </span>
                <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                  Questions about {service.title.toLowerCase()}
                </h2>
                <div className="mt-2">
                  <ServiceFaqAccordion faqs={faqs} />
                </div>
              </Reveal>
            </section>
          )}

          {/* Areas we serve */}
          <section className="border-b border-slate-100 bg-slate-50 px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                Coverage
              </span>
              <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                Serving {siteConfig.city}, including
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {areasServed.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-semibold text-navy/75"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[13px] font-medium text-slate">
                Don&apos;t see your area? Call us — we cover the wider region too.
              </p>
            </Reveal>
          </section>

          {/* Explore other services */}
          <section className="px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
            <Reveal>
              <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-orange">
                Explore more
              </span>
              <h2 className="mt-3 text-[26px] font-extrabold leading-tight tracking-tight text-navy md:text-[30px]">
                Other services you might need
              </h2>
              <div className="mt-6 flex flex-col divide-y divide-slate-100 border-t border-slate-100">
                {otherServices.map((s) => {
                  const OtherIcon =
                    serviceIcons[services.findIndex((x) => x.slug === s.slug) % serviceIcons.length];
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-4 py-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                        <OtherIcon size={17} strokeWidth={1.9} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-bold text-navy transition-colors group-hover:text-orange">
                          {s.title}
                        </span>
                        <span className="block truncate text-[12.5px] font-medium text-slate">
                          {s.description}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-navy/25 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange"
                      />
                    </Link>
                  );
                })}
              </div>
            </Reveal>
          </section>
        </div>
      </div>

      <CTA />
    </>
  );
}
