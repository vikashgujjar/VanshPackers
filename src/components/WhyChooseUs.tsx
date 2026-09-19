import Link from "next/link";
import {
  ArrowRight,
  Clock,
  PackageCheck,
  ShieldCheck,
  Truck,
  UserCheck,
  Workflow,
} from "lucide-react";
import { whyChooseUs } from "@/lib/site-data";
import Reveal from "./Reveal";

const icons = [PackageCheck, ShieldCheck, UserCheck, Clock, Workflow, Truck];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative overflow-hidden bg-navy px-4 py-14 md:px-8 md:py-20">
      {/* Background vector: dot grid + faint route curve, masked toward the center */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
        style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 75%)" }}
      >
        <defs>
          <pattern id="wcu-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(255,255,255,0.14)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wcu-dots)" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full text-orange opacity-[0.12]"
      >
        <path
          d="M -50 220 C 200 260, 350 40, 600 90 S 950 260, 1250 60"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[130px]"
      />

      <div className="container-max relative">
        <Reveal className="mx-auto max-w-lg text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[14px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Why choose Vansh
          </span>
          <h2 className="mt-2 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.25rem]">
            A better way to move
          </h2>
        </Reveal>

        {/* ───────────── Medal row ───────────── */}
        <Reveal delay={100}>
          <div className="mx-auto mt-11 flex max-w-5xl flex-wrap items-start justify-center gap-x-9 gap-y-10 sm:gap-x-11">
            {whyChooseUs.map((feature, i) => {
              const Icon = icons[i % icons.length];
              const lift = i % 2 === 0 ? "sm:-translate-y-2" : "sm:translate-y-2";
              return (
                <div key={feature} className={`group flex w-32 flex-col items-center ${lift}`}>
                  {/* Medal */}
                  <div className="relative">
                    {/* Ribbon tails */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-11 h-8 w-[18px] -translate-x-[17px] bg-navy transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)", transform: "rotate(-8deg)" }}
                    />
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-11 h-8 w-[18px] translate-x-[-2px] bg-navy/70 transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)", transform: "rotate(8deg)" }}
                    />

                    {/* Coin */}
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange to-[#e0570a] shadow-[0_14px_28px_-10px_rgba(255,107,0,0.65)] ring-4 ring-white/90 transition-transform duration-300 group-hover:-translate-y-1">
                      <span className="flex h-[66px] w-[66px] items-center justify-center rounded-full border border-white/40">
                        <Icon size={28} strokeWidth={2} className="text-white" />
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <span className="mt-4 text-center text-[14.5px] font-semibold leading-snug text-white/90">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Get a free quote
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}