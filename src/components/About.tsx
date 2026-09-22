import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone, ShieldCheck, Truck, Users } from "lucide-react";
import { aboutFeatures, siteConfig } from "@/lib/site-data";
import Reveal from "./Reveal";

const credentials = [
  { icon: ShieldCheck, label: "Insured moves" },
  { icon: Truck, label: "Own fleet" },
  { icon: Users, label: "Trained crew" },
];

export default function About({
  showHeading = true,
  showCta = true,
}: {
  showHeading?: boolean;
  showCta?: boolean;
}) {
  return (
    <section
      id="about"
      className="section-pad relative bg-gradient-to-b from-white via-white to-[#F0F3F9]"
    >
      <div className="container-max px-4 md:px-8">
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-white shadow-[0_50px_100px_-30px_rgba(11,31,51,0.3)] lg:grid-cols-[0.85fr_1.15fr]">
            {/* ───────────── Photo panel ───────────── */}
            <div className="relative h-64 sm:h-80 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop"
                alt="Professional movers packing household items securely"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0" />

              {/* Corner tag */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-sm">
                <span className="text-[13px] font-extrabold leading-none text-orange">10+</span>
                <span className="text-[10.5px] font-bold leading-tight text-navy">
                  Years of
                  <br />
                  trusted service
                </span>
              </div>

              {/* Photo caption, editorial-plate style */}
              <p className="absolute bottom-5 left-5 right-5 text-[12.5px] font-medium text-white/85">
                Our crew wrapping and boxing a household move, Gurugram
              </p>
            </div>

            {/* ───────────── Content panel ───────────── */}
            <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              {showHeading && (
                <>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-orange">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                    About Vansh Packers and Movers
                  </span>
                  <h2 className="mt-3 text-[28px] font-extrabold leading-[1.16] tracking-tight text-navy sm:text-[32px] lg:text-[2.4rem]">
                    Trusted for safe, reliable and professional service
                  </h2>
                </>
              )}

              <p className="mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-slate">
                Vansh Packers and Movers provides professional relocation, packing,
                transportation and logistics solutions for homes, offices and businesses. Our
                trained team manages every step of your move with care, transparency and
                accountability.
              </p>

              {/* Credential chips */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {credentials.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-[12.5px] font-semibold text-navy/85"
                  >
                    <Icon size={14} className="text-orange" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Feature checklist */}
              <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-slate-100 pt-6 sm:grid-cols-2">
                {aboutFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/10 text-orange">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-semibold text-navy/90">{feature}</span>
                  </div>
                ))}
              </div>

              {showCta && (
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
                  >
                    Know more about us
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-navy transition-colors hover:text-orange"
                  >
                    <Phone size={15} className="text-orange" />
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}