import Image from "next/image";
import Link from "next/link";
import { highlights, schoolNames } from "./site-data";

export default function Hero() {
  const marqueeItems = [...schoolNames, ...schoolNames];

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white chevron-pattern pt-20 md:pt-24">
      <Image
        src="https://www.improvemeinstitute.com/overlay_image.webp"
        alt="Improve ME Institute tutoring centre Dubai"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-black/25 backdrop-blur-[2px]" />

      <div className="section-container relative z-20 flex min-h-[90vh] flex-col justify-center lg:flex-row lg:items-center">
        <div className="flex-1 pb-8 pt-8 lg:pb-0 lg:pr-8 lg:pt-0">
          <div className="glass-panel rounded-[20px] p-6 sm:p-10">
            <h1 className="max-w-4xl text-left font-[var(--font-jakarta)] text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
              Dubai&apos;s Top Tutoring Centre — Every Curriculum from Ages 3 to 18
            </h1>
            <p className="mt-6 max-w-xl text-left text-base text-white/90 sm:text-lg md:text-xl">
              From <Link href="#courses" className="underline transition-opacity hover:opacity-80">Primary</Link> through to{" "}
              <Link href="#courses" className="underline transition-opacity hover:opacity-80">GCSE</Link>,{" "}
              <Link href="#courses" className="underline transition-opacity hover:opacity-80">IGCSE</Link>,{" "}
              <Link href="#courses" className="underline transition-opacity hover:opacity-80">A-Level</Link>,{" "}
              <Link href="#courses" className="underline transition-opacity hover:opacity-80">IB Diploma</Link>,{" "}
              <Link href="#courses" className="underline transition-opacity hover:opacity-80">MYP</Link>, and international curricula
              — we support students aged 3 to 18 across every stage of their education. Since 2010, we&apos;ve helped 1,000+ students
              from 30+ Dubai schools achieve stronger results.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-full bg-brandGold px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
              >
                Book Free Assessment
              </Link>
              <Link
                href="#courses"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Courses
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/90">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 border-t border-white/10 bg-[#041834]/85 py-4 backdrop-blur-md">
        <div className="overflow-hidden">
          <div className="marquee-track flex animate-marquee gap-8 whitespace-nowrap px-4 text-sm font-medium text-white/85">
            {marqueeItems.map((school, index) => (
              <span key={`${school}-${index}`} className="inline-flex items-center gap-8">
                <span>{school}</span>
                <span className="text-brandGold">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
