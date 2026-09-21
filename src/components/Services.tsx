import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services, serviceIcons, type Service } from "@/lib/site-data";
import Reveal from "./Reveal";

// Real photography per known service title. Falls back to a neutral shot
// (reused from the About section) so the layout never breaks on new data.
const photos: Record<string, string> = {
  "Local Household Shifting":
    "https://images.unsplash.com/photo-1730154838368-c37b1fdebcf6?q=80&w=1200&auto=format&fit=crop",
  "Domestic Shifting Services":
    "https://images.unsplash.com/photo-1698917414969-feade59e3343?q=80&w=1200&auto=format&fit=crop",
  "Corporate Relocation Services":
    "https://images.unsplash.com/photo-1600725935160-f67ee4f6084a?q=80&w=1200&auto=format&fit=crop",
  "International Transportation":
    "https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=1200&auto=format&fit=crop",
  "Car & Bike Transportation":
    "https://images.unsplash.com/photo-1522674149721-b0191358dc5c?q=80&w=1200&auto=format&fit=crop",
  "Warehouse Services":
    "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
};
const fallbackPhoto =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop";

const meta: Record<string, { blurb: string; features: string[] }> = {
  "Local Household Shifting": {
    blurb: "Room-by-room packing and same-city delivery, usually done in a single day.",
    features: ["Full packing with quality material", "Furniture dismantling & reassembly", "Same-day loading and delivery"],
  },
  "Domestic Shifting Services": {
    blurb: "Interstate moves with tracked transit and a fixed delivery window.",
    features: ["GPS-tracked truck in transit", "Fixed delivery date, confirmed upfront", "Transit insurance included"],
  },
  "Corporate Relocation Services": {
    blurb: "Office moves planned around your working hours, not around ours.",
    features: ["Weekend & after-hours moving slots", "IT equipment handled separately", "Minimal downtime, phased move-in"],
  },
  "International Transportation": {
    blurb: "Documentation, customs and freight handled door to door.",
    features: ["Customs paperwork managed for you", "Sea and air freight options", "Door-to-door tracking"],
  },
  "Car & Bike Transportation": {
    blurb: "Enclosed carriers keep your vehicle off the road and out of the weather.",
    features: ["Enclosed carrier, zero self-drive risk", "Condition report before & after", "Insured against transit damage"],
  },
  "Warehouse Services": {
    blurb: "Short or long-term storage in a monitored, pest-controlled facility.",
    features: ["24/7 monitored facility", "Flexible short or long-term terms", "Inventory list on request"],
  },
};
const fallbackMeta = {
  blurb: "Packed, moved and set up for you, start to finish.",
  features: ["Trained, background-verified crew", "Transparent, fixed pricing", "Insured against transit damage"],
};

export default function Services({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-max px-4 md:px-8">
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Our services
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
              Complete moving &amp; transportation solutions
            </h2>
            <p className="mt-4 text-base font-medium text-slate">
              From household relocation to corporate movement and vehicle transportation, we
              provide dependable solutions for every move.
            </p>
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const photo = photos[service.title] ?? fallbackPhoto;
            const { blurb, features } = meta[service.title] ?? fallbackMeta;

            return (
              <Reveal key={service.slug} delay={i * 60}>
                <FlipCard service={service} icon={Icon} index={i} photo={photo} blurb={blurb} features={features} />
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={220} className="mt-12 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:border-orange/40 hover:text-orange"
          >
            Explore all services
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FlipCard({
  service,
  icon: Icon,
  index,
  photo,
  blurb,
  features,
}: {
  service: Service;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  index: number;
  photo: string;
  blurb: string;
  features: string[];
}) {
  return (
    <div className="group h-[320px] w-full perspective-[1600px]">
      <Link
        href={`/services/${service.slug}`}
        className="relative block h-full w-full transform-3d transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:group-hover:transform-none group-hover:transform-[rotateY(180deg)]"
      >
        {/* Front */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[22px] p-6 shadow-[0_24px_48px_-24px_rgba(11,31,51,0.4)] backface-hidden">
          <Image
            src={photo}
            alt={service.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/10" />

          <div className="relative flex items-start justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
              <Icon size={20} strokeWidth={1.9} />
            </span>
            <span className="font-mono text-[12px] font-bold tracking-wider text-white/50">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="relative text-[19px] font-extrabold leading-tight text-white">
            {service.title}
          </h3>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[22px] bg-navy p-6 shadow-[0_24px_48px_-24px_rgba(11,31,51,0.4)] backface-hidden transform-[rotateY(180deg)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              maskImage: "radial-gradient(ellipse 80% 70% at 30% 20%, black 20%, transparent 75%)",
            }}
          />

          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange/15 text-orange">
            <Icon size={18} strokeWidth={1.9} />
          </span>
          <h3 className="relative mt-3 text-[16px] font-bold leading-tight text-white">
            {service.title}
          </h3>
          <p className="relative mt-2 text-[12.5px] leading-relaxed text-white/65">{blurb}</p>

          <ul className="relative mt-3 flex flex-col gap-1.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[11.5px] text-white/75">
                <Check size={12} className="mt-0.5 shrink-0 text-orange" />
                {feature}
              </li>
            ))}
          </ul>

          <span className="relative mt-auto flex items-center gap-1.5 pt-3 text-[12.5px] font-bold uppercase tracking-wide text-orange-light">
            Explore service
            <ArrowUpRight size={14} />
          </span>
        </div>
      </Link>
    </div>
  );
}
