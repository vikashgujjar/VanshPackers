"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <style>{`
        @keyframes fb-pulse {
          0% { transform: scale(1); opacity: .45; }
          70%, 100% { transform: scale(1.7); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .fb-pulse { animation: none !important; }
        }
      `}</style>

      {/* Back to top — only once there's somewhere to go back to */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`group relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy/60 shadow-md transition-all duration-300 hover:text-orange ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <ArrowUp size={16} />
        <Tooltip>Back to top</Tooltip>
      </button>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <span
          aria-hidden
          className="fb-pulse absolute inset-0 rounded-full bg-[#25D366]"
          style={{ animation: "fb-pulse 2.6s ease-out infinite" }}
        />
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true" className="relative">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.149-.15.335-.39.5-.586.166-.198.222-.297.334-.495.11-.198.036-.396-.086-.596-.113-.183-.555-1.34-.763-1.837-.203-.5-.4-.43-.575-.435H9.05c-.173 0-.347.05-.52.148-.174.099-.72.7-.72 1.68 0 .98.744 1.936.847 2.075.104.14 1.42 2.166 3.442 2.955 2.02.79 2.02.526 2.386.494.366-.033 1.176-.475 1.34-.933.164-.457.164-.85.115-.933-.05-.083-.185-.132-.482-.283z" />
          <path d="M12.004 2.003c-5.514 0-9.997 4.478-9.997 9.997 0 1.77.464 3.43 1.276 4.87L2 22l5.264-1.267a9.955 9.955 0 004.74 1.204h.004c5.514 0 9.996-4.478 9.996-9.997 0-2.67-1.04-5.18-2.928-7.07a9.938 9.938 0 00-7.072-2.867zm0 18.176a8.1 8.1 0 01-4.13-1.13l-.296-.176-3.126.752.837-3.044-.192-.312a8.157 8.157 0 01-1.255-4.37c0-4.512 3.671-8.18 8.187-8.18a8.14 8.14 0 015.79 2.397 8.128 8.128 0 012.397 5.787c0 4.516-3.674 8.276-8.212 8.276z" />
        </svg>
        <Tooltip>Chat on WhatsApp</Tooltip>
      </a>

      {/* Call */}
      <a
        href={`tel:${siteConfig.phone}`}
        aria-label="Call us"
        className="group relative flex h-[52px] w-[52px] items-center justify-center rounded-full gradient-orange text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone size={21} />
        <Tooltip>Call {siteConfig.phoneDisplay}</Tooltip>
      </a>
    </div>
  );
}

/** Hover-revealed label, matching the pill-button language used across the site. */
function Tooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-navy px-3.5 py-2 text-[12.5px] font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:mr-3.5 group-hover:opacity-100">
      {children}
    </span>
  );
}