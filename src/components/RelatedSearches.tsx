import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locationPages, siteConfig, type LocationPage } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function RelatedSearches() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Local coverage
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Explore our coverage across {siteConfig.city}
          </h2>
          <p className="mt-4 text-base font-medium text-slate">
            {siteConfig.name} runs regular routes across {locationPages.length}+ areas — tap a
            tile to see what moving from there looks like.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[190px] lg:grid-cols-3">
            {locationPages.map((location, i) => (
              <LocationTile
                key={location.slug}
                location={location}
                index={i}
                featured={i === 0}
                className={i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LocationTile({
  location,
  index,
  featured = false,
  className = "",
}: {
  location: LocationPage;
  index: number;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/${location.slug}`}
      className={`group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[20px] shadow-[0_20px_44px_-24px_rgba(11,31,51,0.4)] transition-shadow duration-300 hover:shadow-[0_28px_56px_-20px_rgba(11,31,51,0.5)] ${
        featured ? "min-h-[300px]" : ""
      } ${className}`}
    >
      <Image
        src={location.cityImage}
        alt={`View of ${location.name}, ${siteConfig.city}`}
        fill
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/5" />

      <div className="relative flex items-start justify-between p-4">
        <span className="font-mono text-[11px] font-bold tracking-wider text-white/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight
          size={16}
          className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange"
        />
      </div>

      <div className="relative p-4 pt-0">
        <span className="block text-[11px] font-semibold uppercase tracking-wide text-orange-light">
          Packers &amp; Movers
        </span>
        <span
          className={`block font-extrabold leading-tight text-white ${
            featured ? "text-[24px] sm:text-[28px]" : "text-[15px]"
          }`}
        >
          {location.name}
        </span>
      </div>
    </Link>
  );
}
