"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceFaqAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col divide-y divide-slate-100 border-t border-slate-100">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] font-bold text-navy">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-navy/40 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-orange" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[14px] font-medium leading-relaxed text-slate">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
