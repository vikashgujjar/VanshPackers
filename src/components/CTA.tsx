"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import Reveal from "./Reveal";

const words = ["home", "office", "car", "warehouse goods", "business"];

export default function CTA() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      <style>{`
        @keyframes cta-drift-a {
          0%, 100% { transform: translate(-10%, -10%) scale(1); }
          50% { transform: translate(6%, 4%) scale(1.15); }
        }
        @keyframes cta-drift-b {
          0%, 100% { transform: translate(8%, 6%) scale(1); }
          50% { transform: translate(-6%, -8%) scale(1.1); }
        }
        @keyframes cta-word-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cta-bg-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-blob-a, .cta-blob-b { animation: none !important; }
          .cta-word { animation: none !important; }
          .cta-bg-zoom { animation: none !important; }
        }
      `}</style>

      {/* Background photo — slow continuous zoom for a cinematic, "always in motion" feel */}
      <div aria-hidden className="absolute inset-0">
        <div className="cta-bg-zoom absolute inset-0" style={{ animation: "cta-bg-zoom 20s ease-in-out infinite alternate" }}>
          <Image
            src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1920&auto=format&fit=crop"
            alt=""
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Navy wash so text stays fully legible over the photo */}
        <div className="absolute inset-0 bg-navy/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
      </div>

      {/* Slowly drifting ambient glows, layered above the photo */}
      <div
        aria-hidden
        className="cta-blob-a pointer-events-none absolute left-1/4 top-0 h-[380px] w-[380px] rounded-full bg-orange/25 blur-[110px]"
        style={{ animation: "cta-drift-a 14s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="cta-blob-b pointer-events-none absolute right-1/4 top-10 h-[320px] w-[320px] rounded-full bg-[#ffb300]/20 blur-[110px]"
        style={{ animation: "cta-drift-b 16s ease-in-out infinite" }}
      />

      <div className="container-max relative px-4 text-center md:px-8">
        <Reveal>
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            500+ moves handled with care
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-[1.2] tracking-tight text-white md:text-[2.6rem]">
            Ready to move your
            <br className="sm:hidden" />{" "}
            <span className="relative inline-flex h-[1.15em] items-baseline justify-center overflow-hidden align-bottom">
              <span key={index} className="cta-word inset-x-0 text-orange" style={{ animation: "cta-word-in 400ms ease-out" }}>
                {words[index]}
              </span>
            </span>
            &nbsp;?
          </h2>

          <p className="mx-auto mt-5 max-w-lg font-medium text-white/70">
            Let Vansh Packers and Movers handle your relocation with care, from the first box
            to the last.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full gradient-orange px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_16px_36px_-10px_rgba(255,107,0,0.65)] transition-transform hover:-translate-y-0.5"
            >
              Get a free quote
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2.5 rounded-full border border-white/25 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-orange/60 hover:bg-white/5"
            >
              <Phone size={15} className="text-orange" />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}