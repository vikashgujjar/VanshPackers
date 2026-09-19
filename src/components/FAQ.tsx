"use client";

import { useState } from "react";
import { Truck, User } from "lucide-react";
import { faqs, siteConfig } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);

  const handleToggle = (i: number) => {
    if (openIndex === i) {
      setOpenIndex(null);
      setTypingIndex(null);
      return;
    }
    setOpenIndex(null);
    setTypingIndex(i);
    window.setTimeout(() => {
      setTypingIndex(null);
      setOpenIndex(i);
    }, 550);
  };

  return (
    <section id="faq" className="section-pad bg-white">
      <style>{`
        @keyframes faq-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: .5; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-dot { animation: none !important; }
        }
      `}</style>

      <div className="container-max px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className=" lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-orange">
                <span className="h-1.5 w-1.5 rounded-full bg-orange" />
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-navy md:text-[2.5rem]">
                Frequently asked
                <br />
                moving questions
              </h2>
              <p className="mt-5 hidden max-w-sm text-[14.5px] font-medium leading-relaxed text-slate lg:block">
                Can&apos;t find what you&apos;re looking for? Call us at{" "}
                <a href={`tel:${siteConfig.phone}`} className="font-bold text-orange hover:underline">
                  {siteConfig.phoneDisplay}
                </a>{" "}
                and our team will help.
              </p>
            </div>
          </Reveal>

          {/* ───────────── Chat-style Q&A thread ───────────── */}
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-slate-50 shadow-[0_30px_60px_-30px_rgba(11,31,51,0.25)]">
              {/* Chat header */}
              <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-5 py-4">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-navy text-white">
                  <Truck size={16} strokeWidth={2} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                </span>
                <div>
                  <p className="text-[13.5px] font-bold text-navy">Vansh Support</p>
                  <p className="text-[11.5px] font-medium text-emerald-600">Usually replies instantly</p>
                </div>
              </div>

              {/* Thread */}
              <div className="flex flex-col gap-1 px-4 py-5 sm:px-6">
                {faqs.map((faq, i) => {
                  const isOpen = openIndex === i;
                  const isTyping = typingIndex === i;
                  return (
                    <div key={faq.question} className="flex flex-col gap-2 py-2">
                      {/* Question bubble — tap to ask */}
                      <button
                        type="button"
                        onClick={() => handleToggle(i)}
                        aria-expanded={isOpen}
                        className="group flex items-start justify-end gap-2.5 self-end"
                      >
                        <span
                          className={`max-w-[280px] rounded-2xl rounded-tr-sm px-4 py-2.5 text-left text-[13.5px] font-semibold leading-snug transition-colors sm:max-w-sm ${isOpen || isTyping
                              ? "bg-navy text-white"
                              : "bg-white text-navy shadow-sm group-hover:bg-slate-100"
                            }`}
                        >
                          {faq.question}
                        </span>
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-navy/60">
                          <User size={13} strokeWidth={2.25} />
                        </span>
                      </button>

                      {/* Typing indicator */}
                      {isTyping && (
                        <div className="flex items-end gap-2.5 self-start">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                            <Truck size={13} strokeWidth={2.25} />
                          </span>
                          <span className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                            {[0, 1, 2].map((d) => (
                              <span
                                key={d}
                                className="faq-dot h-1.5 w-1.5 rounded-full bg-navy/40"
                                style={{ animation: `faq-bounce 1.1s ease-in-out ${d * 0.15}s infinite` }}
                              />
                            ))}
                          </span>
                        </div>
                      )}

                      {/* Answer bubble */}
                      <div
                        className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex items-end gap-2.5 self-start pt-0.5">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                              <Truck size={13} strokeWidth={2.25} />
                            </span>
                            <p className="max-w-[280px] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[13.5px] font-medium leading-relaxed text-slate shadow-sm sm:max-w-sm">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer hint, mobile only (desktop shows the phone line on the left) */}
              <div className="border-t border-slate-200 bg-white px-5 py-3.5 lg:hidden">
                <p className="text-[12.5px] font-medium text-slate">
                  Still have questions? Call{" "}
                  <a href={`tel:${siteConfig.phone}`} className="font-bold text-orange">
                    {siteConfig.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}