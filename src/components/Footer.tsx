import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { footerServiceLinks, navLinks, siteConfig } from "@/lib/site-data";

const socialIcons: { label: string; path: string }[] = [
  {
    label: "Facebook",
    path: "M13.5 9H15V6.5h-1.5C11.6 6.5 10.5 7.6 10.5 9.5V11H9v2.5h1.5V18h2.5v-4.5H15l.5-2.5h-2V9.5c0-.3.2-.5.5-.5z",
  },
  {
    label: "Instagram",
    path: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zM16.9 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7 4.5h10A2.5 2.5 0 0 1 19.5 7v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7A2.5 2.5 0 0 1 7 4.5zm0 1.3A1.2 1.2 0 0 0 5.8 7v10A1.2 1.2 0 0 0 7 18.2h10a1.2 1.2 0 0 0 1.2-1.2V7A1.2 1.2 0 0 0 17 5.8H7z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 8.5H4.56V19h2.38V8.5zM5.75 4.25a1.38 1.38 0 1 0 0 2.75 1.38 1.38 0 0 0 0-2.75zM19.5 19h-2.38v-5.1c0-1.22-.44-2.05-1.53-2.05-.84 0-1.34.57-1.56 1.12-.08.2-.1.47-.1.75V19H11.6s.03-8.68 0-9.5h2.38v1.35c.32-.5 1-1.2 2.42-1.2 1.77 0 3.1 1.15 3.1 3.63V19z",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#081826] text-white/70">
      {/* Dashed route line — the same motif that opens the site in the header topbar,
          closing it here so the page reads as one continuous journey */}
      <div
        aria-hidden
        className="h-px w-full opacity-40"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, #ff6b00 0 24px, transparent 24px 48px)",
        }}
      />

      <div className="container-max px-4 py-16 md:px-8 md:py-20">
        {/* ───────────── Conversion strip ───────────── */}
        <div className="mb-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-6 sm:flex-row sm:px-8">
          <div className="text-center sm:text-left">
            <p className="text-[15px] font-bold text-white">Planning your next move?</p>
            <p className="mt-1 text-[13px] text-white/50">
              Get a free, no-obligation quote in under 30 minutes.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full gradient-orange px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_26px_-8px_rgba(255,107,0,0.55)] transition-transform hover:-translate-y-0.5"
          >
            Get a free quote
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ───────────── Main columns ───────────── */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center rounded-lg bg-white px-3.5 py-2.5">
              <Image
                src="/logo.png"
                alt="Vansh Packers and Movers"
                width={1900}
                height={469}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-[260px] text-[13.5px] leading-relaxed">
              Professional packing, moving and transportation solutions built on trust, safety
              and reliability.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon.label}
                  href="#"
                  aria-label={icon.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] transition-all hover:-translate-y-0.5 hover:bg-orange hover:text-white"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
              <span className="h-1 w-1 rounded-full bg-orange" />
              Quick links
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks
                .filter((l) => l.label !== "Blog")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-block text-[13.5px] font-medium text-white/70 transition-all hover:translate-x-0.5 hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
              <span className="h-1 w-1 rounded-full bg-orange" />
              Our services
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServiceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="inline-block text-[13.5px] font-medium text-white/70 transition-all hover:translate-x-0.5 hover:text-orange"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/40">
              <span className="h-1 w-1 rounded-full bg-orange" />
              Contact us
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-orange">
                  <MapPin size={14} />
                </span>
                <address className="pt-1 text-[13.5px] font-medium not-italic leading-snug">
                  {siteConfig.address}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-orange">
                  <Mail size={14} />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[13.5px] font-medium transition-colors hover:text-orange"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-orange">
                  <Phone size={14} />
                </span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-[13.5px] font-medium transition-colors hover:text-orange"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-white/10">
        <div className="container-max flex flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/40 sm:flex-row md:px-8">
          <p>&copy; {new Date().getFullYear()} Vansh Packers and Movers. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-orange">
              Privacy policy
            </a>
            <a href="#" className="transition-colors hover:text-orange">
              Terms &amp; conditions
            </a>
            <a
              href="#top"
              className="flex items-center gap-1.5 text-white/40 transition-colors hover:text-orange"
            >
              Back to top
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}