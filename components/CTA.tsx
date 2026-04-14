import Link from "next/link";

export default function CTA() {
  return (
    <section id="final-cta" className="bg-brandBlue py-20 sm:py-24">
      <div className="section-container">
        <div className="rounded-[28px] border border-white/10 bg-white/5 px-6 py-10 text-center backdrop-blur-sm sm:px-10 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/60">Free Assessment</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-[var(--font-jakarta)] text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Book your free assessment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Speak to the team, find the right programme, and get a clear starting point for your child&apos;s next stage.
          </p>
          <Link
            href="#footer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brandGold px-7 py-3.5 text-sm font-bold text-black transition-opacity hover:opacity-90"
          >
            Book Free Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
