import { BookOpenCheck, GraduationCap, LayoutGrid, UserRoundCheck } from "lucide-react";
import { whyUs } from "./site-data";

const icons = [LayoutGrid, BookOpenCheck, GraduationCap, UserRoundCheck];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Why Choose Us</p>
          <h2 className="mt-3 font-[var(--font-jakarta)] text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            Built for consistency, progress and exam confidence
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {whyUs.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="rounded-[24px] border border-slate-200 bg-soft p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brandBlue text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-[var(--font-jakarta)] text-xl font-bold text-navy-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
