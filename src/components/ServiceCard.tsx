import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site-data";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-[0_2px_16px_-4px_rgba(11,31,51,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(11,31,51,0.18)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-navy/0 to-navy/0" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          {typeof index === "number" && (
            <span className="text-sm font-extrabold tracking-wide text-orange">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="h-px flex-1 bg-slate-200 transition-colors duration-300 group-hover:bg-orange" />
        </div>

        <h3 className="text-[17px] font-bold text-navy leading-snug">
          {service.title}
        </h3>
        <p className="mt-2 text-[13.5px] text-slate font-medium leading-relaxed flex-1">
          {service.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-navy transition-colors group-hover:text-orange">
          Explore Service
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
