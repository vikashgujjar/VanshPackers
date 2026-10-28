import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

const title = "Request Received";
const description = "Your move request has been received. Our team will contact you shortly.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
};

const nextSteps = [
  "We review the details you shared",
  "A move planner calls you within 30 minutes",
  "We confirm your date, route and a fixed price",
];

export default function ThankYouPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden gradient-navy py-20">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(45deg,transparent_48%,#fff_49%,#fff_51%,transparent_52%)] [background-size:32px_32px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-orange/20 blur-[140px]"
      />

      <div className="container-max relative z-10 px-4 text-center md:px-8">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange/15 text-orange">
          <CheckCircle2 size={40} strokeWidth={2} />
        </span>

        <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
          Request received!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-white/75 md:text-lg">
          Thank you for reaching out to {siteConfig.name}. We have your details — a move planner
          will call you shortly with a free quote.
        </p>

        <ul className="mx-auto mt-10 flex max-w-md flex-col gap-3 text-left">
          {nextSteps.map((step, i) => (
            <li key={step} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange/15 text-[12px] font-bold text-orange">
                {i + 1}
              </span>
              <span className="text-[14px] font-medium text-white/85">{step}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full gradient-orange px-7 py-3.5 text-[14.5px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(255,107,0,0.7)] transition-transform hover:-translate-y-0.5"
          >
            <Home size={16} />
            Back to home
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-white/25 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-orange/60 hover:bg-white/5"
          >
            <MessageCircle size={15} className="text-orange" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2.5 rounded-full border border-white/25 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-orange/60 hover:bg-white/5"
          >
            <Phone size={15} className="text-orange" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
