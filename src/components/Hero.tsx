"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Truck,
  User,
} from "lucide-react";
import { siteConfig } from "@/lib/site-data";

const moveTypes = [
  "Local Household Shifting",
  "Domestic Shifting",
  "Office Relocation",
  "Car / Bike Transport",
  "Warehouse Storage",
];

const trustIndicators = [
  { icon: ShieldCheck, text: "Transit insurance on every move" },
  { icon: Truck, text: "Own fleet, our own trained crew" },
  { icon: CalendarDays, text: "Your date is locked once confirmed" },
];

const ROUTE = "M 30 250 C 120 250, 150 80, 260 80 S 400 220, 500 50";

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [moveType, setMoveType] = useState("");

  return (
    <section
      id="home"
      className="relative flex min-h-[580px] items-center overflow-hidden bg-navy text-white md:min-h-[660px] lg:min-h-[620px]"
    >
      <style jsx global>{`
        @keyframes hero-route-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes hero-truck {
          to {
            offset-distance: 100%;
          }
        }
        @keyframes hero-pin {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-route,
          .hero-truck,
          .hero-pin {
            animation: none !important;
          }
          .hero-route {
            stroke-dashoffset: 0 !important;
          }
        }
      `}</style>

      {/* ───────── Background ───────── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1920&auto=format&fit=crop"
          alt="Moving truck loaded for professional relocation service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] scale-105"
        />
        {/* Directional overlays: solid on the left for copy, open on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/40" />
        {/* Fine grid, masked to the right so it reads as a "route map" */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 75% 45%, black 25%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-orange/25 blur-[140px]"
        />
      </div>

      <div className="container-max relative z-10 w-full px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* ───────── Left: message ───────── */}
          <div className="max-w-2xl">
            <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.07] px-3.5 py-1.5 text-[12.5px] text-white/85 backdrop-blur-md">
              <span className="flex items-center gap-px text-orange">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} size={11} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="h-3 w-px bg-white/20" />
              Rated 4.9 by 2,000+ families we have moved
            </div>

            <h1 className="animate-fade-up mt-7 text-[32px] font-extrabold leading-[1.08] tracking-[-0.03em] [animation-delay:90ms] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px]">
              Your whole home,
              <br />
              moved like
              <br />
              <span className="text-gradient-orange">it matters.</span>
            </h1>

            <p className="animate-fade-up mt-7 max-w-[50ch] text-[16px] leading-relaxed text-white/72 [animation-delay:180ms] md:text-[17.5px]">
              One trained crew, from the first carton packed to the last shelf set up in your
              new place. A fixed price up front, insured goods in transit, and a move planner
              who picks up when you call.
            </p>

            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3.5 [animation-delay:270ms]">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full gradient-orange px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(255,107,0,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Plan my move
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="group inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/[0.04] pl-1.5 pr-5 py-1.5 text-white backdrop-blur-md transition-colors hover:border-orange/60"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <Phone size={15} />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[10.5px] text-white/55">Talk to a planner</span>
                  <span className="text-[14px] font-bold tracking-tight">{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>

            <ul className="animate-fade-up mt-10 flex flex-wrap gap-x-7 gap-y-3 [animation-delay:360ms]">
              {trustIndicators.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-[13.5px] text-white/65">
                  <Icon size={15} className="shrink-0 text-orange" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ───────── Right: route + waybill card ───────── */}
          <div className="relative w-full animate-fade-up [animation-delay:200ms]">
            {/* Animated route line + pins */}
            <svg
              aria-hidden
              viewBox="0 0 520 300"
              fill="none"
              className="pointer-events-none absolute -left-6 -top-20 hidden w-[125%] max-w-none text-orange lg:block"
            >
              <path
                d={ROUTE}
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 10"
                strokeLinecap="round"
                className="hero-route opacity-70"
                style={{
                  strokeDashoffset: 1000,
                  animation: "hero-route-draw 2.6s cubic-bezier(.4,0,.2,1) .4s forwards",
                }}
              />
              <g transform="translate(30 250)">
                <circle r="10" fill="currentColor" className="hero-pin" style={{ animation: "hero-pin 2.6s ease-out infinite", transformOrigin: "0 0" }} />
                <circle r="5" fill="currentColor" />
              </g>
              <g transform="translate(500 50)">
                <circle r="10" fill="white" className="hero-pin" style={{ animation: "hero-pin 2.6s ease-out 1.3s infinite", transformOrigin: "0 0" }} />
                <circle r="5" fill="white" />
              </g>
            </svg>

            {/* Truck badge that travels along the route */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-20 hidden w-[125%] lg:block"
              style={{ aspectRatio: "520 / 300" }}
            >
              <span
                className="hero-truck absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_10px_24px_-8px_rgba(0,0,0,.6)]"
                style={{
                  offsetPath: `path('${ROUTE}')`,
                  offsetRotate: "0deg",
                  animation: "hero-truck 10s cubic-bezier(.45,.05,.55,.95) 1.5s infinite alternate",
                  transform: "scale(calc(100% / 520))",
                }}
              >
                <Truck size={16} strokeWidth={2.2} />
              </span>
            </div>

            {/* Waybill card */}
            <div className="relative mx-auto max-w-[440px] rounded-[26px] bg-white/10 p-1.5 shadow-[0_60px_120px_-30px_rgba(0,0,0,.65)] backdrop-blur-xl lg:ml-auto">
              <div className="rounded-[20px] bg-white text-navy">
                {/* Ticket header */}
                <div className="flex items-center justify-between border-b border-dashed border-slate-200 px-6 py-4">
                  <div>
                    <p className="text-[16px] font-bold tracking-tight">Free move estimate</p>
                    <p className="mt-0.5 text-[12px] text-navy/55">A planner calls back within 30 minutes</p>
                  </div>
                  <span className="rounded-md bg-navy px-2 py-1 font-mono text-[10.5px] tracking-[0.12em] text-white">
                    VPM·QUOTE
                  </span>
                </div>

                {submitted ? (
                  <div className="px-6 py-10 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Check size={26} strokeWidth={2.5} />
                    </span>
                    <p className="mt-5 text-[17px] font-bold tracking-tight">Request received</p>
                    <p className="mx-auto mt-2 max-w-[28ch] text-[13.5px] leading-relaxed text-navy/60">
                      We have your details. A move planner will call you shortly to confirm the route and date.
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-semibold text-orange hover:text-navy"
                    >
                      <Phone size={14} /> In a hurry? Call {siteConfig.phoneDisplay}
                    </a>
                  </div>
                ) : (
                  <form
                    className="px-6 py-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field icon={User} label="Your name">
                        <input required type="text" placeholder="Full name" className={inputCls} />
                      </Field>
                      <Field icon={Phone} label="Phone">
                        <input required type="tel" placeholder="+91" className={inputCls} />
                      </Field>
                    </div>

                    {/* From → To, connected with a dashed line */}
                    <div className="relative mt-3 grid gap-3">
                      <span
                        aria-hidden
                        className="absolute left-[22px] top-[46px] h-[calc(100%-6rem)] border-l-2 border-dashed border-orange/50"
                      />
                      <Field
                        label="Moving from"
                        leading={<span className="h-2.5 w-2.5 rounded-full bg-orange" />}
                      >
                        <input required type="text" placeholder="City or area" className={inputCls} />
                      </Field>
                      <Field icon={MapPin} label="Moving to">
                        <input required type="text" placeholder="City or area" className={inputCls} />
                      </Field>
                    </div>

                    <div className="mt-3">
                      <Field icon={Truck} label="What are we moving?">
                        <span className="relative block">
                          <select
                            required
                            value={moveType}
                            onChange={(e) => setMoveType(e.target.value)}
                            className={`${inputCls} appearance-none pr-6 ${moveType ? "" : "text-navy/35 font-medium"}`}
                          >
                            <option value="" disabled>
                              Select move type
                            </option>
                            {moveTypes.map((t) => (
                              <option key={t} value={t} className="text-navy font-medium">
                                {t}
                              </option>
                            ))}
                          </select>
                          <ChevronDown
                            size={15}
                            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-navy/50"
                          />
                        </span>
                      </Field>
                    </div>

                    <div className="mt-5 border-t border-dashed border-slate-200 pt-4">
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl gradient-orange py-3.5 text-[14.5px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(255,107,0,0.7)] transition-transform hover:-translate-y-0.5"
                      >
                        Get my free estimate
                        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </button>
                      <p className="mt-3 text-center text-[11.5px] text-navy/50">
                        No obligation. We never share your number.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Small helpers ───────── */

const inputCls =
  "w-full bg-transparent text-[14px] font-semibold text-navy outline-none placeholder:font-medium placeholder:text-navy/35";

function Field({
  icon: Icon,
  leading,
  label,
  children,
}: {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  leading?: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 transition-colors focus-within:border-orange focus-within:bg-white focus-within:ring-2 focus-within:ring-orange/15">
      <span className="flex w-4 shrink-0 items-center justify-center text-navy/70">
        {leading ?? (Icon ? <Icon size={14} /> : null)}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[11px] font-medium text-navy/50">{label}</span>
        {children}
      </span>
    </label>
  );
}