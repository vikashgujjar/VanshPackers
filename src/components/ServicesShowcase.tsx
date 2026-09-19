"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, serviceIcons, type Service } from "@/lib/site-data";
import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-white">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            What we offer
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Pick the service that fits your move
          </h2>
          <p className="mt-4 text-base font-medium text-slate">
            Six specialised services, one trained team.{" "}
            <span className="hidden lg:inline">Hover a lane to open it.</span>
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          {/* ───────────── Desktop: expanding lane strip ───────────── */}
          <div className="hidden gap-3 overflow-hidden lg:flex lg:h-[540px]">
            {services.map((service, i) => (
              <ServiceLane
                key={service.slug}
                service={service}
                icon={serviceIcons[i % serviceIcons.length]}
                index={i}
                isActive={i === active}
                onActivate={() => setActive(i)}
              />
            ))}
          </div>

          {/* ───────────── Mobile / tablet: card grid ───────────── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceLane({
  service,
  icon: Icon,
  index,
  isActive,
  onActivate,
}: {
  service: Service;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onActivate();
      }}
      className="group relative flex shrink-0 cursor-pointer flex-col overflow-hidden rounded-[22px] shadow-[0_20px_48px_-24px_rgba(11,31,51,0.4)] outline-none transition-[flex-grow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-orange"
      style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0 }}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        loading="lazy"
        sizes="(max-width: 1280px) 45vw, 30vw"
        className={`object-cover transition-transform duration-700 ease-out ${
          isActive ? "scale-105" : "scale-100"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 ${
          isActive
            ? "from-navy/92 via-navy/35 to-navy/10"
            : "from-navy/85 via-navy/55 to-navy/35 group-hover:from-navy/80"
        }`}
      />

      {/* Progress bar — lit only on the open lane, echoes the tracked-route motif */}
      <span
        className={`absolute inset-x-0 top-0 h-[3px] transition-colors duration-500 ${
          isActive ? "bg-orange" : "bg-white/25"
        }`}
      />

      {/* Index + icon, always present */}
      <div className="relative flex items-center justify-between p-5">
        <span className="font-mono text-[12px] font-bold tracking-wider text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors duration-300 ${
            isActive ? "bg-orange text-white" : "bg-white/15 text-white"
          }`}
        >
          <Icon size={16} strokeWidth={1.9} />
        </span>
      </div>

      {/* Collapsed label — vertical title, fades out as the lane opens */}
      <div
        className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-300 ${
          isActive ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span
          className="whitespace-nowrap text-[15px] font-bold tracking-tight text-white/90 [writing-mode:vertical-rl]"
          style={{ transform: "rotate(180deg)" }}
        >
          {service.title}
        </span>
      </div>

      {/* Expanded copy — revealed once the lane is active */}
      <div
        className={`relative mt-auto min-w-[280px] p-6 transition-all duration-300 ${
          isActive ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
        }`}
      >
        <h3 className="text-[22px] font-extrabold leading-tight text-white">
          {service.title}
        </h3>
        <p className="mt-2 max-w-xs text-[13.5px] font-medium leading-relaxed text-white/75">
          {service.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {service.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-white/12 px-2.5 py-1 text-[10.5px] font-semibold text-white/85 backdrop-blur-sm"
            >
              {feature}
            </span>
          ))}
        </div>
        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-bold uppercase tracking-wide text-orange-light"
        >
          View full details
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
