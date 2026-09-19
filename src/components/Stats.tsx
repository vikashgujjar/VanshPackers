"use client";

import { useEffect, useRef, useState } from "react";
import { Award, MapPinned, Smile, Truck } from "lucide-react";
import { stats } from "@/lib/site-data";

const icons = [Award, Truck, Smile, MapPinned];
// Slight alternating lean so the signs read as planted along the road, not machine-stamped.
const tilts = ["-rotate-2", "rotate-1.5", "-rotate-1", "rotate-2"];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-9 md:py-10">
      <div className="container-max px-4 md:px-8">
        <div className="relative">
          {/* ── The road: a line the signs are planted along ── */}
          <div className="pointer-events-none absolute inset-x-0 top-[calc(100%-2px)] hidden h-px bg-slate-200 md:block" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[calc(100%-1px)] hidden h-[2px] origin-left scale-x-0 md:block"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, #ff6b00 0 22px, transparent 22px 44px)",
              transition: "transform 1.1s cubic-bezier(.4,0,.2,1)",
              transform: active ? "scaleX(1)" : "scaleX(0)",
            }}
          />

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:flex md:items-end md:justify-between md:gap-6">
            {stats.map((stat, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center transition-all duration-500 md:flex-1"
                  style={{
                    transitionDelay: active ? `${i * 110}ms` : "0ms",
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(14px)",
                  }}
                >
                  {/* ── Sign board ── */}
                  <div
                    className={`group relative w-full max-w-[168px] rounded-xl border-[2.5px] border-white bg-navy px-4 py-4 text-center transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 ${tilts[i % tilts.length]}`}
                    style={{ boxShadow: "0 16px 32px -14px rgba(11,31,51,0.5), 0 0 0 1px rgba(11,31,51,0.9)" }}
                  >
                    {/* Corner bolts */}
                    <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-orange/70" />
                    <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-orange/70" />
                    <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-orange/70" />
                    <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-orange/70" />

                    <Icon size={20} strokeWidth={1.75} className="mx-auto text-orange" />
                    <p className="mt-2 text-[24px] font-extrabold leading-none tracking-tight text-white md:text-[27px]">
                      <AnimatedValue value={stat.value} active={active} />
                    </p>
                    <p className="mt-1.5 text-[11.5px] font-medium leading-snug text-white/60">
                      {stat.label}
                    </p>
                  </div>

                  {/* ── Post planting the sign on the road ── */}
                  <span className="hidden h-8 w-[3px] rounded-b-full bg-gradient-to-b from-slate-300 to-slate-200 md:block" />
                  <span className="hidden h-2 w-2 -translate-y-px rounded-full bg-slate-300 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedValue({ value, active }: { value: string; active: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  const [display, setDisplay] = useState(match ? "0" + match[2] : value);

  useEffect(() => {
    if (!match || !active) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1300;
    const startTime = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(`${Math.round(eased * target)}${suffix}`);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return <span className="tabular-nums">{display}</span>;
}