import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { addOnServices } from "@/lib/site-data";
import Reveal from "./Reveal";

const tilts = ["-rotate-1", "rotate-1.5", "-rotate-1.5", "rotate-1", "-rotate-1", "rotate-1.5"];

export default function AddOnServices() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Add-ons
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Extend your move with add-on services
          </h2>
          <p className="mt-4 text-base font-medium text-slate">
            Tag these onto any of the six services above — just mention them when you request
            your quote.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {addOnServices.map((addon, i) => (
              <div
                key={addon.title}
                className={`group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_36px_-24px_rgba(11,31,51,0.25)] transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:border-orange/30 hover:shadow-[0_24px_44px_-20px_rgba(11,31,51,0.3)] ${tilts[i % tilts.length]}`}
              >
                {/* Tag hole, like a luggage tag punched from the sheet */}
                <span className="absolute -left-2 top-6 h-4 w-4 rounded-full bg-slate-50 ring-1 ring-slate-200" />

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <addon.icon size={18} strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-[15.5px] font-bold text-navy">{addon.title}</h3>
                <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-slate">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-10 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Ask about add-ons in your quote
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
