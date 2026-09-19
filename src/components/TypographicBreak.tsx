import Reveal from "./Reveal";

export default function TypographicBreak() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="container-max px-4 md:px-8 text-center">
        <Reveal>
          <h2 className="text-[11vw] font-extrabold leading-[0.95] tracking-tight break-words sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="text-navy">MOVE WITH</span>
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(11,31,51,0.35), rgba(11,31,51,0.35)), url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1600&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              CONFIDENCE.
            </span>
          </h2>
          <p className="mt-8 text-sm md:text-base font-medium text-slate max-w-md mx-auto">
            Thousands of moves handled with care, precision and a promise
            to get it right.
          </p>
        </Reveal>
      </div>
    </section>
  );
}