"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site-data";
import { submitLead } from "@/lib/submitLead";

const inputCls =
  "w-full bg-transparent text-[14px] font-semibold text-navy outline-none placeholder:font-medium placeholder:text-navy/35";

function Field({
  label,
  full = false,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={`flex flex-col gap-0.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 transition-colors focus-within:border-orange focus-within:bg-white focus-within:ring-2 focus-within:ring-orange/15 ${
        full ? "sm:col-span-2" : ""
      }`}
    >
      <span className="text-[11px] font-medium text-navy/50">{label}</span>
      {children}
    </label>
  );
}

export default function ServiceQuoteForm({ service }: { service: Service }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-[26px] bg-white shadow-[0_30px_60px_-30px_rgba(11,31,51,0.25)]">
      <div className="flex items-center justify-between border-b border-dashed border-slate-200 px-6 py-4 sm:px-8">
        <div>
          <p className="text-[15px] font-bold tracking-tight text-navy">Request a quote</p>
          <p className="mt-0.5 text-[12px] text-navy/50">We usually respond within 30 minutes</p>
        </div>
        <span className="hidden rounded-md bg-navy px-2.5 py-1 font-mono text-[10.5px] tracking-[0.12em] text-white sm:inline-block">
          {service.title}
        </span>
      </div>

        <form
          className="px-6 py-6 sm:px-8"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            const ok = await submitLead({
              name: data.name as string,
              phone: data.phone as string,
              email: data.email as string,
              serviceType: service.title,
              message: `Moving From: ${data.fromCity}\nMoving To: ${data.toCity}`,
            });

            if (ok) {
              router.push("/thank-you");
              return;
            }
            setLoading(false);
          }}
        >
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <Field label="Full name">
              <input required name="name" type="text" placeholder="Your name" className={inputCls} />
            </Field>
            <Field label="Phone">
              <input required name="phone" type="tel" placeholder="+91" className={inputCls} />
            </Field>
            <Field label="Email" full>
              <input required name="email" type="email" placeholder="you@example.com" className={inputCls} />
            </Field>
            <Field label="Moving from">
              <input required name="fromCity" type="text" placeholder="City or area" className={inputCls} />
            </Field>
            <Field label="Moving to">
              <input required name="toCity" type="text" placeholder="City or area" className={inputCls} />
            </Field>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full gradient-orange py-3.5 text-[14.5px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(255,107,0,0.6)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Request free quote"}
            {!loading && (
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
          <p className="mt-3 text-center text-[11.5px] text-navy/50">
            No obligation. We never share your number.
          </p>
        </form>
    </div>
  );
}
