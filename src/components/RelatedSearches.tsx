import Link from "next/link";
import { relatedSearches } from "@/lib/site-data";
import Reveal from "./Reveal";

// Cycle a few sizes/weights for a loose "tag cloud" feel, no JS required.
const sizes = [
  "text-[12px] font-semibold",
  "text-[13.5px] font-bold",
  "text-[12px] font-semibold",
  "text-[14.5px] font-extrabold",
  "text-[12px] font-semibold",
  "text-[13px] font-bold",
];

export default function RelatedSearches() {
  return (
    <section className="border-t border-slate-100 bg-white py-12 md:py-14">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Popular searches
          </span>
          <h2 className="mt-2 text-xl font-extrabold tracking-tight text-navy md:text-2xl">
            Whatever you call it, we&apos;ve got it covered
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {relatedSearches.map((term, i) => (
              <Link
                key={term.label}
                href={term.href}
                className={`rounded-full border border-slate-200 px-3.5 py-1.5 text-navy/70 transition-colors hover:border-orange/40 hover:text-orange ${
                  sizes[i % sizes.length]
                }`}
              >
                {term.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
