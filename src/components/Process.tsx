import { ClipboardCheck, Home, PackageCheck, Truck } from "lucide-react";
import { processSteps } from "@/lib/site-data";
import Reveal from "./Reveal";

const icons = [ClipboardCheck, PackageCheck, Truck, Home];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-slate-50">
      <style>{`
        @keyframes process-track {
          0% { left: 2%; }
          100% { left: 96%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .process-track { animation: none !important; left: 2%; }
        }
      `}</style>

      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Our process
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Your move, laid out
            <br className="hidden sm:block" /> like an itinerary
          </h2>
        </Reveal>

        {/* ───────────── Itinerary card ───────────── */}
        <Reveal delay={100} className="relative mx-auto mt-14 max-w-5xl">
          <div className="relative overflow-hidden rounded-[22px] bg-white shadow-[0_30px_60px_-24px_rgba(11,31,51,0.25)]">
            {/* Progress track along the top edge */}
            <div className="relative h-1.5 w-full bg-slate-100">
              <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-orange/30 via-orange to-orange/30" />
              <span
                className="process-track absolute -top-[7px] flex h-4 w-4 items-center justify-center rounded-full bg-navy text-white shadow-md"
                style={{ animation: "process-track 6s ease-in-out infinite alternate" }}
              >
                <Truck size={9} strokeWidth={2.5} />
              </span>
            </div>

            {/* Desktop: horizontal boarding-pass segments */}
            <div className="relative hidden md:grid md:grid-cols-4">
              {processSteps.map((step, i) => {
                const Icon = icons[i];
                const isLast = i === processSteps.length - 1;
                return (
                  <div key={step.number} className="relative px-6 py-9 lg:px-8">
                    {!isLast && (
                      <>
                        {/* Perforated divider */}
                        <div className="absolute inset-y-0 right-0 border-r-2 border-dashed border-slate-200" />
                        <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-slate-50" />
                        <span className="absolute -right-2 -bottom-2 h-4 w-4 rounded-full bg-slate-50" />
                      </>
                    )}

                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-orange/20 bg-orange/5 text-orange">
                        <Icon size={20} strokeWidth={1.9} />
                      </span>
                      <span className="font-mono text-[12px] font-bold tracking-wider text-navy/35">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="mt-4 text-[17px] font-bold leading-snug text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[210px] text-[13.5px] font-medium leading-relaxed text-slate">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile: vertical itinerary rows */}
            <div className="flex flex-col md:hidden">
              {processSteps.map((step, i) => {
                const Icon = icons[i];
                const isLast = i === processSteps.length - 1;
                return (
                  <div key={step.number} className="relative px-5 py-6">
                    {!isLast && (
                      <>
                        <div className="absolute inset-x-0 bottom-0 border-b-2 border-dashed border-slate-200" />
                        <span className="absolute -bottom-2 left-0 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-50" />
                        <span className="absolute -bottom-2 right-0 h-4 w-4 translate-x-1/2 rounded-full bg-slate-50" />
                      </>
                    )}

                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-orange/20 bg-orange/5 text-orange">
                        <Icon size={20} strokeWidth={1.9} />
                      </span>
                      <div className="pt-1">
                        <span className="font-mono text-[11.5px] font-bold tracking-wider text-navy/35">
                          Step {step.number}
                        </span>
                        <h3 className="mt-1 text-[16px] font-bold leading-snug text-navy">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[13.5px] font-medium leading-relaxed text-slate">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}