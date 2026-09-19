"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, ChevronDown } from "lucide-react";
import { pricingRows, distanceBands, type BandKey } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function InstantEstimate() {
  const [typeIndex, setTypeIndex] = useState(0);
  const [band, setBand] = useState<BandKey>(distanceBands[0].key);

  const row = pricingRows[typeIndex];
  const bandLabel = distanceBands.find((b) => b.key === band)?.label ?? "";
  const estimate = row[band];

  return (
    <section className="relative overflow-hidden bg-navy py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-orange/15 blur-[130px]"
      />

      <div className="container-max relative px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Instant estimate
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-white md:text-[2.5rem]">
            See your moving cost in seconds
          </h2>
          <p className="mt-4 text-base font-medium text-white/65">
            Pick what you&apos;re moving and how far — we&apos;ll show a typical price band
            instantly.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr]">
              {/* Selectors */}
              <div className="p-8 sm:p-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/10 text-orange">
                  <Calculator size={20} strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-navy">Build your estimate</h3>

                <label className="mt-6 block">
                  <span className="text-[12px] font-semibold text-navy/50">
                    What are you moving?
                  </span>
                  <span className="relative mt-2 block">
                    <select
                      value={typeIndex}
                      onChange={(e) => setTypeIndex(Number(e.target.value))}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 pr-9 text-[14px] font-semibold text-navy outline-none transition-colors focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/15"
                    >
                      {pricingRows.map((r, i) => (
                        <option key={r.shiftingType} value={i}>
                          {r.shiftingType}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/50"
                    />
                  </span>
                </label>

                <label className="mt-4 block">
                  <span className="text-[12px] font-semibold text-navy/50">
                    How far are you moving?
                  </span>
                  <span className="relative mt-2 block">
                    <select
                      value={band}
                      onChange={(e) => setBand(e.target.value as BandKey)}
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 pr-9 text-[14px] font-semibold text-navy outline-none transition-colors focus:border-orange focus:bg-white focus:ring-2 focus:ring-orange/15"
                    >
                      {distanceBands.map((b) => (
                        <option key={b.key} value={b.key}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy/50"
                    />
                  </span>
                </label>
              </div>

              {/* Live estimate, ticket-stub styled */}
              <div className="relative border-t border-dashed border-slate-200 bg-slate-50 p-8 sm:p-10 md:border-l md:border-t-0">
                <span className="absolute -left-3 -top-3 hidden h-6 w-6 rounded-full bg-navy md:block" />
                <span className="absolute -bottom-3 -left-3 hidden h-6 w-6 rounded-full bg-navy md:block" />

                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-navy/40">
                  Estimated cost
                </span>
                <p
                  key={`${typeIndex}-${band}`}
                  className="mt-2 animate-fade-up text-[30px] font-extrabold leading-tight tracking-tight text-navy sm:text-[34px]"
                >
                  {estimate}
                </p>
                <p className="mt-1 text-[12.5px] font-semibold text-slate">
                  {row.shiftingType} · {bandLabel}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full gradient-orange py-3.5 text-[14px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
                >
                  Get an exact quote
                  <ArrowRight size={15} />
                </Link>
                <p className="mt-3 text-center text-[11px] font-medium text-navy/45">
                  Indicative estimate — final pricing confirmed after a quick call.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
