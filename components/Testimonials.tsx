import { Star } from "lucide-react";
import { testimonials } from "./site-data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-soft py-20 sm:py-24 lg:py-28">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Social Proof</p>
          <h2 className="mt-3 font-[var(--font-jakarta)] text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            Trusted by students and parents across Dubai
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-card">
              <div className="mb-5 flex gap-1 text-brandGold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-7 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="font-[var(--font-jakarta)] text-base font-bold text-navy-900">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
