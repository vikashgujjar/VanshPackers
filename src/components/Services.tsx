"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, serviceIcons } from "@/lib/site-data";
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

        <div className="relative mt-16">
          {/* Center timeline, desktop only */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block"
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {services.map((service, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              const photo = photos[service.title] ?? fallbackPhoto;
              const { blurb, features } = meta[service.title] ?? fallbackMeta;
              const reversed = i % 2 === 1;

              return (
                <Reveal key={service.slug} delay={i * 40}>
                  <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
                    {/* Timeline marker, centered on the line for every row regardless of side */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-1/2 z-10 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-navy text-[12px] font-extrabold text-white shadow-md md:flex"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Photo — order flips on odd rows so it alternates sides */}
                    <div className={reversed ? "md:order-2" : ""}>
                      <ParallaxPhoto
                        src={photo}
                        alt={service.title}
                        icon={Icon}
                        speed={reversed ? -22 : 22}
                      />
                    </div>

                    {/* Copy */}
                    <div className={reversed ? "md:pl-2" : "md:pr-2"}>
                      <span className="text-[12.5px] font-bold text-orange md:hidden">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1 text-[22px] font-extrabold leading-tight tracking-tight text-navy md:text-[26px]">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-slate">
                        {blurb}
                      </p>
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-navy/80">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-navy transition-colors hover:text-orange"
                      >
                        Explore this service
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── ParallaxPhoto ─────────────────────
   Drifts the photo vertically as its row crosses the viewport, at a small
   fraction of scroll speed. The image sits inside an overflow-hidden frame,
   scaled up slightly so the drift never exposes an edge. Respects
   prefers-reduced-motion by leaving the image static. */

function ParallaxPhoto({
  src,
  alt,
  icon: Icon,
  speed,
}: {
  src: string;
  alt: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  speed: number;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf = 0;
    const update = () => {
      const frame = frameRef.current;
      const img = imgRef.current;
      if (!frame || !img) return;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -0.5 (row above center) .. 0.5 (row below center) while roughly in view
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const translate = progress * speed;
      img.style.transform = `translate3d(0, ${translate}px, 0) scale(1.15)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      ref={frameRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-24px_rgba(11,31,51,0.35)]"
    >
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: "scale(1.15)" }}
      >
        <Image src={src} alt={alt} fill loading="lazy" className="object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0" />
      <span className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-orange shadow-md">
        <Icon size={18} strokeWidth={1.9} />
      </span>
    </div>
  );
}