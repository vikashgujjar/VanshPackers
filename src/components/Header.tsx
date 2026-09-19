"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { navLinks, services, serviceIcons, siteConfig } from "@/lib/site-data";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close the drawer on route change — adjusted during render (React's
  // recommended pattern for resetting state on a prop change) rather than
  // in an effect, so it doesn't cost an extra render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Keyframes for the route-line motif in the topbar */}
      <style jsx global>{`
        @keyframes route-dash {
          to {
            background-position-x: -48px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .route-line {
            animation: none !important;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 w-full">
        {/* ────────────────────────── TOPBAR ────────────────────────── */}
        <div
          className={`relative overflow-hidden bg-navy text-white transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
            scrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
          }`}
        >
          {/* Animated dashed "route" line — the moving motif */}
          <span
            aria-hidden
            className="route-line pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #ff6b00 0 24px, transparent 24px 48px)",
              backgroundSize: "48px 1px",
              animation: "route-dash 1.6s linear infinite",
            }}
          />

          <div className="container-max flex items-center justify-between gap-6 px-4 py-2 text-[12.5px] md:px-8">
            <ul className="flex items-center gap-6">
              <li className="hidden items-center gap-2 text-white/75 sm:flex">
                <MapPin size={13} className="text-orange" />
                <span>Serving all of India, door to door</span>
              </li>
              <li className="hidden items-center gap-2 text-white/75 md:flex">
                <Clock size={13} className="text-orange" />
                <span>Open 7 days · 8:00 am – 9:00 pm</span>
              </li>
              <li className="flex items-center gap-2 text-white/90 sm:hidden">
                <ShieldCheck size={13} className="text-orange" />
                <span>Insured, on-time relocation</span>
              </li>
            </ul>

            <ul className="flex items-center gap-5">
              <li className="hidden items-center gap-2 lg:flex">
                <Mail size={13} className="text-orange" />
                <a
                  href={`mailto:${siteConfig.email ?? ""}`}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {siteConfig.email ?? "hello@vanshpackers.in"}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 font-semibold tracking-tight text-white"
                >
                  <Phone size={13} className="text-orange" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ──────────────────────── MAIN BAR ──────────────────────── */}
        <div
          className={`transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
            scrolled ? "px-3 pt-3 md:px-6" : "px-0 pt-0"
          }`}
        >
          <div
            className={`container-max relative transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${
              scrolled
                ? "rounded-2xl border border-white/60 bg-white/85 shadow-[0_18px_50px_-20px_rgba(11,31,51,0.35)] backdrop-blur-xl"
                : "rounded-none border-b border-slate-100 bg-white"
            }`}
          >
            <div
              className={`flex items-center justify-between px-4 transition-all duration-500 md:px-6 ${
                scrolled ? "py-2" : "py-3.5"
              }`}
            >
              {/* Logo */}
              <Link href="/" className="flex shrink-0 items-center" aria-label="Vansh Packers and Movers home">
                <Image
                  src="/logo.png"
                  alt="Vansh Packers and Movers"
                  width={1900}
                  height={469}
                  priority
                  className={`w-auto transition-all duration-500 ${scrolled ? "h-8" : "h-9 md:h-11"}`}
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  if (link.label === "Services") {
                    return (
                      <div
                        key={link.href}
                        className="relative"
                        onMouseEnter={openServices}
                        onMouseLeave={scheduleCloseServices}
                      >
                        <Link
                          href={link.href}
                          aria-expanded={servicesOpen}
                          className={`group relative flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                            active || servicesOpen ? "text-navy" : "text-navy/65 hover:text-navy"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            strokeWidth={2.2}
                            className={`transition-transform duration-300 ${
                              servicesOpen ? "rotate-180 text-orange" : ""
                            }`}
                          />
                          <span
                            className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange transition-all duration-300 ${
                              active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                            }`}
                          />
                        </Link>

                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                        active ? "text-navy" : "text-navy/65 hover:text-navy"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-orange transition-all duration-300 ${
                          active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop actions */}
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className={`group flex items-center gap-2.5 rounded-full border border-slate-200 pl-1.5 pr-4 text-navy transition-all hover:border-orange/40 ${
                    scrolled ? "py-1" : "py-1.5"
                  }`}
                >
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Phone size={14} />
                    <span className="absolute inset-0 animate-ping rounded-full bg-orange/30 [animation-duration:2.4s]" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10.5px] font-medium text-navy/55">Speak to us now</span>
                    <span className="text-[13px] font-bold tracking-tight">
                      {siteConfig.phoneDisplay}
                    </span>
                  </span>
                </a>

                <Link
                  href="/contact"
                  className="group relative hidden items-center gap-2 overflow-hidden rounded-full gradient-orange px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
                >
                  <span className="relative z-10">Get a free quote</span>
                  <ArrowUpRight
                    size={15}
                    className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
                  />
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy lg:hidden"
                onClick={() => setMenuOpen((v) => !v)}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* ────────────── SERVICES MEGA MENU (full width) ────────────── */}
            <div
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
              className={`absolute inset-x-0 top-full hidden pt-2 transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] lg:block ${
                servicesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-3 opacity-0"
              }`}
            >
              <div className="grid grid-cols-[260px_1fr] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_40px_80px_-24px_rgba(11,31,51,0.35)]">
                {/* Promo panel */}
                <div className="relative flex flex-col overflow-hidden bg-navy p-6">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.4]"
                    style={{
                      backgroundImage: "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                      maskImage: "radial-gradient(ellipse 90% 80% at 30% 20%, black 20%, transparent 75%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-orange/25 blur-[80px]"
                  />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-wide text-orange-light">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                      All services
                    </span>
                    <h3 className="mt-3 text-[19px] font-extrabold leading-tight text-white">
                      Every kind of move,
                      <br />
                      one trained team
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-white/60">
                      From a single room to a full office, packed and moved with the same care.
                    </p>

                    <Link
                      href="/services"
                      className="group/link mt-5 inline-flex items-center gap-2 rounded-full gradient-orange px-4 py-2.5 text-[12.5px] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
                    >
                      Compare all services
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  <div className="relative mt-auto border-t border-dashed border-white/15 pt-4">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-2.5 text-[13px] font-semibold text-white transition-colors hover:text-orange-light"
                    >
                      <Phone size={14} className="text-orange" />
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="mt-2 flex items-center gap-1.5 text-[11.5px] text-white/50">
                      <ShieldCheck size={13} className="text-orange" />
                      Insured &amp; tracked, every move
                    </p>
                  </div>
                </div>

                {/* Service tiles */}
                <div className="grid grid-cols-3 divide-x divide-y divide-slate-100">
                  {services.map((service, i) => {
                    const Icon = serviceIcons[i % serviceIcons.length];
                    const active = pathname.startsWith(`/services/${service.slug}`);
                    return (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`group relative flex min-h-[176px] flex-col justify-between p-5 transition-colors hover:bg-navy ${
                          active ? "bg-slate-50" : ""
                        }`}
                      >
                        <span
                          aria-hidden
                          className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 gradient-orange transition-transform duration-300 group-hover:scale-x-100"
                        />
                        <div className="flex items-start justify-between">
                          <span className="font-mono text-[11px] font-bold tracking-wider text-navy/30 transition-colors group-hover:text-white/40">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange/10 text-orange transition-all duration-300 group-hover:scale-110 group-hover:bg-orange group-hover:text-white">
                            <Icon size={18} strokeWidth={2} />
                          </span>
                        </div>
                        <span className="mt-4">
                          <span className="block text-[14.5px] font-semibold leading-snug text-navy transition-colors group-hover:text-white">
                            {service.title}
                          </span>
                          <span className="mt-1.5 grid grid-rows-[0fr] text-[11.5px] font-medium leading-relaxed text-orange-light opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                            <span className="overflow-hidden">
                              <span className="line-clamp-2 block">{service.description}</span>
                            </span>
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ────────────────────── MOBILE DRAWER ────────────────────── */}
      <div
        className={`fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(.4,0,.2,1)] lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Image
            src="/logo.png"
            alt="Vansh Packers and Movers"
            width={1900}
            height={469}
            className="h-8 w-auto"
          />
          <button
            type="button"
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-navy"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          {navLinks.map((link, i) => {
            const active = isActive(link.href);
            const stagger = { transitionDelay: menuOpen ? `${80 + i * 40}ms` : "0ms" };
            const reveal = `transition-all duration-400 ${
              menuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            }`;

            if (link.label === "Services") {
              return (
                <div key={link.href} className={reveal} style={stagger}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className={`flex-1 rounded-xl px-3 py-3 text-[17px] font-semibold ${
                        active ? "text-orange" : "text-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-navy/60"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180 text-orange" : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ${
                      mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div className="mb-2 ml-3 flex flex-col border-l-2 border-orange/30 pl-3">
                        {services.map((service, si) => {
                          const Icon = serviceIcons[si % serviceIcons.length];
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[15px] font-medium text-navy/75 hover:text-orange"
                            >
                              <Icon size={16} className="text-orange" />
                              {service.title}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                style={stagger}
                className={`${reveal} block rounded-xl px-3 py-3 text-[17px] font-semibold ${
                  active ? "text-orange" : "text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <div className="mb-3 flex items-center gap-2 text-[12.5px] text-navy/60">
            <Clock size={13} className="text-orange" />
            Open 7 days · 8:00 am – 9:00 pm
          </div>
          <div className="flex gap-2.5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy/15 py-3 text-[14px] font-semibold text-navy"
            >
              <Phone size={16} /> Call now
            </a>
            <Link
              href="/contact"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl gradient-orange py-3 text-[14px] font-semibold text-white"
            >
              Get a free quote <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}