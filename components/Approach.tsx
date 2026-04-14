import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { approachSteps } from "./site-data";

export default function Approach() {
  return (
    <section id="approach" className="bg-[#f5f5f5] py-20 sm:py-24 lg:py-28">
      <div className="section-container max-w-[980px]">
        <div className="h-[3px] w-10 bg-brandGold" />
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brandGold">Our Approach</p>
        <h2 className="mt-2 font-[var(--font-jakarta)] text-[36px] font-bold tracking-[-0.03em] text-navy-900 sm:text-[48px]">
          How We Actually Get Results
        </h2>

        <div className="mt-10 overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          {approachSteps.map((step, index) => (
            <div key={step.number} className={`grid gap-4 px-6 py-8 sm:grid-cols-[72px_1fr] sm:px-8 ${index > 0 ? "border-t border-slate-200" : ""}`}>
              <div className="font-[var(--font-jakarta)] text-[44px] font-bold leading-none tracking-[-0.05em] text-[#d7dee9]">{step.number}</div>
              <div>
                <h3 className="font-[var(--font-jakarta)] text-[18px] font-bold text-navy-900 sm:text-[20px]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-8 text-[#4d64a6]">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Link href="/about/" className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-navy-900">
          Learn more about us <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
