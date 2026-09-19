import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { distanceBands, pricingRows, type BandKey } from "@/lib/site-data";
import Reveal from "./Reveal";

// Average of the low/high figures in a "₹X – ₹Y" string, used only to drive
// the heatmap intensity — never shown to the user.
function averageOf(range: string): number {
  const numbers = range.match(/[\d,]+/g)?.map((n) => parseInt(n.replace(/,/g, ""), 10)) ?? [0];
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

// Per-column min/max, so the heatmap compares each distance band against
// itself rather than against the other columns' very different scales.
const columnRanges = Object.fromEntries(
  distanceBands.map(({ key }) => {
    const values = pricingRows.map((row) => averageOf(row[key]));
    return [key, { min: Math.min(...values), max: Math.max(...values) }];
  })
) as Record<BandKey, { min: number; max: number }>;

function heatStyle(range: string, key: BandKey) {
  const { min, max } = columnRanges[key];
  const value = averageOf(range);
  const t = max === min ? 0.5 : (value - min) / (max - min); // 0..1
  return {
    backgroundColor: `rgba(255, 107, 0, ${0.06 + t * 0.34})`,
  };
}

export default function PricingTable() {
  return (
    <section className="section-pad bg-[#FFF3E9]">
      <div className="container-max px-4 md:px-8">
        <Reveal className="mx-auto max-w-xxl text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[13px] font-bold text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            Estimate
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
            Understand your moving costs
          </h2>
          <p className="mt-4 text-base font-medium text-slate">
            Every shifting type, across every distance band — the deeper the shade, the higher
            the estimate relative to that column.
          </p>
        </Reveal>

        {/* ───────────── Heatmap pricing table ───────────── */}
        <Reveal delay={100} className="mx-auto mt-11 max-w-5xl">
          <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_30px_60px_-24px_rgba(11,31,51,0.25)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-separate border-spacing-0 text-left">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 whitespace-nowrap bg-white px-6 py-4 text-[11.5px] font-bold uppercase tracking-wide text-navy/50">
                      Shifting type
                    </th>
                    {distanceBands.map((band) => (
                      <th
                        key={band.key}
                        className="whitespace-nowrap px-5 py-4 text-[12px] font-bold text-navy"
                      >
                        {band.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={row.shiftingType}>
                      <td
                        className={`sticky left-0 z-10 whitespace-nowrap bg-white px-6 py-4 text-[13.5px] font-semibold text-navy ${
                          i !== pricingRows.length - 1 ? "border-b border-slate-100" : ""
                        }`}
                      >
                        {row.shiftingType}
                      </td>
                      {distanceBands.map((band) => (
                        <td
                          key={band.key}
                          className={`px-2 py-2 ${
                            i !== pricingRows.length - 1 ? "border-b border-slate-100" : ""
                          }`}
                        >
                          <div
                            className="whitespace-nowrap rounded-lg px-3.5 py-2.5 text-center font-mono text-[12.5px] font-bold text-navy"
                            style={heatStyle(row[band.key], band.key)}
                          >
                            {row[band.key]}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-center text-[11.5px] text-slate/70 sm:hidden">
            Scroll sideways to see every distance band →
          </p>
        </Reveal>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs font-medium text-slate">
          * Prices are indicative placeholders and may vary based on your specific moving
          requirements.
        </p>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full gradient-orange px-6 py-3 text-[13.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Get accurate quote
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}