import { Compass, Eye, ShieldCheck, Clock, HeartHandshake, UserCheck } from "lucide-react";
import { mission, vision, coreValues } from "@/lib/site-data";
import Reveal from "./Reveal";

const valueIcons = [ShieldCheck, Clock, HeartHandshake, UserCheck];

export default function MissionValues() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Mission &amp; values
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            What drives how we move you
          </h2>
        </Reveal>

        {/* ───────────── Mission / Vision labels ───────────── */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          <Reveal delay={80}>
            <LabelCard icon={Compass} tag="Mission" text={mission} />
          </Reveal>
          <Reveal delay={140}>
            <LabelCard icon={Eye} tag="Vision" text={vision} />
          </Reveal>
        </div>

        {/* ───────────── Core values ───────────── */}
        <div className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {coreValues.map((value, i) => {
            const Icon = valueIcons[i % valueIcons.length];
            return (
              <Reveal key={value.title} delay={220 + i * 60}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-[0_20px_40px_-24px_rgba(11,31,51,0.35)]">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                    <Icon size={20} strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-3 text-[14px] font-bold text-navy">{value.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-slate">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LabelCard({
  icon: Icon,
  tag,
  text,
}: {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  tag: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-navy/15 bg-slate-50 p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-white">
          <Icon size={16} strokeWidth={1.9} />
        </span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-navy/50">
          {tag}
        </span>
      </div>
      <p className="mt-4 text-[14.5px] leading-relaxed text-navy/85">{text}</p>
    </div>
  );
}
