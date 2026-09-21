import { MapPin } from "lucide-react";
import { neighborhoodHighlights, areasServed, siteConfig } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function LocalCoverage() {
  const extraAreas = areasServed.filter(
    (area) => !neighborhoodHighlights.some((n) => n.area === area)
  );

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Local coverage
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Trusted packers and movers across {siteConfig.city}
          </h2>
          <p className="mt-4 text-base font-medium text-slate">
            Vansh Packers and Movers provides household shifting, office relocation and vehicle
            transportation services across {siteConfig.city} — here&apos;s a look at a few
            neighbourhoods we work in regularly.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhoodHighlights.map((neighborhood, i) => (
            <Reveal key={neighborhood.area} delay={i * 60}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-[0_20px_40px_-24px_rgba(11,31,51,0.3)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <MapPin size={20} strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-[16px] font-bold text-navy">{neighborhood.area}</h3>
                <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-slate">
                  {neighborhood.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {extraAreas.length > 0 && (
          <Reveal delay={200} className="mt-8 text-center">
            <p className="text-[13px] font-medium text-slate">
              Also serving {extraAreas.join(", ")} and the wider {siteConfig.city} region.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
