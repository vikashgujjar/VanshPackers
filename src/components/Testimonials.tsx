import { Star, Truck } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import Reveal from "./Reveal";

type Testimonial = (typeof testimonials)[number];

const tilts = ["-rotate-2", "rotate-1.5", "-rotate-1", "rotate-2", "-rotate-1.5", "rotate-1"];

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="section-pad relative bg-slate-50">
      {/* Background: faint dot grid + a dashed flight path, like a route on a postcard map */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
        style={{ maskImage: "radial-gradient(ellipse 70% 55% at 50% 40%, black 15%, transparent 75%)" }}
      >
        <defs>
          <pattern id="testi-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(11,31,51,0.07)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testi-dots)" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-10 h-[280px] w-full text-navy opacity-[0.08]"
      >
        <path
          d="M -50 60 C 250 -10, 420 180, 700 110 S 1050 -20, 1260 90"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="2 10"
          fill="none"
        />
      </svg>

      <div className="container-max relative px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Postcards from happy movers
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[14.5px] font-medium leading-relaxed text-slate">
            A few notes customers sent our way after the truck pulled away.
          </p>
        </Reveal>

        {/* ───────────── Postcard wall — one featured, rest staggered ───────────── */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-10">
          {featured && (
            <Reveal delay={100} className="lg:sticky lg:top-28">
              <Postcard testimonial={featured} tilt="-rotate-2" size="lg" />
            </Reveal>
          )}

          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
              {rest.map((t, i) => (
                <Reveal key={`${t.name}-${i}`} delay={200 + i * 90}>
                  <Postcard testimonial={t} tilt={tilts[i % tilts.length]} size="sm" />
                </Reveal>
              ))}
            </div>
          )}
        </div>

        <p className="mx-auto mt-14 max-w-xl text-center text-xs font-medium text-slate/70">
          Sample reviews shown for illustration — replace with verified customer feedback.
        </p>
      </div>
    </section>
  );
}

function Postcard({
  testimonial,
  tilt,
  size,
}: {
  testimonial: Testimonial;
  tilt: string;
  size: "lg" | "sm";
}) {
  const isLg = size === "lg";

  return (
    <div
      className={`group relative rounded-[18px] bg-white shadow-[0_24px_48px_-22px_rgba(11,31,51,0.3)] ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_30px_56px_-20px_rgba(11,31,51,0.35)] ${tilt} ${isLg ? "p-8 pt-9 sm:p-10 sm:pt-10" : "p-6 pt-7"
        }`}
    >
      {/* Airmail stripe along the top edge */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[6px] overflow-hidden rounded-t-[18px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, var(--orange) 0 8px, #ffffff 8px 16px, var(--navy) 16px 24px, #ffffff 24px 32px)",
        }}
      />

      {/* Postage stamp: rating + route icon, pinned in the corner */}
      <div
        aria-hidden
        className="absolute -top-3 right-5 flex h-16 w-13 rotate-6 flex-col items-center justify-center gap-1.5 rounded-[3px] border-2 border-dashed border-navy/25 bg-white shadow-[0_6px_14px_-6px_rgba(11,31,51,0.4)] transition-transform duration-300 group-hover:rotate-0"
      >
        <Truck size={16} strokeWidth={1.75} className="text-orange" />
        <div className="flex gap-[1.5px] text-gold">
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <Star key={idx} size={8} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>

      {/* Quote */}
      <span
        aria-hidden
        className={`block font-serif italic leading-none text-orange/15 ${isLg ? "text-6xl" : "text-4xl"}`}
      >
        &ldquo;
      </span>
      <p
        className={`-mt-2 font-medium italic leading-snug text-navy ${isLg ? "text-[19px] sm:text-[21px]" : "text-[14.5px]"
          }`}
      >
        {testimonial.review}
      </p>

      {/* Perforated fold line */}
      <div className="my-5 border-t border-dashed border-navy/15" />

      {/* Postmark + name */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-navy/25 text-[13px] font-extrabold text-navy/60">
          {testimonial.initial}
        </span>
        <div>
          <p className="text-[13px] font-bold uppercase tracking-wide text-navy">
            {testimonial.name}
          </p>
          <p className="text-[11px] font-medium text-slate">Verified move</p>
        </div>
      </div>
    </div>
  );
}
