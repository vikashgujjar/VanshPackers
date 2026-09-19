import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { siteConfig, type Service } from "@/lib/site-data";

function Breadcrumb({ title }: { title: string }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs font-semibold text-white/60"
    >
      <Link href="/" className="transition-colors hover:text-orange-light">
        Home
      </Link>
      <ChevronRight size={12} />
      <Link href="/services" className="transition-colors hover:text-orange-light">
        Services
      </Link>
      <ChevronRight size={12} />
      <span className="text-white">{title}</span>
    </nav>
  );
}

function Copy({
  service,
  icon: Icon,
  index,
  total,
}: {
  service: Service;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  index: number;
  total: number;
}) {
  return (
    <>
      <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-orange-light">
        <Icon size={15} strokeWidth={2} />
        Service · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <h1 className="mt-3 text-[28px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[32px] lg:text-[2.3rem]">
        {service.title}
      </h1>
      <p className="mt-3 max-w-sm text-[14px] font-medium leading-relaxed text-white/70">
        {service.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.features.slice(0, 2).map((feature) => (
          <span
            key={feature}
            className="rounded-full bg-white/10 px-3 py-1.5 text-[11.5px] font-semibold text-white/85 backdrop-blur-sm"
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full gradient-orange px-5 py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
        >
          Get a free quote
        </Link>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[13.5px] font-semibold text-white transition-colors hover:border-orange/60 hover:bg-white/5"
        >
          <Phone size={14} />
          Call now
        </a>
      </div>
    </>
  );
}

export default function ServiceSplitHero({
  service,
  icon,
  index,
  total,
}: {
  service: Service;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  index: number;
  total: number;
}) {
  return (
    <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)] lg:w-[42%] lg:shrink-0 lg:self-start">
      {/* ───────────── Desktop: full-height photo, copy pinned to the bottom ───────────── */}
      <div className="relative hidden h-full overflow-hidden bg-navy lg:block">
        <Image src={service.image} alt={service.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/10" />

        <div className="absolute inset-x-0 top-0 px-8 py-6">
          <Breadcrumb title={service.title} />
        </div>

        <div className="absolute inset-x-0 bottom-0 px-8 pb-9">
          <Copy service={service} icon={icon} index={index} total={total} />
        </div>
      </div>

      {/* ───────────── Mobile / tablet: compact banner, content flows below ───────────── */}
      <div className="relative overflow-hidden bg-navy lg:hidden">
        <div className="relative h-[260px] w-full">
          <Image src={service.image} alt={service.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/25 to-navy/45" />
          <div className="absolute inset-x-0 top-0 px-5 py-5">
            <Breadcrumb title={service.title} />
          </div>
        </div>
        <div className="px-5 py-8 sm:px-8">
          <Copy service={service} icon={icon} index={index} total={total} />
        </div>
      </div>
    </div>
  );
}
