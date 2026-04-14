import Link from "next/link";
import { ArrowRight, BrainCircuit, CircleDot, Crown, House, MessagesSquare, Wallet } from "lucide-react";
import { homeEnrichmentCards } from "./home-data";

const icons = [CircleDot, Crown, BrainCircuit, Wallet, BrainCircuit, MessagesSquare];

export default function HomeEnrichment() {
  return (
    <section className="bg-white pb-24 pt-2">
      <div className="section-container max-w-[980px]">
        <div className="rounded-[26px] bg-[#fbfbfb] px-8 py-10 shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12">
          <div className="h-[3px] w-10 bg-brandGold" />
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">Enrichment &amp; Future Skills</p>
          <h2 className="mt-2 font-[var(--font-jakarta)] text-[34px] font-bold tracking-[-0.03em] text-navy-900 sm:text-[44px]">
            Building well-rounded learners
          </h2>
          <p className="mt-3 text-[15px] text-[#5a6a9d]">Alongside their academic programme.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {homeEnrichmentCards.map((item, index) => {
              const Icon = icons[index];
              return (
                <article
                  key={item.name}
                  className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] ${item.accent}`}
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-[#f7f7fb] p-3 text-[#6b62ff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-[var(--font-jakarta)] text-[17px] font-bold text-navy-900">{item.name}</h3>
                  <p className="mt-4 text-[15px] leading-7 text-[#5a6a9d]">{item.detail}</p>
                </article>
              );
            })}
          </div>

          <p className="mt-6 text-[13px] italic text-[#5a6a9d]">
            These programmes run alongside our academic courses for a more complete education.
          </p>

          <div className="mt-8 flex flex-col gap-6 rounded-[22px] border border-[#ccefed] bg-[linear-gradient(135deg,#efffff_0%,#e9fbff_48%,#e9f8f3_100%)] px-6 py-7 shadow-[0_12px_40px_rgba(43,104,122,0.08)] md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <div className="rounded-2xl bg-white/60 p-3 text-[#0ba9a0]">
                <House className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0ba9a0]">Home Education</p>
                <h3 className="mt-1 font-[var(--font-jakarta)] text-[18px] font-bold text-navy-900 sm:text-[20px]">
                  A Structured Learning Environment for Home-Schooled Students
                </h3>
                <p className="mt-3 max-w-[760px] text-[15px] leading-7 text-[#46608d]">
                  Our morning programme gives home-schooled students a professional, centre-based space to learn - keeping them on track,
                  helping them get ahead, and ensuring their education is structured, consistent, and tailored to their needs.
                </p>
              </div>
            </div>
            <Link
              href="/courses/"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brandGold px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <Link
          href="/courses/"
          className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brandGold px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
        >
          Explore All Courses
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
