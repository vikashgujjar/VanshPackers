import { areasServed } from "@/lib/site-data";
import Reveal from "./Reveal";

const blocks = [
  {
    heading: "Household & Local Shifting",
    body: "Whether you are moving within Bangalore or relocating to a new city, our household shifting service covers careful packing, loading, transportation and unloading of your belongings. We treat every item — from furniture to fragile decor — with the care it deserves, so your local or domestic move stays on schedule and stress-free.",
  },
  {
    heading: "Office & Corporate Relocation",
    body: "Office relocations demand speed and precision. Our team plans your move around your business hours, safely packing workstations, electronics and files while keeping downtime to a minimum, so your team can get back to work quickly.",
  },
  {
    heading: "Vehicle Transportation",
    body: "Moving your car or bike to a new city? Our vehicle transportation service uses covered carriers and GPS-enabled tracking to ensure your vehicle reaches its destination safely and on time.",
  },
  {
    heading: "Packing, Loading & Warehouse Services",
    body: "From professional packing and unpacking to loading, unloading and secure warehouse storage, we offer complete door-to-door relocation support so you do not have to coordinate multiple vendors for your move.",
  },
  {
    heading: "Domestic & Interstate Relocation",
    body: "Moving to another city or state is a bigger undertaking, and we plan for it accordingly. Every interstate move gets a fixed delivery window, a GPS-tracked truck in transit and a single point of contact, so you always know where your shipment is and when it will arrive.",
  },
  {
    heading: "Insurance & Safety Assurance",
    body: "Every move — local or long-distance — is backed by transit insurance and handled by a background-verified crew. We use quality packing material rated for the item inside, from bubble wrap for electronics to wooden crating for artwork and fragile décor.",
  },
];

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "3 to 5 days for local moves; 1 to 2 weeks for interstate relocations or peak-season dates.",
  },
  {
    question: "Do you provide packing material?",
    answer:
      "Yes — cartons, bubble wrap, stretch film and wooden crating all come with the crew.",
  },
  {
    question: "Is my shipment insured?",
    answer:
      "Every move, local or interstate, is covered by transit insurance as standard.",
  },
  {
    question: "Can you move my vehicle too?",
    answer:
      "Yes, car and bike transport on covered carriers can be booked alongside or separately.",
  },
];

export default function SEOContent() {
  return (
    <section className="section-pad bg-white">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Why Bangalore trusts us
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.25rem]">
            Professional packers and movers in Bangalore
          </h2>
        </Reveal>

        {/* ───────────── Flowing two-column article ───────────── */}
        <Reveal delay={100}>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {/* First two entries — exactly enough to fill one full grid row before the quote */}
            <div>
              <h3 className="text-[16px] font-bold text-navy">{blocks[0].heading}</h3>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate first-letter:float-left first-letter:mr-1 first-letter:text-[3.4rem] first-letter:font-extrabold first-letter:leading-[0.75] first-letter:text-orange">
                {blocks[0].body}
              </p>
            </div>
            <div>
              <h3 className="text-[16px] font-bold text-navy">{blocks[1].heading}</h3>
              <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate">
                {blocks[1].body}
              </p>
            </div>

            {/* Pull-quote — a direct grid child spanning both columns, so it always starts
                its own clean row with nothing left dangling beside it */}
            <blockquote className="rounded-xl bg-slate-50 px-5 py-4 text-[15px] font-semibold italic leading-snug text-navy md:col-span-2">
              “Same trained crew, one point of contact, from the first box packed to the last
              one unpacked.”
            </blockquote>

            {/* Remaining four entries — again an even number, so every row fills cleanly */}
            {blocks.slice(2).map((block) => (
              <div key={block.heading}>
                <h3 className="text-[16px] font-bold text-navy">{block.heading}</h3>
                <p className="mt-2 text-[14px] font-medium leading-relaxed text-slate">
                  {block.body}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ───────────── Coverage line ───────────── */}
        <Reveal delay={160} className="mx-auto mt-2 max-w-4xl border-t border-slate-100 pt-6">
          <p className="text-[13px] font-semibold text-navy/50">
            Coverage across Bangalore, including
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {areasServed.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 px-3 py-1 text-[12px] font-semibold text-navy/75"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        {/* ───────────── FAQ glossary ───────────── */}
        <Reveal delay={220} className="mx-auto mt-10 max-w-4xl border-t border-slate-100 pt-8">
          <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-navy/40">
            Common questions
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-[14px] font-bold text-navy">{faq.question}</dt>
                <dd className="mt-1 text-[13.5px] font-medium leading-relaxed text-slate">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}