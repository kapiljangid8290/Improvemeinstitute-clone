import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { homeTestimonials } from "./home-data";

export default function HomeTestimonials() {
  return (
    <section id="testimonials" className="bg-[#eef2ff] py-20 sm:py-24 lg:py-28">
      <div className="section-container max-w-[980px]">
        <div className="mx-auto max-w-[420px] text-center">
          <div className="mx-auto h-[3px] w-10 bg-brandGold" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">Trusted By Families</p>
          <h2 className="mt-2 font-[var(--font-jakarta)] text-[36px] font-bold tracking-[-0.03em] text-navy-900 sm:text-[46px]">
            What Parents Say
          </h2>
        </div>

        <div className="mx-auto mt-6 max-w-[188px] rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-center gap-2">
            <span className="font-[var(--font-jakarta)] text-[20px] font-bold text-navy-900">4.9</span>
            <div className="flex text-brandGold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="mt-2 text-[14px] font-semibold text-[#3f5ca8]">Google Rating</p>
          <p className="mt-2 text-[12px] text-slate-500">Based on 206+ reviews</p>
        </div>

        <div className="mt-8 grid items-center gap-4 lg:grid-cols-[56px_1fr_56px]">
          <button
            type="button"
            aria-label="Previous testimonial"
            className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all hover:border-slate-300 hover:text-navy-900"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="grid gap-4 md:grid-cols-3">
            {homeTestimonials.map((item) => (
              <article key={item.name} className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
                <div className="mb-5 flex gap-1 text-brandGold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="min-h-[205px] text-[15px] leading-8 text-[#5a6a9d]">{item.quote}</p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-[var(--font-jakarta)] text-[15px] font-bold uppercase tracking-[0.02em] text-navy-900">{item.name}</p>
                  <p className="mt-3 text-[14px] text-[#6b7ba9]">{item.role}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all hover:border-slate-300 hover:text-navy-900"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-200" />
          <span className="h-2 w-2 rounded-full bg-slate-900" />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="https://www.google.com/maps/search/Improve+ME+Institute+Dubai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900 transition-colors hover:text-yellow-600"
          >
            See all our Google reviews <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
