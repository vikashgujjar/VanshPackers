import { servicePromise } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function ServicePromise() {
  return (
    <section className="relative bg-navy py-10 md:py-12">
      <div className="absolute inset-x-0 top-0 border-t-2 border-dashed border-white/15" />
      <div className="absolute inset-x-0 bottom-0 border-b-2 border-dashed border-white/15" />

      <div className="container-max px-4 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:divide-x sm:divide-dashed sm:divide-white/15">
            {servicePromise.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center gap-2.5 px-2 text-center sm:px-5 sm:first:pl-0 sm:last:pr-0"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <item.icon size={20} strokeWidth={1.9} />
                </span>
                <span className="text-[13.5px] font-bold text-white">{item.title}</span>
                <span className="text-[11.5px] font-medium leading-relaxed text-white/55">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
