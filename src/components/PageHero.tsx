import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden gradient-navy">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(45deg,transparent_48%,#fff_49%,#fff_51%,transparent_52%)] [background-size:32px_32px]" />
      <div className="container-max relative z-10 px-4 md:px-8 py-14 md:py-18">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
          {crumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-orange-light transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight size={12} />}
            </span>
          ))}
        </nav>

        {eyebrow && (
          <span className="mt-5 inline-block rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-orange-light">
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-3 text-base text-white/75 font-medium max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
