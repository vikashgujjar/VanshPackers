import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Blog({ showHeading = true }: { showHeading?: boolean }) {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" className="section-pad bg-slate-50">
      <div className="container-max px-4 md:px-8">
        {showHeading && (
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                Our blog
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
                Moving tips &amp; insights
              </h2>
              <p className="mt-3 text-base font-medium text-slate">
                Helpful information to make your next move easier.
              </p>
            </div>
            <Link
              href="/blog"
              className="group hidden shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:border-orange/40 hover:text-orange sm:inline-flex"
            >
              View all articles
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        )}

        {/* ───────────── Featured post + list ───────────── */}
        {featured && (
          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
            {/* Featured, large */}
            <Reveal>
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px] shadow-[0_30px_60px_-24px_rgba(11,31,51,0.3)]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-orange">
                    {featured.category}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <h3 className="max-w-lg text-[22px] font-extrabold leading-tight text-white sm:text-[26px]">
                      {featured.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-[14.5px] font-medium leading-relaxed text-slate">
                  {featured.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-navy transition-colors group-hover:text-orange">
                  Read article
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>

            {/* Secondary posts, compact list */}
            {rest.length > 0 && (
              <Reveal delay={100}>
                <div className="flex flex-col divide-y divide-slate-200">
                  {rest.map((post, i) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className={`group flex items-start gap-4 py-5 transition-colors hover:bg-white/60 ${
                        i === 0 ? "pt-0" : ""
                      }`}
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          loading="lazy"
                          sizes="80px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <span className="text-[10.5px] font-bold uppercase tracking-wide text-orange">
                          {post.category}
                        </span>
                        <h4 className="mt-1 text-[14.5px] font-bold leading-snug text-navy transition-colors group-hover:text-orange">
                          {post.title}
                        </h4>
                      </div>
                      <ArrowRight
                        size={15}
                        className="mt-1 shrink-0 text-navy/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-orange"
                      />
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-semibold text-navy transition-colors hover:border-orange/40 hover:text-orange"
          >
            View all articles
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}