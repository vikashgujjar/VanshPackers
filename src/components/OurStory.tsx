import { storyMilestones } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function OurStory() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Our journey
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Tracked like every move we make
          </h2>
          <p className="mt-4 text-base font-medium text-slate">
            From a single truck in Bangalore to a full-service relocation partner — here&apos;s
            how Vansh Packers and Movers got here.
          </p>
        </Reveal>

        {/* ───────────── Milestone timeline — styled like a shipment tracker ───────────── */}
        <div className="relative mx-auto mt-14 max-w-2xl">
          <div
            aria-hidden
            className="absolute bottom-1 left-[15px] top-1 w-px bg-gradient-to-b from-navy/20 via-slate-300 to-slate-300"
          />
          <div className="flex flex-col gap-10">
            {storyMilestones.map((milestone, i) => {
              const isLast = i === storyMilestones.length - 1;
              return (
                <Reveal key={milestone.year} delay={i * 80}>
                  <div className="relative pl-11">
                    <span
                      className={`absolute left-0 top-1 flex h-[31px] w-[31px] items-center justify-center rounded-full border-4 border-slate-50 ${
                        isLast ? "bg-orange" : "bg-navy"
                      }`}
                    >
                      {isLast && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-orange opacity-60" />
                      )}
                      <span className="relative h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="font-mono text-[12px] font-bold tracking-wider text-orange">
                      {milestone.year}
                    </span>
                    <h3 className="mt-1 text-[17px] font-bold leading-snug text-navy">
                      {milestone.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-slate">
                      {milestone.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-xs font-medium text-slate/70">
          Sample milestones shown for illustration — replace with your company&apos;s actual
          timeline.
        </p>
      </div>
    </section>
  );
}
