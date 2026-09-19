import { Check } from "lucide-react";
import { siteConfig, locationServices } from "@/lib/site-data";
import Reveal from "./Reveal";

const STATION_WIDTH = 168;

export default function LocationHighlight() {
  const stations = [{ label: siteConfig.city, hub: true }, ...locationServices.map((name) => ({ label: name, hub: false }))];
  const totalWidth = STATION_WIDTH * stations.length;

  return (
    <section className="relative bg-white pb-12">
      <style>{`
        @keyframes route-truck {
          0% { left: 8px; }
          100% { left: calc(100% - 36px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .route-truck { animation: none !important; left: 8px; }
        }
      `}</style>

      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Service coverage
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Moving services across {siteConfig.city}
          </h2>
          <p className="mt-4 font-medium text-slate">
            Professional relocation and transportation solutions for homes, offices and
            vehicles — think of it as our regular route.
          </p>
        </Reveal>

        {/* ───────────── Transit-style coverage line ───────────── */}
        <Reveal delay={100} className="relative mx-auto mt-12 max-w-5xl">
          <div className="relative rounded-2xl border border-slate-200 bg-slate-50 px-2 py-10 sm:px-4">
            {/* Edge fades hint that the map scrolls */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div
                className="relative mx-auto"
                style={{ width: `${totalWidth}px`, height: "84px" }}
              >
                {/* The route line */}
                <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-gradient-to-r from-navy via-orange to-navy" />

                {/* Truck riding the route */}
                <div
                  className="route-truck absolute top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_6px_16px_-4px_rgba(11,31,51,0.5)]"
                  style={{ animation: "route-truck 9s ease-in-out infinite alternate" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M1 3h13v13H1zM14 8h4l3 3v5h-7V8z" />
                    <circle cx="6" cy="18" r="1.6" />
                    <circle cx="17" cy="18" r="1.6" />
                  </svg>
                </div>

                {/* Stations */}
                {stations.map((station, i) => {
                  const x = i * STATION_WIDTH + STATION_WIDTH / 2;
                  const labelAbove = i % 2 === 0;
                  return (
                    <div
                      key={station.label + i}
                      className="absolute top-1/2 -translate-x-1/2"
                      style={{ left: `${x}px` }}
                    >
                      {/* Tick + label above */}
                      {labelAbove && (
                        <div className="absolute bottom-[7px] left-1/2 flex -translate-x-1/2 flex-col items-center">
                          <span
                            className={`whitespace-nowrap rounded-md px-2 py-1 text-[12px] font-semibold ${
                              station.hub ? "bg-navy text-white" : "bg-white text-navy shadow-sm"
                            }`}
                          >
                            {station.label}
                          </span>
                          <span className="mt-1 h-3 w-px bg-slate-300" />
                        </div>
                      )}

                      {/* Dot */}
                      <span
                        className={`relative block rounded-full ${
                          station.hub
                            ? "h-4 w-4 border-[3px] border-navy bg-orange"
                            : "h-2.5 w-2.5 border-2 border-white bg-navy ring-1 ring-slate-300"
                        }`}
                      />

                      {/* Tick + label below */}
                      {!labelAbove && (
                        <div className="absolute top-[7px] left-1/2 flex -translate-x-1/2 flex-col items-center">
                          <span className="mb-1 h-3 w-px bg-slate-300" />
                          <span className="whitespace-nowrap rounded-md bg-white px-2 py-1 text-[12px] font-semibold text-navy shadow-sm">
                            {station.label}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[12px] text-slate-400 sm:hidden">
            Scroll to see the full route →
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-8 flex items-center justify-center gap-2 text-[12.5px] text-slate">
          <Check size={13} className="text-orange" />
          Don&apos;t see your area? Call us — we cover the wider region too.
        </Reveal>
      </div>
    </section>
  );
}