import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { highlights, schoolNames } from "./site-data";

export default function HeroClean() {
  const marqueeItems = [...schoolNames, ...schoolNames];

  return (
    <section id="home" className="relative overflow-hidden bg-[#d9d1c6] pt-20 md:pt-24">
      <Image
        src="https://www.improvemeinstitute.com/overlay_image.webp"
        alt="Improve ME Institute tutoring centre Dubai"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/24" />

      <div className="section-container relative z-10 flex min-h-[90vh] flex-col lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col justify-center pb-8 pt-8 lg:w-[55%] lg:pb-0 lg:pr-8 lg:pt-0">
          <div className="glass-panel rounded-[20px] p-6 sm:p-10">
            <h1 className="max-w-4xl text-left font-[var(--font-jakarta)] text-3xl font-bold leading-[1.05] tracking-tighter text-white md:text-4xl lg:text-5xl">
              Dubai&apos;s Top Tutoring Centre — Every Curriculum from Ages 3 to 18
            </h1>
            <p className="mt-6 max-w-xl text-left text-lg text-white/90 md:text-xl">
              From <Link href="/curriculum/primary/" className="underline transition-opacity hover:opacity-80">Primary</Link> through to{" "}
              <Link href="/curriculum/secondary/gcse/" className="underline transition-opacity hover:opacity-80">GCSE</Link>,{" "}
              <Link href="/curriculum/secondary/igcse/" className="underline transition-opacity hover:opacity-80">IGCSE</Link>,{" "}
              <Link href="/curriculum/secondary/a-level/" className="underline transition-opacity hover:opacity-80">A-Level</Link>,{" "}
              <Link href="/curriculum/secondary/ib/" className="underline transition-opacity hover:opacity-80">IB Diploma</Link>,{" "}
              <Link href="/curriculum/secondary/myp/" className="underline transition-opacity hover:opacity-80">MYP</Link>, and international
              curricula — we support students aged 3 to 18 across every stage of their education. Since 2010, we&apos;ve helped 1,000+
              students from 30+ Dubai schools achieve stronger results.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/contact/#booking-form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brandGold px-8 py-4 text-base font-bold text-black transition-transform hover:scale-[1.02]"
                style={{ boxShadow: "0 0 20px rgba(255,193,7,0.3)" }}
              >
                Book Free Assessment
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/courses/" className="py-4 text-base font-medium text-white/80 transition-opacity hover:opacity-80">
                Explore Courses
              </Link>
            </div>

            <div className="mt-10 flex items-center">
              <div className="flex flex-col border-l-4 bg-white py-3 pl-4 pr-6" style={{ borderLeftColor: "#FFC107" }}>
                <span className="text-base font-semibold text-navy-900">
                  {highlights[0]} · {highlights[1]}
                </span>
                <span className="text-sm font-medium text-[#3f5ca8]">{highlights[2]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[320px] w-full flex-shrink-0 md:h-[400px] lg:h-[75vh] lg:min-h-[500px] lg:w-[45%]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="https://www.improvemeinstitute.com/images/hero-poster.webp"
              className="h-full w-full rounded-2xl object-cover"
              style={{ objectPosition: "left top" }}
            >
              <source
                src="https://www.improvemeinstitute.com/videos/Improve%20ME%20Institute%20Video%20Project%20(No%20Logo%20End)%20with%20WebM%20file.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-brandBlue py-4">
        <div className="overflow-hidden">
          <div className="marquee-track flex animate-marquee gap-4 whitespace-nowrap px-3 text-[13px] font-medium text-white/90">
            {marqueeItems.map((school, index) => (
              <span key={`${school}-${index}`} className="inline-flex items-center gap-4">
                <span>{school}</span>
                <span>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
