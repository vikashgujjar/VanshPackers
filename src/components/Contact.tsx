"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";
import Reveal from "./Reveal";

const services = [
  "Local Household Shifting",
  "Domestic Shifting Services",
  "Corporate Relocation",
  "International Transportation",
  "Car & Bike Transportation",
  "Warehouse Services",
];

export default function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const tiles = [
    {
      icon: MapPin,
      label: "Address",
      lines: siteConfig.addressLines,
    },
    {
      icon: Mail,
      label: "Email",
      lines: [siteConfig.email],
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Mobile",
      lines: [siteConfig.phoneDisplay],
      href: `tel:${siteConfig.phone}`,
    },
  ];

  return (
    <section id="contact" className="section-pad bg-[#FFF3E9]">
      <div className="container-max px-4 md:px-8">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-white shadow-[0_40px_90px_-30px_rgba(11,31,51,0.35)] lg:grid-cols-[0.95fr_1.05fr]">
            {/* ───────────── Left: navy contact panel ───────────── */}
            <div className="relative overflow-hidden bg-navy px-7 py-10 text-white sm:px-9 sm:py-12">
              {/* Decorative dot grid + glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black 20%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orange/20 blur-[100px]"
              />

              <div className="relative">
                {showHeading && (
                  <>
                    <span className="inline-flex items-center gap-2 text-[13px] font-bold text-orange">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      Let&apos;s plan your move
                    </span>
                    <h2 className="mt-3 text-[28px] font-extrabold leading-[1.15] tracking-tight sm:text-[32px]">
                      Ready for a stress-free move?
                    </h2>
                    <p className="mt-3 max-w-sm text-[14px] font-medium leading-relaxed text-white/65">
                      Tell us about your move and our team will help you plan a smooth
                      relocation.
                    </p>
                  </>
                )}

                {/* Contact tiles — bold tap targets, not a faint list */}
                <div className="mt-9 flex flex-col gap-2.5">
                  {tiles.map((tile) => {
                    const Icon = tile.icon;
                    const content = (
                      <>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange text-white shadow-[0_10px_20px_-6px_rgba(255,107,0,0.6)]">
                          <Icon size={18} strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10.5px] font-bold uppercase tracking-wide text-white/45">
                            {tile.label}
                          </p>
                          {tile.lines.map((line) => (
                            <p key={line} className="truncate text-[14px] font-semibold text-white">
                              {line}
                            </p>
                          ))}
                        </div>
                        {tile.href && (
                          <ArrowUpRight
                            size={16}
                            className="shrink-0 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange"
                          />
                        )}
                      </>
                    );
                    const tileClass =
                      "group flex items-center gap-4 rounded-2xl bg-white/[0.06] px-4 py-3.5 transition-colors hover:bg-white/[0.12]";

                    return tile.href ? (
                      <a key={tile.label} href={tile.href} className={tileClass}>
                        {content}
                      </a>
                    ) : (
                      <div key={tile.label} className={tileClass}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ───────────── Right: form ───────────── */}
            <div className="px-6 py-8 sm:px-9 sm:py-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Check size={26} strokeWidth={2.5} />
                  </span>
                  <p className="mt-5 text-[17px] font-bold tracking-tight text-navy">
                    Request received
                  </p>
                  <p className="mx-auto mt-2 max-w-[30ch] text-[13.5px] leading-relaxed text-navy/60">
                    Thank you for reaching out. Our team will contact you shortly with a free
                    quote.
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
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <p className="text-[15px] font-bold tracking-tight text-navy">
                    Request a free quote
                  </p>
                  <p className="mt-0.5 text-[12px] text-navy/50">
                    We usually respond within 30 minutes
                  </p>

                  <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <Field label="Full name">
                      <input required type="text" placeholder="Your name" className={inputCls} />
                    </Field>
                    <Field label="Phone">
                      <input required type="tel" placeholder="+91" className={inputCls} />
                    </Field>
                    <Field label="Email" full>
                      <input required type="email" placeholder="you@example.com" className={inputCls} />
                    </Field>
                    <Field label="Moving from">
                      <input required type="text" placeholder="City or area" className={inputCls} />
                    </Field>
                    <Field label="Moving to">
                      <input required type="text" placeholder="City or area" className={inputCls} />
                    </Field>
                    <Field label="Service required" full>
                      <select required defaultValue="" className={`${inputCls} appearance-none`}>
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Message (optional)" full>
                      <textarea
                        rows={3}
                        placeholder="Tell us a bit more about your move"
                        className={`${inputCls} resize-none`}
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full gradient-orange py-3.5 text-[14.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
                  >
                    Request free quote
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                  <p className="mt-3 text-center text-[11.5px] text-navy/50">
                    No obligation. We never share your number.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── Shared field styling, matching the hero's waybill card ───────────── */

const inputCls =
  "w-full bg-transparent text-[14px] font-semibold text-navy outline-none placeholder:font-medium placeholder:text-navy/35";

function Field({
  label,
  full = false,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`flex flex-col gap-0.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 transition-colors focus-within:border-orange focus-within:bg-white focus-within:ring-2 focus-within:ring-orange/15 ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <span className="text-[11px] font-medium text-navy/50">{label}</span>
      {children}
    </label>
  );
}